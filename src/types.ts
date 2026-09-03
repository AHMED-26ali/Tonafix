export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'fire' | 'industrial' | 'nc';
  description: string;
  technicalHighlights: string[];
  recommendedUses: string[];
  image: string;
  badge?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  coatingsUsed: string;
}

export interface TechnicalDocument {
  id: string;
  code: string;
  title: string;
  type: 'TDS' | 'SDS' | 'Guide';
  category: string;
  fileSize: string;
  description: string;
  version: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  productType: string;
  companyName: string;
  message: string;
}
