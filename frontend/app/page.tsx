'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function Home() {
  const [backendStatus, setBackendStatus] = useState('Loading...');

  useEffect(() => {
    api.get('/')
      .then(res => setBackendStatus(res.data.message))
      .catch(() => setBackendStatus('Backend не отвечает'));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero блок */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Всё для Туркменистана — в одном месте
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Товары, услуги, магазины и вакансии по всему Туркменистану
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-600 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition">
              Разместить объявление
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition">
              Найти товары
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-center text-gray-600 mb-8">
          Статус backend: <span className="font-medium text-green-600">{backendStatus}</span>
        </p>

        {/* Можно добавить остальные блоки позже */}
      </div>
    </main>
  );
}
