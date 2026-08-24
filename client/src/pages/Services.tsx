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
const SERVICES_BG = "/media/port.webp";

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
    image: "/media/service-asycuda.webp",
    description:
      "إعداد البيان الجمركي المسبق والنهائي، مراجعة ملفات الاستيراد، والتأكد من الامتثال الكامل لمتطلبات نظام ASYCUDA World ومتطلبات البنك المركزي العراقي.",
    features: [
      "إعداد البيان الجمركي المسبق والنهائي",
      "مراجعة شاملة لملفات الاستيراد",
      "الامتثال لمتطلبات البنك المركزي",
      "تسريع إجراءات التخليص الجمركي",
    ],
  },
  {
    icon: FileText,
    title: "مراجعة الوثائق وتدقيق HS Code",
    image: "/media/service-documents.webp",
    description:
      "مراجعة دقيقة لجميع الوثائق المرفقة بملف الاستيراد وتدقيق تصنيف HS Code للبضائع. نتأكد من توافق جميع المستندات مع المتطلبات الجمركية والبنكية.",
    features: [
      "مراجعة شاملة لجميع المستندات",
      "تدقيق تصنيف HS Code الصحيح",
      "التحقق من توافق الفواتير",
      "اكتشاف الأخطاء والنواقص",
    ],
  },
  {
    icon: Landmark,
    title: "الامتثال لتعليمات البنك المركزي",
    image: "/media/service-bank.webp",
    description:
      "تنظيم ملفات التحويل المصرفي والاستيراد وفق التعليمات الصادرة عن البنك المركزي العراقي. نضمن أن جميع مستنداتك مستوفية للمتطلبات التنظيمية الحديثة.",
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
    image: "/media/service-corporate.webp",
    description:
      "حلول متكاملة للشركات الكبرى والمستوردين في إدارة ملفات الاستيراد. نوفر دعماً مستمراً وإدارة احترافية لضمان سير العمليات التجارية بكفاءة عالية.",
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
    document.title = "خدمات ASYCUDA والتخليص الجمركي - Lexora Doc | البنك المركزي العراقي";
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
              حلول شاملة في{" "}
              <span className="text-[#2D2F8F]">ASYCUDA</span>{" "}
              والجمارك
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-gray-500 leading-relaxed mb-8"
            >
              نقدم مجموعة متكاملة من الخدمات المتخصصة في إعداد الوثائق الجمركية، مراجعة ملفات الاستيراد، والامتثال الكامل لمتطلبات البنك المركزي العراقي.
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
              <span className="text-[#2D2F8F] text-sm font-bold">وفق تعليمات البنك المركزي العراقي</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#B8972A]/20" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2D2F8F]" />
              <span className="text-[#2D2F8F] text-sm font-bold">امتثال ASYCUDA World</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#B8972A]/20" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-[#2D2F8F] text-sm font-bold">الهيئة العامة للجمارك</span>
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
              لماذا تختار Lexora Doc؟
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-gray-600">
              نجمع بين الخبرة العميقة والتفاني في تقديم خدمات عالية الجودة
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "سرعة التنفيذ",
                description: "معالجة سريعة وفعالة لملفاتك دون تأخير",
              },
              {
                icon: ShieldCheck,
                title: "الدقة والامتثال",
                description: "التزام كامل بمعايير ASYCUDA والبنك المركزي",
              },
              {
                icon: MessageCircle,
                title: "دعم متخصص",
                description: "فريق خبراء متاح للإجابة على جميع استفساراتك",
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
