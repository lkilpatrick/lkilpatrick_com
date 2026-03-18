import * as admin from "firebase-admin";
import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import FormData from "form-data";
import Mailgun from "mailgun.js";

admin.initializeApp();

const mailgunApiKey = defineSecret("MAILGUN_API_KEY");

const MAILGUN_DOMAIN = "pitterpatterdiving.com";
const TO_EMAIL = "luke@lukek.ca";
const FROM_EMAIL = `contact@${MAILGUN_DOMAIN}`;

export const sendContactEmail = onRequest({ secrets: [mailgunApiKey] }, async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields: name, email, message" });
    return;
  }

  try {
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({ username: "api", key: mailgunApiKey.value() });

    await mg.messages.create(MAILGUN_DOMAIN, {
      from: `${name} via lkilpatrick.com <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      "h:Reply-To": email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mailgun error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});
