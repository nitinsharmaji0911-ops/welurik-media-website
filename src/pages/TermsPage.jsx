import React from 'react'
import { ShieldCheck, Scale, FileCheck, ArrowLeft } from 'lucide-react'
import { useNavigation } from '../context/NavigationContext'

export default function TermsPage() {
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
            Terms of Engagement
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Effective Date: October 2026 &bull; Welurik Media Studio HQ, Nagpur, India
          </p>
        </div>
      </section>

      {/* 2. Terms Content Body */}
      <section className="max-w-[1000px] mx-auto px-4 sm:px-8 pt-12">
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8 text-xs sm:text-sm text-zinc-700 leading-relaxed">
          
          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              1. Engagement Scope &amp; Statement of Work (SOW)
            </h2>
            <p>
              These Terms of Engagement govern all custom web development projects, creative media production sprints, and performance digital marketing retainers executed by Welurik Media. Each engagement is formally initiated upon agreement of a digital Scope of Work or mutual written commitment.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              2. 100% Intellectual Property (IP) Transfer
            </h2>
            <p>
              Upon final settlement of project invoices, Welurik Media transfers 100% of the worldwide intellectual property rights for the completed codebases, custom UI layouts, graphics, scripts, and video deliverables directly to the Client. The Client owns all source repositories, domain configurations, and commercial media assets without recurring agency licensing penalties.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              3. Transparent Ad Spend &amp; Account Governance
            </h2>
            <p>
              For all Meta Ads and Google Ads management engagements, ad spend is funded directly by the Client to the ad networks (Meta, Google, etc.). Welurik Media never marks up client media budgets or conceals invoices. The Client retains administrator ownership of all ad accounts, tracking pixels, and conversion APIs at all times.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              4. Agile Sprint Delivery &amp; Revisions
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Development Sprints:</strong> Custom web platforms and Shopify funnels include comprehensive staging reviews and up to 3 iterative revision cycles prior to live domain deployment.</li>
              <li><strong>Creative Video Production:</strong> Commercial shoots include storyboard alignment, rough cut feedback, and fine color-grading passes inside DaVinci Resolve.</li>
              <li><strong>Turnaround Cadence:</strong> Priority feedback requests are processed within our standard 48-hour sprint window.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              5. Mutual Non-Disclosure &amp; Confidentiality
            </h2>
            <p>
              Both parties agree to treat all business roadmaps, financial metrics, customer databases, unreleased creative scripts, and software source code as strictly confidential under binding Non-Disclosure standards.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 mb-2">
              6. Jurisdiction &amp; Dispute Resolution
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising under this agreement shall be subject to the exclusive jurisdiction of the competent courts in Nagpur, Maharashtra, India.
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-100">
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-zinc-200 text-xs text-zinc-600">
              <strong>Welurik Media Leadership Office</strong><br />
              Nagpur, Maharashtra, India<br />
              WhatsApp Legal Inquiries: +91 8421706305
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
