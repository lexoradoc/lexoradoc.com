/*
 * Navbar — LEXORA DOC
 * كحلي (#2D2F8F) + ذهبي (#B8972A)
 * "ابدأ طلبك" = Primary CTA → يفتح نموذج الطلب
 * واتساب = ثانوي (أيقونة فقط)
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceRequestModal from "@/components/ServiceRequestModal";

const WHATSAPP_URL = "https://wa.me/9647844342200";

const darkHeroPages = ["/"];

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/pricing", label: "الأسعار" },
  { href: "/about", label: "من نحن" },
  { href: "/blog", label: "المدونة" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const isDarkHero = darkHeroPages.includes(location);
  const showLight = isDarkHero && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[#2D2F8F]/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 no-underline">
              <img
                src="/media/logo.jpg"
                alt="Lexora Doc"
                className="h-[3.125rem] w-auto object-contain"
                style={{ imageRendering: 'auto' }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                    location === link.href
                      ? showLight
                        ? "text-white bg-white/15"
                        : "text-[#2D2F8F] bg-[#2D2F8F]/8 font-semibold"
                      : showLight
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:text-[#2D2F8F] hover:bg-[#2D2F8F]/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* واتساب - ثانوي (أيقونة فقط) */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-9 h-9 rounded-lg transition-all no-underline ${
                  showLight
                    ? "bg-white/15 text-white hover:bg-white/25"
                    : "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"
                }`}
                title="تواصل عبر واتساب"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              {/* ابدأ طلبك - Primary CTA */}
              <Button
                className="text-sm font-semibold bg-[#2D2F8F] hover:bg-[#232570] text-white gap-2"
                onClick={() => setShowRequestModal(true)}
              >
                <FileText className="w-4 h-4" />
                ابدأ طلبك
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                showLight ? "hover:bg-white/10" : "hover:bg-[#2D2F8F]/5"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${showLight ? "text-white" : "text-[#2D2F8F]"}`} />
              ) : (
                <Menu className={`w-5 h-5 ${showLight ? "text-white" : "text-[#2D2F8F]"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#2D2F8F]/10"
            >
              <div className="container py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline ${
                      location === link.href
                        ? "text-[#2D2F8F] bg-[#2D2F8F]/8 font-semibold"
                        : "text-gray-600 hover:text-[#2D2F8F] hover:bg-[#2D2F8F]/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 flex flex-col gap-2 px-4">
                  {/* ابدأ طلبك - Primary في الموبايل */}
                  <Button
                    className="w-full bg-[#2D2F8F] hover:bg-[#232570] text-white font-semibold gap-2"
                    onClick={() => {
                      setMobileOpen(false);
                      setShowRequestModal(true);
                    }}
                  >
                    <FileText className="w-4 h-4" />
                    ابدأ طلبك الآن
                  </Button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-[#25D366] text-[#25D366] text-sm font-semibold no-underline hover:bg-[#25D366]/5 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    تواصل عبر واتساب
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Service Request Modal */}
      <ServiceRequestModal
        open={showRequestModal}
        onClose={() => setShowRequestModal(false)}
      />
    </>
  );
}
