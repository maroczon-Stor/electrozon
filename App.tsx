
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductCard from './components/ProductCard';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import { PRODUCTS } from './constants';
import { Product } from './types';
import { Truck, ShieldCheck, Headphones, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // تقسيم المنتجات إلى مجموعات من 10 لعرضها في صفوف
  const productRows = [];
  for (let i = 0; i < PRODUCTS.length; i += 10) {
    productRows.push(PRODUCTS.slice(i, i + 10));
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* Featured Product Rows Section */}
        <section className="py-8 bg-white overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-1">أقوى العروض (10 منتجات لكل صف)</h2>
                <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50"><ChevronRight className="w-5 h-5" /></button>
                <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50"><ChevronLeft className="w-5 h-5" /></button>
              </div>
            </div>

            {productRows.map((row, rowIndex) => (
              <div key={rowIndex} className="mb-10 last:mb-0">
                <div className="flex overflow-x-auto pb-6 gap-4 no-scrollbar scroll-smooth snap-x">
                  {row.map(product => (
                    <div key={product.id} className="min-w-[200px] sm:min-w-[240px] snap-start">
                      <ProductCard product={product} onBuy={handleBuyNow} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Hero />

        {/* Features Trust Bar */}
        <section className="bg-white border-y border-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">توصيل مجاني</h4>
                  <p className="text-[10px] text-gray-400">فوق 1000 درهم</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-green-50 text-green-600 rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">ضمان أصلي</h4>
                  <p className="text-[10px] text-gray-400">أصلي 100%</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">إرجاع سهل</h4>
                  <p className="text-[10px] text-gray-400">خلال 14 يوم</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">دعم 24/7</h4>
                  <p className="text-[10px] text-gray-400">نحن هنا دائماً</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CategorySection />

        {/* Daily Deals Section */}
        <section className="pb-16 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-900 rounded-[3rem] overflow-hidden relative p-8 sm:p-12">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/20 to-transparent pointer-events-none"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-right">
                  <span className="inline-block bg-orange-500 text-white font-bold px-4 py-1 rounded-full mb-4 text-xs">عرض اليوم الخرافي</span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 leading-tight">
                    وفر أكثر من <span className="text-orange-500">2000 درهم</span> على طقم المطبخ المتكامل
                  </h2>
                  <p className="text-blue-200 mb-6 max-w-lg mx-auto lg:mr-0 text-sm">
                    لا تدع الفرصة تفوتك. عرض محدود حتى نفاد الكمية على منتجات ماركات عالمية.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-black py-3 px-8 rounded-xl transition-all shadow-xl">
                      استفد من العرض
                    </button>
                    <div className="flex items-center gap-4 justify-center text-white bg-white/10 px-4 rounded-xl backdrop-blur-sm">
                      <div className="text-center">
                        <div className="text-xl font-black">12</div>
                        <div className="text-[8px] uppercase font-bold text-blue-300">ساعة</div>
                      </div>
                      <span className="text-xl font-black text-orange-500">:</span>
                      <div className="text-center">
                        <div className="text-xl font-black">45</div>
                        <div className="text-[8px] uppercase font-bold text-blue-300">دقيقة</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <img 
                    src="https://picsum.photos/seed/promo-kitchen/800/600" 
                    alt="Promo" 
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatAssistant />
      
      <CheckoutModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default App;
