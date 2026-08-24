/*
 * LEXORA DOC — الصفحة الرئيسية
 * ASYCUDA محورياً
 * كحلي (#2D2F8F) + ذهبي (#B8972A)
 * موجّه للبيع والتحويل - نموذج الطلب هو الـ Primary CTA
 */
import { Button } from "@/components/ui/button";
import {
  FileText,
  CheckCircle2,
  ArrowLeft,
  MessageCircle,
  Shield,
  Clock,
  Users,
  Star,
  ChevronDown,
  Zap,
  Award,
  Phone,
  Landmark,
  ClipboardCheck,
  Send,
  FileSearch,
  PackageCheck,
  Factory,
  HardHat,
  ShoppingBasket,
  Cpu,
  Car,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Testimonials from "@/components/Testimonials";
import ServiceRequestModal from "@/components/ServiceRequestModal";
import { mediaUrl } from "@/lib/media";

const WHATSAPP_URL = "https://wa.me/9647844342200";
const HERO_BG = mediaUrl("hero.webp");

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const asycudaServices = [
  {
    icon: Shield,
    title: "خدمات ASYCUDA الجمركية",
    description: "إعداد البيان الجمركي المسبق والنهائي، مراجعة ملفات الاستيراد، والامتثال الكامل لمتطلبات نظام ASYCUDA World.",
  },
  {
    icon: FileText,
    title: "مراجعة الوثائق وتدقيق HS Code",
    description: "مراجعة دقيقة لجميع الوثائق المرفقة بملف الاستيراد وتدقيق تصنيف HS Code للبضائع.",
  },
  {
    icon: Landmark,
    title: "الامتثال لتعليمات البنك المركزي",
    description: "تنظيم ملفات التحويل المصرفي والاستيراد وفق التعليمات الصادرة عن البنك المركزي العراقي.",
  },
  {
    icon: Award,
    title: "خدمات الشركات والمستوردين",
    description: "حلول متكاملة للشركات الكبرى والمستوردين في إدارة ملفات الاستيراد بكفاءة عالية.",
  },
];

const stats = [
  { value: "+500", label: "ملف معالج" },
  { value: "+200", label: "عميل راضٍ" },
  { value: "98%", label: "نسبة النجاح" },
  { value: "24h", label: "وقت الاستجابة" },
];

const workflowSteps = [
  {
    step: "01",
    icon: Send,
    title: "استلام الملف",
    description: "أرسل مستنداتك عبر واتساب أو نموذج الطلب",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "التدقيق والمراجعة",
    description: "فريقنا يراجع كل مستند بدقة ويحدد الأخطاء والنواقص",
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    step: "03",
    icon: ClipboardCheck,
    title: "التقديم الرسمي",
    description: "نُعدّ البيان الجمركي ونقدمه عبر نظام ASYCUDA World",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    step: "04",
    icon: PackageCheck,
    title: "القبول والتسليم",
    description: "تسليم الملف جاهزاً ومعتمداً مع متابعة حتى الإفراج",
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
];

const trustedSectors = [
  { icon: Factory, label: "شركات صناعية", color: "#2D2F8F", bg: "bg-blue-50" },
  { icon: HardHat, label: "شركات مقاولات", color: "#1a6b3c", bg: "bg-emerald-50" },
  { icon: ShoppingBasket, label: "مواد غذائية", color: "#B8972A", bg: "bg-amber-50" },
  { icon: Cpu, label: "أجهزة كهربائية", color: "#7c3aed", bg: "bg-purple-50" },
  { icon: Car, label: "قطع غيار", color: "#dc2626", bg: "bg-red-50" },
  { icon: Stethoscope, label: "أدوية وطب", color: "#0891b2", bg: "bg-cyan-50" },
];

const faqs = [
  {
    question: "ما هو نظام ASYCUDA؟",
    answer: "ASYCUDA (Automated System for Customs Data) هو نظام آلي لبيانات الجمارك تستخدمه هيئة الجمارك العراقية لمعالجة البيانات الجمركية وتسهيل التجارة الدولية.",
  },
  {
    question: "كيف يمكنني البدء بطلب الخدمة؟",
    answer: "يمكنك النقر على زر 'ابدأ طلبك' وملء النموذج البسيط، أو التواصل معنا مباشرة عبر واتساب. سيتواصل معك فريقنا خلال 24 ساعة.",
  },
  {
    question: "ما هي المستندات المطلوبة؟",
    answer: "تشمل المستندات الأساسية: الفاتورة التجارية، بوليصة الشحن، شهادة المنشأ، وأي مستندات خاصة بطبيعة البضاعة. سيرشدك فريقنا بحسب كل حالة.",
  },
  {
    question: "كم يستغرق إعداد الملف؟",
    answer: "يتراوح وقت الإعداد بين 24-48 ساعة حسب تعقيد الملف واكتمال المستندات المقدمة.",
  },
];

function FAQItem({ item }: { item: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${open ? "border-[#2D2F8F]/30 shadow-sm" : "border-gray-200 hover:border-[#2D2F8F]/20"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-start bg-transparent"
      >
        <span className={`font-semibold text-sm transition-colors ${open ? "text-[#2D2F8F]" : "text-gray-800"}`}>{item.question}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ms-3 ${open ? "rotate-180 text-[#2D2F8F]" : "text-gray-400"}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [showRequestModal, setShowRequestModal] = useState(false);

  useEffect(() => {
    document.title = "ASYCUDA العراق | تخليص جمركي";
  }, []);

  return (
    <div dir="rtl">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Lexora Doc - مراجعة وتقديم ملفات الاستيراد في العراق" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1a1c5e]/95 via-[#2D2F8F]/85 to-[#1a1c5e]/70" />
        </div>

        {/* Logo Watermark */}
        <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none overflow-hidden">
          <img
            src={mediaUrl("logo.jpg")}
            alt="لوجو Lexora Doc - خدمات التخليص الجمركي"
            className="w-[500px] h-auto opacity-[0.05] select-none"
            style={{ filter: 'brightness(2) grayscale(0.3)' }}
          />
        </div>

        <div className="container relative z-10 pt-28 pb-24">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/20 border border-[#B8972A]/40 mb-6">
                <Award className="w-3.5 h-3.5 text-[#B8972A]" />
                <span className="text-[#B8972A] text-xs font-semibold">الخبراء في نظام ASYCUDA العراق</span>
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-[#B8972A]">Lexora Doc</span>{" "}
              إدارة ملفات الاستيراد{" "}
              والامتثال التجاري
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-lg text-white/75 leading-relaxed mb-8 max-w-2xl">
              نُعدّ ملفات الاستيراد والبيانات الجمركية بدقة احترافية وفق متطلبات نظام ASYCUDA وتعليمات البنك المركزي العراقي. سرعة وضمان وامتثال كامل.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA - ابدأ طلبك */}
              <Button
                onClick={() => setShowRequestModal(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#B8972A] text-white font-bold text-base hover:bg-[#a6861f] transition-all shadow-lg h-auto"
              >
                <FileText className="w-5 h-5" />
                ابدأ طلبك الآن
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold text-base hover:bg-white/20 transition-all no-underline"
              >
                تعرف على خدماتنا
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="container py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-[#B8972A]">{stat.value}</div>
                  <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CBI TRUST BAR ===== */}
      <section className="py-6 bg-gradient-to-r from-[#f8f6f0] via-[#faf8f2] to-[#f8f6f0] border-y border-[#B8972A]/15">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4"
          >
            <div className="flex flex-row items-center gap-3 md:items-start">
              <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-[#B8972A]/15 flex items-center justify-center flex-shrink-0">
                <Landmark className="w-5 h-5 text-[#B8972A]" />
              </div>
              <div className="text-start">
                <p className="text-[#2D2F8F] font-bold text-sm">وفق تعليمات البنك المركزي العراقي</p>
                <p className="text-gray-500 text-xs mt-0.5">جميع الملفات تُعدّ وفق الضوابط والتعليمات الصادرة عن البنك المركزي العراقي</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 md:items-start">
              <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-[#2D2F8F]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[#2D2F8F]" />
              </div>
              <div className="text-start">
                <p className="text-[#2D2F8F] font-bold text-sm">امتثال كامل لنظام ASYCUDA World</p>
                <p className="text-gray-500 text-xs mt-0.5">إعداد البيانات الجمركية بما يتوافق مع متطلبات الهيئة العامة للجمارك</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 md:items-start">
              <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-start">
                <p className="text-[#2D2F8F] font-bold text-sm">مراجعة دقيقة لكل مستند</p>
                <p className="text-gray-500 text-xs mt-0.5">فحص شامل للفاتورة وبوليصة الشحن وشهادة المنشأ</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CLIENTS LOGOS BAR ===== */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
              قطاعات نخدمها في العراق
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { name: "شركات صناعية", Icon: Factory, color: "#2D2F8F", bg: "bg-blue-50" },
                { name: "شركات مقاولات", Icon: HardHat, color: "#1a6b3c", bg: "bg-emerald-50" },
                { name: "مواد غذائية", Icon: ShoppingBasket, color: "#B8972A", bg: "bg-amber-50" },
                { name: "أجهزة كهربائية", Icon: Cpu, color: "#7c3aed", bg: "bg-purple-50" },
                { name: "قطع غيار", Icon: Car, color: "#dc2626", bg: "bg-red-50" },
                { name: "أدوية وطب", Icon: Stethoscope, color: "#0891b2", bg: "bg-cyan-50" },
              ].map((sector, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#2D2F8F]/20 hover:bg-[#2D2F8F]/5 transition-all group"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${sector.bg}`}
                  >
                    <sector.Icon className="w-6 h-6" style={{ color: sector.color }} />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 text-center group-hover:text-[#2D2F8F] transition-colors">{sector.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== WORKFLOW INFOGRAPHIC ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D2F8F]/8 border border-[#2D2F8F]/15 mb-4">
                <ClipboardCheck className="w-3.5 h-3.5 text-[#2D2F8F]" />
                <span className="text-[#2D2F8F] text-xs font-semibold">كيف نعمل</span>
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خطوات العمل
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-gray-500 max-w-2xl mx-auto">
              من استلام الملف إلى القبول النهائي — عملية واضحة ومنظمة
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative text-center"
              >
                {/* Connector Line (hidden on mobile) */}
                {i < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -left-3 w-6 h-0.5 bg-gray-200" />
                )}
                <div className={`w-20 h-20 rounded-2xl ${step.color} border-2 flex items-center justify-center mx-auto mb-4 relative`}>
                  <step.icon className="w-8 h-8" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#2D2F8F] text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ASYCUDA SERVICES ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D2F8F]/8 border border-[#2D2F8F]/15 mb-4">
                <Zap className="w-3.5 h-3.5 text-[#2D2F8F]" />
                <span className="text-[#2D2F8F] text-xs font-semibold">خدماتنا المتخصصة</span>
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              كل ما تحتاجه لملف{" "}
              <span className="text-[#2D2F8F]">ASYCUDA</span> مكتمل
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-gray-500 max-w-2xl mx-auto">
              نقدم خدمة شاملة من إعداد البيانات الجمركية إلى مراجعة ملفات الاستيراد والامتثال للمعايير الدولية.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {asycudaServices.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2D2F8F]/20 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2D2F8F]/8 flex items-center justify-center mb-4 group-hover:bg-[#2D2F8F]/15 transition-colors">
                  <service.icon className="w-6 h-6 text-[#2D2F8F]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#2D2F8F] text-white font-semibold hover:bg-[#232570] transition-all no-underline"
            >
              عرض جميع الخدمات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VISUAL SECTION - SHIPPING ===== */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={mediaUrl("port.webp")}
          alt="ميناء تجاري دولي - إدارة ملفات الاستيراد والشحن"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c5e]/80 via-[#2D2F8F]/40 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-10 justify-center">
          <div className="text-center text-white">
            <p className="text-lg md:text-2xl font-bold drop-shadow-lg">نُدير ملفات استيرادك من الميناء إلى الجمارك</p>
            <p className="text-white/80 text-sm mt-2">خبرة في التجارة الدولية والامتثال الجمركي العراقي</p>
          </div>
        </div>
      </section>

      {/* ===== TRUSTED SECTORS ===== */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              قطاعات تثق بخدماتنا
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-gray-500 text-sm">
              نخدم مختلف القطاعات التجارية والصناعية في العراق
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {trustedSectors.map((sector, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#2D2F8F]/20 hover:shadow-sm transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${sector.bg} flex items-center justify-center`}>
                  <sector.icon className="w-6 h-6" style={{ color: sector.color }} />
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center">{sector.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-gradient-to-br from-[#2D2F8F] to-[#1a1c5e]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/20 border border-[#B8972A]/30 mb-6">
                  <Phone className="w-3.5 h-3.5 text-[#B8972A]" />
                  <span className="text-[#B8972A] text-xs font-semibold">تواصل معنا الآن</span>
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-white mb-4">
                هل ملفك جاهز للتقديم؟
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-white/70 text-lg mb-8">
                أرسل مستنداتك الآن وسيتولى فريقنا إعداد ملف ASYCUDA الكامل خلال 24-48 ساعة.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setShowRequestModal(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#B8972A] text-white font-bold text-base hover:bg-[#a6861f] transition-all shadow-lg h-auto"
                >
                  <FileText className="w-5 h-5" />
                  ابدأ طلبك الآن
                </Button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all no-underline"
                >
                  <MessageCircle className="w-5 h-5" />
                  أو تواصل عبر واتساب
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/10 border border-[#B8972A]/20 mb-4">
                  <Star className="w-3.5 h-3.5 text-[#B8972A]" />
                  <span className="text-[#B8972A] text-xs font-semibold">لماذا Lexora Doc؟</span>
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                الخبرة والدقة في كل ملف
              </motion.h2>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "امتثال كامل", desc: "نضمن توافق كل مستند مع تعليمات البنك المركزي العراقي ومتطلبات ASYCUDA." },
                  { icon: Clock, title: "سرعة في التسليم", desc: "إعداد الملفات خلال 24-48 ساعة مع متابعة مستمرة حتى إتمام التخليص." },
                  { icon: Users, title: "فريق متخصص", desc: "خبراء متخصصون في الجمارك العراقية ونظام ASYCUDA World." },
                  { icon: CheckCircle2, title: "ضمان الجودة", desc: "مراجعة دقيقة متعددة المراحل لكل ملف قبل التسليم." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i + 2} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2D2F8F]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-[#2D2F8F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={mediaUrl("hero.webp")}
                alt="متخصص يحمل وثيقة امتثال تجاري معتمدة - Lexora Doc"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c5e]/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-white font-bold text-lg mb-1">امتثال كامل ومضمون</p>
                  <p className="text-white/80 text-sm">كل ملف يمر بمراجعة دقيقة قبل التسليم</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-gray-900 mb-3">
              أسئلة شائعة
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-gray-500">
              إجابات على أكثر الأسئلة شيوعاً حول خدمات ASYCUDA
            </motion.p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <FAQItem item={item} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">لديك سؤال آخر؟</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-all no-underline"
            >
              <MessageCircle className="w-4 h-4" />
              اسألنا مباشرة
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Service Request Modal */}
      <ServiceRequestModal
        open={showRequestModal}
        onClose={() => setShowRequestModal(false)}
      />
    </div>
  );
}
