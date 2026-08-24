import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/9647844342200";

const footerLinks = [
  { href: "/services", label: "الخدمات" },
  { href: "/pricing", label: "الأسعار" },
  { href: "/about", label: "من نحن" },
  { href: "/blog", label: "المدونة" },
  { href: "/contact", label: "تواصل معنا" },
  { href: "/terms", label: "الشروط والأحكام" },
  { href: "/privacy", label: "سياسة الخصوصية" },
];

export default function Footer() {
  return (
    <footer className="bg-[#101B52] text-white" dir="rtl">
      <div className="container py-14">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-sm font-bold text-[#E5C96C]">LEXORA DOC</p>
            <h2 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight md:text-3xl">من الوثيقة إلى بيان ASYCUDA</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              إعداد وتنظيم ومراجعة لملفات الاستيراد والمستندات التجارية، مع توضيح الخطوة التالية بحسب حالة الملف.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/service-request" className="inline-flex items-center justify-center gap-2 bg-[#C4A137] px-5 py-3 text-sm font-bold text-[#101B52] no-underline hover:bg-[#D7B64D]">
                <MessageCircle className="h-4 w-4" />
                ابدأ طلباً منظماً
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/25 px-5 py-3 text-sm font-bold text-white no-underline hover:bg-white/10">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-[#E5C96C]">روابط سريعة</p>
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-300 no-underline transition-colors hover:text-[#E5C96C]">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 py-9 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-[#E5C96C]">التواصل</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-4 text-sm text-slate-300">
              <a href="mailto:info@aaa-iq.com" className="inline-flex items-center gap-2 no-underline hover:text-[#E5C96C]"><Mail className="h-4 w-4" />info@aaa-iq.com</a>
              <a href="mailto:info@lexoradoc.com" className="inline-flex items-center gap-2 no-underline hover:text-[#E5C96C]"><Mail className="h-4 w-4" />info@lexoradoc.com</a>
              <a href="tel:07844342200" className="inline-flex items-center gap-2 no-underline hover:text-[#E5C96C]"><Phone className="h-4 w-4" />07844342200</a>
            </div>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <a href="https://linkedin.com/lexoradoc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-[#E5C96C]"><Linkedin className="h-5 w-5" /></a>
            <a href="https://www.instagram.com/lexoradoc?igsh=bThvbHFjNjF3aDBp" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-300 hover:text-[#E5C96C]"><Instagram className="h-5 w-5" /></a>
            <a href="https://www.facebook.com/share/1Aywk7SYHX/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-300 hover:text-[#E5C96C]"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs text-slate-400 md:flex-row">
          <span>© {new Date().getFullYear()} Lexora Doc. جميع الحقوق محفوظة.</span>
          <span>Lexora Doc لا تمثل جهة حكومية ولا تصدر اعتماداً رسمياً.</span>
        </div>
      </div>
    </footer>
  );
}
