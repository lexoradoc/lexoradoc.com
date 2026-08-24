/*
 * صفحة الشروط والأحكام — Lexora Doc
 * طابع مؤسسي رسمي، كحلي + ذهبي
 * تغطي: نطاق الخدمات، المسؤولية، الخصوصية، الامتثال
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Shield,
  Landmark,
  FileText,
  Scale,
  Lock,
  AlertTriangle,
  CheckCircle,
  Mail,
  ArrowLeft,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const LOGO_URL = "/media/logo.jpg";

const sections = [
  {
    icon: FileText,
    title: "نطاق الخدمات",
    content: `تقدم Lexora Doc خدمات متخصصة في إدارة ملفات الاستيراد والامتثال التجاري، تشمل على سبيل المثال لا الحصر: إعداد البيانات الجمركية المسبقة والنهائية على نظام ASYCUDA World، مراجعة وتدقيق الوثائق التجارية، التحقق من تصنيف HS Code، ومراجعة ملفات الامتثال وفق تعليمات البنك المركزي العراقي.

تُقدَّم هذه الخدمات بصفة استشارية ومهنية فقط، ولا تُعد بديلاً عن الاستشارة القانونية أو المحاسبية المتخصصة. لا تمثل Lexora Doc أي جهة حكومية أو رقابية، ولا تملك صلاحية إصدار موافقات رسمية أو اعتمادات حكومية.`,
  },
  {
    icon: Scale,
    title: "المسؤولية والالتزامات",
    content: `تلتزم Lexora Doc ببذل العناية المهنية اللازمة في تقديم خدماتها وفقاً للمعايير المعتمدة في مجال الامتثال التجاري والتخليص الجمركي. ومع ذلك، فإن المسؤولية النهائية عن دقة واكتمال المعلومات المقدمة تقع على عاتق العميل.

لا تتحمل Lexora Doc المسؤولية عن أي خسائر أو أضرار ناتجة عن: تقديم معلومات غير صحيحة أو ناقصة من قبل العميل، تغييرات في التعليمات أو الأنظمة الحكومية بعد تقديم الخدمة، قرارات الجهات الرسمية المختصة بشأن قبول أو رفض المعاملات، أو أي ظروف خارجة عن السيطرة المعقولة.

يلتزم العميل بتقديم جميع المستندات والمعلومات المطلوبة بشكل صحيح وكامل، وإبلاغ Lexora Doc فوراً بأي تغييرات تطرأ على بيانات الملف.`,
  },
  {
    icon: Landmark,
    title: "الامتثال التنظيمي",
    content: `تعمل Lexora Doc وفقاً لتعليمات وضوابط البنك المركزي العراقي ومتطلبات الهيئة العامة للجمارك. جميع الخدمات المقدمة تهدف إلى مساعدة العملاء في تحقيق الامتثال الكامل للأنظمة والتعليمات السارية.

يُقر العميل بعلمه بأن التعليمات والضوابط التنظيمية قابلة للتغيير من قبل الجهات المختصة، وأن Lexora Doc تبذل جهدها لمواكبة هذه التحديثات دون أن تضمن الإحاطة الفورية بكل تغيير.

في حال اكتشاف أي مخالفة أو عدم توافق في مستندات العميل، تلتزم Lexora Doc بإبلاغ العميل فوراً وتقديم التوصيات اللازمة للمعالجة.`,
  },
  {
    icon: Lock,
    title: "السرية وحماية البيانات",
    content: `تلتزم Lexora Doc بالحفاظ على سرية جميع المعلومات والمستندات المقدمة من العملاء. لا يتم مشاركة أي بيانات مع أطراف ثالثة إلا بموافقة خطية مسبقة من العميل أو بموجب متطلبات قانونية ملزمة.

تشمل التزامات السرية: المعلومات التجارية والمالية للعميل، تفاصيل عمليات الاستيراد والتصدير، المستندات والوثائق المقدمة، وأي معلومات شخصية أو مؤسسية يتم تبادلها أثناء تقديم الخدمة.

يتم الاحتفاظ بالمستندات والملفات لفترة زمنية معقولة بعد انتهاء الخدمة لأغراض المرجعية والتدقيق، ويحق للعميل طلب حذف بياناته في أي وقت.`,
  },
  {
    icon: AlertTriangle,
    title: "إخلاء المسؤولية",
    content: `Lexora Doc منصة خدمية متخصصة ولا تمثل أي جهة حكومية أو رقابية. جميع الخدمات المقدمة ذات طبيعة استشارية ومهنية، والنتائج النهائية تخضع لقرارات الجهات الرسمية المختصة.

لا تضمن Lexora Doc قبول أي بيان جمركي أو معاملة مصرفية، حيث أن القرار النهائي يعود للجهات الحكومية المعنية. كما لا تتحمل المسؤولية عن أي تأخيرات ناتجة عن إجراءات الجهات الرسمية أو ظروف قاهرة.

الأسعار والباقات المعروضة على الموقع قابلة للتغيير دون إشعار مسبق، والأسعار المتفق عليها عند طلب الخدمة هي الملزمة لكلا الطرفين.`,
  },
  {
    icon: CheckCircle,
    title: "شروط الاستخدام",
    content: `باستخدام موقع Lexora Doc أو طلب أي من خدماتها، يُقر المستخدم بموافقته على هذه الشروط والأحكام. تحتفظ Lexora Doc بحق تعديل هذه الشروط في أي وقت، وتُعد الشروط المحدثة سارية المفعول فور نشرها على الموقع.

يلتزم المستخدم باستخدام الموقع والخدمات لأغراض مشروعة فقط، وعدم تقديم معلومات مضللة أو مزورة. أي استخدام غير مشروع للموقع أو الخدمات يعرض المستخدم للمساءلة القانونية.

في حال وجود أي نزاع، يتم حله ودياً في المقام الأول. وفي حال تعذر ذلك، تخضع النزاعات للقوانين العراقية السارية واختصاص المحاكم العراقية المختصة.`,
  },
];

export default function Terms() {
  useEffect(() => {
    document.title = "الشروط والأحكام | Lexora Doc — الامتثال التجاري والتخليص الجمركي";
  }, []);

  return (
    <div dir="rtl">
      {/* ===== Hero ===== */}
      <section className="relative bg-gradient-to-bl from-[#1a1c5e] via-[#1e2068] to-[#141650] py-20 md:py-28 overflow-hidden">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <div className="container relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#B8972A]/20 mb-6"
          >
            <Shield className="w-4 h-4 text-[#B8972A]" />
            <span className="text-white/70 text-sm font-medium">وثيقة رسمية</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            الشروط والأحكام
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            الإطار القانوني والتنظيمي الذي يحكم العلاقة بين Lexora Doc وعملائها
            في مجال إدارة ملفات الاستيراد والامتثال التجاري
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="text-white/30 text-sm mt-6"
          >
            آخر تحديث: أبريل 2026
          </motion.p>
        </div>
      </section>

      {/* ===== Content ===== */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="container max-w-4xl">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
                className="mb-10"
              >
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  {/* Section Header */}
                  <div className="flex items-center gap-4 p-6 pb-4 border-b border-gray-50">
                    <div className="w-11 h-11 rounded-xl bg-[#1a1c5e]/5 border border-[#1a1c5e]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#1a1c5e]" />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-[#1a1c5e]">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Content */}
                  <div className="p-6 pt-5">
                    {section.content.split("\n\n").map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-gray-600 text-sm md:text-[15px] leading-[1.9] mb-4 last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* ===== Official Seal / Closing ===== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mt-14 text-center"
          >
            <div className="inline-flex flex-col items-center gap-5 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <img
                src={LOGO_URL}
                alt="Lexora Doc"
                className="h-14 w-auto object-contain"
              />
              <div>
                <p className="text-[#1a1c5e] font-bold text-sm mb-1">
                  Lexora Doc
                </p>
                <p className="text-gray-400 text-xs">
                  إدارة ملفات الاستيراد والامتثال التجاري
                </p>
              </div>
              <div className="w-16 h-px bg-[#B8972A]/30" />
              <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                للاستفسارات المتعلقة بهذه الشروط والأحكام، يرجى التواصل مع الإدارة العامة عبر البريد الإلكتروني
              </p>
              <a
                href="mailto:info@lexoradoc.com?subject=استفسار حول الشروط والأحكام"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1a1c5e]/5 border border-[#1a1c5e]/10 text-[#1a1c5e] font-bold text-sm hover:bg-[#1a1c5e]/10 transition-all no-underline"
              >
                <Mail className="w-4 h-4" />
                info@lexoradoc.com
              </a>
            </div>
          </motion.div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#1a1c5e]/60 hover:text-[#1a1c5e] text-sm transition-colors no-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
