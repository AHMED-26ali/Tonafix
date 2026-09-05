import heroBg from '../assets/images/tonavix_hero_bg_1788404070225.jpg';
import fireCoatingImg from '../assets/images/tonavix_fire_coating_1788404085121.jpg';
import indCoatingImg from '../assets/images/tonavix_ind_coating_1788404100984.jpg';
import ncCoatingImg from '../assets/images/tonavix_nc_coating_1788404115208.jpg';
const logoImgUrl = 'https://i.pinimg.com/736x/40/96/e4/4096e47c8f10011b3a7e07b49932a78f.jpg';

import { ProductItem, IndustryItem, TechnicalDocument } from '../types';

export const companyAssets = {
  logo: logoImgUrl,
  heroBg,
  fireCoating: fireCoatingImg,
  indCoating: indCoatingImg,
  ncCoating: ncCoatingImg,
};

export const companyInfo = {
  name: 'تونافيكس للدهانات',
  nameEn: 'Tonavix Industrial Coatings',
  tagline: 'حلول متخصصة للدهانات النارية والصناعية ودهانات NC',
  description:
    'شركة رائدة متخصصة في توفير وتوريد أنظمة الطلاء والدهانات الصناعية المتقدمة، وأنظمة الحماية من الحريق، ودهانات NC ذات الأداء العالي للمنشآت والمشاريع والهياكل المعدنية والورش المتخصصة في المملكة العربية السعودية والشرق الأوسط.',
  country: 'المملكة العربية السعودية',
  region: 'المنطقة الشمالية',
  city: 'تبوك',
  address: 'المملكة العربية السعودية - المنطقة الشمالية تبوك - المدينة الصناعية الجديدة',
  phone: '00966566387047',
  phoneDisplay: '+966 56 638 7047',
  phoneTel: 'tel:00966566387047',
  whatsapp: '966566387047',
  whatsappDisplay: '+966 56 638 7047',
  whatsappUrl: 'https://wa.me/966566387047',
  email: 'tonavex2026@gmail.com',
  salesEmail: 'tonavex2026@gmail.com',
  workingHours: 'يومياً من الساعة 9:00 صباحاً إلى 7:00 مساءً (ما عدا الجمعة)',
  workingHoursShort: 'السبت – الخميس: 9:00 ص – 7:00 م (الجمعة مغلق)',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9+%D8%AA%D8%A8%D9%88%D9%83',
};

export const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'منتجاتنا', href: '#products' },
  { label: 'الدهانات النارية', href: '#fire-paints' },
  { label: 'الدهانات الصناعية', href: '#industrial-paints' },
  { label: 'دهانات NC', href: '#nc-paints' },
  { label: 'مجالات الاستخدام', href: '#applications' },
  { label: 'لماذا تونافيكس', href: '#why-tonavix' },
  { label: 'المعلومات الفنية', href: '#technical' },
  { label: 'تواصل معنا', href: '#contact' },
];

export const productCategories: ProductItem[] = [
  {
    id: 'fire-resistant',
    title: 'الدهانات النارية والمقاومة للحريق',
    subtitle: 'Fire-Retardant & Intumescent Coatings',
    category: 'fire',
    description:
      'أنظمة طلاء عازلة ومثبطة للهب متطورة تعمل على إبطاء انتقال الحرارة إلى الهياكل الفولاذية والمعدنية، مما يسهم في الحفاظ على السلامة الإنشائية للمباني والمنشآت الصناعية في أوقات الطوارئ طبقاً للمواصفات الفنية المعتمدة.',
    technicalHighlights: [
      'طبقة حاجزة تنتفخ حرارياً لعزل الهيكل المعدني',
      'مناسبة للهياكل الفولاذية والأعمدة والكمرات الصناعية',
      'تطبيق بالرش اللاهوائي (Airless Spray) أو الفرشاة المتخصصة',
      'خاضعة لمتطلبات نظم السلامة وحماية المنشآت',
    ],
    recommendedUses: [
      'المستودعات والمخازن اللوجستية الكبرى',
      'عنابر المصانع والمجمعات الإنتاجية',
      'المنشآت الحيوية والمباني متعددة الأدوار',
      'الهياكل الحديدية المكشوفة والمغطاة',
    ],
    image: fireCoatingImg,
    badge: 'حماية متقدمة',
  },
  {
    id: 'industrial-coatings',
    title: 'الدهانات الصناعية وأنظمة الحماية',
    subtitle: 'High-Performance Industrial Coatings',
    category: 'industrial',
    description:
      'باقة متكاملة من الدهانات التأسيسية والنهائية الصناعية المقاومة للتآكل والصدأ والعوامل الجوية القاسية، مصممة لحماية المعدات الثقيلة، خطوط الأنابيب، والأسطح المعدنية في البيئات الكيميائية والتصنيعية المعقدة.',
    technicalHighlights: [
      'مقاومة عالية للعوامل البيئية والرطوبة والمواد الكيميائية',
      'قوة التصاق استثنائية على الحديد المعالج والصلب الإنشائي',
      'تغطية وفردية ممتازة تقلل من استهلاك الطلاء وتكلفة المشروع',
      'متوفرة بتشطيبات نصف لامعة ومطفية ولامعة حسب الغرض',
    ],
    recommendedUses: [
      'الآلات والمعدات الميكانيكية الثقيلة',
      'خطوط الأنابيب وشبكات التغذية الصناعية',
      'الخزانات المعدنية وأبراج الدعم',
      'ورش الهياكل والأعمال الحديدية المتخصصة',
    ],
    image: indCoatingImg,
    badge: 'تحمل فائق',
  },
  {
    id: 'nc-coatings',
    title: 'دهانات النيتروسليلوز (دهانات NC)',
    subtitle: 'Nitrocellulose (NC) Industrial Systems',
    category: 'nc',
    description:
      'حلول طلاء سريعة الجفاف تعتمد على النيتروسليلوز الصناعي، توفر تشطيباً ناعماً ومتجانساً مع سهولة بالغة في إعادة الرش والتشغيل. مثالية للصناعات المعدنية السريعة والأجزاء الميكانيكية وتطبيقات الورش الدقيقة.',
    technicalHighlights: [
      'سرعة جفاف فائقة ترفع من معدل الإنتاجية في خطوط التشغيل',
      'سهولة في الصنفرة والتطبيق بطبقات متتالية متجانسة',
      'مظهر نهائي فائق النعومة واللمعان المتوازن',
      'ملائمة للتطبيقات الصناعية وورش التجميع والدهان',
    ],
    recommendedUses: [
      'قطع الغيار والأجزاء المعدنية الدقيقة',
      'ورش الدهان الصناعي وخطوط التجميع',
      'الصناديق واللوحات الكهربائية والمعدنية',
      'الأعمال الخشبية والمعدنية الصناعية المدمجة',
    ],
    image: ncCoatingImg,
    badge: 'جفاف سريع وتشطيب متقن',
  },
];

export const industriesList: IndustryItem[] = [
  {
    id: 'factories',
    title: 'المصانع والمجمعات الإنتاجية',
    description: 'حماية شاملة للأرضيات، العنابر الفولاذية، والأسطح المعرضة للأبخرة والحرارة والتشغيل المستمر.',
    iconName: 'Factory',
    coatingsUsed: 'دهانات صناعية + دهانات نارية',
  },
  {
    id: 'steel-structures',
    title: 'الهياكل المعدنية والإنشائية',
    description: 'أنظمة طلاء مانعة للصدأ ومقاومة للحرائق للكمرات والأعمدة الفولاذية في المشروعات الضخمة.',
    iconName: 'Building2',
    coatingsUsed: 'أنظمة Intumescent + دهانات تأسيسية',
  },
  {
    id: 'machinery',
    title: 'المعدات والآلات الثقيلة',
    description: 'طبقات حماية متينة تتحمل الصدمات الميكانيكية والزيوت الصناعية وسوائل التبريد الميكانيكي.',
    iconName: 'Cog',
    coatingsUsed: 'دهانات NC + إيبوكسيات صناعية',
  },
  {
    id: 'pipelines',
    title: 'خطوط الأنابيب والخزانات',
    description: 'عزل وقائي فائق للشبكات الناقلة والخزانات الصناعية لحمايتها من التآكل الداخلي والخارجي.',
    iconName: 'GitCommit',
    coatingsUsed: 'بطانات متخصصة ودهانات واقية',
  },
  {
    id: 'workshops',
    title: 'الورش ومراكز التشغيل',
    description: 'حلول عملية سهلة التطبيق وسريعة الجفاف للمنتجات الجاهزة والقطع المصنعة حسب الطلب.',
    iconName: 'Wrench',
    coatingsUsed: 'دهانات NC سريعة الجفاف',
  },
  {
    id: 'infrastructure',
    title: 'المشاريع الصناعية واللوجستية',
    description: 'تغطية واسعة للمظلات والجمالونات ومراكز التخزين ذات المساحات الشاسعة.',
    iconName: 'Warehouse',
    coatingsUsed: 'دهانات مقاومة للظروف المناخية',
  },
  {
    id: 'metalworks',
    title: 'الأعمال المعدنية والتشكيل',
    description: 'حماية وتجميل منتجات الصاج، الأبواب المقاومة، الأثاث المعدني الصناعي والهياكل الخفيفة.',
    iconName: 'Shield',
    coatingsUsed: 'أنظمة NC ومينا صناعي',
  },
  {
    id: 'surface-protection',
    title: 'الحماية السطحية ومعالجة التآكل',
    description: 'حلول وقائية متقدمة للبيئات الرطبة أو المعرضة للرذاذ الكيماوي والأملاح الصناعية.',
    iconName: 'Flame',
    coatingsUsed: 'حواجز وقائية متعددة الطبقات',
  },
];

export const whyTonavixPillars = [
  {
    title: 'جودة تصنيعية موثوقة',
    description: 'اختيار دقيق للمواد الخام الكيميائية والبوليمرات لضمان ثبات اللون، الالتصاق، ومقاومة الإجهاد.',
    icon: 'ShieldCheck',
  },
  {
    title: 'تخصص صناعي بحت',
    description: 'تركيز كامل على قطاع الصناعة والمشروعات؛ نحن لا ننتج دهانات ديكورية، بل نوجه كل خبراتنا للحلول الفنية.',
    icon: 'Layers',
  },
  {
    title: 'أداء فني محسوب',
    description: 'تركيبات كيميائية متوازنة تمنح تغطية عالية، جفافاً متسقاً، ومقاومة ممتازة للصدمات والتآكل.',
    icon: 'Gauge',
  },
  {
    title: 'تنوع يلبي احتياجات الورش والمصانع',
    description: 'سلسلة متكاملة تضم الأنظمة النارية العازلة، والدهانات الصناعية الثقيلة، وأنظمة NC السريعة.',
    icon: 'Boxes',
  },
  {
    title: 'دعم واستشارات فنية',
    description: 'فريق فني متخصص يقدم التوجيه اللازم حول تحضير الأسطح، نسب التخفيف، وطرق التطبيق الاحترافية.',
    icon: 'Headset',
  },
  {
    title: 'كفاءة اقتصادية وتغطية ممتدة',
    description: 'معدلات فرد مثالية تقلل الفاقد وتحقق التكلفة الإجمالية الأقل للمتر المربع في المشروعات.',
    icon: 'TrendingDown',
  },
];

export const technicalDocsList: TechnicalDocument[] = [
  {
    id: 'tds-fire-300',
    code: 'TDS-TNF-FIRE-300',
    title: 'بطاقة البيانات الفنية — دهان تونافيكس المقاوم للحريق للصلب الإنشائي',
    type: 'TDS',
    category: 'الدهانات النارية',
    fileSize: '[PDF - قابل للإدراج]',
    description: 'المواصفات الفنية، معدل التغطية النظري، سماكة الطبقة الرطبة والجافة الموصى بها، وإرشادات الرش بالماكينات.',
    version: 'v2.4 (2026)',
  },
  {
    id: 'sds-fire-300',
    code: 'SDS-TNF-FIRE-300',
    title: 'صحيفة بيانات سلامة المادة (SDS) — نظام العزل الحراري المقاوم للهب',
    type: 'SDS',
    category: 'الدهانات النارية',
    fileSize: '[PDF - قابل للإدراج]',
    description: 'تعليمات المناولة الآمنة، مهمات الوقاية الشخصية، إرشادات التخزين، وإجراءات السلامة الصناعية.',
    version: 'v2.1 (2026)',
  },
  {
    id: 'tds-ind-primer',
    code: 'TDS-TNF-IND-PRIME',
    title: 'بطاقة البيانات الفنية — دهان التأسيس الصناعي المضاد للتآكل',
    type: 'TDS',
    category: 'الدهانات الصناعية',
    fileSize: '[PDF - قابل للإدراج]',
    description: 'بيانات الالتصاق، زمن الجفاف بين الطبقات، مقاومة الرطوبة، وتحضير أسطح الحديد بالصنفرة الميكانيكية.',
    version: 'v3.0 (2026)',
  },
  {
    id: 'tds-nc-finish',
    code: 'TDS-TNF-NC-TOP',
    title: 'بطاقة البيانات الفنية — ورنيش وبويات النيتروسليلوز الصناعية السريعة',
    type: 'TDS',
    category: 'دهانات NC',
    fileSize: '[PDF - قابل للإدراج]',
    description: 'نسب التخفيف بالتنر الموصى به، ضغط مسدس الرش، درجات اللمعان، وإرشادات رش الأجزاء الميكانيكية.',
    version: 'v1.8 (2026)',
  },
  {
    id: 'guide-surface-prep',
    code: 'GUIDE-SURF-PREP',
    title: 'دليل تجهيز ومعالجة الأسطح الفولاذية قبل تطبيق الطلاء الصناعي',
    type: 'Guide',
    category: 'إرشادات التطبيق',
    fileSize: '[PDF - قابل للإدراج]',
    description: 'المعايير القياسية لإزالة الشحوم، درجات السفع الرملي (Sa 2.5)، ونقاط الندى المسموح بها أثناء الطلاء.',
    version: 'v1.2 (2026)',
  },
];
