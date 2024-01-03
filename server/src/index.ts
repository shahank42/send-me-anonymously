import { Hono } from "hono";
import { cors } from "hono/cors";
import messages from "./routes/messages";

type Bindings = {
  DB: D1Database;
  database_id: string;
  database_name: string;
};

const app = new Hono<{ Bindings: Bindings }>();
app.use("*", cors());

app.get("/", (c) => {
  return c.text("Messages API live!");
});

app.route("/messages", messages);

export default app;
