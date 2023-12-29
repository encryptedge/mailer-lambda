import { Context } from "hono";

import sendMailWrapper from "../helpers/mailer";
import { ticketTemplate } from "../templates/ticket.template";

const sendMail = async (ctx: Context) => {
    const { ticket_type, payee_name, payee_email, payee_ticket_id } = await ctx.req.json();
    
    await sendMailWrapper({
        from: process.env.MAIL_FROM,
        html: ticketTemplate({
            payee_name,
            payee_ticket_id,
            payee_email,
            ticket_type
        }),
        to: payee_email,
        replyTo: process.env.MAIL_FROM,
        text: "Hope to see you at RCSCTF24!",
        subject: "Your ticket for RCSCTF24 is here!",
    });

    return ctx.json({
        message: "Email sent successfully",
    });
};

export { 
    sendMail
};