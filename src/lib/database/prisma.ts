// src/lib/server/prisma.ts
// import { PrismaClient } from '@prisma/client';

// const db = new PrismaClient();
// export default db;

import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSQL({
  url: process.env.DATABASE_URL,
  authToken: process.env.TURSO_TOKEN,
})

const db = new PrismaClient({ adapter })

export default db