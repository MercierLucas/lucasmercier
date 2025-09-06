#!/bin/bash
# -------------------------------
# convert-to-utf8.sh
# -------------------------------

# Usage: ./convert-to-utf8.sh old.db new.db
# Example: ./convert-to-utf8.sh old.db new.db

SOURCE_DB="dev.db"
TARGET_DB="cleaned.db"
DUMP_SQL=dump.sql

if [ ! -f "$SOURCE_DB" ]; then
  echo "Source DB '$SOURCE_DB' not found!"
  exit 1
fi

echo "Dumping $SOURCE_DB to $DUMP_SQL..."
sqlite3 "$SOURCE_DB" ".dump" > "$DUMP_SQL"

echo "Converting dump to UTF-8..."
iconv -f CP1252 -t UTF-8 "$DUMP_SQL" > dump_utf8.sql

echo "Creating new UTF-8 database $TARGET_DB..."
sqlite3 "$TARGET_DB" < dump_utf8.sql

# Optional: cleanup temporary files
# rm "$DUMP_SQL" dump_utf8.sql

echo "Done! New UTF-8 database is $TARGET_DB"
