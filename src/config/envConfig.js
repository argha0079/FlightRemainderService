import { config } from "dotenv";

config();

export const {
    PORT,
    EMAIL_ID,
    EMAIL_PASS
} = process.env;