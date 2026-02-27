// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
async function startServer() {
  const app = express();
  const server = createServer(app);
  app.use(express.json());
  app.post("/api/contact", async (req, res) => {
    const name = String(req.body?.name ?? "").trim();
    const email = String(req.body?.email ?? "").trim();
    const message = String(req.body?.message ?? "").trim();
    if (!name || name.length < 2) {
      return res.status(400).json({ error: "Nome inv\xE1lido" });
    }
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid) {
      return res.status(400).json({ error: "E-mail inv\xE1lido" });
    }
    if (!message || message.length < 10) {
      return res.status(400).json({ error: "Mensagem deve ter ao menos 10 caracteres" });
    }
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL
    } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
      return res.status(500).json({
        error: "Servi\xE7o de e-mail n\xE3o configurado. Defina SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS e CONTACT_TO_EMAIL."
      });
    }
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS
        }
      });
      await transporter.sendMail({
        from: CONTACT_FROM_EMAIL || SMTP_USER,
        to: CONTACT_TO_EMAIL,
        replyTo: email,
        subject: `Novo contato do portf\xF3lio - ${name}`,
        text: `Nome: ${name}
E-mail: ${email}

Mensagem:
${message}`,
        html: `
          <h2>Novo contato do portf\xF3lio</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `
      });
      return res.status(200).json({ ok: true });
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      return res.status(500).json({ error: "Falha ao enviar e-mail" });
    }
  });
  const staticPath = process.env.NODE_ENV === "production" ? path.resolve(__dirname, "public") : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
  const port = process.env.PORT || 3e3;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
startServer().catch(console.error);
