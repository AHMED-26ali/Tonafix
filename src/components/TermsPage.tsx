import React, { useEffect } from 'react';
import {
  FileText,
  Calendar,
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  Building,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  Coins,
  Factory,
  Copyright,
  Sparkles,
  ExternalLink,
  HelpCircle,
  Clock,
  Send,
  Scale,
  PhoneCall,
  Lock,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

interface TermsPageProps {
  onNavigateHome: () => void;
  onNavigatePrivacy: () => void;
  onContactClick: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({
  onNavigateHome,
  onNavigatePrivacy,
  onContactClick,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'شروط وأحكام الاستخدام | تونافيكس للدهانات';
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12 sm:py-20 relative overflow-hidden" dir="rtl">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="مسار التصفح" className="mb-8">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <li>
              <button
                onClick={onNavigateHome}
                className="hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>الرئيسية</span>
              </button>
            </li>
            <li className="text-slate-600">/</li>
            <li className="text-cyan-300 font-semibold" aria-current="page">
              شروط وأحكام الاستخدام
            </li>
          </ol>
        </nav>

        {/* Header Banner */}
        <header className="mb-12 p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-pink-500" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 text-xs font-bold">
              <Scale className="w-4 h-4" />
              <span>المستندات القانونية الرسمية</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>آخر تحديث: سبتمبر 2026</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            شروط وأحكام الاستخدام
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            مرحبًا بكم في الموقع الإلكتروني لشركة "تونافيكس للدهانات". باستخدامك هذا الموقع أو تصفحه، فإنك تقر بأنك قرأت وفهمت ووافقت على الالتزام بشروط وأحكام الاستخدام الموضحة أدناه.
          </p>

          <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-bold transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 text-cyan-400" />
              <span>العودة إلى الصفحة الرئيسية</span>
            </button>

            <button
              onClick={onNavigatePrivacy}
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>الانتقال إلى سياسة الخصوصية</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Legal Sections Container */}
        <article className="space-y-8 text-right">
          
          {/* Section 1 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                التعريف بالشركة
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                يُقصد بـ "تونافيكس للدهانات" أو "الشركة" أو "نحن" شركة تونافيكس للدهانات، ويُقصد بـ "الموقع" الموقع الإلكتروني وجميع الصفحات والمحتويات والخدمات المتاحة من خلاله.
              </p>
              <p>
                تختص الشركة بتوفير وعرض المعلومات المتعلقة بمنتجات وحلول الدهانات المتخصصة، بما في ذلك الدهانات النارية والصناعية ودهانات NC، وفقًا للمعلومات والبيانات الفنية المعتمدة المتاحة من الشركة.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                قبول الشروط
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                بدخولك إلى الموقع أو استخدام أي من محتوياته أو خدماته، فإنك توافق على هذه الشروط والأحكام.
              </p>
              <p>
                إذا كنت لا توافق على أي جزء من هذه الشروط، فيرجى التوقف عن استخدام الموقع.
              </p>
              <p>
                يجوز للشركة تعديل هذه الشروط أو تحديثها من وقت لآخر، وتصبح التعديلات نافذة بمجرد نشرها على الموقع.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                استخدام الموقع
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                يُسمح باستخدام الموقع لأغراض مشروعة وبما لا يخالف الأنظمة والقوانين المعمول بها.
              </p>
              <p className="font-semibold text-white">
                ويُحظر استخدام الموقع من أجل:
              </p>
              <ul className="space-y-2 mr-2 list-none">
                {[
                  'محاولة الوصول غير المصرح به إلى أنظمة الموقع أو خوادمه.',
                  'تعطيل الموقع أو التأثير على أدائه أو أمنه.',
                  'نسخ أو إعادة نشر محتوى الموقع دون تصريح.',
                  'استخدام محتوى الموقع لأغراض احتيالية أو مضللة.',
                  'إدخال أو نشر أي محتوى ضار أو فيروسات أو برمجيات خبيثة.',
                  'استخدام الموقع بطريقة قد تضر بالشركة أو بحقوق الغير.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                المعلومات والبيانات الفنية
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                المعلومات المنشورة على الموقع تهدف إلى تقديم معلومات عامة عن منتجات وخدمات الشركة.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-amber-200/90 text-sm space-y-2">
                <p>
                  لا يجوز اعتبار أي معلومات منشورة على الموقع بديلًا عن نشرات البيانات الفنية (TDS) أو نشرات بيانات السلامة (SDS) أو تعليمات التطبيق المعتمدة الخاصة بالمنتج.
                </p>
              </div>
              <p>
                ويجب الرجوع إلى المستندات الفنية الخاصة بالمنتج قبل استخدام أي مادة أو منتج، مع الالتزام بتعليمات التحضير والتطبيق والسلامة والتخزين المقررة لذلك المنتج.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                5
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                المنتجات والأسعار
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                قد تتغير المنتجات والمواصفات والأسعار والتوافر من وقت لآخر دون إشعار مسبق.
              </p>
              <p>
                عرض منتج على الموقع لا يعني بالضرورة أن المنتج متاح في جميع الأوقات أو أن جميع المواصفات أو الأسعار المعروضة نهائية.
              </p>
              <p>
                أي طلب شراء أو عرض سعر أو توريد يخضع للشروط التجارية والاتفاقيات والمستندات الرسمية المعتمدة من الشركة.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                6
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                الاستخدام الصناعي للمنتجات
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                نظرًا لطبيعة منتجات الشركة المتخصصة، فإن اختيار المنتج المناسب يعتمد على طبيعة التطبيق والسطح والظروف التشغيلية ومتطلبات المشروع.
              </p>
              <p>
                لا تتحمل الشركة مسؤولية اختيار منتج بشكل غير صحيح أو استخدامه بطريقة تخالف التعليمات الفنية أو متطلبات السلامة أو المواصفات الفنية المعتمدة.
              </p>
              <p className="font-semibold text-cyan-300">
                يجب على العميل أو المستخدم التأكد من ملاءمة المنتج للتطبيق المقصود قبل الاستخدام.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                7
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                الملكية الفكرية
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                جميع حقوق الملكية الفكرية المتعلقة بالموقع ومحتوياته، بما في ذلك:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2 list-none">
                {[
                  'الشعار والعلامة التجارية.',
                  'النصوص.',
                  'الصور.',
                  'الرسومات.',
                  'التصميمات.',
                  'الملفات.',
                  'عناصر واجهة المستخدم.',
                  'المحتوى التسويقي.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                هي ملك للشركة أو مستخدمة بموجب حقوق أو تراخيص مناسبة، ما لم يذكر خلاف ذلك.
              </p>
              <p>
                ولا يجوز نسخ أو توزيع أو تعديل أو إعادة استخدام أي من هذه المواد دون الحصول على موافقة كتابية مسبقة من الشركة.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                8
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                العلامة التجارية
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                يُعد اسم وشعار "تونافيكس للدهانات" من عناصر الهوية التجارية للشركة، ولا يجوز استخدامهما أو تقليدهما بطريقة توحي بوجود علاقة أو اعتماد أو شراكة غير مصرح بها.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                9
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                الروابط الخارجية
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                قد يحتوي الموقع على روابط إلى مواقع أو منصات خارجية.
              </p>
              <p>
                هذه الروابط قد تكون لأغراض تسهيل الوصول إلى المعلومات أو الخدمات، ولا تعني بالضرورة أن الشركة تؤيد أو تضمن محتوى أو خدمات تلك المواقع.
              </p>
              <p>
                لا تتحمل الشركة مسؤولية محتوى أو سياسات أو ممارسات المواقع الخارجية.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                10
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                دقة المعلومات
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                تبذل الشركة جهودًا معقولة للحفاظ على دقة المعلومات المنشورة، إلا أنها لا تضمن أن جميع المعلومات الموجودة على الموقع ستكون خالية من الأخطاء أو محدثة في جميع الأوقات.
              </p>
              <p>
                يجوز تعديل أو تحديث المحتوى والمواصفات والصفحات دون إشعار مسبق.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                11
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                حدود المسؤولية
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                إلى أقصى حد يسمح به القانون المعمول به، لا تتحمل الشركة مسؤولية أي خسائر أو أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الموقع أو الاعتماد على معلومات منشورة فيه، باستثناء ما لا يجوز استبعاده أو الحد منه قانونًا.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                12
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                توفر الموقع
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                تبذل الشركة جهودًا للحفاظ على تشغيل الموقع واستمرارية الوصول إليه، إلا أنها لا تضمن أن الموقع سيكون متاحًا دون انقطاع أو خاليًا من الأخطاء الفنية.
              </p>
              <p>
                يجوز إجراء أعمال صيانة أو تحديث أو تطوير قد تؤدي إلى توقف مؤقت لبعض أو جميع خدمات الموقع.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                13
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                الطلبات والاستفسارات
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                إرسال نموذج تواصل أو طلب معلومات من خلال الموقع لا يُعد عقد بيع أو أمر شراء أو التزامًا من الشركة بتوفير منتج أو خدمة ما لم يتم تأكيد ذلك رسميًا من الشركة.
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                14
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                القانون الواجب التطبيق
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                تخضع هذه الشروط والأحكام للقوانين والأنظمة المعمول بها في الدولة التي تُسجل فيها الشركة وتزاول نشاطها، ما لم تقضِ القوانين واجبة التطبيق بخلاف ذلك.
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-sm font-black font-mono">
                15
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                التواصل
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed pr-11">
              <p>
                للاستفسارات المتعلقة بهذه الشروط، يمكن التواصل مع الشركة من خلال بيانات الاتصال الرسمية المنشورة في صفحة "تواصل معنا".
              </p>
              
              <div className="pt-2">
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:brightness-110 text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-950/40 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>الانتقال إلى قسم تواصل معنا</span>
                </button>
              </div>
            </div>
          </section>

        </article>

        {/* Footer Navigation Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <button
            onClick={onNavigatePrivacy}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>عرض وثيقة "سياسة الخصوصية"</span>
          </button>

          <button
            onClick={onNavigateHome}
            className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-bold transition-colors cursor-pointer"
          >
            العودة للصفحة الرئيسية
          </button>
        </div>

      </div>
    </div>
  );
};
