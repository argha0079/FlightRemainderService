import { config } from "dotenv";
config();

export const {
    PORT,
    EMAIL_ID,
    EMAIL_PASS,
    DATABASE_URL,
    EXCHANGE_NAME,
    MESSAGE_BROKER_URL,
    REMAINDER_BINDING_KEY
} = process.env;
