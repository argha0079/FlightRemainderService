import * as ticketService from "../services/emailService.js"

export const create = async (req, res) => {
    try {
        const response = await ticketService.createNotification(req.body);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: "Successfully registered an email remainder"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "unable to register email remainder"
        })
    }
}