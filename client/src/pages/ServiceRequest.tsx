import { useEffect } from "react";
import { motion } from "framer-motion";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import { CheckCircle2, Clock, Shield } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function ServiceRequest() {
  useEffect(() => {
    document.title = "طلب خدمة - Lexora Doc | أرسل طلبك الآن";
  }, []);

  const benefits = [
    {
      icon: CheckCircle2,
      title: "مراجعة دقيقة",
      description: "فحص شامل لجميع وثائقك وملفاتك",
    },
    {
      icon: Clock,
      title: "سرعة في التسليم",
      description: "نتعامل مع طلبك بأولوية عالية",
    },
    {
      icon: Shield,
      title: "سرية تامة",
      description: "جميع بياناتك محمية وآمنة",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            اطلب خدمتك الآن
          </motion.h1>
          <motion.p variants={fadeUp} custom={1} className="text-lg text-gray-600 max-w-2xl mx-auto">
            ملء النموذج أدناه وسنقوم بمراجعة طلبك والتواصل معك في أقرب وقت
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Benefits */}
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#2D2F8F] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#2D2F8F]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#2D2F8F]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Form Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-2xl mx-auto"
        >
          <ServiceRequestForm />
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="max-w-2xl mx-auto mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl"
        >
          <h3 className="font-semibold text-blue-900 mb-2">معلومة مهمة</h3>
          <p className="text-sm text-blue-800">
            بعد إرسال النموذج، سيتم مراجعة طلبك من قبل فريقنا المتخصص. قد نطلب منك معلومات إضافية أو توضيحات حول ملفك. سيتم تحديد السعر النهائي بعد الاطلاع على تفاصيل الملف بالكامل.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
