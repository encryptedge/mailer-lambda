export interface MailConfig {
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: {
        user: string;
        pass: string;
    };
    logger?: boolean;
}

type MailerConfigValues = MailConfig & Partial<ExtraMailerConfig>;

interface ExtraMailerConfig {
    from_email: string;
    from_name: string;
}

const ConfigValue: MailerConfigValues = {
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
    logger: Boolean(process.env.MAIL_LOGGER),
    from_email: process.env.MAIL_FROM_EMAIL,
    from_name: process.env.MAIL_FROM_NAME,
};

export default ConfigValue;