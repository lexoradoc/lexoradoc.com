/*
 * ASYCUDA Services — الخدمة المحورية الأساسية
 * خدمات ASYCUDA المحورية
 * موجّه للبيع والتحويل عبر واتساب
 */
import {
  FileText,
  CheckCircle2,
  MessageCircle,
  Shield,
  Clock,
  ChevronDown,
  Zap,
  Award,
  ArrowLeft,
  Phone,
  Building2,
  Landmark,
  TrendingUp,
  AlertTriangle,
  ClipboardList,
  Search,
  FolderOpen,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/9647844342200";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/lexora-asycuda-4YciusSe5PcehRrw5RyNET.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const mainServices = [
  { icon: FileText, title: "إعداد البيان الجمركي المسبق", description: "تحضير وصياغة البيان المسبق بدقة عالية وفقاً لمتطلبات نظام ASYCUDA World قبل وصول البضاعة.", badge: "الأكثر طلباً" },
  { icon: ClipboardList, title: "إعداد البيان الجمركي النهائي", description: "إعداد البيان النهائي الكامل بعد وصول البضاعة وفق اشتراطات هيئة الجمارك العراقية.", badge: null },
  { icon: Shield, title: "مراجعة الوثائق التجارية", description: "فحص شامل لجميع مستندات الاستيراد والتأكد من مطابقتها لتعليمات البنك المركزي العراقي.", badge: null },
  { icon: Search, title: "تدقيق HS Code", description: "تصنيف البضاعة بدقة وفق نظام المنسق الدولي (HS Code) لتجنب أخطاء التعريفة الجمركية.", badge: "مهم" },
  { icon: Landmark, title: "الامتثال لمتطلبات البنك المركزي", description: "تنظيم ملفات التحويل المصرفي والاستيراد وفق التعليمات الصادرة عن البنك المركزي العراقي.", badge: null },
  { icon: Building2, title: "خدمات الشركات والمستوردين", description: "حلول متكاملة للشركات الكبرى والمستوردين في إدارة ملفات الاستيراد والتصدير.", badge: null },
];

const complianceItems = [
  { icon: ClipboardList, title: "قائمة التعبئة (Packing List)", desc: "مراجعة دقيقة لقائمة التعبئة والتحقق من تطابقها مع الفاتورة التجارية." },
  { icon: FileText, title: "الفاتورة التجارية", desc: "التحقق من صحة الفاتورة التجارية وتوافقها مع متطلبات ASYCUDA والبنك المركزي." },
  { icon: FolderOpen, title: "بوليصة الشحن", desc: "مراجعة بوليصة الشحن (B/L أو AWB) والتأكد من اكتمال البيانات المطلوبة." },
  { icon: Search, title: "شهادة المنشأ", desc: "التحقق من شهادة المنشأ وتوافقها مع متطلبات الاتفاقيات التجارية المعمول بها." },
  { icon: Shield, title: "وثائق الامتثال الخاصة", desc: "مراجعة أي وثائق خاصة بطبيعة البضاعة كشهادات الصحة والمواصفات." },
  { icon: TrendingUp, title: "تقرير التقييم الجمركي", desc: "إعداد تقرير التقييم الجمركي وفق منهجية ASYCUDA لتحديد القيمة الجمركية." },
];

const workflow = [
  { icon: Send, label: "إرسال المستندات", step: "01", desc: "أرسل مستنداتك عبر واتساب" },
  { icon: Search, label: "مراجعة الملف", step: "02", desc: "يراجع فريقنا الملف خلال ساعات" },
  { icon: FolderOpen, label: "تنظيم الوثائق", step: "03", desc: "تنظيم وترتيب جميع المستندات" },
  { icon: ClipboardList, label: "إعداد البيان", step: "04", desc: "إعداد البيان الجمركي الكامل" },
  { icon: CheckCircle2, label: "تسليم الملف", step: "05", desc: "تسليم الملف جاهزاً للتقديم" },
];

const faqs = [
  { question: "ما الفرق بين ASYCUDA وإجراءات الجمارك التقليدية؟", answer: "ASYCUDA World هو النظام الإلكتروني المعتمد من هيئة الجمارك العراقية لمعالجة البيانات الجمركية. يتطلب إعداد البيانات بصيغة رقمية محددة مع استيفاء جميع الحقول المطلوبة، مما يختلف عن الإجراءات الورقية التقليدية." },
  { question: "ما هي متطلبات البنك المركزي العراقي للاستيراد؟", answer: "يشترط البنك المركزي العراقي توافر مستندات محددة للموافقة على طلبات التحويل المصرفي للاستيراد، تشمل: الفاتورة التجارية، بوليصة الشحن، شهادة المنشأ، وقائمة التعبئة. نتولى مراجعة هذه المستندات وضمان استيفائها للمتطلبات." },
  { question: "كم يستغرق إعداد الملف الكامل؟", answer: "يتراوح وقت إعداد الملف بين 24-48 ساعة من استلام جميع المستندات المطلوبة. في الحالات المستعجلة، يمكننا تقديم خدمة سريعة خلال 12 ساعة." },
  { question: "هل تقدمون خدمة المتابعة بعد تقديم الملف؟", answer: "نعم، نتابع ملفك حتى إتمام إجراءات التخليص الجمركي ونبلغك بأي ملاحظات أو متطلبات إضافية من الجمارك." },
  { question: "ما هي أنواع البضائع التي تتعاملون معها؟", answer: "نتعامل مع جميع أنواع البضائع التجارية المستوردة إلى العراق، بما في ذلك الآلات والمعدات، المواد الغذائية، الأجهزة الإلكترونية، مواد البناء، والبضائع العامة." },
];

function FAQItem({ item }: { item: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${open ? "border-[#2D2F8F]/30 shadow-sm" : "border-gray-200 hover:border-[#2D2F8F]/20"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-start bg-transparent">
        <span className={`font-semibold text-sm transition-colors ${open ? "text-[#2D2F8F]" : "text-gray-800"}`}>{item.question}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ms-3 ${open ? "rotate-180 text-[#2D2F8F]" : "text-gray-400"}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function AsycudaServices() {
  return (
    <div dir="rtl">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1a1c5e]/97 via-[#2D2F8F]/88 to-[#1a1c5e]/75" />
        </div>
        <div className="container relative z-10 pt-28 pb-16">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/20 border border-[#B8972A]/40 mb-6">
                <Award className="w-3.5 h-3.5 text-[#B8972A]" />
                <span className="text-[#B8972A] text-xs font-semibold">الخدمة المحورية — ASYCUDA</span>
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              خدمات <span className="text-[#B8972A]">ASYCUDA</span> الجمركية الشاملة
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-white/75 leading-relaxed mb-8 max-w-2xl">
              من إعداد البيان الجمركي المسبق إلى مراجعة ملفات الاستيراد والامتثال لمتطلبات البنك المركزي العراقي — نغطي كل ما تحتاجه في ملف واحد متكامل.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all shadow-lg no-underline">
                <MessageCircle className="w-5 h-5" />
                ابدأ طلبك عبر واتساب
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold text-base hover:bg-white/20 transition-all no-underline">
                عرض الخدمات
                <ArrowLeft className="w-5 h-5" />
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
              <Shield className="w-5 h-5 text-[#2D2F8F]" />
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

      {/* MAIN SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدماتنا المتخصصة</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-gray-500 max-w-2xl mx-auto">نقدم حلولاً شاملة لجميع احتياجات الاستيراد والتخليص الجمركي عبر نظام ASYCUDA</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="group relative p-6 rounded-2xl border border-gray-100 hover:border-[#2D2F8F]/20 hover:shadow-lg transition-all duration-300 bg-white">
                {service.badge && (
                  <span className={`absolute top-4 left-4 px-2 py-0.5 rounded-full text-xs font-semibold ${service.badge === "الأكثر طلباً" ? "bg-[#2D2F8F]/10 text-[#2D2F8F]" : "bg-[#B8972A]/10 text-[#B8972A]"}`}>{service.badge}</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-[#2D2F8F]/8 flex items-center justify-center mb-4 group-hover:bg-[#2D2F8F]/15 transition-colors">
                  <service.icon className="w-6 h-6 text-[#2D2F8F]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/10 border border-[#B8972A]/20 mb-4">
                <Shield className="w-3.5 h-3.5 text-[#B8972A]" />
                <span className="text-[#B8972A] text-xs font-semibold">الامتثال والمراجعة</span>
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">مراجعة شاملة لجميع المستندات</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-gray-500 max-w-2xl mx-auto">نراجع كل وثيقة في ملفك للتأكد من استيفاء متطلبات نظام ASYCUDA والبنك المركزي العراقي</motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {complianceItems.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100 hover:border-[#B8972A]/20 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#B8972A]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#B8972A]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL BREAK - DOCUMENTS */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/lexora-documents-TNruSwkMsmgXu7G8b4xFsT.webp"
          alt="مراجعة وثائق تجارية وتدقيق HS Code - Lexora Doc"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c5e]/85 via-[#2D2F8F]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-lg">
              <p className="text-[#B8972A] text-sm font-semibold mb-2">تدقيق HS Code ومراجعة الوثائق</p>
              <p className="text-white text-xl md:text-2xl font-bold leading-snug">كل تفصيلة في مستندك تخضع لمراجعة دقيقة</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-gray-900 mb-4">كيف نعمل؟</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-gray-500 max-w-xl mx-auto">عملية بسيطة وسريعة من إرسال المستندات إلى تسليم الملف الجاهز</motion.p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {workflow.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center">
                <div className="relative mx-auto w-16 h-16 rounded-2xl bg-[#2D2F8F]/8 flex items-center justify-center mb-3">
                  <step.icon className="w-7 h-7 text-[#2D2F8F]" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#B8972A] text-white text-xs font-bold flex items-center justify-center">{parseInt(step.step)}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{step.label}</h4>
                <p className="text-gray-400 text-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section className="py-20 bg-gradient-to-br from-[#2D2F8F] to-[#1a1c5e]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/20 border border-[#B8972A]/30 mb-5">
                  <Phone className="w-3.5 h-3.5 text-[#B8972A]" />
                  <span className="text-[#B8972A] text-xs font-semibold">ابدأ الآن</span>
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-white mb-4">جاهز لتقديم ملفك؟</motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-white/70 text-lg mb-6">تواصل معنا عبر واتساب وأرسل مستنداتك. سيتولى فريقنا إعداد الملف الكامل خلال 24-48 ساعة.</motion.p>
              <motion.div variants={fadeUp} custom={3} className="space-y-3">
                {["استشارة مجانية لتقييم ملفك", "إعداد البيان الجمركي بدقة عالية", "مراجعة الامتثال لمتطلبات البنك المركزي", "متابعة حتى إتمام التخليص"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B8972A] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">تواصل عبر واتساب</h3>
                  <p className="text-gray-400 text-xs">متاح 24/7 للرد على استفساراتك</p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 border border-gray-100 mb-6">
                <p className="text-gray-600 text-sm font-medium mb-2">ما الذي ستحصل عليه:</p>
                <ul className="space-y-1.5">
                  {["تقييم فوري لمستنداتك", "قائمة بالمستندات الناقصة", "عرض سعر واضح وشفاف", "جدول زمني للتسليم"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-500 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2D2F8F]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all no-underline shadow-lg">
                <MessageCircle className="w-5 h-5" />
                ابدأ محادثة الآن
              </a>
              <p className="text-center text-gray-400 text-xs mt-3">استجابة فورية خلال دقائق</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMMON ISSUES */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 mb-4">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-amber-700 text-xs font-semibold">أخطاء شائعة نساعدك على تجنبها</span>
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-2xl font-bold text-gray-900 mb-3">لماذا يُرفض ملفك؟</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["عدم تطابق بيانات الفاتورة مع البيان الجمركي", "نقص في وثائق شهادة المنشأ أو انتهاء صلاحيتها", "عدم استيفاء متطلبات البنك المركزي للتحويل", "أخطاء في تصنيف البضاعة (HS Code)", "نقص في بيانات بوليصة الشحن", "عدم توافق قيم الفاتورة مع قيم التأمين والشحن"].map((issue, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-amber-100">
                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{issue}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2D2F8F] text-white font-semibold hover:bg-[#232570] transition-all no-underline">
              <MessageCircle className="w-4 h-4" />
              احصل على مراجعة مجانية لملفك
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-gray-900 mb-3">أسئلة شائعة</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-gray-500">إجابات تفصيلية على أكثر الأسئلة شيوعاً</motion.p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <FAQItem item={item} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-all no-underline">
              <MessageCircle className="w-4 h-4" />
              اسألنا مباشرة عبر واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
