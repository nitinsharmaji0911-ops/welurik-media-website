import React from 'react'
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react'
import { useNavigation } from '../context/NavigationContext'

export default function PrivacyPolicyPage() {
  const { navigate } = useNavigation()

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#111111] pb-24">
      {/* 1. Header */}
      <section className="bg-black text-white pt-16 pb-16 px-4 sm:px-8 border-b border-zinc-900">
        <div className="max-w-[1000px] mx-auto">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Welurik Media
          </button>
          
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Effective Date: October 2026 &bull; Welurik Media Studio HQ, Nagpur, India
          </p>
        </div>
      </section>

      {/* 2. Policy Content Body */}
      <section className="max-w-[1000px] mx-auto px-4 sm:px-8 pt-12">
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8 text-xs sm:text-sm text-zinc-700 leading-relaxed">
          
          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              1. Overview &amp; Commitment to Confidentiality
            </h2>
            <p>
              Welurik Media ("Agency", "we", "us", or "our") respects the privacy and confidentiality of our clients, prospective partners, and visitors. This Privacy Policy outlines how we collect, handle, protect, and process information obtained through our website, project brief forms, and client engagement workflows.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact &amp; Identity Data:</strong> Name, phone/WhatsApp number, email address, brand name, and corporate website submitted through our discovery forms.</li>
              <li><strong>Technical Engagement Data:</strong> IP addresses, browser types, referral URLs, and interaction signals used solely to monitor site performance and ensure sub-second rendering speeds.</li>
              <li><strong>Client Account Credentials:</strong> When granted access to Meta Business Manager, Google Ads, or Shopify Admin, access is handled strictly via official Partner Delegate access or OAuth without storing raw credentials on unauthorized systems.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              3. Meta Pixel, CAPI &amp; Google Analytics
            </h2>
            <p>
              Our website uses privacy-compliant analytics tools (including Google Analytics 4, Meta Conversions API, and Microsoft Clarity) to analyze traffic patterns and user experience. We do not sell, rent, or trade your personal or business data to data brokers or third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              4. Complete Client Data Ownership
            </h2>
            <p>
              All proprietary customer data, lead lists, pixel event catalogs, and campaign metrics generated during a client engagement belong exclusively to the client. Welurik Media acts as a data processor and growth operator; you maintain full sovereignty and export rights over your business data at all times.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              5. Data Security &amp; Encryption
            </h2>
            <p>
              We enforce SSL/TLS encryption across all web touchpoints, two-factor authentication (2FA) across our development pipelines and cloud environments (Vercel, Supabase, GitHub), and strictly scoped access permissions for all production team members.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              6. Contacting the Studio
            </h2>
            <p>
              For questions regarding this policy, data deletion requests, or NDA execution, reach out to our legal and data security desk directly:
            </p>
            <div className="mt-3 p-4 bg-[#FAF8F5] rounded-xl border border-zinc-200 text-xs">
              <strong>Welurik Media Production Studio</strong><br />
              Nagpur, Maharashtra, India<br />
              Direct WhatsApp: +91 8421706305<br />
              Official Inquiry: concierge@welurikmedia.com
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
