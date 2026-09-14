import cron from 'node-cron';

export const setupJobs = () => {
    cron.schedule("*/2 * * * *", async () => {
        const response = await emailService.fetchPendingEmails();
        console.log(response);
    }) 
}