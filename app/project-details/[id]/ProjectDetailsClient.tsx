'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaUsers, FaHandHoldingHeart, FaPaw, FaTree } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Project, Story } from '@/lib/api';

// Объект для соответствия тегов и их стилей
const tagStyles: Record<string, { icon: JSX.Element, color: string }> = {
  'Люди': { 
    icon: <FaUsers className="mr-1" />, 
    color: 'bg-blue-50 text-blue-700 border-blue-100' 
  },
  'Благотворительность': { 
    icon: <FaHandHoldingHeart className="mr-1" />, 
    color: 'bg-pink-50 text-pink-700 border-pink-100' 
  },
  'Животные': { 
    icon: <FaPaw className="mr-1" />, 
    color: 'bg-amber-50 text-amber-700 border-amber-100' 
  },
  'Экология': { 
    icon: <FaTree className="mr-1" />, 
    color: 'bg-green-50 text-green-700 border-green-100' 
  },
  'Дети': {
    icon: <FaUsers className="mr-1" />,
    color: 'bg-purple-50 text-purple-700 border-purple-100'
  },
  'Природа': {
    icon: <FaTree className="mr-1" />,
    color: 'bg-green-50 text-green-700 border-green-100'
  }
};

export default function ProjectDetailsClient({ project }: { project: Project }) {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Обработчик отправки формы пожертвования
  const handleDonation = (e: FormEvent) => {
    e.preventDefault();
    // Здесь будет логика обработки пожертвования
    setShowSuccess(true);
    
    // Сбрасываем форму через некоторое время
    setTimeout(() => {
      setShowSuccess(false);
      setDonationAmount(0);
      setCustomAmount(0);
      setIsRecurring(false);
    }, 3000);
  };
  
  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Хлебные крошки */}
          <div className="mb-6">
            <Link href="/projects" className="text-gray-500 hover:text-primary-600 flex items-center">
              <FaArrowLeft className="mr-2" />
              <span>Вернуться к проектам</span>
            </Link>
          </div>
          
          {/* Заголовок проекта */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {project.title}
          </h1>
          
          {/* Основное изображение */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Теги проекта */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string, index: number) => (
              <span 
                key={index}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm border ${tagStyles[tag]?.color || 'bg-gray-50 text-gray-700 border-gray-100'}`}
              >
                {tagStyles[tag]?.icon}
                {tag}
              </span>
            ))}
          </div>
          
          {/* Прогресс сбора */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Собрано</span>
              <span className="font-bold text-gray-800">{project.collected.toLocaleString()} ₽ из {project.goal.toLocaleString()} ₽</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full" 
                style={{ width: `${Math.min(100, (project.collected / project.goal) * 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{Math.round((project.collected / project.goal) * 100)}% собрано</span>
              <span>Осталось собрать: {(project.goal - project.collected).toLocaleString()} ₽</span>
            </div>
          </div>
          
          {/* Описание проекта */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">О проекте</h2>
            <div className="prose max-w-none">
              {project.fullDescription.split('\n').map((paragraph: string, index: number) => (
                paragraph.trim() ? <p key={index} className="mb-4">{paragraph}</p> : null
              ))}
            </div>
          </div>
          
          {/* Форма пожертвования */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Сделать пожертвование</h2>
            <form onSubmit={handleDonation}>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Выберите сумму</label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[500, 1000, 2000].map(amount => (
                    <button
                      key={amount}
                      type="button"
                      className={`py-3 px-4 rounded-lg border ${
                        donationAmount === amount 
                          ? 'bg-primary-50 border-primary-500 text-primary-700' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                      onClick={() => setDonationAmount(amount)}
                    >
                      {amount.toLocaleString()} ₽
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(parseInt(e.target.value) || 0);
                      setDonationAmount(0);
                    }}
                    placeholder="Другая сумма"
                    className="w-full py-3 px-4 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">₽</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">Подписаться на регулярные пожертвования</span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                {isRecurring ? 'Подписаться на регулярные пожертвования' : 'Сделать разовое пожертвование'}
              </button>
            </form>
          </div>
          
          {/* Истории успеха */}
          {project.stories && project.stories.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Как ваша помощь меняет жизни</h2>
              <div className="space-y-6">
                {project.stories.map((story: Story, index: number) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="relative w-full h-48 rounded-lg overflow-hidden">
                        <Image 
                          src={story.image} 
                          alt={story.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h3>
                      <p className="text-gray-600">{story.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Дополнительные изображения */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Фотографии проекта</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.additionalImages.map((image: string, index: number) => (
                  <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image 
                      src={image} 
                      alt={`${project.title} - фото ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
} 