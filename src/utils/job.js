import cron from 'node-cron';
import * as emailService from "../services/emailService.js"
import { sender } from '../config/emailConfig.js';
import { EMAIL_ID } from '../config/envConfig.js';

export const setupJobs = () => {
    cron.schedule("*/2 * * * *", async () => {
        const response = await emailService.fetchPendingEmails();
        response?.foreach((email) => {
            sender.sendMail({
                from: EMAIL_ID,
                to: email.recipientEmail,
                subject:email.subject,
                text:email.content
            }, async(err, data) => {
                if(err) 
                    console.log(err);
                else {
                    console.log(data);
                    await emailService.updateTicket(email.id, {status: "SUCCESS"})
                }
            })
        })
        console.log(response);
    }) 
}