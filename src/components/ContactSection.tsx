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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client response without external network dependence
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const randomRef = 'TNF-' + Math.floor(100000 + Math.random() * 900000);
      setRefNumber(randomRef);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
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
                    <div className="text-slate-400 text-[11px]">الشركة المصنعة:</div>
                    <div className="font-bold text-white text-sm sm:text-base mt-0.5">
                      {companyInfo.name}
                    </div>
                  </div>
                </div>

                {/* Phone Placeholder */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#060c24] border border-[#0066ff]/25">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-[#061e38] text-[#00f0ff] border border-[#00c8ff]/40 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">الهاتف والخط المباشر:</div>
                      <div className="font-semibold text-cyan-300 dir-ltr text-right mt-0.5 font-mono">
                        {companyInfo.phone}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, '')}`}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-300 bg-[#081b3d] hover:bg-[#0c2859] border border-[#00c8ff]/40 transition-colors shrink-0"
                  >
                    اتصال هاتفي
                  </a>
                </div>

                {/* WhatsApp Placeholder */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#060c24] border border-[#0066ff]/25">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-[#06201a] text-emerald-400 border border-emerald-800/40 shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">خدمة الواتساب للمشروعات:</div>
                      <div className="font-semibold text-emerald-300 dir-ltr text-right mt-0.5 font-mono">
                        {companyInfo.whatsappDisplay}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                      'السلام عليكم، استفسار بخصوص دهانات تونافيكس الصناعية والمشاريع'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-400 bg-[#06201a] hover:bg-[#09352c] border border-emerald-700/50 transition-colors shrink-0"
                  >
                    محادثة واتساب
                  </a>
                </div>

                {/* Email Placeholder */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#060c24] border border-[#0066ff]/25">
                  <div className="p-2 rounded-lg bg-[#2e0820] text-[#ec4899] border border-[#ec4899]/40 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">البريد الإلكتروني التجاري:</div>
                    <div className="font-semibold text-slate-200 mt-0.5 font-mono">
                      {companyInfo.email}
                    </div>
                  </div>
                </div>

                {/* Address Placeholder */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#060c24] border border-[#0066ff]/25">
                  <div className="p-2 rounded-lg bg-[#0a1844] text-[#38bdf8] border border-[#0066ff]/40 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">الموقع والمصنع:</div>
                    <div className="font-medium text-slate-300 mt-0.5">
                      {companyInfo.address}
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#060c24] border border-[#0066ff]/25">
                  <div className="p-2 rounded-lg bg-[#261504] text-amber-400 border border-amber-800/40 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">مواعيد العمل الرسمية:</div>
                    <div className="font-medium text-slate-300 mt-0.5">
                      {companyInfo.workingHours}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Maps Visual Interactive Placeholder */}
            <div className="p-5 rounded-2xl bg-[#091438]/90 border border-[#0066ff]/30 text-right space-y-3 shadow-lg">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#00f0ff]" />
                  <span>موقع المنشأة الصناعية (Google Maps)</span>
                </span>
                <span className="text-[11px] text-cyan-400 font-mono">[خريطة تفاعلية]</span>
              </div>

              {/* Map Placeholder Canvas */}
              <div className="h-44 w-full rounded-xl bg-[#060c24] border border-[#0066ff]/30 relative overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-[#061e38] border border-[#00c8ff]/50 flex items-center justify-center text-[#00f0ff] mb-2 shadow-lg">
                  <MapPin className="w-5 h-5 animate-bounce" />
                </div>
                <div className="text-sm font-bold text-white">منطقة المصانع والتوزيع</div>
                <div className="text-xs text-slate-300 mt-1 max-w-xs">
                  جمهورية مصر العربية — سيتم ربط الإحداثيات الدقيقة لمقر ومصنع تونافيكس فور تزويدها
                </div>
                <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-[#060c24]/50 to-[#060c24] pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#091438]/95 border border-[#0066ff]/30 shadow-2xl backdrop-blur-md text-right">
              
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#061e38] border-2 border-[#00f0ff] flex items-center justify-center mx-auto text-[#00f0ff] shadow-lg shadow-[#00f0ff]/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">
                      تم استلام طلبكم بنجاح
                    </h3>
                    <p className="text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
                      شكراً لتواصلكم مع <strong className="text-[#00f0ff] font-bold">{companyInfo.name}</strong>. سيقوم الفريق الفني والتجاري بالتواصل معكم خلال 24 ساعة عمل لتلبية استفساركم الفني.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#060c24] border border-[#0066ff]/30 max-w-sm mx-auto">
                    <span className="text-xs text-slate-400 block">رقم مرجع الطلب:</span>
                    <span className="text-base font-mono font-bold text-[#00f0ff] tracking-wider">
                      {refNumber}
                    </span>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-[#0a1844] hover:bg-[#0052cc]/40 border border-[#0066ff]/30 transition-colors cursor-pointer"
                  >
                    إرسال استفسار آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">
                      طلب استشارة ومواصفات فنية
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      يرجى ملء النموذج أدناه وسيوافيكم مهندسونا بالتفاصيل والأسعار المناسبة لحجم أعمالكم.
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
                        رقم الهاتف / الموبايل <span className="text-[#ec4899]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="01XXXXXXXXX"
                        className="w-full bg-[#060c24] border border-[#0066ff]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00c8ff] transition-colors dir-ltr text-right"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200 block">
                        البريد الإلكتروني <span className="text-[#ec4899]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-[#060c24] border border-[#0066ff]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00c8ff] transition-colors dir-ltr text-right"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200 block">
                        اسم المنشأة / المصنع / الورشة
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="شركة الأعمال الهندسية..."
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
                      تفاصيل المشروع أو الرسالة <span className="text-[#ec4899]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="يرجى ذكر نوع السطح المعدني، المساحة التقريبية، متطلبات بيئة التشغيل أو زمن مقاومة الحريق المطلوب..."
                      className="w-full bg-[#060c24] border border-[#0066ff]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00c8ff] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden py-4 rounded-xl font-black text-sm sm:text-base text-white shadow-xl shadow-[#0052cc]/30 active:scale-98 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#0052cc] via-[#00c8ff] to-[#ec4899] group-hover:brightness-110 transition-all"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <span>جاري إرسال الطلب...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>إرسال الطلب إلى الفريق الفني</span>
                        </>
                      )}
                    </span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-slate-400 text-[11px] pt-1">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>نحافظ على سرية بيانات مشاريعكم وعروض الأسعار الصناعية.</span>
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
