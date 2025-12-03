import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      typeBien,
      surface,
      services,
      budget,
      delai,
      description,
      terms
    } = await request.json();

    // Email validation
    if (!firstName || !lastName || !email || !phone || !address || !services || !terms) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format services
    const servicesText = Array.isArray(services) ? services.join(', ') : services;

    // Email content
    const mailOptions = {
      from: `"Flash Services" <${process.env.SMTP_USER}>`,
      to: 'contact@flashservices78.fr',
      subject: 'Nouvelle demande de devis - Flash Services',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouvelle demande de devis</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Informations générales</h3>
            <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone:</strong> ${phone}</p>

            <h3 style="color: #374151;">Détails du projet</h3>
            <p><strong>Adresse:</strong> ${address}</p>
            <p><strong>Type de bien:</strong> ${typeBien || 'Non spécifié'}</p>
            <p><strong>Surface:</strong> ${surface ? `${surface} m²` : 'Non spécifiée'}</p>

            <h3 style="color: #374151;">Services demandés</h3>
            <p>${servicesText}</p>

            <h3 style="color: #374151;">Budget et délais</h3>
            <p><strong>Budget prévisionnel:</strong> ${budget || 'Non spécifié'}</p>
            <p><strong>Délai souhaité:</strong> ${delai || 'Non spécifié'}</p>

            <h3 style="color: #374151;">Description du projet</h3>
            <p style="background-color: white; padding: 15px; border-radius: 5px;">${description || 'Aucune description'}</p>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px;">
            Cet email a été envoyé depuis le formulaire de demande de devis du site Flash Services.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Demande de devis envoyée avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de la demande' },
      { status: 500 }
    );
  }
}
