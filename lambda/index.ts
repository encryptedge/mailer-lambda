import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { basicAuth } from "hono/basic-auth";

import { sendMail } from "../functions/sendMail";

const app = new Hono();

app.use("/ticket/*", basicAuth({
    username: process.env.MAIL_FROM_NAME,
    password: process.env.MAIL_PASS
}));

app.get("/", (c) => c.text("Hello from Hono! Logger ENV => " +  process.env.MAIL_LOGGER));
app.post("/ticket/sendMail", sendMail);

if (process.env.NODE_ENV === "development") {
    serve({
        fetch: app.fetch,
        port: 4000,
    });
}

export const handler = handle(app);