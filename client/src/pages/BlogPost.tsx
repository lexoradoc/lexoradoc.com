import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { blogPosts } from "@/data/blogData";
import { Calendar, ArrowRight, Tag, MessageCircle, ArrowLeft, FileText, CreditCard } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/9647844342200";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function ArticleContent({ content }: { content: string }) {
  return (
    <article className="space-y-6 text-gray-700 text-base leading-8">
      {content.split(/\n\s*\n/).map((block, index) => {
        const value = block.trim();
        if (!value) return null;
        if (value.startsWith("## ")) {
          return <h2 key={index} className="pt-5 text-2xl font-extrabold text-[#101B52]">{value.slice(3)}</h2>;
        }
        if (value.startsWith("### ")) {
          return <h3 key={index} className="pt-3 text-xl font-extrabold text-[#101B52]">{value.slice(4)}</h3>;
        }
        if (value.split("\n").every((line) => line.startsWith("- "))) {
          return <ul key={index} className="space-y-2 pr-5">{value.split("\n").map((line) => <li key={line} className="list-disc pr-1">{line.slice(2)}</li>)}</ul>;
        }
        return <p key={index}>{value.replace(/\*\*/g, "")}</p>;
      })}
    </article>
  );
}

export default function BlogPost() {
  const params = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">المقال غير موجود</h1>
          <p className="text-gray-600 mb-6">عذراً، لم نتمكن من العثور على المقال المطلوب.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D2F8F] text-white rounded-xl font-semibold no-underline hover:bg-[#232570] transition-all"
          >
            <ArrowRight className="w-4 h-4" />
            العودة للمدونة
          </Link>
        </div>
      </div>
    );
  }

  // مقالات مقترحة
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#2D2F8F]/5 to-white">
        <div className="container relative z-10 max-w-3xl">
          <motion.div initial="hidden" animate="visible">
            {/* Back Link */}
            <motion.div variants={fadeUp} custom={0} className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#2D2F8F] font-semibold text-sm no-underline hover:gap-3 transition-all"
              >
                <ArrowRight className="w-4 h-4" />
                العودة للمدونة
              </Link>
            </motion.div>

            {/* Category */}
            <motion.span
              variants={fadeUp}
              custom={1}
              className="inline-block px-3 py-1 bg-[#2D2F8F]/10 text-[#2D2F8F] text-xs font-semibold rounded-full mb-4"
            >
              {post.category}
            </motion.span>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              custom={2}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Meta */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex items-center gap-4 text-sm text-gray-500"
            >
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString("ar-IQ")}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-none"
          >
            <ArticleContent content={post.content} />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                >
                  <Tag className="w-3.5 h-3.5" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Internal Links - روابط داخلية للخدمات والأسعار */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1.5}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <Link href="/services" className="no-underline">
              <div className="group flex items-center gap-4 p-5 bg-gradient-to-br from-[#2D2F8F]/5 to-white rounded-xl border border-[#2D2F8F]/15 hover:border-[#2D2F8F]/40 hover:shadow-md transition-all">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2D2F8F]/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#2D2F8F]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#2D2F8F] transition-colors">تعرف على خدماتنا</h4>
                  <p className="text-gray-500 text-xs mt-0.5">مراجعة الملفات، ASYCUDA، الامتثال</p>
                </div>
                <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-[#2D2F8F] ms-auto transition-colors" />
              </div>
            </Link>
            <Link href="/pricing" className="no-underline">
              <div className="group flex items-center gap-4 p-5 bg-gradient-to-br from-[#B8972A]/5 to-white rounded-xl border border-[#B8972A]/15 hover:border-[#B8972A]/40 hover:shadow-md transition-all">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#B8972A]/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[#B8972A]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#B8972A] transition-colors">الأسعار والباقات</h4>
                  <p className="text-gray-500 text-xs mt-0.5">باقات مراجعة وتقديم الملفات</p>
                </div>
                <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-[#B8972A] ms-auto transition-colors" />
              </div>
            </Link>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="mt-8 p-8 bg-gradient-to-br from-[#2D2F8F]/5 to-white rounded-2xl border border-[#2D2F8F]/20 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">هل تحتاج مساعدة في ملفك؟</h3>
            <p className="text-gray-600 text-sm mb-6">
              تواصل معنا عبر واتساب وسنساعدك في مراجعة وتجهيز ملفك باحترافية
            </p>
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.id}`} className="no-underline">
                  <div className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-[#2D2F8F]/30 transition-all">
                    <span className="inline-block px-2 py-0.5 bg-[#2D2F8F]/10 text-[#2D2F8F] text-xs font-semibold rounded mb-3">
                      {related.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2D2F8F] transition-colors text-sm leading-tight">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-xs line-clamp-2">{related.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
