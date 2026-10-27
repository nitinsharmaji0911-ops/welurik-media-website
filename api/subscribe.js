export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { email } = req.body || {}

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' })
  }

  return res.status(200).json({
    success: true,
    message: 'Subscribed to Welurik Media Quarterly Dispatches.'
  })
}
