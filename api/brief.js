export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { name, brand, phone, email, selectedItems, notes } = req.body || {}

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and WhatsApp/Phone number are required.' })
  }

  const itemsList = (selectedItems || [])
    .map((item, i) => `${i + 1}. *${item.title || item.name}* (${item.categoryName || item.sub || 'Custom Scope'})`)
    .join('\n')

  const textMessage = `*NEW PROJECT INQUIRY — WELURIK MEDIA*\n\n` +
    `👤 *Client:* ${name}\n` +
    `🏢 *Brand:* ${brand || 'Not specified'}\n` +
    `📱 *WhatsApp:* ${phone}\n` +
    `✉️ *Email:* ${email || 'Not provided'}\n\n` +
    `📋 *Requested Scope:*\n${itemsList || 'Custom Agency Discussion'}\n\n` +
    `💬 *Notes:* ${notes || 'Immediate discussion requested'}\n\n` +
    `⚡ _Sent from welurik.media digital portfolio_`

  const encodedMessage = encodeURIComponent(textMessage)
  const agencyPhone = '918421706305'
  const whatsappUrl = `https://wa.me/${agencyPhone}?text=${encodedMessage}`

  return res.status(200).json({
    success: true,
    message: 'Brief registered successfully.',
    whatsappUrl,
    summary: {
      name,
      brand,
      phone,
      itemsCount: (selectedItems || []).length
    }
  })
}
