/*
 * Contact — LEXORA DOC
 * واتساب + إيميل + التواصل مع الإدارة العامة
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const WHATSAPP_URL = "https://wa.me/9647844342200";
const EMAIL_ADDRESS = "info@lexoradoc.com";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Contact() {
  useEffect(() => {
    document.title = "تواصل معنا - Lexora Doc | واتساب وبريد إلكتروني";
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      toast.error("يرجى ملء الاسم والرسالة");
      return;
    }
    const msg = encodeURIComponent(
      "مرحباً، اسمي " + formData.name + "\n\n" + formData.message + (formData.email ? "\n\nبريدي: " + formData.email : "")
    );
    window.open(WHATSAPP_URL, "_blank");
    toast.success("جاري فتح واتساب...", { description: "سيتم توجيهك إلى واتساب لإرسال رسالتك" });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      toast.error("يرجى ملء الاسم والرسالة");
      return;
    }
    const subject = encodeURIComponent("رسالة من " + formData.name + " — Lexora Doc");
    const body = encodeURIComponent(
      "الاسم: " + formData.name + "\n" +
      (formData.email ? "البريد الإلكتروني: " + formData.email + "\n" : "") +
      "\nالرسالة:\n" + formData.message
    );
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    toast.success("جاري فتح تطبيق البريد...", { description: "سيتم توجيهك إلى تطبيق البريد الإلكتروني لإرسال رسالتك" });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div dir="rtl">
      <section className="relative py-28 bg-gradient-to-br from-[#2D2F8F] to-[#1a1c5e]">
        <div className="container relative z-10 pt-8">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/20 border border-[#B8972A]/30 mb-5">
                <MessageCircle className="w-3.5 h-3.5 text-[#B8972A]" />
                <span className="text-[#B8972A] text-xs font-semibold">تواصل معنا</span>
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white mb-4">
              نحن هنا لمساعدتك
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-white/70 text-lg">
              تواصل معنا عبر واتساب أو البريد الإلكتروني للحصول على استجابة سريعة واحترافية.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT COLUMN — Contact Methods */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {/* WhatsApp Card */}
              <motion.div variants={fadeUp} custom={0} className="mb-4">
                <div className="p-6 rounded-2xl bg-[#25D366]/5 border-2 border-[#25D366]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">واتساب — الأسرع والأسهل</h3>
                      <p className="text-gray-500 text-sm">استجابة فورية خلال دقائق</p>
                    </div>
                    <span className="mr-auto px-2 py-0.5 rounded-full bg-[#25D366]/15 text-[#25D366] text-xs font-semibold">مُوصى به</span>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all no-underline"
                  >
                    <MessageCircle className="w-5 h-5" />
                    ابدأ محادثة الآن
                  </a>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div variants={fadeUp} custom={1} className="mb-4">
                <div className="p-6 rounded-2xl bg-blue-50/50 border-2 border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">البريد الإلكتروني</h3>
                      <p className="text-gray-500 text-sm">نرد خلال 24 ساعة كحد أقصى</p>
                    </div>
                  </div>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#2D2F8F] text-white font-bold hover:bg-[#232570] transition-all no-underline"
                  >
                    <Mail className="w-5 h-5" />
                    أرسل بريد إلكتروني
                  </a>
                </div>
              </motion.div>


              {/* Other Contact Methods */}
              <motion.div variants={fadeUp} custom={3} className="space-y-4 mb-8">
                <h3 className="font-bold text-gray-900 text-lg">معلومات التواصل</h3>
                {[
                  { icon: Mail, title: "البريد الإلكتروني", value: EMAIL_ADDRESS, href: `mailto:${EMAIL_ADDRESS}`, color: "bg-blue-50 text-blue-600" },
                  { icon: Phone, title: "الهاتف", value: "07844342200", href: "tel:07844342200", color: "bg-[#2D2F8F]/8 text-[#2D2F8F]" },
                  { icon: MapPin, title: "الموقع", value: "بغداد، العراق", href: null, color: "bg-[#B8972A]/10 text-[#B8972A]" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#2D2F8F]/20 transition-all">
                    <div className={"w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 " + item.color}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-gray-900 hover:text-[#2D2F8F] transition-colors no-underline">{item.value}</a>
                      ) : (
                        <p className="font-semibold text-gray-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Working Hours */}
              <motion.div variants={fadeUp} custom={4} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#2D2F8F]" />
                  <span className="font-semibold text-gray-900 text-sm">أوقات العمل</span>
                </div>
                <div className="space-y-1.5 text-sm text-gray-500">
                  <div className="flex justify-between">
                    <span>الأحد — الخميس</span>
                    <span className="font-medium text-gray-700">9:00 ص — 5:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة — السبت</span>
                    <span className="font-medium text-gray-700">مغلق</span>
                  </div>
                  <div className="flex justify-between">
                    <span>واتساب</span>
                    <span className="font-medium text-[#25D366]">24/7 متاح</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN — Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">أرسل رسالة</h2>
                <p className="text-gray-500 text-sm mb-6">اختر طريقة الإرسال المفضلة لديك — واتساب أو البريد الإلكتروني</p>
                <form onSubmit={handleWhatsApp} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium text-sm mb-1.5 block">الاسم الكامل</Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="أدخل اسمك" required className="border-gray-200 focus:border-[#2D2F8F]" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium text-sm mb-1.5 block">البريد الإلكتروني <span className="text-gray-400 font-normal">(اختياري)</span></Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="example@email.com" className="border-gray-200 focus:border-[#2D2F8F]" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium text-sm mb-1.5 block">رسالتك</Label>
                    <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="اكتب رسالتك أو استفسارك هنا..." rows={5} required className="border-gray-200 focus:border-[#2D2F8F] resize-none" />
                  </div>

                  {/* Two Send Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button type="submit" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      إرسال عبر واتساب
                    </Button>
                    <Button type="button" onClick={handleEmail} className="bg-[#2D2F8F] hover:bg-[#232570] text-white font-bold py-3 rounded-xl">
                      <Mail className="w-4 h-4 ml-2" />
                      إرسال عبر الإيميل
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
