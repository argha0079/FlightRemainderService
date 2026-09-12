import express from "express";
import { PORT } from "./config/envConfig.js";
import { sendBasicEmail } from "./services/emailService.js";
const setupAndStartServer = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        sendBasicEmail(
            'support@admin.com',
            'argha2489@gmail.com',
            'This is a test email',
            'Hey how are you?? I hope you like the support'
        )
    })
}
setupAndStartServer();