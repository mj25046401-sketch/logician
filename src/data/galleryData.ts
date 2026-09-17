import { TransformationItem, TestimonialItem } from '../types';

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 't-1',
    title: 'Crown Revival & Precision Retwist',
    category: 'Maintenance & Retwist',
    locAge: '3 Years Mature',
    beforeImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    story: 'Client arrived with 10 weeks of overgrown roots and dry scalp. Completed our signature ACV herbal soak and tension-free palm roll.',
    locticianNote: 'Zero edge tension applied. Parting restored with geometric diamond precision.'
  },
  {
    id: 't-2',
    title: 'Architectural Barrel Rolls & Updo',
    category: 'Loc Styling & Updos',
    locAge: '5 Years Mature',
    beforeImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    story: 'Prepared for an executive gala. Sculpted 82 locs into 6 interlocking crown barrels with custom warm gold rings.',
    locticianNote: 'Secured solely with loc tension cords—no metal bobby pins piercing through hair shafts.'
  },
  {
    id: 't-3',
    title: 'Sacred Day 1: Comb Coils Starter Locs',
    category: 'Starter Locs',
    locAge: 'Day 1 Starter',
    beforeImg: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
    story: 'Transitioning from 4C natural afro coils to neat starter locs with symmetrical grid parting and healthy density balance.',
    locticianNote: 'Custom square grid calculated for maximum future thickness and root weight distribution.'
  },
  {
    id: 't-4',
    title: 'Deep Detox & Mineral De-Gunk Basin',
    category: 'Detox & Treatments',
    locAge: '7 Years Mature',
    beforeImg: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    story: 'Removed years of embedded beeswax and hard water minerals with our 4-stage organic tea tree ACV basin wash.',
    locticianNote: 'Weight dropped noticeably; locs became featherlight, bouncy, and aromatic.'
  }
];

export const GALLERY_GRID = [
  {
    id: 'g-1',
    title: 'Clean Diamond Parting & Crown Twist',
    category: 'retwist',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    likes: '14.2K',
    tags: '#crispparts #locgician'
  },
  {
    id: 'g-2',
    title: 'Goddess Crown Petals with Gold Cuffs',
    category: 'styling',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    likes: '22.8K',
    tags: '#goodlocday #crownmagic'
  },
  {
    id: 'g-3',
    title: 'Organic Sunshine Session with Master Loctician',
    category: 'retwist',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    likes: '35.1K',
    tags: '#loccare #masterloctician'
  },
  {
    id: 'g-4',
    title: 'Long Anointed Locs in Golden Light',
    category: 'maintenance',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    likes: '18.9K',
    tags: '#locjourney #healthyhair'
  },
  {
    id: 'g-5',
    title: 'Starter Coils 6-Month Thickening Check-In',
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
    likes: '9.4K',
    tags: '#starterlocs #locprocess'
  },
  {
    id: 'g-6',
    title: 'Crown Rope Twists with Clean Parting',
    category: 'styling',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    likes: '11.6K',
    tags: '#ropetwists #dreadlocks'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Marcus Holloway',
    handle: '@marc_crowns',
    locJourney: '4 Years Loc\'d',
    stars: 5,
    text: 'I used to get horrible headaches from tight retwists at other shops. Locgician changed my entire perception of loc care. The tension-free palm roll and herbal steam were pure bliss. My scalp breathed for the first time in months!',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Keisha Washington',
    handle: '@keisha.locs',
    locJourney: 'Starter Locs (Month 8)',
    stars: 5,
    text: 'Starting my locs with Locgician was the best investment I ever made for my crown. The parting is mathematically symmetrical, and following the @goodlocday tips kept my coils from unraveling even during workouts.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'David Okafor',
    handle: '@dave_roots',
    locJourney: '9 Years Mature',
    stars: 5,
    text: 'The ACV basin detox pulled out 4 years of trapped gym sweat and heavy wax left behind by former stylists. My locs are light as a feather now. That sunshine yellow studio vibe is unmatched.',
    verified: true
  }
];
