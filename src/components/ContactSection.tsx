import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare, Clock, Globe } from 'lucide-react';
import { PERSONAL_INFO, WEB3FORMS_CONFIG } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const accessKey = WEB3FORMS_CONFIG.accessKey || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

      if (!accessKey) {
        // If access key is not yet set, automatically open default email client addressed to Kalkidan!
        const mailtoUrl = `mailto:${WEB3FORMS_CONFIG.targetEmail}?subject=${encodeURIComponent(
          `Portfolio Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 7000);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Inquiry from ${formData.name}`,
          from_name: 'Kalkidan Portfolio'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setErrorMsg(data.message || `Failed to deliver message. Please reach out directly to ${WEB3FORMS_CONFIG.targetEmail}.`);
      }
    } catch {
      setErrorMsg(`A network error occurred. Please reach out directly to ${WEB3FORMS_CONFIG.targetEmail}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 bg-[#F5F2EB]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-[#DFD7CB]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#7C4A32] mb-2">
            <span>05 / CONTACT</span>
            <span aria-hidden="true">·</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917]">
            Let's Shape What's Next.
          </h2>
          <p className="text-[#57534E] text-base mt-2 max-w-2xl leading-relaxed">
            I am open to new opportunities. Feel free to reach out. I approach every task with humility, embrace new challenges as learning opportunities, and stay committed to delivering every project to completion.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details on Left, Message Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct contact channels & social links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] block">
                Direct Communication
              </span>

              {/* Copyable Email Box */}
              <div className="p-5 bg-[#ECE6DC] rounded-xl border border-[#D8CEBF] flex items-center justify-between gap-4">
                <div className="truncate">
                  <span className="block text-[11px] font-mono text-[#78716C] uppercase mb-0.5">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-medium text-[#1C1917] hover:text-[#5C3A28] transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 bg-[#FAF9F6] hover:bg-white text-[#5C3A28] rounded-lg border border-[#D5CBC0] transition-all cursor-pointer shadow-2xs shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-emerald-800 font-medium pl-1 animate-fadeIn">
                  ✓ Email copied to clipboard.
                </p>
              )}
            </div>

            {/* Quick Status / Response SLA */}
            <div className="space-y-3 pt-4 border-t border-[#DFD7CB]">
              <div className="flex items-center gap-3 text-xs text-[#57534E]">
                <Clock className="w-4 h-4 text-[#7C4A32]" />
                <span>Response window: typically within 24 business hours</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#57534E]">
                <Globe className="w-4 h-4 text-[#7C4A32]" />
                <span>Based in {PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Channels: Holding Telegram, LinkedIn, Instagram, GitHub */}
            <div className="space-y-3 pt-4 border-t border-[#DFD7CB]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] block">
                Social Profiles &amp; Accounts
              </span>
              <div className="flex flex-col space-y-2">
                {PERSONAL_INFO.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-2 text-sm text-[#44403C] hover:text-[#5C3A28] transition-colors"
                  >
                    <span className="font-medium">{social.name}</span>
                    <span className="flex items-center gap-1 text-xs text-[#78716C] group-hover:text-[#5C3A28]">
                      <span>{social.handle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form without Inquiry Scope */}
          <div className="lg:col-span-7 bg-[#FAF9F6] p-8 sm:p-10 rounded-2xl border border-[#DFD6CA] shadow-xs">
            <h3 className="font-display text-2xl font-bold text-[#1C1917] mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-[#78716C] mb-6">
              Fill out the details below and I'll review your message promptly.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#EDE5DB] border border-[#C8BCAD] rounded-xl text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#5C3A28] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#1C1917]">
                  Message Dispatched Successfully
                </h4>
                <p className="text-sm text-[#57534E] max-w-md mx-auto">
                  Thank you for reaching out. A confirmation has been registered, and I will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3 text-xs text-rose-800 bg-rose-50 border border-rose-200 rounded-md">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#57534E]">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jordan Vance"
                      className="w-full px-4 py-2.5 bg-white border border-[#D5CDC1] rounded-lg text-sm text-[#1C1917] placeholder:text-[#A89F95] focus:outline-hidden focus:border-[#5C3A28] focus:ring-1 focus:ring-[#5C3A28] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#57534E]">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jordan@example.com"
                      className="w-full px-4 py-2.5 bg-white border border-[#D5CDC1] rounded-lg text-sm text-[#1C1917] placeholder:text-[#A89F95] focus:outline-hidden focus:border-[#5C3A28] focus:ring-1 focus:ring-[#5C3A28] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#57534E]">
                    Message Details *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product vision, timeline, and current team..."
                    className="w-full px-4 py-2.5 bg-white border border-[#D5CDC1] rounded-lg text-sm text-[#1C1917] placeholder:text-[#A89F95] focus:outline-hidden focus:border-[#5C3A28] focus:ring-1 focus:ring-[#5C3A28] transition-all resize-y"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#8C7A6D]">
                    * All transmissions are direct and confidential.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#5C3A28] hover:bg-[#472B1E] disabled:bg-[#8C7265] rounded-md transition-colors shadow-xs cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
