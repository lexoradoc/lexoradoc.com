/*
 * Privacy Policy — LEXORA DOC
 * سياسة الخصوصية بطابع مؤسسي رسمي
 * كحلي (#2D2F8F) + ذهبي (#B8972A)
 */
import { useEffect } from "react";
import { Shield, Lock, Eye, FileText, Mail, ArrowLeft, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Privacy() {
  useEffect(() => {
    document.title = "سياسة الخصوصية - Lexora Doc | حماية بيانات المستخدمين";
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "1. نطاق السياسة",
      content: `تنطبق هذه السياسة على جميع الخدمات والمنتجات التي تقدمها منصة Lexora Doc، بما فيها الموقع الإلكتروني والتطبيقات المرتبطة به. تهدف هذه السياسة إلى شرح كيفية جمع واستخدام وحماية البيانات الشخصية للمستخدمين.`,
    },
    {
      icon: Eye,
      title: "2. جمع البيانات الشخصية",
      content: `نقوم بجمع البيانات الشخصية التالية:

• البيانات المقدمة مباشرة: الاسم، البريد الإلكتروني، رقم الهاتف، عنوان الموقع، وبيانات الملفات المتعلقة بالخدمات الجمركية
• بيانات الاستخدام: معلومات حول كيفية استخدامك للموقع، بما في ذلك عنوان IP، نوع المتصفح، والصفحات المزارة
• بيانات الأجهزة: معلومات تقنية عن الجهاز المستخدم في الوصول إلى الموقع

يتم جمع هذه البيانات بموافقتك الصريحة عند ملء النماذج أو استخدام الخدمات.`,
    },
    {
      icon: Lock,
      title: "3. استخدام البيانات",
      content: `نستخدم البيانات الشخصية للأغراض التالية:

• تقديم الخدمات: معالجة طلباتك والتواصل معك بخصوص الخدمات المقدمة
• تحسين الخدمات: تحليل استخدام الموقع وتحسين تجربة المستخدم
• الامتثال القانوني: الالتزام بالقوانين والتشريعات العراقية والدولية
• الأمان: منع الاحتيال والحفاظ على أمان المنصة
• التواصل: إرسال تحديثات وإشعارات متعلقة بالخدمات

لا نبيع أو نشارك بيانات المستخدمين مع أطراف ثالثة لأغراض تسويقية.`,
    },
    {
      icon: Shield,
      title: "4. حماية البيانات",
      content: `نتخذ إجراءات أمنية صارمة لحماية بيانات المستخدمين:

• التشفير: جميع البيانات الحساسة مشفرة باستخدام بروتوكول HTTPS
• الوصول المقيد: يقتصر الوصول إلى البيانات على الموظفين المصرح لهم فقط
• المراقبة المستمرة: نراقب النظام بشكل مستمر للكشف عن أي محاولات اختراق
• النسخ الاحتياطية: نحتفظ بنسخ احتياطية آمنة من البيانات

مع ذلك، لا يمكننا ضمان أمان 100% لأي نقل بيانات عبر الإنترنت.`,
    },
    {
      icon: Eye,
      title: "5. الكوكيز والتتبع",
      content: `نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربة المستخدم:

• ملفات تعريف ضرورية: تحتاج إلى هذه الملفات لتشغيل الموقع بشكل صحيح
• ملفات تحليلية: تساعدنا في فهم كيفية استخدام الموقع وتحسينه
• ملفات تفضيلات: تحفظ تفضيلاتك على الموقع

يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك.`,
    },
    {
      icon: Mail,
      title: "6. حقوق المستخدمين",
      content: `لديك الحقوق التالية بخصوص بياناتك الشخصية:

• حق الوصول: يمكنك طلب نسخة من البيانات التي نحتفظ بها عنك
• حق التصحيح: يمكنك تصحيح أي بيانات غير دقيقة
• حق الحذف: يمكنك طلب حذف بيانات معينة (مع مراعاة الالتزامات القانونية)
• حق الاعتراض: يمكنك الاعتراض على معالجة بيانات معينة
• حق نقل البيانات: يمكنك طلب نقل بياناتك إلى جهة أخرى

للتقدم بأي من هذه الطلبات، يرجى التواصل معنا على info@lexoradoc.com`,
    },
    {
      icon: FileText,
      title: "7. التعديلات على السياسة",
      content: `نحتفظ بالحق في تعديل هذه السياسة في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار بارز على الموقع. استمرارك في استخدام الموقع بعد التعديلات يعني موافقتك على السياسة الجديدة.

آخر تحديث لهذه السياسة: أبريل 2026`,
    },
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-l from-[#2D2F8F]/5 to-transparent border-b border-[#2D2F8F]/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-[#B8972A]" />
              <span className="text-sm font-semibold text-[#B8972A]">الحماية والخصوصية</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2F8F] mb-4">
              سياسة الخصوصية
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              نحن نلتزم بحماية خصوصيتك وبيانات المستخدمين. تشرح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#141650] border-b border-white/5">
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-[#B8972A]/15">
              <Landmark className="w-4 h-4 text-[#B8972A]" />
              <span className="text-white/70 text-xs font-medium">وفق تعليمات البنك المركزي العراقي</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-[#B8972A]/15">
              <Lock className="w-4 h-4 text-[#B8972A]" />
              <span className="text-white/70 text-xs font-medium">حماية البيانات الشخصية</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-[#B8972A]/15">
              <Shield className="w-4 h-4 text-[#B8972A]" />
              <span className="text-white/70 text-xs font-medium">معايير أمان دولية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group"
              >
                <div className="flex gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#2D2F8F]/10 border border-[#2D2F8F]/20 flex items-center justify-center group-hover:bg-[#2D2F8F]/15 transition-colors">
                      <section.icon className="w-6 h-6 text-[#2D2F8F]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-[#2D2F8F] mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {i < sections.length - 1 && (
                  <div className="mt-8 border-t border-gray-100" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-l from-[#2D2F8F]/5 to-transparent border-t border-[#2D2F8F]/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#2D2F8F] mb-4">
              لديك أسئلة حول خصوصيتك؟
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              إذا كان لديك أي استفسارات بخصوص هذه السياسة أو كيفية تعاملنا ببيانات، يرجى التواصل معنا مباشرة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@lexoradoc.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2D2F8F] text-white font-semibold hover:bg-[#232570] transition-all no-underline"
              >
                <Mail className="w-4 h-4" />
                info@lexoradoc.com
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#2D2F8F] text-[#2D2F8F] font-semibold hover:bg-[#2D2F8F]/5 transition-all no-underline"
              >
                <ArrowLeft className="w-4 h-4" />
                تواصل معنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-[#1a1c5e] text-white/60 text-center text-sm">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Lexora Doc. جميع الحقوق محفوظة. المنصة لا تمثل جهة حكومية.
          </p>
        </div>
      </section>
    </div>
  );
}
