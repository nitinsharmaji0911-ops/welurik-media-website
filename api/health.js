export default function handler(req, res) {
  res.status(200).json({
    status: 'online',
    agency: 'Welurik Media Private Limited',
    engine: 'React Tailwind CSS + Vercel Serverless',
    timestamp: new Date().toISOString()
  })
}
