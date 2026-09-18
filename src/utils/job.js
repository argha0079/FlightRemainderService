import cron from "node-cron";
import * as emailService from "../services/emailService.js";
import { sender } from "../config/emailConfig.js";
import { EMAIL_ID } from "../config/envConfig.js";

export const setupJobs = () => {
    cron.schedule("*/2 * * * * *", async () => {

        const response = await emailService.fetchPendingEmails();
        for (const email of response) {
            const data = await sender.sendMail({
                from: EMAIL_ID,
                to: email.recipientEmail,
                subject: email.subject,
                text: email.content
            });
            console.log(data);
            await emailService.updateTicket(email.id, {
                status: "SUCCESS"
            });
        }
        console.log(response);
    });
};