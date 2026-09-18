import express from "express";
import { PORT, REMAINDER_BINDING_KEY } from "./config/envConfig.js";
import { setupJobs } from "./utils/job.js";
import * as ticketController from "./controllers/ticketController.js"
import { connectDatabase } from "./config/dbConfig.js";
import { subscribeMessage, createChannel } from "./utils/messegeQueue.js";
import * as EmailService from "./services/emailService.js"
const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))


    app.post("/api/v1/tickets", ticketController.create);
    
    const channel = await createChannel();
    subscribeMessage(channel, EmailService.subscribeEvents, REMAINDER_BINDING_KEY);

    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        setupJobs();
    })
}
setupAndStartServer();