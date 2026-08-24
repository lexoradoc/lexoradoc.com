/*
 * ASYCUDA Request Form Component
 * Advanced form with file upload, real-time validation, and professional styling
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileUp, Loader2, CheckCircle2, AlertCircle, X } from "lucide-react";
import { motion } from "framer-motion";

interface FileAttachment {
  name: string;
  size: number;
  type: string;
  file: File;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function AsycudaRequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    serviceType: "",
    productName: "",
    productDescription: "",
    countryOfOrigin: "",
    goodsValue: "",
    hsCode: "",
    notes: "",
  });

  const [attachments, setAttachments] = useState<FileAttachment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceTypes = [
    { value: "preliminary_declaration", label: "إعداد البيان الكمركي المسبق" },
    { value: "final_declaration", label: "إعداد البيان الكمركي النهائي" },
    { value: "document_review", label: "مراجعة الوثائق التجارية" },
    { value: "hs_code_audit", label: "تدقيق HS Code" },
    { value: "consultation", label: "استشارة متخصصة" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
    if (errors.serviceType) {
      setErrors((prev) => ({ ...prev, serviceType: "" }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files) return;

    const newFiles: FileAttachment[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          files: `الملف ${file.name} كبير جداً (الحد الأقصى 10 MB)`,
        }));
        continue;
      }
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "image/jpeg",
        "image/png",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          files: `نوع الملف ${file.name} غير مدعوم`,
        }));
        continue;
      }
      newFiles.push({
        name: file.name,
        size: file.size,
        type: file.type,
        file,
      });
    }

    setAttachments((prev) => [...prev, ...newFiles]);
    e.currentTarget.value = "";
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "الاسم مطلوب";
    if (!formData.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";
    if (!formData.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "البريد الإلكتروني غير صحيح";
    if (!formData.serviceType) newErrors.serviceType = "نوع الخدمة مطلوب";
    if (!formData.productName.trim()) newErrors.productName = "اسم المنتج مطلوب";
    if (attachments.length === 0) newErrors.files = "يجب إرفاق ملف واحد على الأقل";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would normally send the form data to your backend
      console.log("Form submitted:", { ...formData, attachments });

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        companyName: "",
        phone: "",
        email: "",
        serviceType: "",
        productName: "",
        productDescription: "",
        countryOfOrigin: "",
        goodsValue: "",
        hsCode: "",
        notes: "",
      });
      setAttachments([]);

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-navy-50/50 to-white rounded-3xl border border-navy-100 p-8 lg:p-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
        <h3 className="text-3xl font-bold text-navy-900 mb-2">اطلب الخدمة الآن</h3>
        <p className="text-navy-500 mb-8">
          ملء النموذج أدناه لتقديم طلب خدمة ASYCUDA. سيتواصل معك فريقنا خلال 24 ساعة.
        </p>
      </motion.div>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-900">تم إرسال الطلب بنجاح!</p>
            <p className="text-emerald-700 text-sm">سيتواصل معك فريقنا قريباً على البريد الإلكتروني المسجل.</p>
          </div>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">حدث خطأ في الإرسال</p>
            <p className="text-red-700 text-sm">يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
          <h4 className="text-lg font-bold text-navy-900 mb-4">المعلومات الشخصية</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                الاسم الكامل <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="أدخل اسمك الكامل"
                className={`bg-white border ${errors.fullName ? "border-red-300" : "border-navy-200"} rounded-lg`}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                اسم الشركة (اختياري)
              </label>
              <Input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="اسم الشركة"
                className="bg-white border border-navy-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                رقم الهاتف <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="07XXXXXXXXX"
                className={`bg-white border ${errors.phone ? "border-red-300" : "border-navy-200"} rounded-lg`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                البريد الإلكتروني <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className={`bg-white border ${errors.email ? "border-red-300" : "border-navy-200"} rounded-lg`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>
        </motion.div>

        {/* Service Selection */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}>
          <h4 className="text-lg font-bold text-navy-900 mb-4">نوع الخدمة</h4>
          <div>
            <label className="block text-sm font-semibold text-navy-700 mb-2">
              اختر نوع الخدمة <span className="text-red-500">*</span>
            </label>
            <Select value={formData.serviceType} onValueChange={handleSelectChange}>
              <SelectTrigger className={`bg-white border ${errors.serviceType ? "border-red-300" : "border-navy-200"} rounded-lg`}>
                <SelectValue placeholder="اختر نوع الخدمة" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
          </div>
        </motion.div>

        {/* Product Information */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
          <h4 className="text-lg font-bold text-navy-900 mb-4">معلومات المنتج</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                اسم المنتج <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="اسم المنتج أو البضاعة"
                className={`bg-white border ${errors.productName ? "border-red-300" : "border-navy-200"} rounded-lg`}
              />
              {errors.productName && <p className="text-red-500 text-xs mt-1">{errors.productName}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                HS Code (اختياري)
              </label>
              <Input
                type="text"
                name="hsCode"
                value={formData.hsCode}
                onChange={handleInputChange}
                placeholder="مثال: 1234567890"
                className="bg-white border border-navy-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                دولة المنشأ (اختياري)
              </label>
              <Input
                type="text"
                name="countryOfOrigin"
                value={formData.countryOfOrigin}
                onChange={handleInputChange}
                placeholder="مثال: الصين"
                className="bg-white border border-navy-200 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-700 mb-2">
                قيمة البضاعة (اختياري)
              </label>
              <Input
                type="text"
                name="goodsValue"
                value={formData.goodsValue}
                onChange={handleInputChange}
                placeholder="مثال: 5000 USD"
                className="bg-white border border-navy-200 rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold text-navy-700 mb-2">
              وصف المنتج (اختياري)
            </label>
            <Textarea
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
              placeholder="وصف تفصيلي للمنتج والمواصفات"
              rows={3}
              className="bg-white border border-navy-200 rounded-lg resize-none"
            />
          </div>
        </motion.div>

        {/* File Upload */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4}>
          <h4 className="text-lg font-bold text-navy-900 mb-4">المستندات والملفات</h4>
          <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center bg-blue-50/30 hover:bg-blue-50/50 transition-colors">
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <FileUp className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <p className="text-navy-900 font-semibold mb-1">اسحب الملفات هنا أو انقر للاختيار</p>
              <p className="text-navy-500 text-sm">
                الملفات المدعومة: PDF, Word, Excel, صور (الحد الأقصى 10 MB لكل ملف)
              </p>
            </label>
          </div>
          {errors.files && <p className="text-red-500 text-xs mt-2">{errors.files}</p>}

          {/* Attached Files List */}
          {attachments.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-semibold text-navy-700">الملفات المرفقة ({attachments.length})</p>
              {attachments.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-navy-50 p-3 rounded-lg border border-navy-200"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <FileUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-navy-900 truncate">{file.name}</p>
                      <p className="text-xs text-navy-500">{(file.size / 1024).toFixed(2)} KB</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAttachment(index)}
                    className="p-1 hover:bg-red-100 rounded transition-colors flex-shrink-0"
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Additional Notes */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={5}>
          <h4 className="text-lg font-bold text-navy-900 mb-4">ملاحظات إضافية</h4>
          <Textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="أي ملاحظات أو معلومات إضافية تود إضافتها..."
            rows={4}
            className="bg-white border border-navy-200 rounded-lg resize-none"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={6}>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin ms-2" />
                جاري الإرسال...
              </>
            ) : (
              "إرسال الطلب"
            )}
          </Button>
          <p className="text-xs text-navy-500 text-center mt-3">
            بإرسال هذا النموذج، أوافق على معالجة بياناتي وفقاً لسياسة الخصوصية
          </p>
        </motion.div>
      </form>
    </div>
  );
}
