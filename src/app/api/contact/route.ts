// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, to } = body;

    // Validation des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Configuration du transporteur email
    // Option 1: Gmail (vous devez activer les "app passwords" dans Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // votre email Gmail
        pass: process.env.EMAIL_PASSWORD, // votre app password Gmail
      },
    });

    // Option 2: SMTP générique (décommentez si vous utilisez un autre service)
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    */

    // Email vers vous (notification de nouveau message)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: to || 'contact@elynortours.com',
      subject: `[Elynor Tours] Nouveau message: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f97316; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .info-row { margin: 15px 0; padding: 10px; background-color: white; border-radius: 4px; }
            .label { font-weight: bold; color: #f97316; }
            .message-box { background-color: white; padding: 20px; border-left: 4px solid #f97316; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 Nouveau message de contact</h2>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Nom :</span> ${name}
              </div>
              <div class="info-row">
                <span class="label">Email :</span> <a href="mailto:${email}">${email}</a>
              </div>
              <div class="info-row">
                <span class="label">Sujet :</span> ${subject}
              </div>
              <div class="message-box">
                <p class="label">Message :</p>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    // Email de confirmation au client
    const mailOptionsToClient = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation de réception - Elynor Tours',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f97316; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background-color: #f97316; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>✓ Message bien reçu !</h2>
            </div>
            <div class="content">
              <p>Bonjour ${name},</p>
              <p>Nous avons bien reçu votre message concernant : <strong>${subject}</strong></p>
              <p>Notre équipe vous répondra dans les plus brefs délais, généralement sous 24h.</p>
              
              <p style="margin-top: 30px;">Pour toute urgence, n'hésitez pas à nous contacter directement :</p>
              <ul>
                <li>📞 <strong>France :</strong> +33 1 82 83 67 29</li>
                <li>📞 <strong>Israël :</strong> +972 58 414 0489</li>
                <li>💬 <a href="https://api.whatsapp.com/send/?phone=972584140489">WhatsApp</a></li>
              </ul>
              
              <div style="text-align: center;">
                <a href="https://elynortours.com" class="button">Visiter notre site</a>
              </div>
              
              <div class="footer">
                <p>Elynor Tours - Votre partenaire voyage en Israël</p>
                <p>Tel Aviv, Israël | contact@elynortours.com</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Envoi des emails
    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToClient);

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}