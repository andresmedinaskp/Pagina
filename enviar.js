// Importa Nodemailer para enviar correos
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Solo permite solicitudes POST
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configura el transporte de correo (usa Gmail como ejemplo)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Usa variables de entorno
                pass: process.env.EMAIL_PASS, // Usa variables de entorno
            },
        });

        // Configura el correo
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Envía el correo a tu dirección
            subject: `Nuevo mensaje de ${name}`,
            text: message,
        };

        try {
            // Envía el correo
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Correo enviado con éxito' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al enviar el correo' });
        }
    } else {
        // Si no es una solicitud POST, devuelve un error
        res.status(405).json({ error: 'Método no permitido' });
    }
}