import React, { useEffect } from 'react';
import {
  ShieldCheck,
  Calendar,
  ChevronLeft,
  ArrowRight,
  Lock,
  Eye,
  Cookie,
  BarChart3,
  Database,
  UserCheck,
  ExternalLink,
  Baby,
  RefreshCw,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

interface PrivacyPageProps {
  onNavigateHome: () => void;
  onNavigateTerms: () => void;
  onContactClick: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({
  onNavigateHome,
  onNavigateTerms,
  onContactClick,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'سياسة الخصوصية | تونافيكس للدهانات';
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-200 py-12 sm:py-20 relative overflow-hidden" dir="rtl">
      {/* Background ambient lighting matching logo */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#0066ff]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="مسار التصفح" className="mb-8">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <li>
              <button
                onClick={onNavigateHome}
                className="hover:text-[#00f0ff] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>الرئيسية</span>
              </button>
            </li>
            <li className="text-[#0066ff]/60">/</li>
            <li className="text-cyan-300 font-semibold" aria-current="page">
              سياسة الخصوصية
            </li>
          </ol>
        </nav>

        {/* Header Banner */}
        <header className="mb-12 p-6 sm:p-10 rounded-3xl bg-[#091438]/95 border border-[#0066ff]/30 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#0052cc] via-[#00c8ff] to-[#ec4899]" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#061e38] border border-[#00c8ff]/40 text-cyan-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-[#00f0ff]" />
              <span>حماية البيانات والخصوصية</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>آخر تحديث: سبتمبر 2026</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            سياسة الخصوصية
          </h1>

          <div className="space-y-2 text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
            <p>
              تلتزم "تونافيكس للدهانات" باحترام خصوصية زوار الموقع وحماية البيانات الشخصية التي يتم جمعها من خلاله وفقًا للأنظمة والقوانين المعمول بها.
            </p>
            <p className="text-slate-300 text-xs sm:text-sm">
              توضح سياسة الخصوصية هذه نوع البيانات التي قد يتم جمعها وكيفية استخدامها وحمايتها.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#0066ff]/20 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#060c24] hover:bg-[#0a1844] text-slate-200 hover:text-white border border-[#0066ff]/30 text-xs font-bold transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 text-[#00f0ff]" />
              <span>العودة إلى الصفحة الرئيسية</span>
            </button>

            <button
              onClick={onNavigateTerms}
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-[#00f0ff] transition-colors cursor-pointer"
            >
              <span>الانتقال إلى شروط وأحكام الاستخدام</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Privacy Sections Container */}
        <article className="space-y-8 text-right">
          
          {/* Section 1 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                البيانات التي قد نجمعها
              </h2>
            </div>
            
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <div>
                <p className="font-semibold text-white mb-2">
                  قد يتم جمع بعض المعلومات عند استخدام الموقع، مثل:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none">
                  {[
                    'الاسم.',
                    'رقم الهاتف.',
                    'البريد الإلكتروني.',
                    'اسم الشركة أو الجهة.',
                    'نوع المنتج أو الخدمة محل الاستفسار.',
                    'محتوى الرسالة أو الطلب.',
                    'أي معلومات يختار المستخدم تقديمها طوعًا من خلال نموذج التواصل.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <p className="font-semibold text-white mb-2">
                  وقد يتم جمع بعض البيانات التقنية تلقائيًا أثناء زيارة الموقع، مثل:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none">
                  {[
                    'نوع الجهاز.',
                    'نوع المتصفح.',
                    'نظام التشغيل.',
                    'عنوان IP عند الضرورة التقنية أو الأمنية.',
                    'الصفحات التي تمت زيارتها.',
                    'وقت وتاريخ الزيارة.',
                    'بيانات الاستخدام والأداء.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                كيفية استخدام البيانات
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p className="font-semibold text-white">
                قد تستخدم الشركة البيانات التي يتم جمعها من أجل:
              </p>
              <ul className="space-y-2 list-none">
                {[
                  'الرد على الاستفسارات والطلبات.',
                  'التواصل مع العملاء أو الجهات المهتمة.',
                  'تقديم معلومات عن المنتجات والخدمات.',
                  'معالجة طلبات عروض الأسعار عند توفرها.',
                  'تحسين الموقع وتجربة المستخدم.',
                  'تحسين الخدمات والمنتجات.',
                  'مراقبة أمن الموقع ومنع إساءة الاستخدام.',
                  'الالتزام بالمتطلبات القانونية والتنظيمية.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                عدم بيع البيانات
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <p className="text-emerald-300 font-bold mb-1">
                  لا تقوم الشركة ببيع البيانات الشخصية للمستخدمين أو تأجيرها لأطراف أخرى لأغراض تسويقية غير مصرح بها.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  وقد تتم مشاركة بعض البيانات مع مزودي خدمات أو جهات أخرى عندما يكون ذلك ضروريًا لتشغيل الموقع أو تقديم الخدمة أو تنفيذ التزام قانوني، وبالقدر اللازم لذلك.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                ملفات تعريف الارتباط Cookies
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                قد يستخدم الموقع ملفات تعريف الارتباط وتقنيات مشابهة لتحسين الأداء وتجربة المستخدم، وفهم كيفية استخدام الموقع، وتوفير بعض الوظائف الفنية.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                يمكن للمستخدم التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح، مع العلم أن تعطيل بعض أنواعها قد يؤثر على بعض وظائف الموقع.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                5
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                أدوات التحليلات
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                قد تستخدم الشركة أدوات تحليلية أو تقنية لفهم أداء الموقع وسلوك الزوار بصورة إجمالية، مثل عدد الزيارات والصفحات الأكثر استخدامًا ومشكلات الأداء.
              </p>
              <p>
                وفي حالة استخدام أي خدمات تحليلية خارجية، فإن معالجة البيانات قد تخضع أيضًا لسياسات الخصوصية الخاصة بمزود الخدمة المعني.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                6
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                حماية البيانات
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                تتخذ الشركة إجراءات فنية وتنظيمية مناسبة للمساعدة في حماية البيانات من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                ومع ذلك، لا يمكن ضمان أن أي نظام إلكتروني سيكون آمنًا بنسبة 100%.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                7
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                الاحتفاظ بالبيانات
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                تحتفظ الشركة بالبيانات الشخصية للمدة اللازمة لتحقيق الأغراض التي جُمعت من أجلها أو للمدة التي تقتضيها المتطلبات القانونية أو التنظيمية أو التشغيلية المعقولة.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                8
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                حقوق المستخدم
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p className="font-semibold text-white">
                بحسب القوانين المعمول بها، قد يكون للمستخدم حقوق تتعلق ببياناته الشخصية، مثل طلب:
              </p>
              <ul className="space-y-2 list-none">
                {[
                  'معرفة البيانات التي تحتفظ بها الشركة عنه.',
                  'تصحيح البيانات غير الدقيقة.',
                  'تحديث بياناته.',
                  'حذف البيانات عندما يكون ذلك مسموحًا قانونًا.',
                  'الاعتراض على بعض أنواع المعالجة.',
                  'سحب الموافقة في الحالات التي تكون فيها المعالجة قائمة على الموافقة.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2 text-xs sm:text-sm text-slate-400">
                يمكن تقديم طلبات الخصوصية من خلال بيانات الاتصال الرسمية للشركة.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                9
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                الروابط الخارجية
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                قد يحتوي الموقع على روابط لمواقع إلكترونية خارجية.
              </p>
              <p>
                لا تتحمل الشركة مسؤولية سياسات الخصوصية أو ممارسات حماية البيانات الخاصة بتلك المواقع، ويُنصح بمراجعة سياسات الخصوصية الخاصة بها بشكل مستقل.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                10
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                خصوصية الأطفال
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                الموقع مخصص للاستخدام التجاري والمهني، وليس موجهًا للأطفال.
              </p>
              <p>
                ولا تهدف الشركة إلى جمع بيانات شخصية من الأطفال عن علم.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                11
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                التعديلات على سياسة الخصوصية
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                قد تقوم الشركة بتحديث سياسة الخصوصية من وقت لآخر لمواكبة التغييرات القانونية أو التقنية أو التشغيلية.
              </p>
              <p className="font-semibold text-cyan-300">
                سيتم نشر النسخة المحدثة على هذه الصفحة مع تحديث تاريخ آخر تعديل.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                12
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                التواصل بشأن الخصوصية
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                لأي استفسار أو طلب متعلق بالخصوصية وحماية البيانات، يمكن التواصل مع "تونافيكس للدهانات" من خلال بيانات الاتصال الرسمية المنشورة على الموقع.
              </p>

              <div className="pt-2">
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0052cc] via-[#00c8ff] to-[#ec4899] hover:brightness-110 text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#0052cc]/30 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>بيانات الاتصال والتواصل الرسمي</span>
                </button>
              </div>
            </div>
          </section>

        </article>

        {/* Footer Navigation Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#091438]/90 border border-[#0066ff]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <button
            onClick={onNavigateTerms}
            className="flex items-center gap-2 text-cyan-300 hover:text-[#00f0ff] font-bold transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>عرض وثيقة "شروط وأحكام الاستخدام"</span>
          </button>

          <button
            onClick={onNavigateHome}
            className="px-4 py-2 rounded-xl bg-[#060c24] hover:bg-[#0a1844] text-slate-200 hover:text-white border border-[#0066ff]/30 font-bold transition-colors cursor-pointer"
          >
            العودة للصفحة الرئيسية
          </button>
        </div>

      </div>
    </div>
  );
};
