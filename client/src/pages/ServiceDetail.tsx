import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { serviceDetails } from "@/data/blogData";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  FileText,
  ClipboardCheck,
  Search,
  Shield,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/qr/JBFDI6QYM3CFD1";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const iconMap: Record<string, React.ElementType> = {
  FileText,
  ClipboardCheck,
  Search,
  Shield,
};

export default function ServiceDetail() {
  const params = useParams<{ id: string }>();
  const service = serviceDetails.find((s) => s.id === params.id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">الخدمة غير موجودة</h1>
          <p className="text-gray-600 mb-6">عذراً، لم نتمكن من العثور على الخدمة المطلوبة.</p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D2F8F] text-white rounded-xl font-semibold no-underline hover:bg-[#232570] transition-all"
          >
            <ArrowRight className="w-4 h-4" />
            العودة للخدمات
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || FileText;
  const otherServices = serviceDetails.filter((s) => s.id !== service.id);

  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#2D2F8F]/5 to-white">
        <div className="container relative z-10 max-w-4xl">
          <motion.div initial="hidden" animate="visible">
            {/* Back Link */}
            <motion.div variants={fadeUp} custom={0} className="mb-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#2D2F8F] font-semibold text-sm no-underline hover:gap-3 transition-all"
              >
                <ArrowRight className="w-4 h-4" />
                العودة للخدمات
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#2D2F8F]/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-[#2D2F8F]" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </h1>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-gray-600 leading-relaxed"
            >
              {service.fullDesc}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-2xl font-bold text-gray-900 mb-10"
          >
            خطوات العمل
          </motion.h2>

          <div className="space-y-4">
            {service.steps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#2D2F8F]/20 hover:bg-[#2D2F8F]/5 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#2D2F8F] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex items-center min-h-[40px]">
                  <p className="text-gray-800 font-medium">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-2xl font-bold text-gray-900 mb-10"
          >
            المستندات المطلوبة
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.requiredDocs.map((doc, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{doc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2D2F8F] to-[#1a1c5e]">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold text-white mb-4">
              هل تحتاج هذه الخدمة؟
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-white/70 max-w-lg mx-auto mb-8">
              تواصل معنا الآن عبر واتساب وسنساعدك في تجهيز ملفك باحترافية
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all shadow-lg no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل عبر واتساب
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">خدمات أخرى</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherServices.map((s) => {
              const SIcon = iconMap[s.icon] || FileText;
              return (
                <Link key={s.id} href={`/services/${s.id}`} className="no-underline">
                  <div className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#2D2F8F]/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#2D2F8F]/10 flex items-center justify-center mb-3">
                      <SIcon className="w-5 h-5 text-[#2D2F8F]" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#2D2F8F] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-xs line-clamp-2">{s.shortDesc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
