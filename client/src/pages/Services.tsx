/*
 * LEXORA DOC — صفحة الخدمات
 * تجميع جميع الخدمات تحت "خدماتنا"
 * موجّه للبيع والتحويل عبر واتساب
 */
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Landmark,
  Building2,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const WHATSAPP_URL = "https://wa.me/9647844342200";
const SERVICES_BG = "/media/og-image.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const services = [
  {
    icon: ShieldCheck,
    title: "خدمات ASYCUDA الجمركية",
    image: "/media/og-image.png",
    description:
      "تنظيم البيانات والمستندات اللازمة للبيان المسبق أو النهائي، وفق حالة الملف ونطاق الخدمة المطلوب.",
    features: [
      "إعداد البيان الجمركي المسبق والنهائي",
      "مراجعة أولية لملف الاستيراد",
      "تحديد المستندات المتاحة والناقصة",
      "توضيح الخطوة التالية للملف",
    ],
  },
  {
    icon: FileText,
    title: "مراجعة الوثائق وتدقيق HS Code",
    image: "/media/og-image.png",
    description:
      "فحص الفاتورة وبوليصة الشحن وشهادة المنشأ والمعلومات ذات الصلة، مع مراجعة أولية لتصنيف البضاعة.",
    features: [
      "مراجعة الوثائق المتاحة",
      "تدقيق أولي لـ HS Code",
      "مطابقة المعلومات الأساسية",
      "إبراز النواقص للمراجعة",
    ],
  },
  {
    icon: Landmark,
    title: "الامتثال لتعليمات البنك المركزي",
    image: "/media/og-image.png",
    description:
      "تنظيم المستندات المتعلقة بالاستيراد والتحويل ضمن الملف، مع مراعاة التعليمات والمتطلبات ذات الصلة.",
    features: [
      "مراجعة متطلبات التحويل المصرفي",
      "تدقيق الفواتير التجارية",
      "مطابقة المستندات والبيانات",
      "تنظيم الملفات للتقديم",
    ],
  },
  {
    icon: Building2,
    title: "خدمات الشركات والمستوردين",
    image: "/media/og-image.png",
    description:
      "تنظيم مستندات وملخصات للملفات المتكررة أو المتعددة بما يساعد فريقك على متابعة كل حالة بصورة أوضح.",
    features: [
      "إدارة ملفات الاستيراد المتعددة",
      "متابعة إجراءات التخليص",
      "تقارير دورية عن الملفات",
      "دعم متخصص مستمر",
    ],
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "خدمات ASYCUDA وإدارة ملفات الاستيراد | Lexora Doc";
  }, []);

  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#2D2F8F]/5 to-white">
        <div className="container relative z-10 pt-8">
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold text-[#2D2F8F] tracking-wider uppercase mb-3 block"
            >
              خدماتنا
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              خدمات <span className="text-[#2D2F8F]">ASYCUDA</span> وإدارة ملفات الاستيراد
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-gray-500 leading-relaxed mb-8"
            >
              إعداد ومراجعة منظمة للوثائق والبيانات، مع توضيح الخطوة التالية وفق حالة الملف ومتطلبات الخدمة.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all shadow-md no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                ابدأ الآن
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CBI TRUST BAR */}
      <section className="py-5 bg-gradient-to-r from-[#f8f6f0] via-[#faf8f2] to-[#f8f6f0] border-y border-[#B8972A]/15">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#B8972A]" />
              <span className="text-[#2D2F8F] text-sm font-bold">مع مراعاة المتطلبات ذات الصلة</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#B8972A]/20" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2D2F8F]" />
              <span className="text-[#2D2F8F] text-sm font-bold">مراجعة منظمة لبيانات ASYCUDA</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#B8972A]/20" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-[#2D2F8F] text-sm font-bold">لا تمثل Lexora Doc جهة حكومية</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#2D2F8F]/20 transition-all duration-300"
              >
                {/* صورة الخدمة */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c6e]/60 to-transparent" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-all no-underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  اطلب الخدمة
                </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-gray-900 mb-4">
              كيف يساعدك المسار المنظم؟
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-gray-600">
              يبدأ كل طلب بملخص واضح للحالة والمستندات المتاحة والإجراء التالي.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "نقطة بداية واضحة",
                description: "تبدأ من نوع البضاعة والمنفذ وحالة الملف.",
              },
              {
                icon: ShieldCheck,
                title: "مراجعة منظمة",
                description: "تُرتب الوثائق والمعلومات ضمن نطاق الخدمة.",
              },
              {
                icon: MessageCircle,
                title: "خطوة تالية محددة",
                description: "تنتقل إلى التواصل برسالة طلب مرتبة.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#2D2F8F]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#2D2F8F]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D2F8F] to-[#1a1c5e]">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-white mb-4">
              هل أنت مستعد للبدء؟
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-white/70 max-w-lg mx-auto mb-8">
              تواصل معنا عبر واتساب وسيساعدك فريقنا في اختيار الخدمة المناسبة لاحتياجاتك
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all shadow-lg no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا عبر واتساب
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
