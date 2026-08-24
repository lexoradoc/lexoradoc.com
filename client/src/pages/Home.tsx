import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  FileText,
  Landmark,
  MessageCircle,
  PackageCheck,
  ScanSearch,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import ServiceRequestModal from "@/components/ServiceRequestModal";

const WHATSAPP_URL = "https://wa.me/9647844342200";

const requestPaths = [
  {
    status: "ملف جديد - لم يُقدم بعد",
    title: "لدي ملف جديد",
    description: "ابدأ بتجميع المستندات الأساسية وتحديد ما يحتاجه ملفك قبل التقديم.",
    icon: FileText,
  },
  {
    status: "ملف مُقدم ويحتاج مراجعة",
    title: "ملفي يحتاج مراجعة",
    description: "رتّب تفاصيل الملف والنواقص أو الملاحظات التي ظهرت قبل المتابعة.",
    icon: FileSearch,
  },
  {
    status: "استفسار عام",
    title: "أحتاج استفساراً أولياً",
    description: "حدّد نوع البضاعة والمنفذ المتوقع لنوجّهك إلى الخطوة المناسبة.",
    icon: MessageCircle,
  },
];

const services = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "تهيئة ملف ASYCUDA",
    description: "تنظيم البيانات والمستندات اللازمة للبيان المسبق أو النهائي بحسب حالة الملف.",
  },
  {
    icon: ScanSearch,
    number: "02",
    title: "مراجعة الوثائق وHS Code",
    description: "فحص الفاتورة وبوليصة الشحن وشهادة المنشأ وتصنيف البضاعة قبل المتابعة.",
  },
  {
    icon: Landmark,
    number: "03",
    title: "تنظيم ملف الاستيراد",
    description: "ترتيب المستندات ذات الصلة بالاستيراد والتحويل وفق المتطلبات المتاحة للحالة.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "دعم الشركات والمستوردين",
    description: "مسار منظم للملفات المتكررة أو الملفات التي تتطلب متابعة وثائق متعددة.",
  },
];

const documents = [
  "الفاتورة التجارية",
  "بوليصة الشحن",
  "شهادة المنشأ",
  "قائمة التعبئة عند توفرها",
  "أي متطلبات مرتبطة بطبيعة البضاعة",
];

const workflow = [
  {
    number: "01",
    title: "أرسل ملخص الملف",
    description: "تشارك نوع البضاعة والمنفذ وحالة الملف عبر النموذج المنظم أو WhatsApp.",
  },
  {
    number: "02",
    title: "تتحدد المستندات اللازمة",
    description: "نراجع المعلومات الأولية لتوضيح ما يلزم إرساله أو استكماله قبل المعالجة.",
  },
  {
    number: "03",
    title: "تُراجع البيانات والوثائق",
    description: "تُنظم الوثائق وتُراجع تفاصيلها وفق نطاق الخدمة المتفق عليه.",
  },
  {
    number: "04",
    title: "تتابع الخطوة التالية",
    description: "يُسلّم لك الملف أو توضح الملاحظات والإجراء التالي بحسب حالته.",
  },
];

const faqs = [
  {
    question: "ما المعلومات التي أحتاجها لبدء الطلب؟",
    answer:
      "يكفي البدء بالاسم ونوع البضاعة والمنفذ المتوقع وحالة الملف. ستتضح المستندات المطلوبة بعد مراجعة المعلومات الأولية.",
  },
  {
    question: "هل يمكن إرسال المستندات عبر WhatsApp؟",
    answer:
      "نعم. بعد تعبئة النموذج يفتح WhatsApp برسالة منظمة، ويمكنك من هناك متابعة الإرسال وفق ما يطلبه مسار ملفك.",
  },
  {
    question: "هل كل ملف يحتاج المستندات نفسها؟",
    answer:
      "لا. تختلف المتطلبات بحسب طبيعة البضاعة والمنفذ وحالة الملف، لذلك يبدأ العمل دائماً بتحديد الحالة بدقة.",
  },
  {
    question: "هل Lexora Doc جهة حكومية أو جهة اعتماد؟",
    answer:
      "لا. Lexora Doc تقدم خدمات إعداد وتنظيم ومراجعة الملفات والمستندات، ولا تمثل أي جهة حكومية أو تصدر اعتماداً رسمياً.",
  },
];

function FAQItem({ question, answer }: (typeof faqs)[number]) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full py-5 flex items-center justify-between gap-6 text-right"
      >
        <span className="font-bold text-slate-900 text-base">{question}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-[#B8972A] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-5 text-sm leading-7 text-slate-600 max-w-3xl">{answer}</p>}
    </div>
  );
}

export default function Home() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestStatus, setRequestStatus] = useState("استفسار عام");

  useEffect(() => {
    document.title = "Lexora Doc | إدارة ملفات الاستيراد وASYCUDA في العراق";
  }, []);

  const openRequest = (status = "استفسار عام") => {
    setRequestStatus(status);
    setShowRequestModal(true);
  };

  return (
    <div dir="rtl" className="bg-[#F7F8FC] text-slate-900">
      <section className="relative overflow-hidden bg-[#101B52] pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute -top-48 -left-32 h-[34rem] w-[34rem] rounded-full bg-[#B8972A]/20 blur-3xl" />
        <div className="container relative z-10">
          <div className="grid gap-12 xl:grid-cols-[1.15fr_.85fr] xl:items-end">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-[#D9BB5A]/45 bg-white/5 px-4 py-2 text-xs font-bold tracking-wide text-[#E5C96C]">
              <FileCheck2 className="h-4 w-4" />
              خدمات ASYCUDA وإدارة ملفات الاستيراد في العراق
            </div>
            <p className="mb-4 text-xl font-bold text-[#E5C96C] md:text-2xl">Lexora Doc</p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.22] text-white md:text-6xl">
              من الوثيقة إلى بيان <span className="text-[#E5C96C]">ASYCUDA</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              إعداد ومراجعة منظمة لملفات الاستيراد، وتشخيص للنواقص قبل تجهيز البيان وفق متطلبات ASYCUDA والتعليمات ذات الصلة.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => openRequest("استفسار عام")}
                className="h-auto bg-[#C4A137] px-7 py-4 text-base font-bold text-[#101B52] hover:bg-[#D7B64D]"
              >
                <FileText className="h-5 w-5" />
                ابدأ طلباً منظماً
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-4 text-base font-bold text-white no-underline transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5" />
                تواصل عبر WhatsApp
              </a>
            </div>
          </div>
          <aside className="hidden border border-white/20 bg-[#0A123D]/65 p-5 text-right xl:block">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="text-xs font-bold tracking-[.18em] text-[#E5C96C]">LEXORA DOC / FILE</span>
              <FileCheck2 className="h-5 w-5 text-[#E5C96C]" />
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/15 mt-5">
              <div className="bg-[#101B52] p-4"><span className="block text-[10px] text-slate-400">DOCUMENT</span><span className="mt-2 block text-base font-extrabold text-white">الوثائق التجارية</span></div>
              <div className="bg-[#101B52] p-4"><span className="block text-[10px] text-slate-400">CLASSIFICATION</span><span className="mt-2 block text-base font-extrabold text-white">HS Code</span></div>
              <div className="bg-[#101B52] p-4"><span className="block text-[10px] text-slate-400">STATUS</span><span className="mt-2 block text-base font-extrabold text-white">حالة الملف</span></div>
              <div className="bg-[#101B52] p-4"><span className="block text-[10px] text-slate-400">NEXT STEP</span><span className="mt-2 block text-base font-extrabold text-[#E5C96C]">ASYCUDA</span></div>
            </div>
            <div className="mt-5 border-t border-dashed border-white/25 pt-4 text-xs leading-6 text-slate-300">كل طلب يبدأ بتحديد حالة الملف والمستندات المتاحة، ثم تتضح الخطوة التالية.</div>
          </aside>
          </div>
          <div className="mt-16 grid max-w-5xl grid-cols-1 border-t border-white/15 md:grid-cols-3">
            <div className="border-b border-white/15 px-0 py-5 md:border-b-0 md:border-l md:px-6"><span className="block text-sm font-bold text-[#E5C96C]">منظّم</span><span className="mt-1 block text-sm text-slate-300">ابدأ ببيانات مختصرة مفيدة لملفك</span></div>
            <div className="border-b border-white/15 px-0 py-5 md:border-b-0 md:border-l md:px-6"><span className="block text-sm font-bold text-[#E5C96C]">واضح</span><span className="mt-1 block text-sm text-slate-300">اعرف ما تحتاجه قبل إرسال المستندات</span></div>
            <div className="px-0 py-5 md:px-6"><span className="block text-sm font-bold text-[#E5C96C]">مباشر</span><span className="mt-1 block text-sm text-slate-300">ينتقل الطلب إلى WhatsApp برسالة مرتبة</span></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-10 flex flex-col gap-4 border-r-4 border-[#C4A137] pr-5 md:flex-row md:items-end md:justify-between">
            <div><p className="text-sm font-bold text-[#B8972A]">اختر نقطة البداية</p><h2 className="mt-2 text-3xl font-extrabold md:text-4xl">ما حالة ملفك الآن؟</h2></div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">اختر الحالة الأقرب لملفك، وسيفتح نموذج الطلب بالمعلومة المناسبة جاهزة.</p>
          </div>
          <div className="grid gap-px overflow-hidden bg-slate-200 md:grid-cols-3">
            {requestPaths.map((path) => {
              const Icon = path.icon;
              return <button key={path.title} type="button" onClick={() => openRequest(path.status)} className="group bg-white p-7 text-right transition-colors hover:bg-[#F7F4E9]"><div className="flex items-start justify-between gap-4"><Icon className="h-7 w-7 text-[#B8972A]" /><span className="text-sm font-bold text-[#B8972A] group-hover:translate-x-1 transition-transform">ابدأ ←</span></div><h3 className="mt-10 text-xl font-extrabold">{path.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{path.description}</p></button>;
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="text-sm font-bold text-[#B8972A]">نطاق الخدمة</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">الخدمة تبدأ من ملف مرتب، لا من وعود عامة.</h2><p className="mt-5 max-w-md text-sm leading-7 text-slate-600">نغطي الخطوات الوثائقية والتنظيمية التي تساعدك على الوصول إلى الإجراء التالي بصورة أوضح.</p><Link href="/services" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#101B52] no-underline hover:text-[#B8972A]">استعرض تفاصيل الخدمات <ArrowLeft className="h-4 w-4" /></Link></div>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {services.map((service) => { const Icon = service.icon; return <article key={service.number} className="min-h-56 bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-extrabold text-[#C4A137]">{service.number}</span><Icon className="h-6 w-6 text-[#101B52]" /></div><h3 className="mt-10 text-lg font-extrabold">{service.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p></article>; })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EDEFF7] py-20">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="border border-[#101B52]/15 bg-white p-8 md:p-10"><p className="text-sm font-bold text-[#B8972A]">قائمة أولية</p><h2 className="mt-3 text-3xl font-extrabold">ما الذي يُفيد إرساله؟</h2><p className="mt-4 text-sm leading-7 text-slate-600">هذه قائمة مبدئية فقط. قد تختلف الوثائق المطلوبة باختلاف البضاعة والمنفذ وحالة الملف.</p><ul className="mt-8 space-y-4">{documents.map((item) => <li key={item} className="flex items-center gap-3 text-sm font-semibold"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#B8972A]" />{item}</li>)}</ul></div>
          <div><p className="text-sm font-bold text-[#B8972A]">مسار واضح</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">كيف ينتقل طلبك من المعلومة إلى الخطوة التالية؟</h2><div className="mt-8 space-y-0 border-t border-[#101B52]/15">{workflow.map((step) => <div key={step.number} className="grid grid-cols-[54px_1fr] gap-4 border-b border-[#101B52]/15 py-5"><span className="text-xl font-extrabold text-[#C4A137]">{step.number}</span><div><h3 className="font-extrabold">{step.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p></div></div>)}</div></div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div><p className="text-sm font-bold text-[#B8972A]">للشركات والمستوردين</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">ملف أوضح في كل مرة تحتاج فيها إلى التحرك.</h2><p className="mt-5 max-w-md text-sm leading-7 text-slate-600">سواء كان الاستيراد متكرراً أو الملف في مرحلة مراجعة، يبدأ التواصل بمعلومات تحوّل الاستفسار إلى مسار عمل محدد.</p><Button onClick={() => openRequest("استفسار عام")} className="mt-8 h-auto bg-[#101B52] px-6 py-3 font-bold hover:bg-[#1E2C75]"><Send className="h-4 w-4" />ابدأ من حالة الملف</Button></div>
          <div className="border-y border-slate-200"><div className="grid grid-cols-2 gap-px bg-slate-200"><div className="bg-[#F7F8FC] p-6"><p className="text-sm font-bold text-[#101B52]">مواد غذائية</p><p className="mt-2 text-xs leading-6 text-slate-500">متطلبات تختلف بحسب طبيعة البضاعة.</p></div><div className="bg-[#F7F8FC] p-6"><p className="text-sm font-bold text-[#101B52]">معدات وقطع غيار</p><p className="mt-2 text-xs leading-6 text-slate-500">تبدأ المراجعة من الوثائق والتصنيف.</p></div><div className="bg-[#F7F8FC] p-6"><p className="text-sm font-bold text-[#101B52]">شركات ومقاولات</p><p className="mt-2 text-xs leading-6 text-slate-500">تنظيم المستندات للملفات المتعددة.</p></div><div className="bg-[#F7F8FC] p-6"><p className="text-sm font-bold text-[#101B52]">أجهزة وبضائع متنوعة</p><p className="mt-2 text-xs leading-6 text-slate-500">تحديد المطلوب بحسب الحالة.</p></div></div></div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="text-sm font-bold text-[#B8972A]">أسئلة شائعة</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">اعرف الخطوة الأولى قبل إرسال ملفك.</h2><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#101B52] no-underline hover:text-[#B8972A]"><MessageCircle className="h-4 w-4" />لدي سؤال مختلف</a></div>
          <div className="border-t border-slate-200">{faqs.map((faq) => <FAQItem key={faq.question} {...faq} />)}</div>
        </div>
      </section>

      <section className="bg-[#101B52] py-20">
        <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="text-sm font-bold text-[#E5C96C]">Lexora Doc</p><h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">ابدأ بملف مرتب، وخذ الخطوة التالية بوضوح.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">املأ التفاصيل الأولية، ثم تنتقل إلى WhatsApp برسالة جاهزة ومنظمة لمتابعة الطلب.</p></div><Button onClick={() => openRequest("استفسار عام")} className="h-auto bg-[#C4A137] px-7 py-4 font-bold text-[#101B52] hover:bg-[#D7B64D]"><PackageCheck className="h-5 w-5" />ابدأ طلباً منظماً</Button></div>
      </section>

      <ServiceRequestModal open={showRequestModal} onClose={() => setShowRequestModal(false)} initialFileStatus={requestStatus} />
    </div>
  );
}
