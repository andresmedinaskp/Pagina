import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body;

        // Validación básica de los campos
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Nombre, correo y mensaje son obligatorios' });
        }

        // Configura el transporte de correo
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Usa la variable de entorno
                pass: process.env.EMAIL_PASSWORD, // Usa la variable de entorno
            },
        });

        // Configura el correo
        const mailOptions = {
            from: email, // Correo del remitente
            to: process.env.EMAIL_USER, // Correo del destinatario (tú)
            subject: `Nuevo mensaje de ${name}`, // Asunto del correo
            text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`, // Cuerpo del correo
        };

        try {
            // Envía el correo
            await transporter.sendMail(mailOptions);
            // Respuesta clara y concisa
            res.status(200).json({ message: 'Correo enviado con éxito' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            // Respuesta de error clara
            res.status(500).json({ error: 'Error al enviar el correo' });
        }
    } else {
        // Si no es una solicitud POST, devuelve un error
        res.status(405).json({ error: 'Método no permitido' });
    }
}