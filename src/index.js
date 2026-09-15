import express from "express";
import { PORT } from "./config/envConfig.js";
import { setupJobs } from "./utils/job.js";
import * as ticketController from "./controllers/ticketController.js"
import { connectDatabase } from "./config/dbConfig.js";
import { createChannel } from "./utils/messegeQueue.js";

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))


    app.post("/api/v1/tickets", ticketController.create);
    
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        setupJobs();
    })
}
setupAndStartServer();