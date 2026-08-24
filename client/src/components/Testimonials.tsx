import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  city: string;
  content: string;
  result: string;
  rating: number;
  image: string;
  sector: string;
}

const testimonials: Testimonial[] = [
  {
    name: "أحمد الجبوري",
    role: "مدير الاستيراد",
    company: "شركة النور للتجارة العامة",
    city: "بغداد",
    content:
      "كنا نعاني من رفض ملفات الاستيراد بشكل متكرر بسبب أخطاء في تصنيف HS Code. بعد التعامل مع Lexora Doc، تم قبول الملف من أول تقديم. الفريق يعرف متطلبات البنك المركزي بدقة.",
    result: "تم قبول الملف من أول تقديم",
    rating: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/avatar-man1-Vvk4kgg5hxzmfrThkUUekg.webp",
    sector: "تجارة عامة",
  },
  {
    name: "محمود العبيدي",
    role: "مسؤول المستندات",
    company: "شركة الخليج للصادرات والواردات",
    city: "الموصل",
    content:
      "نتعامل مع Lexora Doc منذ أكثر من سنة لإدارة ملفات الاستيراد الشهرية. وفّرنا أكثر من 30% من الوقت المخصص للتخليص الجمركي. الخدمة منتظمة ودقيقة في كل مرة.",
    result: "توفير 30% من وقت التخليص",
    rating: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/avatar-man2-4ECACmEoRYqYz3F98grMCv.webp",
    sector: "صادرات وواردات",
  },
  {
    name: "كريم الحسيني",
    role: "مدير العمليات",
    company: "مجموعة الرافدين التجارية",
    city: "واسط",
    content:
      "كنا نواجه مشكلة دائمة مع متطلبات التحويل المصرفي للبنك المركزي. بعد تعاملنا مع Lexora Doc، أصبحت جميع ملفاتنا مستوفية للمتطلبات التنظيمية. خدمة احترافية بامتياز.",
    result: "صفر مشاكل مع البنك المركزي",
    rating: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/avatar-man3-PTkMpnpTzstRaxSrPVu9aP.webp",
    sector: "مجموعة تجارية",
  },
  {
    name: "علي الشمري",
    role: "مستورد مواد غذائية",
    company: "شركة البركة للمواد الغذائية",
    city: "البصرة",
    content:
      "أول مرة أستورد بضاعة وكنت قلقاً من تعقيدات الجمارك. فريق Lexora Doc راجع كل وثيقة بعناية وأرشدني خطوة بخطوة. انتهت المعاملة خلال 48 ساعة بدون أي مشاكل.",
    result: "إنهاء المعاملة خلال 48 ساعة",
    rating: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/avatar-man4-WxxZaK52gv2ZUJAm9Tguag.webp",
    sector: "مواد غذائية",
  },
  {
    name: "سامر الدليمي",
    role: "مدير المشتريات",
    company: "شركة المثنى للمقاولات",
    city: "بغداد",
    content:
      "نستورد معدات ثقيلة بشكل دوري وكانت ملفاتنا تتأخر كثيراً. منذ تعاملنا مع Lexora Doc أصبح كل ملف يُقدَّم بشكل صحيح من المرة الأولى. وفّرنا وقتاً ومالاً كثيراً.",
    result: "تقليص وقت التخليص بنسبة 40%",
    rating: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/avatar-man5-mEPXB9y48FAEKDtg9YZnUu.webp",
    sector: "مقاولات",
  },
  {
    name: "حسين الزبيدي",
    role: "صاحب شركة",
    company: "مؤسسة الزبيدي للأجهزة الكهربائية",
    city: "كركوك",
    content:
      "كنت أعاني من أخطاء متكررة في ملفات ASYCUDA وتأخير في الإفراج عن البضائع. بعد التعامل مع Lexora Doc حُلّت جميع المشاكل. فريق محترف يفهم النظام الجمركي العراقي بعمق.",
    result: "لا تأخير في الإفراج الجمركي",
    rating: 5,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663385768314/aneV9kYBsf2QHxWJrr67QY/avatar-man1-Vvk4kgg5hxzmfrThkUUekg.webp",
    sector: "أجهزة كهربائية",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f9ff] to-white" dir="rtl">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8972A]/10 border border-[#B8972A]/20 mb-4"
          >
            <Star className="w-3.5 h-3.5 text-[#B8972A] fill-[#B8972A]" />
            <span className="text-[#B8972A] text-xs font-semibold">آراء عملائنا</span>
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            ماذا يقول من تعاملوا معنا
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-gray-500 text-base max-w-xl mx-auto"
          >
            تجارب حقيقية من عملاء استفادوا من خدمات Lexora Doc في إدارة ملفات الاستيراد والامتثال الجمركي
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#2D2F8F]/20 flex flex-col gap-4"
            >
              {/* Stars + Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-[#B8972A] text-[#B8972A]" />
                  ))}
                </div>
                <Quote className="w-7 h-7 text-[#2D2F8F]/15" />
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed text-sm flex-1">
                "{t.content}"
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-emerald-700 text-xs font-semibold">{t.result}</span>
              </div>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#2D2F8F]/10 flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 truncate">
                    {t.role} · {t.company}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-gray-400">{t.city}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#2D2F8F]/8 text-[#2D2F8F] font-medium">
                    {t.sector}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: "98%", label: "نسبة رضا العملاء" },
            { value: "+500", label: "ملف تم معالجته" },
            { value: "48h", label: "متوسط وقت الإنجاز" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-[#2D2F8F]">{stat.value}</span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
