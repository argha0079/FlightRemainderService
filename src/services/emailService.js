import { sender } from "../config/emailConfig.js";
import { TicketRepository } from "../repositories/ticketRepository.js";

const repo = new TicketRepository()

export const sendBasicEmail = async(mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    })
    console.log(response);

    } catch (error) {
        console.log(error);
    }
}

export const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await repo.getAll();         
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const createNotification = async (data) => {
    try {
        const ticket = await repo.create(data);        
        return ticket;
    } catch (error) {
        console.log(error);
    }
}