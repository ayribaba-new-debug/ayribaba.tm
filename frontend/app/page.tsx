'use client';

import Link from 'next/link';
import { Search, PlusCircle, Users, Store } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Всё для Туркменистана —<br />в одном месте
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-violet-100">
            Товары, услуги, магазины и вакансии по всему Туркменистану. 
            Покупайте выгодно, продавайте быстро.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/create"
              className="bg-white text-violet-700 hover:bg-gray-100 px-10 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition"
            >
              <PlusCircle size={24} />
              Разместить объявление
            </Link>
            
            <Link 
              href="/search"
              className="border-2 border-white hover:bg-white/10 px-10 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition"
            >
              <Search size={24} />
              Найти товары
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-violet-600">15,000+</div>
              <div className="text-gray-600 mt-2">Товаров и услуг</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600">2,500+</div>
              <div className="text-gray-600 mt-2">Магазинов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600">800+</div>
              <div className="text-gray-600 mt-2">Вакансий</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600">6</div>
              <div className="text-gray-600 mt-2">Велаятов</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-violet-600 text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Начните продавать уже сегодня</h2>
          <p className="text-xl mb-8">Присоединяйтесь к тысячам предпринимателей Туркменистана</p>
          <Link 
            href="/tariff"
            className="inline-block bg-white text-violet-700 px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100"
          >
            Выбрать тариф
          </Link>
        </div>
      </div>
    </main>
  );
}