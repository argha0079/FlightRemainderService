import { config } from "dotenv";

config();

export const {
    PORT,
    EMAIL_ID,
    EMAIL_PASS,
    DATABASE_URL
} = process.env;