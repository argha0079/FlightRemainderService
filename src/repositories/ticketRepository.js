import { prisma } from "../config/dbConfig.js";

export class TicketRepository {

    async getAll() {
        try {
            const tickets = await prisma.notificationTicket.findAll();
            return tickets;
        } catch (error) {
            console.log(error);
        }
    }

    async create(data) {
        try {
            const ticket = await prisma.notificationTicket.create({
                data
            })
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }

}