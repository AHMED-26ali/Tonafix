import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building,
  HelpCircle,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialProductType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProductType = 'fire',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    productType: initialProductType,
    companyName: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [whatsappDirectUrl, setWhatsappDirectUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const productTypeLabels: Record<string, string> = {
      fire: 'الدهانات النارية والمقاومة للحريق (Fire-Retardant)',
      industrial: 'الدهانات الصناعية ومقاومة التآكل والصدأ',
      nc: 'دهانات النيتروسليلوز سريعة الجفاف (دهانات NC)',
      consulting: 'طلب استشارة فنية عامة وتجهيز أسطح',
    };

    const productLabel = productTypeLabels[formData.productType] || formData.productType;

    const messageLines = [
      'السلام عليكم ورحمة الله وبركاته، لدي طلب استشارة وعرض سعر من موقع تونافيكس للدهانات:',
      `👤 *الاسم:* ${formData.fullName}`,
      `📱 *رقم الهاتف:* ${formData.phone}`,
      formData.email ? `📧 *البريد الإلكتروني:* ${formData.email}` : '',
      formData.companyName ? `🏢 *المنشأة / المصنع:* ${formData.companyName}` : '',
      `🎨 *المنتج أو النظام المطلوب:* ${productLabel}`,
      `📝 *تفاصيل الرسالة والمشروع:* \n${formData.message}`,
    ]
      .filter((line) => line && line.trim().length > 0)
      .join('\n\n');

    const fullWhatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(messageLines)}`;
    setWhatsappDirectUrl(fullWhatsappUrl);

    // Open WhatsApp chat directly in a new tab
    window.open(fullWhatsappUrl, '_blank');

    setIsSubmitting(false);
    setSubmitted(true);
    const randomRef = 'TNF-' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(randomRef);
  };

  const handleReset = () => {
    setSubmitted(false);
    setWhatsappDirectUrl('');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      productType: 'fire',
      companyName: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#060b1e] border-t border-[#0066ff]/25 relative overflow-hidden">
      {/* Background glow matching logo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0066ff]/15 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ec4899]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0a1844] border border-[#00c8ff]/40 text-cyan-300 text-xs font-bold mb-3 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>طلب عروض الأسعار والدعم الفني</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            تواصل مع فريق تونافيكس للدهانات
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
            يسعد مهندسونا بتقديم الاستشارات الفنية، حساب معدلات التغطية، وتوفير عينات واختبارات معملية للمشروعات الإنشائية والصناعية الكبرى.
          </p>
        </div>

        {/* 2-Column Layout: Contact Information + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Map Placeholder Column */}
          <div className="lg:col-span-5 space-y-6 text-right">
            
            <div className="p-6 rounded-2xl bg-[#091438]/90 border border-[#0066ff]/30 space-y-5 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Building className="w-5 h-5 text-[#00f0ff]" />
                <span>بيانات التواصل الرسمية</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Company Name */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#060c24] border border-[#0066ff]/25">
                  <div className="p-2 rounded-lg bg-[#0a1844] text-[#38bdf8] border border-[#0066ff]/40 shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">اسم الشركة:</div>
                    <div className="font-bold text-white text-sm sm:text-base mt-0.5">
                      {companyInfo.name}
                    </div>
                  </div>
                </div>

                {/* Direct Phone Call Block */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#060c24] border border-[#0066ff]/35 hover:border-[#00c8ff]/60 transition-all gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#061e38] text-[#00f0ff] border border-[#00c8ff]/40 shrink-0 shadow-md shadow-[#00c8ff]/10">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-medium">الهاتف والخط المباشر:</div>
                      <a
                        href={companyInfo.phoneTel}
                        className="font-bold text-cyan-300 hover:text-white dir-ltr text-right mt-0.5 font-mono text-base tracking-wider block transition-colors"
                        title="انقر للاتصال المباشر"
                      >
                        {companyInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <a
                    href={companyInfo.phoneTel}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#0052cc] to-[#0099ff] hover:from-[#0066ff] hover:to-[#00c8ff] shadow-md shadow-[#0066ff]/30 transition-all active:scale-95 shrink-0 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>اتصال هاتفي مباشر</span>
                  </a>
                </div>

                {/* Direct WhatsApp Chat Block */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#060c24] border border-emerald-500/35 hover:border-emerald-400/60 transition-all gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#06201a] text-emerald-400 border border-emerald-600/40 shrink-0 shadow-md shadow-emerald-500/10">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-medium">خدمة الواتساب للمشروعات:</div>
                      <a
                        href={companyInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-emerald-300 hover:text-white dir-ltr text-right mt-0.5 font-mono text-base tracking-wider block transition-colors"
                        title="انقر لفتح محادثة واتساب فورية"
                      >
                        {companyInfo.whatsappDisplay}
                      </a>
                    </div>
                  </div>
                  <a
                    href={companyInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-md shadow-emerald-600/30 transition-all active:scale-95 shrink-0 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>محادثة واتساب فورية</span>
                  </a>
                </div>

                {/* Email Block */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#060c24] border border-[#0066ff]/25 hover:border-[#ec4899]/50 transition-all gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#2e0820] text-[#ec4899] border border-[#ec4899]/40 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-medium">البريد الإلكتروني التجاري:</div>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="font-bold text-slate-200 hover:text-pink-300 mt-0.5 font-mono text-sm sm:text-base block transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-200 hover:text-white bg-[#1a1136] hover:bg-[#26154d] border border-[#ec4899]/40 transition-colors shrink-0"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#ec4899]" />
                    <span>مراسلة عبر الإيميل</span>
                  </a>
                </div>

                {/* Address Block */}
                <a
                  href={companyInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#060c24] border border-[#0066ff]/25 hover:border-cyan-400/50 transition-colors group cursor-pointer block"
                  title="فتح الموقع في خرائط Google"
                >
                  <div className="p-2.5 rounded-lg bg-[#0a1844] text-[#38bdf8] border border-[#0066ff]/40 shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
                      <span>مقر الشركة والموقع:</span>
                      <span className="text-[10px] text-cyan-400 font-normal underline">(عرض على الخريطة)</span>
                    </div>
                    <div className="font-bold text-white mt-1 leading-relaxed text-sm group-hover:text-cyan-300 transition-colors">
                      {companyInfo.address}
                    </div>
                  </div>
                </a>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#060c24] border border-[#0066ff]/25">
                  <div className="p-2.5 rounded-lg bg-[#261504] text-amber-400 border border-amber-800/40 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-medium">مواعيد العمل الرسمية:</div>
                    <div className="font-bold text-amber-300 mt-1 text-sm">
                      {companyInfo.workingHours}
                    </div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      خدمة الاستفسارات الفنية والمبيعات متاحة طوال ساعات العمل الرسمية
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#091438]/95 border border-[#0066ff]/30 shadow-2xl backdrop-blur-md text-right">
              
              {submitted ? (
                <div className="py-10 px-4 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#06201a] border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20 animate-pulse">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">
                      تم تجهيز رسالتكم ونقلها للواتساب بنجاح!
                    </h3>
                    <p className="text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
                      شكراً لتواصلكم مع <strong className="text-emerald-400 font-bold">{companyInfo.name}</strong>. تم فتح محادثة الواتساب المباشرة متضمنة كافة تفاصيل طلبكم لمتابعتها فوراً مع المهندس المختص.
                    </p>
                  </div>
                  
                  {whatsappDirectUrl && (
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>فتح محادثة الواتساب مجدداً</span>
                      </a>
                    </div>
                  )}

                  <div className="p-3.5 rounded-xl bg-[#060c24] border border-[#0066ff]/30 max-w-xs mx-auto">
                    <span className="text-xs text-slate-400 block">رقم مرجع الطلب:</span>
                    <span className="text-base font-mono font-bold text-[#00f0ff] tracking-wider">
                      {refNumber}
                    </span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-[#0a1844] hover:bg-[#0052cc]/40 border border-[#0066ff]/30 transition-colors cursor-pointer"
                  >
                    إرسال استفسار آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-2">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>تحويل مباشر لمحادثة الواتساب الرسمية</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-1">
                      طلب استشارة ومواصفات فنية
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      املأ بيانات المشروع أدناه وسيتم تحويل طلبك مباشرة إلى محادثة واتساب فورية مع الفريق الفني والهندسي.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200 block">
                        الاسم بالكامل <span className="text-[#ec4899]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="المهندس / مدير المشتريات..."
                        className="w-full bg-[#060c24] border border-[#0066ff]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00c8ff] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200 block">
                        رقم الهاتف / الجوال <span className="text-[#ec4899]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05XXXXXXXX"
                        className="w-full bg-[#060c24] border border-[#0066ff]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00c8ff] transition-colors dir-ltr text-right font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200 block">
                        البريد الإلكتروني (اختياري)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-[#060c24] border border-[#0066ff]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00c8ff] transition-colors dir-ltr text-right"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200 block">
                        اسم المنشأة / الشركة / الجهة
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="اسم الشركة أو المؤسسة أو المشروع..."
                        className="w-full bg-[#060c24] border border-[#0066ff]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00c8ff] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Product Type Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-200 block">
                      نوع المنتج أو النظام المطلوب <span className="text-[#ec4899]">*</span>
                    </label>
                    <select
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      className="w-full bg-[#060c24] border border-[#0066ff]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00c8ff] transition-colors"
                    >
                      <option value="fire">الدهانات النارية والمقاومة للحريق (Fire-Retardant)</option>
                      <option value="industrial">الدهانات الصناعية ومقاومة التآكل والصدأ</option>
                      <option value="nc">دهانات النيتروسليلوز سريعة الجفاف (دهانات NC)</option>
                      <option value="consulting">طلب استشارة فنية عامة وتجهيز أسطح</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-200 block">
                      تفاصيل الرسالة أو المشروع <span className="text-[#ec4899]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="يرجى ذكر نوع السطح المعدني أو الخشبي، المساحة التقريبية، متطلبات بيئة التشغيل أو زمن مقاومة الحريق المطلوب..."
                      className="w-full bg-[#060c24] border border-[#0066ff]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00c8ff] transition-colors"
                    />
                  </div>

                  {/* Submit Button - WhatsApp Direct */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden py-4 rounded-xl font-black text-sm sm:text-base text-white shadow-xl shadow-emerald-500/25 active:scale-98 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-[#0099ff] group-hover:brightness-110 transition-all"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2.5">
                      <MessageSquare className="w-5 h-5 text-white" />
                      <span>إرسال الرسالة والتحويل إلى الواتساب مباشرة</span>
                    </span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-slate-300 text-xs pt-1">
                    <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>سيتم نقلك فوراً لمحادثة واتساب الرسمية مع نص رسالتك كاملاً لمتابعتها فوراً.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
