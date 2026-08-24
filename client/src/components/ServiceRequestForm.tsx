import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceType: "pre-declaration",
    additionalMessage: "",
    files: [] as File[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const serviceOptions = [
    { value: "pre-declaration", label: "إعداد البيان الجمركي المسبق" },
    { value: "final-declaration", label: "إعداد البيان الجمركي النهائي" },
    { value: "document-review", label: "مراجعة الوثائق وتدقيق HS Code" },
    { value: "compliance-review", label: "الامتثال للبنك المركزي" },
    { value: "other", label: "خدمة أخرى" },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "الرجاء إدخال الاسم الكامل";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "الرجاء إدخال رقم الهاتف";
    } else if (!/^[0-9]{10,}$/.test(formData.phoneNumber.replace(/\D/g, ""))) {
      newErrors.phoneNumber = "الرجاء إدخال رقم هاتف صحيح";
    }

    if (!formData.email.trim()) {
      newErrors.email = "الرجاء إدخال البريد الإلكتروني";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "الرجاء إدخال بريد إلكتروني صحيح";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const totalSize = selectedFiles.reduce((sum, file) => sum + file.size, 0);

    if (selectedFiles.length > 5) {
      setErrors((prev) => ({ ...prev, files: "يمكن رفع حد أقصى 5 ملفات" }));
      return;
    }

    if (totalSize > 10 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, files: "الحد الأقصى لحجم الملفات 10MB" }));
      return;
    }

    setFormData((prev) => ({ ...prev, files: selectedFiles }));
    setErrors((prev) => {
      const { files, ...rest } = prev;
      return rest;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // محاكاة إرسال البيانات
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // في التطبيق الحقيقي، سيتم إرسال البيانات إلى الخادم
      console.log("Form Data:", formData);

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        serviceType: "pre-declaration",
        additionalMessage: "",
        files: [],
      });

      // إعادة تعيين الحالة بعد 3 ثوانٍ
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200">
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-900">تم إرسال طلبك بنجاح!</p>
            <p className="text-sm text-emerald-700">سيتم التواصل معك قريباً عبر الهاتف أو البريد الإلكتروني</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">حدث خطأ في الإرسال</p>
            <p className="text-sm text-red-700">الرجاء المحاولة مرة أخرى</p>
          </div>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">الاسم الكامل *</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, fullName: e.target.value }));
            if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
          }}
          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#2D2F8F]/20 transition-all ${
            errors.fullName ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
          }`}
          placeholder="أدخل اسمك الكامل"
        />
        {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">رقم الهاتف *</label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }));
            if (errors.phoneNumber) setErrors((prev) => ({ ...prev, phoneNumber: "" }));
          }}
          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#2D2F8F]/20 transition-all ${
            errors.phoneNumber ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
          }`}
          placeholder="07XXXXXXXXX"
        />
        {errors.phoneNumber && <p className="text-sm text-red-600 mt-1">{errors.phoneNumber}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">البريد الإلكتروني *</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, email: e.target.value }));
            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
          }}
          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#2D2F8F]/20 transition-all ${
            errors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
          }`}
          placeholder="example@email.com"
        />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
      </div>

      {/* Service Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">نوع الخدمة المطلوبة *</label>
        <select
          value={formData.serviceType}
          onChange={(e) => setFormData((prev) => ({ ...prev, serviceType: e.target.value }))}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2D2F8F]/20 transition-all"
        >
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Additional Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">رسالة إضافية (اختياري)</label>
        <textarea
          value={formData.additionalMessage}
          onChange={(e) => setFormData((prev) => ({ ...prev, additionalMessage: e.target.value }))}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2D2F8F]/20 transition-all resize-none"
          placeholder="أضف أي معلومات إضافية عن طلبك..."
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">رفع المستندات (حد أقصى 5 ملفات، 10MB)</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#2D2F8F] hover:bg-[#2D2F8F]/5 transition-all cursor-pointer">
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">اضغط لرفع الملفات أو اسحبها هنا</p>
            <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG مدعومة</p>
          </label>
        </div>
        {errors.files && <p className="text-sm text-red-600 mt-1">{errors.files}</p>}
        {formData.files.length > 0 && (
          <div className="mt-3 space-y-2">
            {formData.files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-700">{file.name}</span>
                <span className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#2D2F8F] hover:bg-[#232570] text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            جاري الإرسال...
          </>
        ) : (
          "إرسال الطلب"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        بإرسالك هذا النموذج، فأنت توافق على سياسة الخصوصية الخاصة بنا
      </p>
    </form>
  );
}
