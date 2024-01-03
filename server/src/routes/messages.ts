import { Hono } from "hono";
import getMessages from "../controllers/getMessages";
import addMessage from "../controllers/addMessage";

const messages = new Hono();

messages.get("/get-messages", getMessages);
messages.post("/add-message", addMessage);

export default messages;
