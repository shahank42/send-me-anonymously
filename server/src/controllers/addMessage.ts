import { drizzle } from "drizzle-orm/d1";
import { Context } from "hono";
import { messageList } from "../schema";

interface Request {
  id: number;
  message: string;
  timestamp: number;
}

const addMessage = async (c: Context) => {
  try {
    const request: Request = await c.req.json();

    if (!request.message) throw "No message field";
    if (request.message === "") throw "Empty message";

    const db = drizzle(c.env.DB);
    const response = await db
      .insert(messageList)
      .values({
        message: request.message,
        timestamp: new Date(Date.now()),
      })
      .returning();

    return c.json({
      success: true,
      message: response,
    });
  } catch (err) {
    return c.json({
      success: false,
      error: err,
    });
  }
};

export default addMessage;
