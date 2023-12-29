interface Ticket {
    payee_ticket_id: string;
    payee_name: string;
    payee_email: string;
    ticket_type: string;

}

const ticketTemplate = (ticket: Ticket) => {
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${ticket.payee_ticket_id}`;
    return `
        <div style="background-color: #f5f5f5; padding: 20px;">
            <div style="background-color: #fff; padding: 20px; border-radius: 10px;">
                <img src="https://rcs.encryptedge.in/banner.png" alt="RCSCTF24" style="display: block; margin-left: auto; margin-right: auto; width: 50%;" />
                <h1 style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">RCSCTF24</h1>
                <h2 style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Ticket</h2>
                <hr />                
                <p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Hello ${ticket.payee_name},</p>
                <p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">You have successfully registered for RCSCTF24.</p>
                <p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Your ticket ID is <b>${ticket.payee_ticket_id}</b></p>
                <p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Your ticket type is <b>${ticket.ticket_type}</b></p>
                <hr />                
                <p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                    <img src="${qrCode}" alt="QR Code" />
                </p>
                <hr />                

                <p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                    Event Reporting Date: 26th January 2024<br />
                    Event Reporting Time: 8:00 AM<br />
                    Event Start Time: 12:00 PM<br />
                    Event Venue: Lovely Professional University, Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144001 <br />
                    Event Venue Location: https://maps.app.goo.gl/PJA3Yjp8sK2isJsX8 <br />
                </p>
                <hr />                
                <p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Please report to the event venue on time.</p>
                <p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Please keep this ticket ID safe and secure.</p>
                <p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                    For any queries, please contact us at <a href="mailto:rcs24@encryptedge.in">rcs24@encryptedge.in</a> </br>
                </p>
                <p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Regards,</p>
                <p style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Team EncryptEdge</p>
            </div>
        </div>
    `;
};

export {
    ticketTemplate
};