import express from "express";
import { PORT } from "./config/envConfig.js";

const setupAndStartServer = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    })
}
setupAndStartServer();