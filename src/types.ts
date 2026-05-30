export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing: string;
  deliveryTime: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
