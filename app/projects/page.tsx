'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaFilter, FaTimes, FaUsers, FaHandHoldingHeart, FaPaw, FaTree } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSearchParams } from 'next/navigation';
import { getAllProjects, Project } from '@/lib/api';

// Функция для получения метки категории
const getCategoryLabel = (category: string): string => {
  const categoryLabels: Record<string, string> = {
    'people': 'Люди',
    'animals': 'Животные',
    'nature': 'Природа'
  };
  return categoryLabels[category] || category;
};

// Функция для получения метки формата
const getFormatLabel = (format: string): string => {
  const formatLabels: Record<string, string> = {
    'one-time': 'Разовая помощь',
    'recurring': 'Регулярная помощь',
    'volunteer': 'Волонтёрство'
  };
  return formatLabels[format] || format;
};

// Стили для тегов
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

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const fromQuiz = searchParams.get('quiz') === 'true';
  const categories = searchParams.get('categories')?.split(',') || [];
  const formats = searchParams.get('format')?.split(',') || [];
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Загрузка проектов
  useEffect(() => {
    const allProjects = getAllProjects();
    setProjects(allProjects);
  }, []);
  
  // Фильтрация проектов
  const filteredProjects = projects.filter(project => {
    // Фильтр по поисковому запросу
    if (searchQuery && !project.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Фильтр по выбранным тегам
    if (selectedTags.length > 0 && !project.tags.some(tag => selectedTags.includes(tag))) {
      return false;
    }
    
    return true;
  });
  
  // Обработчик выбора тега
  const handleTagSelect = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  // Обработчик добавления в избранное
  const handleToggleFavorite = (projectId: string) => {
    if (favorites.includes(projectId)) {
      setFavorites(favorites.filter(id => id !== projectId));
    } else {
      setFavorites([...favorites, projectId]);
    }
  };
  
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Заголовок страницы */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-4">
              Проекты, которые соответствуют вашим интересам
            </h1>
            
            {fromQuiz && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Мы подобрали проекты на основе ваших предпочтений
                {categories.length > 0 && (
                  <>
                    {' в категориях: '}
                    <span className="font-medium">{categories.map(cat => getCategoryLabel(cat)).join(', ')}</span>
                  </>
                )}
                {formats.length > 0 && (
                  <>
                    {' с форматом: '}
                    <span className="font-medium">{formats.map(fmt => getFormatLabel(fmt)).join(', ')}</span>
                  </>
                )}
              </p>
            )}
          </div>
          
          {/* Поиск и фильтры */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Поиск проектов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 px-5 pl-12 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 shadow-sm transition-all"
                />
                <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center py-4 px-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaFilter className="mr-2 text-primary-500" />
                <span>{showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}</span>
              </motion.button>
            </div>
            
            {/* Панель фильтров */}
            {showFilters && (
              <motion.div 
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Фильтры</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-3">Категории</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Люди', 'Животные', 'Природа', 'Дети', 'Экология'].map((tag) => (
                      <motion.button
                        key={tag}
                        onClick={() => handleTagSelect(tag)}
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                          selectedTags.includes(tag)
                            ? `${tagStyles[tag]?.color || 'bg-primary-50 text-primary-700 border-primary-200'} shadow-sm`
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tagStyles[tag]?.icon}
                        {tag}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Выбранные фильтры */}
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-8 items-center">
                <span className="text-sm text-gray-500">Выбранные фильтры:</span>
                {selectedTags.map(tag => (
                  <motion.button
                    key={tag}
                    onClick={() => handleTagSelect(tag)}
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${tagStyles[tag]?.color || 'bg-primary-50 text-primary-700'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tagStyles[tag]?.icon}
                    {tag}
                    <FaTimes className="ml-1.5" />
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => setSelectedTags([])}
                  className="text-sm text-gray-500 hover:text-gray-700 py-1 px-2 hover:bg-gray-100 rounded-md transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Очистить все
                </motion.button>
              </div>
            )}
          </div>
          
          {/* Список проектов */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/project-details/${project.id}`} className="block">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4 -mt-10 relative z-10">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${tagStyles[tag]?.color || 'bg-gray-50 text-gray-700 border-gray-100'}`}
                        >
                          {tagStyles[tag]?.icon}
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link href={`/project-details/${project.id}`} className="block group">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 mb-5 line-clamp-3 text-sm">
                      {project.description}
                    </p>
                    
                    <div className="mb-5">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Собрано</span>
                        <span className="font-medium">{project.collected.toLocaleString()} ₽</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                          style={{ width: `${Math.min(100, (project.collected / project.goal) * 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-500">Цель: {project.goal.toLocaleString()} ₽</span>
                        <span className="font-medium text-primary-600">{Math.round((project.collected / project.goal) * 100)}%</span>
                      </div>
                    </div>
                    
                    <Link
                      href={`/project-details/${project.id}`}
                      className="block w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-lg text-center font-medium transition-all shadow-sm hover:shadow"
                    >
                      Поддержать проект
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Проекты не найдены</h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Попробуйте изменить параметры поиска или фильтры
              </p>
              <motion.button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTags([]);
                }}
                className="py-3 px-8 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-lg font-medium transition-all shadow-sm hover:shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Сбросить все фильтры
              </motion.button>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
} 