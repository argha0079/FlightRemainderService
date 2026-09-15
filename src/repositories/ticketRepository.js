import { prisma } from "../config/dbConfig.js";

export class TicketRepository {

    async getAll() {
        try {
            const tickets = await prisma.notificationTicket.findMany();
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

    async get(filter) {
        try {
            const tickets = await prisma.notificationTicket.findMany({
                where: {
                    status: filter.status,
                    notificationTime: {
                        lte: new Date()
                    }
                }
            })
            return tickets;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async update(ticketId, data) {
        try {
            const ticket = await prisma.notificationTicket.findUnique({
                where:{
                    id: ticketId
                },
                data
            })
            return ticket;
        } catch (error) {
            throw error;
        }
    }
}