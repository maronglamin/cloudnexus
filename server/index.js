import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'

const app = express()
const port = process.env.PORT || 8787
const resend = new Resend(process.env.RESEND_API_KEY)

app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, message, consent } = req.body || {}

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' })
    }
    if (!consent) {
      return res.status(400).json({ error: 'Consent is required' })
    }

    const safe = (v) => (typeof v === 'string' ? v : '')
    const now = new Date().toLocaleString()

    const internalHtml = `
      <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,'Helvetica Neue',Arial,sans-serif;line-height:1.5;color:#0f172a">
        <p style="margin:0 0 12px;font-size:16px;color:#111827"><strong>[Cloud Nexus] - New Consultation Request</strong></p>
        <p style="margin:0 0 16px;font-size:14px;color:#334155">Received: ${now}</p>
        <h3 style="margin:0 0 8px;font-size:14px;color:#0f172a">Details</h3>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <tbody>
            <tr><td style="padding:8px 0;width:140px;color:#475569">Full name</td><td style="padding:8px 0;color:#0f172a"><strong>${safe(name)}</strong></td></tr>
            <tr><td style="padding:8px 0;color:#475569">Work email</td><td style="padding:8px 0;color:#0f172a">${safe(email)}</td></tr>
            <tr><td style="padding:8px 0;color:#475569">Company</td><td style="padding:8px 0;color:#0f172a">${safe(company) || '-'}</td></tr>
            <tr><td style="padding:8px 0;color:#475569">Phone</td><td style="padding:8px 0;color:#0f172a">${safe(phone) || '-'}</td></tr>
            <tr><td style="padding:8px 0;color:#475569">Message</td><td style="padding:8px 0;color:#0f172a;white-space:pre-wrap">${safe(message) || '-'}</td></tr>
          </tbody>
        </table>
      </div>
    `

    // 1) Send to CloudNexus reps (replying goes to the user)
    await resend.emails.send({
      from: 'Cloud Nexus <onboarding@resend.dev>',
      to: ['mlmarong@cloudnexus.biz'],
      reply_to: email,
      subject: `New consultation request from ${safe(name)}`,
      html: internalHtml,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Unable to send email at the moment' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.listen(port, () => {
  console.log(`[cloudnexus-site] contact API listening on http://localhost:${port}`)
})


