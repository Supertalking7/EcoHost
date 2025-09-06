const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Abilita CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Gestisci preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Verifica che sia una richiesta POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Debug: log delle variabili d'ambiente
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Presente' : 'Mancante');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Presente' : 'Mancante');
    
    // Parsing del body della richiesta
    const { name, surname, email, phone, service, message } = JSON.parse(event.body);

    // Verifica che tutti i campi obbligatori siano presenti
    if (!name || !surname || !email || !phone || !service || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Tutti i campi sono obbligatori' })
      };
    }

    // Configurazione del transporter email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Usa la variabile d'ambiente
        pass: process.env.EMAIL_PASS  // Usa la variabile d'ambiente
      }
    });

    // Contenuto dell'email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Usa la variabile d'ambiente
      to: process.env.EMAIL_USER,   // Usa la variabile d'ambiente - ricevi tutte le richieste
      subject: `Nuova richiesta da ${name} ${surname} - ${service}`,
      html: `
        <h2>Nuova richiesta di contatto</h2>
        <p><strong>Nome:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone}</p>
        <p><strong>Servizio di interesse:</strong> ${service}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>
      `
    };

    // Invio dell'email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Email inviata con successo!',
        success: true 
      })
    };

  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Errore nell\'invio dell\'email. Riprova più tardi.',
        success: false 
      })
    };
  }
};
