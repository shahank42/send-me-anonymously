import { Context } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { messageList } from "../schema";

const getMessages = async (c: Context) => {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(messageList);

  return c.json({
    success: true,
    data: result,
  });
};

export default getMessages;
