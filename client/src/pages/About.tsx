/*
 * LEXORA DOC — صفحة من نحن
 * ASYCUDA محورياً
 * ألوان كحلي (#2D2F8F) وذهبي (#B8972A)
 */
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Shield,
  ArrowLeft,
  Building2,
  Users,
  FileCheck,
  MessageCircle,
  Award,
  CheckCircle2,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

const ABOUT_BG = "/media/og-image.png";
const WHATSAPP_URL = "https://wa.me/9647844342200";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { icon: FileCheck, value: "01", label: "فهم حالة الملف" },
  { icon: Users, value: "02", label: "تنظيم الوثائق" },
  { icon: Building2, value: "03", label: "تحديد الخطوة التالية" },
];

const values = [
  {
    icon: Shield,
    title: "الدقة والامتثال",
    text: "نرتب المعلومات والمستندات ضمن نطاق الخدمة ونوضح العناصر التي تحتاج إلى مراجعة قبل المتابعة.",
  },
  {
    icon: Award,
    title: "الاحترافية",
    text: "نستخدم لغة عملية وواضحة تركز على المستندات والبيانات والخطوات القابلة للتنفيذ.",
  },
  {
    icon: CheckCircle2,
    title: "الشفافية",
    text: "نوضح بدايةً ما نستطيع تقديمه ضمن الملف، وما يبقى خاضعاً لقرارات الجهات المختصة.",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "من نحن | Lexora Doc";
  }, []);

  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_BG} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        </div>
        <div className="container relative z-10 pt-8">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold text-[#2D2F8F] tracking-wider uppercase mb-3 block"
            >
              من نحن
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              متخصصون في خدمات{" "}
              <span className="text-[#2D2F8F]">ASYCUDA</span>{" "}
              والوثائق الجمركية
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-gray-500 leading-relaxed"
            >
              Lexora Doc تقدم خدمات إعداد وتنظيم ومراجعة للوثائق وملفات الاستيراد،
              مع التركيز على بيانات ASYCUDA والخطوات الوثائقية ذات الصلة.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CBI TRUST BAR */}
      <section className="py-5 bg-gradient-to-r from-[#f8f6f0] via-[#faf8f2] to-[#f8f6f0] border-y border-[#B8972A]/15">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#B8972A]" />
              <span className="text-[#2D2F8F] text-sm font-bold">مستندات منظمة وفق حالة الملف</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#B8972A]/20" />
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#2D2F8F]" />
              <span className="text-[#2D2F8F] text-sm font-bold">مسار واضح لبيانات ASYCUDA</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#B8972A]/20" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-[#2D2F8F] text-sm font-bold">Lexora Doc ليست جهة حكومية</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="container">
          {/* Logo with Drop Shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-14"
          >
            <img
              src="/media/logo.jpg"
              alt="Lexora Doc"
              className="h-24 md:h-28 w-auto object-contain"
              style={{
                filter: 'drop-shadow(0 8px 24px rgba(45, 47, 143, 0.12)) drop-shadow(0 2px 8px rgba(45, 47, 143, 0.08))',
                imageRendering: 'auto',
              }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-gray-600 leading-loose text-lg"
              >
                تأسست Lexora Doc بهدف تقديم خدمات متخصصة في مجال الوثائق الجمركية
                وإعداد ملفات الاستيراد. نركز على مساعدة الشركات والمستوردين في
                العراق على الامتثال لمتطلبات نظام ASYCUDA World.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-gray-600 leading-loose text-lg mt-6"
              >
                تعتمد خدماتنا على فريق من الخبراء المتخصصين في إعداد البيانات
                الجمركية المسبقة، مراجعة ملفات الاستيراد، والتأكد من مطابقتها
                لتعليمات البنك المركزي العراقي والمتطلبات التنظيمية ذات العلاقة.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-gray-600 leading-loose text-lg mt-6"
              >
                نؤمن بأن الملف الجمركي المُعدّ بشكل صحيح يوفر الوقت والجهد،
                ويحمي الشركات من التأخيرات والرفض في إجراءات التخليص الجمركي.
              </motion.p>
            </motion.div>
            <div className="space-y-6">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#2D2F8F]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "رسالتنا",
                text: "تمكين الشركات والمستوردين من إدارة ملفاتهم الجمركية بكفاءة واحترافية عالية عبر نظام ASYCUDA.",
                color: "text-[#2D2F8F]",
                bg: "bg-[#2D2F8F]/10",
              },
              {
                icon: Eye,
                title: "رؤيتنا",
                text: "أن نكون المرجع الأول في إعداد الوثائق الجمركية والامتثال لمتطلبات ASYCUDA في العراق.",
                color: "text-[#B8972A]",
                bg: "bg-[#B8972A]/10",
              },
              {
                icon: Shield,
                title: "قيمنا",
                text: "الدقة والاحترافية والشفافية في جميع خدماتنا، مع الالتزام بأعلى معايير الجودة.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-5`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-[#2D2F8F] to-[#1a1c5e]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#B8972A]" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              هل أنت مستعد للبدء؟
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-8">
              تواصل معنا اليوم واكتشف كيف يمكن لـ Lexora Doc مساعدتك في إعداد ملفاتك الجمركية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all shadow-md no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا عبر واتساب
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2D2F8F]/30 text-[#2D2F8F] hover:bg-[#2D2F8F]/5 font-semibold px-8 h-12 text-sm"
                onClick={() => window.location.href = '/contact'}
              >
                صفحة التواصل
                <ArrowLeft className="w-4 h-4 ms-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
