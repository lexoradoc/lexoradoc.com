/*
 * LEXORA DOC — صفحة الأسعار والباقات
 * عرض الباقات المتاحة مع جدول مقارنة وFAQ شامل
 */
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  Landmark,
  ShieldCheck,
  X,
  ArrowLeft,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/9647844342200";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const packages = [
  {
    name: "مراجعة الملف",
    price: "150,000",
    currency: "د.ع",
    description: "مراجعة كاملة للملف وتحديد جميع الأخطاء والنواقص قبل التقديم",
    features: [
      "مراجعة جميع المستندات",
      "اكتشاف الأخطاء",
      "تحديد النواقص",
      "توضيح الملاحظات بشكل واضح",
    ],
    highlighted: false,
    cta: "اختر هذه الباقة",
  },
  {
    name: "مراجعة + تقديم",
    price: "250,000",
    currency: "د.ع",
    description: "مراجعة شاملة + تجهيز الملف وتقديمه بشكل صحيح وفق المتطلبات الرسمية",
    features: [
      "جميع ما في باقة المراجعة",
      "تجهيز الملف بشكل كامل",
      "تنظيم البيانات وتوحيدها",
      "تقديم الملف بشكل صحيح وجاهز للإجراء",
    ],
    highlighted: true,
    cta: "اختر هذه الباقة",
    badge: "الأكثر طلباً",
  },
];

/* جدول المقارنة */
const comparisonFeatures = [
  { feature: "مراجعة جميع المستندات", basic: true, premium: true },
  { feature: "اكتشاف الأخطاء والنواقص", basic: true, premium: true },
  { feature: "توضيح الملاحظات بشكل واضح", basic: true, premium: true },
  { feature: "تقرير مفصل بالملاحظات", basic: true, premium: true },
  { feature: "تجهيز الملف بشكل كامل", basic: false, premium: true },
  { feature: "تنظيم البيانات وتوحيدها", basic: false, premium: true },
  { feature: "تقديم الملف للجهة المختصة", basic: false, premium: true },
  { feature: "متابعة حالة الملف بعد التقديم", basic: false, premium: true },
];

const faqs = [
  {
    question: "هل تشمل الخدمة جميع مستندات الملف؟",
    answer:
      "نعم، نقوم بمراجعة الملف بالكامل بما يشمل جميع المستندات والتأكد من توافقها مع المتطلبات الرسمية. على سبيل المثال: الفواتير التجارية، شهادات المنشأ، بوالص الشحن، وجميع الوثائق المرتبطة بالبيان الجمركي.",
  },
  {
    question: "كم يستغرق وقت المراجعة؟",
    answer:
      "يتم الرد خلال وقت سريع بعد استلام الملف، ويعتمد ذلك على حجم وتعقيد الملف. عادةً ما يتم الانتهاء من المراجعة خلال 24-48 ساعة للملفات العادية، وقد يستغرق الأمر أكثر للملفات المعقدة أو التي تحتاج مراجعة مكثفة.",
  },
  {
    question: "هل يمكن تقديم الملف من قبلكم؟",
    answer:
      "نعم، في باقة (مراجعة + تقديم) نقوم بتجهيز الملف وتقديمه بشكل صحيح وجاهز للإجراء. نتولى عملية التقديم الكاملة لضمان عدم وجود أي أخطاء في مرحلة التقديم.",
  },
  {
    question: "كيف أرسل الملف؟",
    answer:
      "يمكنك إرسال الملف مباشرة عبر واتساب، وسيتم التعامل معه بشكل فوري. كما يمكنك إرسال الملفات بصيغة PDF أو صور واضحة للمستندات.",
  },
  {
    question: "هل الخدمة مناسبة إذا تم رفض الملف سابقاً؟",
    answer:
      "نعم، هذه من أهم الحالات التي نعمل عليها. نقوم بتحليل أسباب الرفض بالتفصيل ومعالجة كل نقطة بشكل منفصل لضمان عدم تكرار الرفض. لدينا خبرة واسعة في التعامل مع الملفات المرفوضة.",
  },
  {
    question: "هل تضمنون قبول الملف؟",
    answer:
      "نحن نضمن مراجعة دقيقة وتنظيم احترافي يقلل الأخطاء إلى الحد الأدنى، لكن القبول النهائي يعتمد على الجهة المختصة. نسبة نجاح ملفاتنا تتجاوز 98% بفضل الدقة في المراجعة.",
  },
  {
    question: "هل بياناتي وملفي آمنة؟",
    answer:
      "نعم، يتم التعامل مع جميع الملفات بسرية تامة واحترافية عالية. لا نشارك أي معلومات مع أطراف ثالثة ونلتزم بأعلى معايير حماية البيانات.",
  },
  {
    question: "هل يمكن معرفة السعر النهائي قبل البدء؟",
    answer:
      "نعم، يتم تحديد السعر النهائي بعد الاطلاع على الملف وتقييم حالته. الأسعار المعروضة هي أسعار أساسية وقد تختلف حسب حجم وتعقيد الملف.",
  },
  {
    question: "هل تقدمون استشارات مجانية قبل البدء؟",
    answer:
      "نعم، يمكنك التواصل معنا عبر واتساب للحصول على استشارة أولية مجانية. سنقوم بتقييم حالة ملفك وتوجيهك للباقة المناسبة قبل أي التزام مالي.",
  },
  {
    question: "هل تعملون مع ملفات من جميع المحافظات العراقية؟",
    answer:
      "نعم، نقدم خدماتنا لجميع المحافظات العراقية. يمكنك إرسال ملفك عبر واتساب من أي مكان وسنتعامل معه بنفس الجودة والاحترافية.",
  },
  {
    question: "ماذا لو احتجت تعديلات بعد المراجعة؟",
    answer:
      "في حال وجود ملاحظات إضافية بعد المراجعة الأولى، نقوم بمراجعة ثانية مجانية لضمان رضاك الكامل عن الخدمة المقدمة.",
  },
  {
    question: "هل يمكنكم التعامل مع حالات الطوارئ أو الملفات العاجلة؟",
    answer:
      "نعم، نوفر خدمة مراجعة عاجلة للملفات التي تحتاج معالجة سريعة. تواصل معنا عبر واتساب وأخبرنا بالموعد النهائي وسنبذل قصارى جهدنا لتلبية طلبك في الوقت المحدد.",
  },
];

function FAQItem({ item }: { item: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-blue-200 bg-blue-50/30 shadow-sm' : 'border-navy-100 hover:border-navy-200'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-start bg-transparent transition-colors"
      >
        <span className={`font-semibold text-sm transition-colors ${open ? 'text-blue-700' : 'text-navy-900'}`}>{item.question}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ms-3 ${open ? 'rotate-180 text-blue-500' : 'text-navy-400'}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-5 pb-5 text-navy-500 text-sm leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function Pricing() {
  useEffect(() => {
    document.title = "أسعار مراجعة وتقديم ملفات الاستيراد - Lexora Doc | باقات ASYCUDA العراق";
  }, []);

  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#2D2F8F]/5 to-white">
        <div className="container relative z-10">
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
              الأسعار والباقات
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              باقات الخدمة
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              اختر الباقة المناسبة لك حسب حالة ملفك،
              <br />
              ونحن نساعدك على مراجعة وتجهيز ملفك لضمان تقديم صحيح بدون أخطاء أو تأخير
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
              <span className="text-[#2D2F8F] text-sm font-bold">وفق تعليمات البنك المركزي العراقي</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#B8972A]/20" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2D2F8F]" />
              <span className="text-[#2D2F8F] text-sm font-bold">امتثال ASYCUDA World</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`pricing-card relative rounded-2xl p-8 border transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-[#2D2F8F]/30 bg-gradient-to-br from-[#2D2F8F]/5 to-white shadow-lg"
                    : "border-gray-200 bg-white hover:shadow-md"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 right-6 bg-[#2D2F8F] text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#2D2F8F]">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600">{pkg.currency}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all no-underline ${
                    pkg.highlighted
                      ? "bg-[#2D2F8F] text-white hover:bg-[#232570]"
                      : "bg-[#25D366] text-white hover:bg-[#20bd5a]"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  {pkg.cta}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl text-center max-w-2xl mx-auto"
          >
            <p className="text-amber-900 font-semibold mb-2">ملاحظة مهمة</p>
            <p className="text-amber-800 text-sm">
              يتم تحديد تفاصيل العمل النهائية بعد الاطلاع على الملف. الأسعار المعروضة هي أسعار أساسية وقد تختلف حسب حجم وتعقيد الملف.
            </p>
          </motion.div>

          {/* باقات مخصصة للشركات */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="mt-8 p-8 bg-gradient-to-br from-[#2D2F8F]/5 to-[#2D2F8F]/10 border border-[#2D2F8F]/20 rounded-2xl max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/15 border border-[#B8972A]/30 mb-4">
                <Star className="w-3.5 h-3.5 text-[#B8972A]" />
                <span className="text-[#B8972A] text-xs font-semibold">للشركات والمستوردين الدائمين</span>
              </div>
              <h3 className="text-xl font-bold text-[#2D2F8F] mb-3">باقات مخصصة للشركات الكبيرة</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                نقدم باقات خاصة ومخصصة للشركات الكبيرة والمستوردين الدائمين تشمل أسعاراً تنافسية وأولوية في المعالجة ومتابعة مستمرة لجميع الملفات.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2D2F8F] text-white font-semibold hover:bg-[#232570] transition-all no-underline"
              >
                <MessageCircle className="w-4 h-4" />
                تواصل للاستفسار
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-gray-900 mb-4">
              مقارنة الباقات
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-gray-600">
              اختر الباقة المناسبة لاحتياجاتك
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-[#2D2F8F] text-white">
              <div className="p-5 font-semibold text-sm border-l border-white/20">الميزة</div>
              <div className="p-5 font-semibold text-sm text-center border-l border-white/20">
                مراجعة الملف
                <div className="text-xs font-normal text-white/70 mt-1">150,000 د.ع</div>
              </div>
              <div className="p-5 font-semibold text-sm text-center">
                مراجعة + تقديم
                <div className="text-xs font-normal text-white/70 mt-1">250,000 د.ع</div>
              </div>
            </div>

            {/* Table Body */}
            {comparisonFeatures.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${
                  i < comparisonFeatures.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="p-4 text-sm text-gray-700 border-l border-gray-100 flex items-center">
                  {row.feature}
                </div>
                <div className="p-4 text-center border-l border-gray-100 flex items-center justify-center">
                  {row.basic ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                <div className="p-4 text-center flex items-center justify-center">
                  {row.premium ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300" />
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-16 bg-white">
        <div className="container max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="p-8 bg-red-50 border border-red-200 rounded-2xl text-center"
          >
            <p className="text-red-900 font-bold text-lg mb-3">لا تخاطر بتقديم ملف غير جاهز</p>
            <p className="text-red-800 text-sm leading-relaxed">
              كل خطأ أو نقص في الملف قد يسبب تأخير أو رفض،
              <br />
              ومراجعته قبل التقديم يوفر عليك وقت وجهد كبير
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-navy-50 to-white">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-navy-900 mb-4">
              الأسئلة الشائعة
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-navy-600">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا وباقاتنا
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={faqs.length}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-sm mb-4">إذا كان لديك أي استفسار إضافي، لا تتردد في التواصل معنا</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-all no-underline"
            >
              <MessageCircle className="w-4 h-4" />
              تواصل معنا الآن
            </a>
          </motion.div>
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
              أرسل ملفك الآن عبر واتساب
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-white/70 max-w-lg mx-auto mb-8">
              لا تخاطر بتقديم ملف غير جاهز
              <br />
              ابدأ الآن وتجنب التأخير
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all shadow-lg no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                ابدأ الآن
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
