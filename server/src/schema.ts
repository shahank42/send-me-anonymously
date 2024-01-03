import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const messageList = sqliteTable("message-list", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  message: text("message").notNull(),
  timestamp: integer("date", { mode: "timestamp_ms" }),
});
