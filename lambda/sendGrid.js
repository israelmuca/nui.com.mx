const sgMail = require('@sendgrid/mail');
require('dotenv').config()

exports.handler = async (event, context) => {

    try {
        // Get the form data
        const payload = JSON.parse(event.body);

        // validate the form
        if (
            !payload.name ||
            !payload.email ||
            !payload.phone ||
            !payload.city ||
            !payload.message
        ) {
            return {
                statusCode: 422,
                body: JSON.stringify({
                    message: 'Required information is missing.'
                })
            }
        }


        // Everything is fine, let's send the email!
        // - - - - - - - - - - - - - - - - - - - - -
        // Set the API Key
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        // Construct the message
        const email = {
            from: `${payload.email}`,
            to: `${process.env.MAIL_TO}`,
            subject: `Nui: Forma de contacto`,
            text:
                `Has recibido el siguiente mensaje en tu forma de contacto.\n\n
                Nombre: ${payload.name}\n\n
                Teléfono: ${payload.phone}\n\n
                Ciudad: ${payload.city}\n\n
                Mensaje: ${payload.message}`
        }

        // Send the email
        const emailSent = await sgMail.send(email)
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: emailSent
            })
        }
    }
    catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: `Error: ${e}`
            })
        }
    }

};