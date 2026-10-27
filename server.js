import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Serve static assets, videos, and images
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/videos', express.static(path.join(__dirname, 'videos')))
app.use('/images', express.static(path.join(__dirname, 'public/images')))

// In-memory data store (also logged to JSON file)
const BRIEFS_FILE = path.join(__dirname, 'briefs_log.json')
const SUBSCRIBERS_FILE = path.join(__dirname, 'subscribers_log.json')

function appendToJsonLog(filePath, data) {
  try {
    let list = []
    if (fs.existsSync(filePath)) {
      list = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    list.push({ ...data, createdAt: new Date().toISOString() })
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2))
  } catch (err) {
    console.error('Failed to log data to file:', err)
  }
}

// 1. Health Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    agency: 'Welurik Media Private Limited',
    engine: 'Node.js Express + React Tailwind CSS',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  })
})

// 2. Project Brief Submission Endpoint (Zero Hustle Lead Capture)
app.post('/api/brief', (req, res) => {
  const { name, brand, phone, email, selectedItems, notes } = req.body

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and WhatsApp/Phone number are required.' })
  }

  const briefEntry = {
    name,
    brand: brand || 'Not specified',
    phone,
    email: email || 'Not specified',
    selectedItems: selectedItems || [],
    notes: notes || '',
  }

  // Save to log
  appendToJsonLog(BRIEFS_FILE, briefEntry)

  // Construct WhatsApp direct link
  const itemsText = (selectedItems || [])
    .map((item, i) => `${i + 1}. ${item.title || item.name} (${item.category || item.categoryName || 'Module'})`)
    .join('\n')

  const waMessage = `👋 Hey Welurik Team!\n\nI just submitted a project brief on your website for *${brand || name}*.\n\n*Selected Scope:*\n${itemsText || 'General Media Consultation'}\n\n*Client:* ${name}\n*Phone:* ${phone}\n\nLooking forward to reviewing your scope and onboarding roadmap!`

  const waUrl = `https://wa.me/918421706305?text=${encodeURIComponent(waMessage)}`

  res.json({
    success: true,
    message: `Brief successfully received for ${name}!`,
    whatsappUrl: waUrl,
    data: briefEntry
  })
})

// 3. Newsletter Subscription Endpoint
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email address is required.' })
  }

  appendToJsonLog(SUBSCRIBERS_FILE, { email })

  res.json({
    success: true,
    message: 'Welcome to the Welurik Growth Dispatch!'
  })
})

// Serve production build if available
const distPath = path.join(__dirname, 'dist')
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`🚀 Welurik Media Node.js server running on http://localhost:${PORT}`)
})
