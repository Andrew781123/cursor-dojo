import { sql } from "drizzle-orm";
import {
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { user } from "./auth-schema";

export const challenge = pgTable("challenge", {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  description: text().notNull(),
  initialCode: text().notNull(),
  targetCode: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp()
    .default(sql`now()`)
    .$onUpdateFn(() => sql`now()`),
});

export const challengeAttempt = pgTable("challengeAttempt", {
  id: uuid().defaultRandom().primaryKey(),
  userId: text()
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  challengeId: uuid()
    .notNull()
    .references(() => challenge.id, { onDelete: "cascade" }),
  timeTaken: integer().notNull(),
  keystrokes: integer().notNull(),
  keystrokeHistory: jsonb().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});

export * from "./auth-schema";
