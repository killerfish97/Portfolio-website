"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { formatWhatsAppUrl } from "@/lib/utils";
import { SectionBackgroundDecor } from "@/components/effects/SectionBackgroundDecor";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
  };

  const whatsappUrl = formatWhatsAppUrl(SITE_CONFIG.phone, SITE_CONFIG.whatsappMessage);

  return (
    <section id="contact" className="section-padding pb-24 lg:pb-6 relative overflow-hidden">
      <SectionBackgroundDecor variant="contact" />
      <div className="relative z-10">
      <h2 className="section-title">Contact Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-2 space-y-5">
          {[
            { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
            { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}` },
            { icon: MapPin, label: "Location", value: SITE_CONFIG.location, href: "#" },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="group card hover-card p-5 flex items-center gap-4"
            >
              <div className="hover-card-icon w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon size={18} className="text-accent transition-colors duration-300" />
              </div>
              <div>
                <p className="text-xs text-text-muted">{item.label}</p>
                <p className="hover-card-title text-sm font-semibold text-text transition-colors duration-300">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-accent w-full text-center">
            WhatsApp Me
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="group lg:col-span-3 card hover-card p-8 cursor-default"
        >
          {submitted ? (
            <div className="text-center py-12">
              <p className="text-lg font-bold text-text mb-2">Message Ready!</p>
              <p className="text-sm text-text-muted mb-6">Your email client should open shortly.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="btn-outline">
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Name</label>
                  <input type="text" id="name" name="name" required className="input-premium" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="input-premium" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                <textarea id="message" name="message" required rows={5} className="input-premium resize-none" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="btn-accent">
                <Send size={16} />
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
      </div>
    </section>
  );
}
