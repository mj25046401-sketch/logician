export type ServiceCategory = 'all' | 'starter' | 'maintenance' | 'styling' | 'detox';

export interface LocService {
  id: string;
  name: string;
  category: 'starter' | 'maintenance' | 'styling' | 'detox';
  price: string;
  priceNumeric: number;
  duration: string;
  summary: string;
  description: string;
  isPopular?: boolean;
  isFeaturedInHero?: boolean;
  iconType: 'comb' | 'twist' | 'bottle' | 'crown' | 'scissors' | 'sparkles';
  included: string[];
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  locAge: string;
  beforeImg: string;
  afterImg: string;
  story: string;
  locticianNote: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  handle: string;
  locJourney: string;
  stars: number;
  text: string;
  verified: boolean;
}

export interface BookingFormData {
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  date: string;
  time: string;
  fullName: string;
  phone: string;
  email: string;
  locLength: 'short' | 'medium' | 'long' | 'extra-long';
  addons: string[];
  notes: string;
}
