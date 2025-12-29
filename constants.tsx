
import React from 'react';
import { Product, Category } from './types';
import { 
  Smartphone, 
  Tv, 
  Laptop, 
  Speaker, 
  Watch, 
  Camera, 
  WashingMachine, 
  Coffee 
} from 'lucide-react';

export const CATEGORIES: Category[] = [
  { id: 'phones', title: 'الهواتف الذكية', icon: 'smartphone', image: 'https://picsum.photos/seed/phone/400/300' },
  { id: 'tvs', title: 'التلفزيونات', icon: 'tv', image: 'https://picsum.photos/seed/tv/400/300' },
  { id: 'computers', title: 'الحواسيب', icon: 'laptop', image: 'https://picsum.photos/seed/laptop/400/300' },
  { id: 'audio', title: 'الصوتيات', icon: 'speaker', image: 'https://picsum.photos/seed/audio/400/300' },
  { id: 'appliances', title: 'الأجهزة المنزلية', icon: 'washing-machine', image: 'https://picsum.photos/seed/home/400/300' },
  { id: 'kitchen', title: 'أدوات المطبخ', icon: 'coffee', image: 'https://picsum.photos/seed/kitchen/400/300' },
];

// إنشاء 20 منتج لتوضيح صفين كاملين بـ 10 منتجات لكل منهما
export const PRODUCTS: Product[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  name: i % 2 === 0 ? `منتج تكنولوجي متطور رقم ${i + 1}` : `جهاز ذكي عصري ${i + 1}`,
  price: 1500 + (i * 500),
  oldPrice: 2000 + (i * 600),
  image: `https://picsum.photos/seed/prod${i + 1}/400/400`,
  category: i % 3 === 0 ? 'phones' : i % 2 === 0 ? 'computers' : 'audio',
  rating: 4.5 + (Math.random() * 0.5),
  isNew: i < 5,
  discount: i % 4 === 0 ? '20%' : undefined
}));

export const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'smartphone': return <Smartphone className="w-6 h-6" />;
    case 'tv': return <Tv className="w-6 h-6" />;
    case 'laptop': return <Laptop className="w-6 h-6" />;
    case 'speaker': return <Speaker className="w-6 h-6" />;
    case 'washing-machine': return <WashingMachine className="w-6 h-6" />;
    case 'coffee': return <Coffee className="w-6 h-6" />;
    default: return <Smartphone className="w-6 h-6" />;
  }
};
