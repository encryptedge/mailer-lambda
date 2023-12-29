import { z } from "zod";

declare global {
     // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ProcessEnv extends z.infer<typeof envSchema> { }
    }
}

const envSchema = z.object({
    MAIL_HOST: z.string(),
    MAIL_PORT: z.string(),
    MAIL_USER: z.string(),
    MAIL_PASS: z.string(),
    MAIL_LOGGER: z.string(),
    MAIL_FROM_EMAIL: z.string(),
    MAIL_FROM_NAME: z.string(),
    BASIC_AUTH_USERNAME: z.string(),
    BASIC_AUTH_PASSWORD: z.string(),
});

envSchema.parse(process.env);

console.log("ENV LOADED!");
