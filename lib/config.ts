import * as dotenv from "dotenv";
import path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export type ConfigProps = {
    MAIL_HOST: string;
    MAIL_PORT: string;
    MAIL_USER: string;
    MAIL_PASS: string;
    MAIL_LOGGER: string;
    MAIL_FROM_EMAIL: string;
    MAIL_FROM_NAME: string;
};

export const getConfig = (): ConfigProps => ({
    MAIL_HOST: process.env.MAIL_HOST!,
    MAIL_PORT: process.env.MAIL_PORT!,
    MAIL_USER: process.env.MAIL_USER!,
    MAIL_PASS: process.env.MAIL_PASS!,
    MAIL_LOGGER: process.env.MAIL_LOGGER!,
    MAIL_FROM_EMAIL: process.env.MAIL_FROM_EMAIL!,
    MAIL_FROM_NAME: process.env.MAIL_FROM_NAME!,
});