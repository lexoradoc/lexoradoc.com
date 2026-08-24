/*
 * ServiceRequestModal — نموذج طلب الخدمة المنبثق
 * يطلب: الاسم، نوع البضاعة، المنفذ الحدودي، حالة الملف
 * بعد الإرسال → يوجه البيانات إلى واتساب
 */
import { useState } from "react";
import { X, MessageCircle, Send, CheckCircle2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "9647844342200";

const borderPorts = [
  "منفذ أم قصر",
  "منفذ خور الزبير",
  "منفذ المنذرية",
  "منفذ زرباطية",
  "منفذ الشلامجة",
  "منفذ طريبيل",
  "منفذ عرعر",
  "منفذ إبراهيم الخليل",
  "منفذ باشماخ",
  "منفذ حاج عمران",
  "منفذ سفوان",
  "منفذ الوليد",
  "منفذ مندلي",
  "منفذ بيرويزخان",
  "أخرى",
];

const fileStatuses = [
  "ملف جديد - لم يُقدم بعد",
  "ملف مُقدم ويحتاج مراجعة",
  "ملف مرفوض ويحتاج تصحيح",
  "ملف قيد المعالجة",
  "استفسار عام",
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ServiceRequestModal({ open, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    goodsType: "",
    borderPort: "",
    fileStatus: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isValid = formData.name.trim() && formData.goodsType.trim() && formData.borderPort && formData.fileStatus;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    // بناء رسالة واتساب منسقة
    const message = `مرحباً، أريد طلب خدمة من Lexora Doc

📋 *تفاصيل الطلب:*
━━━━━━━━━━━━━━━
👤 *الاسم:* ${formData.name}
📦 *نوع البضاعة:* ${formData.goodsType}
🏢 *المنفذ الحدودي:* ${formData.borderPort}
📄 *حالة الملف:* ${formData.fileStatus}
${formData.notes ? `📝 *ملاحظات:* ${formData.notes}` : ""}
━━━━━━━━━━━━━━━`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    
    // فتح واتساب بعد لحظة
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: "", goodsType: "", borderPort: "", fileStatus: "", notes: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2D2F8F]/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#2D2F8F]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">ابدأ طلبك</h2>
                  <p className="text-xs text-gray-500">أدخل بيانات ملفك وسنتواصل معك فوراً</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Content */}
            {submitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">تم إرسال طلبك!</h3>
                <p className="text-gray-600 text-sm mb-6">
                  سيتم فتح واتساب لإرسال تفاصيل طلبك مباشرة إلى فريقنا
                </p>
                <Button
                  onClick={handleClose}
                  className="bg-[#2D2F8F] hover:bg-[#232570] text-white"
                >
                  إغلاق
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                {/* الاسم */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white focus:outline-none focus:border-[#2D2F8F]/40 focus:ring-2 focus:ring-[#2D2F8F]/10 transition-all text-sm"
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                {/* نوع البضاعة */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    نوع البضاعة <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.goodsType}
                    onChange={(e) => handleChange("goodsType", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white focus:outline-none focus:border-[#2D2F8F]/40 focus:ring-2 focus:ring-[#2D2F8F]/10 transition-all text-sm"
                    placeholder="مثال: مواد غذائية، أجهزة إلكترونية، قطع غيار..."
                    required
                  />
                </div>

                {/* المنفذ الحدودي */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    المنفذ الحدودي <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.borderPort}
                    onChange={(e) => handleChange("borderPort", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white focus:outline-none focus:border-[#2D2F8F]/40 focus:ring-2 focus:ring-[#2D2F8F]/10 transition-all text-sm"
                    required
                  >
                    <option value="">اختر المنفذ الحدودي</option>
                    {borderPorts.map((port) => (
                      <option key={port} value={port}>
                        {port}
                      </option>
                    ))}
                  </select>
                </div>

                {/* حالة الملف */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    حالة الملف <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.fileStatus}
                    onChange={(e) => handleChange("fileStatus", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white focus:outline-none focus:border-[#2D2F8F]/40 focus:ring-2 focus:ring-[#2D2F8F]/10 transition-all text-sm"
                    required
                  >
                    <option value="">اختر حالة الملف</option>
                    {fileStatuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ملاحظات */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    ملاحظات إضافية <span className="text-gray-400 font-normal">(اختياري)</span>
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white focus:outline-none focus:border-[#2D2F8F]/40 focus:ring-2 focus:ring-[#2D2F8F]/10 transition-all text-sm resize-none"
                    placeholder="أي تفاصيل إضافية عن ملفك..."
                  />
                </div>

                {/* Submit */}
                <div className="pt-2 space-y-3">
                  <Button
                    type="submit"
                    disabled={!isValid}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    إرسال عبر واتساب
                  </Button>
                  <p className="text-xs text-gray-400 text-center">
                    سيتم فتح واتساب مع تفاصيل طلبك جاهزة للإرسال
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
