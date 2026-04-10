// src/lib/server/prisma.ts
// import { PrismaClient } from '@prisma/client';

// const db = new PrismaClient();
// export default db;

import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { DATABASE_URL, TURSO_TOKEN } from "$env/static/private";

const adapter = new PrismaLibSQL({
  url: DATABASE_URL, //process.env.DATABASE_URL,
  authToken: TURSO_TOKEN,
})

const db = new PrismaClient({ adapter })

export default db