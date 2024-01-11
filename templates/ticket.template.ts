interface Ticket {
    payee_ticket_id: string;
    payee_name: string;
    payee_email: string;
    ticket_type: string;

}

const ticketTemplate = (ticket: Ticket) => {
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${ticket.payee_ticket_id}`;
    return `
    <!DOCTYPE html>
    <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
      <meta charset="utf-8">
      <meta name="x-apple-disable-message-reformatting">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <style>
        td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
      </style>
      <![endif]-->
      <title>Ticket</title>
      <style>
        @media (max-width: 600px) {
          h1 {
            font-size: 24px !important;
            line-height: 32px !important;
          }
        }
        @media (max-width: 600px) {
          h2 {
            font-size: 20px !important;
            line-height: 28px !important;
          }
        }
        h3 {
          font-size: 20px;
          line-height: 28px;
          color: #0f172a;
          margin: 0 0 16px;
        }
        @media (max-width: 600px) {
          h3 {
            font-size: 18px !important;
            line-height: 24px !important;
          }
        }
        @media (max-width: 600px) {
          h4 {
            font-size: 16px !important;
            line-height: 20px !important;
          }
        }
        h5 {
          font-size: 16px;
          line-height: 20px;
          color: #0f172a;
        }
        @media (max-width: 600px) {
          h5 {
            font-size: 14px !important;
          }
        }
        @media (max-width: 600px) {
          h6 {
            font-size: 14px !important;
          }
        }
        ul,
        ol {
          line-height: 24px;
          color: #475569;
        }
        blockquote p {
          margin: 0;
          font-size: 18px;
          line-height: 28px;
        }
        blockquote {
          border-left: 4px solid #6366f1;
          margin: 0 0 32px;
          padding-left: 16px;
        }
        hr {
          height: 1px;
          border-width: 0px;
          background-color: #cbd5e1;
          color: #cbd5e1;
          margin-top: 32px;
          margin-bottom: 32px;
        }
        :not(pre) > code {
          border-radius: 4px;
          padding: 2px 6px;
          white-space: normal;
          font-size: 14px;
          border: 1px solid #e2e8f0;
          background-color: #f8fafc;
          color: #ec4899;
        }
        .hover-text-slate-300:hover {
          color: #cbd5e1 !important;
        }
        @media (max-width: 600px) {
          .sm-block {
            display: block !important;
          }
          .sm-w-12 {
            width: 48px !important;
          }
          .sm-w-full {
            width: 100% !important;
          }
          .sm-px-0 {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .sm-px-4 {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .sm-pb-8 {
            padding-bottom: 32px !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0; width: 100%; background-color: #0F172A; padding: 0; -webkit-font-smoothing: antialiased; word-break: break-word">
      <div align="center" role="article" aria-roledescription="email" lang="en" class="sm-px-4" aria-label="Ticket" style="background-color: #0F172A">
        <div role="separator" style="line-height: 40px">&zwj;</div>
        <table cellpadding="0" cellspacing="0" role="none">
          <tr>
            <td style="width: 600px; max-width: 100%">
              <table style="width: 100%;" cellpadding="0" cellspacing="0" role="none">
                <tr>
                  <td class="sm-px-4" style="padding-left: 32px; padding-right: 32px">
                    <img src="https://avatars.githubusercontent.com/u/149206572?s=200&v=4" width="100" alt="EncryptEdge" style="max-width: 100%; vertical-align: middle; line-height: 100%; border: 0">
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <div role="separator" style="line-height: 40px">&zwj;</div>
        <table style="font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" cellpadding="0" cellspacing="0" role="none">
          <tr>
            <td style="width: 600px; max-width: 100%; border-radius: 12px; background-color: #fff; padding-top: 32px; padding-bottom: 32px">
              <table style="width: 100%;" cellpadding="0" cellspacing="0" role="none">
                <tr>
                  <td class="sm-px-4" style="padding-left: 32px; padding-right: 32px; font-size: 16px; line-height: 24px; color: #475569">
                    <h1 style="font-size: 30px; line-height: 36px; color: #0f172a">Ticket</h1>
                    <h2 style="font-size: 24px; line-height: 32px; color: #0f172a">Hi ${ticket.payee_name},</h2>
                    <p style="font-size: 16px; line-height: 24px; color: #475569; margin: 0 0 32px">Thanks you for purchasing tickets for RCSCTF24. <br>
                      <br>
                      Your Registrataion Details are as follows: <br>
                      Booking Id : ${ticket.payee_ticket_id}.
                    </p>
                    <table ticket.ticket cellpadding="0" cellspacing="0" role="none">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td ticket.paye e_name>${ticket.payee_name}</td>
                          <td>${ticket.ticket_type}</td>
                        </tr>
                      </tbody>
                    </table>
                    <img src="${qrCode}" width="200" alt="ticket-Qr" style="max-width: 100%; vertical-align: middle; line-height: 100%; border: 0">
                    <h4 style="font-size: 18px; line-height: 24px; color: #0f172a">Event details.</h4>
                    <p style="font-size: 16px; line-height: 24px; color: #475569; margin: 0 0 32px;">Organiser : EncryptEdge <br>
                      Venue : <strong><a href="https://maps.app.goo.gl/PJA3Yjp8sK2isJsX8">Lovely Professional University, Jalandhar - Delhi, Grand Trunk Rd, Phagwara,   Punjab 144001.</a></strong><br>
                      Event Date : <strong>26th January 2024</strong>
                      Reporting Time : <strong>8:00AM</strong> <br>
                      Event Starts at : <strong>12:00 PM</strong></p>
                    <pre style="margin-bottom: 24px; overflow: auto; white-space: pre; border-radius: 8px; padding: 24px; text-align: left; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 16px; color: #cbd5e1; hyphens: none; tab-size: 2; word-break: normal; word-spacing: normal; word-wrap: normal; background-color: #292D3E" tabindex="0"><code><span><span style="color: #FFCB6B">---</span></span>
    <span><span style="color: #C3E88D">Welcome hackers Lets hack it. (◕‿◕✿)</span></span>
    <span><span style="color: #FFCB6B">---</span></span>
    <span></span></code></pre>
                    <h6 style="font-size: 16px; text-transform: uppercase; line-height: 20px; color: #0f172a">Subject: HACK ALERT!</h6>
                    <p style="font-size: 16px; line-height: 24px; color: #475569; margin: 0 0 32px;">Event Breached - Ticket ID Required for Decryption ☠️ <br>
                      Hack alert! <br>
                      • Show up ASAP, this ain't your grandma's event. <br>
                      • Ticket ID? Guard it tighter than your keyboard shortcuts. <br>
                      • Expect holograms, spiked punch, and digital mayhem. <br>
                      • Wi-Fi on the line, hackers, assemble! <br>
                      • Don't lose your ticket, we're not your tech fairies.</p>
                    <p style="font-size: 16px; line-height: 24px; color: #475569; margin: 0 0 32px;">Cheers,<br>
                      Team EncryptEdge</p>
                    <p style="font-size: 16px; line-height: 24px; color: #475569; margin: 0 0 32px;">For any queries , contact us at <a href="mailto:rcs24@encryptedge.in" style="color: #2563eb; text-decoration: underline">rcs24@encryptedge.in</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr role="separator">
            <td style="line-height: 40px">&zwj;</td>
          </tr>
        </table>
        <div role="separator" style="line-height: 40px">&zwj;</div>
      </div>
    </body>
    </html>
    `;
};

export {
    ticketTemplate
};