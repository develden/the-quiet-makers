'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaLightbulb, FaShieldAlt, FaChartLine, FaRobot, FaSearch, FaRegCheckCircle, FaRegCreditCard, FaRegChartBar } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Секция О платформе */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-6">
                О платформе
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The Quiet Makers — это платформа, которая помогает людям находить благотворительные проекты, соответствующие их ценностям и интересам. Мы соединяем тех, кто хочет помогать, с теми, кто в этой помощи нуждается.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Наша миссия</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Наша миссия — упростить и сделать прозрачным процесс благотворительности с помощью современных технологий. Мы предоставляем каждому возможность выбрать проект, который соответствует его интересам, и гарантируем, что его вклад будет использован эффективно и по назначению.
                </p>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-50 p-3 rounded-full mr-4">
                      <FaLightbulb className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Наше видение</h3>
                      <p className="text-gray-600">
                        Мир, в котором каждый человек может легко найти и поддержать благотворительные проекты, которые резонируют с его личными ценностями и интересами.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative h-96 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="https://placehold.co/800x600/9333ea/FFFFFF?text=Наша+миссия"
                  alt="Наша миссия"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Мы верим в силу маленьких действий</h3>
                  <p className="text-white/90">Каждое пожертвование имеет значение</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Секция Ценности */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Наши ценности</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Принципы, которыми мы руководствуемся в нашей работе
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-sm border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                  <FaHandHoldingHeart className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Доброта</h3>
                <p className="text-gray-600">
                  Мы верим, что доброта и сострадание могут изменить мир к лучшему. Каждое действие имеет значение.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-sm border border-green-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                  <FaShieldAlt className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Прозрачность</h3>
                <p className="text-gray-600">
                  Благодаря блокчейн-технологиям вы точно видите, как используются ваши средства. Каждый шаг — от пожертвования до реализации проекта — абсолютно прозрачен.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-sm border border-purple-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                  <FaRegCheckCircle className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Проверенные проекты</h3>
                <p className="text-gray-600">
                  Мы поддерживаем только тщательно проверенные проекты, которым можно доверять. Каждая инициатива проходит строгую оценку, чтобы гарантировать прозрачность и эффективность использования ваших средств.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 shadow-sm border border-amber-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                  <FaChartLine className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Технологии, которые работают на вас</h3>
                <p className="text-gray-600">
                  Мы используем современные решения, чтобы сделать благотворительность удобной, безопасной и персонализированной. Платформа сама подберёт проекты, которые вам близки, и покажет их влияние.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Секция Как это работает */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Как это работает</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Мы упростили процесс поиска и поддержки благотворительных проектов
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  1
                </div>
                <div className="bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaRobot className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Оценка ваших интересов с помощью AI</h3>
                <p className="text-gray-600 text-sm">
                  Интеллектуальный помощник на платформе анализирует ваши предпочтения и интересы. Он задаёт вам несколько простых вопросов, чтобы определить, какие направления вам наиболее близки: поддержка людей, защита животных или сохранение природы. Результаты анализа используются для персонализации рекомендаций, чтобы каждый проект соответствовал вашим ценностям и приоритетам.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  2
                </div>
                <div className="bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaSearch className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Подбор проектов</h3>
                <p className="text-gray-600 text-sm">
                  После анализа интересов ассистент AI предоставляет вам список подходящих проектов. Эти проекты прошли тщательную проверку и направлены на решение конкретных задач с измеримым результатом.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  3
                </div>
                <div className="bg-green-50 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaShieldAlt className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Прозрачность благодаря блокчейн-технологиям</h3>
                <p className="text-gray-600 text-sm">
                  Каждое пожертвование фиксируется в блокчейне, что позволяет отслеживать, куда и как были использованы средства. Это исключает сомнения и гарантирует прозрачность всех операций.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  4
                </div>
                <div className="bg-purple-50 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaRegCreditCard className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Простое пожертвование</h3>
                <p className="text-gray-600 text-sm">
                  Вы выбираете проект, который вас вдохновил, и делаете пожертвование всего за несколько кликов через удобную платёжную систему.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  5
                </div>
                <div className="bg-amber-50 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaRegChartBar className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Измеримый результат</h3>
                <p className="text-gray-600 text-sm">
                  Мы не просто просим помощи — мы показываем, как ваш вклад меняет жизни. Вы можете следить за прогрессом и быть уверены, что сделали правильный выбор.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Секция CTA */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div 
              className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-12 md:p-16">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" d="M42.8,-65.2C54.9,-56.3,63.7,-42.8,69.2,-28.1C74.7,-13.4,76.9,2.5,73.5,17.7C70.1,32.9,61.1,47.4,48.6,57.3C36.1,67.2,20.1,72.5,3.7,68.8C-12.7,65.1,-29.5,52.4,-42.3,39.2C-55.1,26,-63.9,12.5,-67.1,-3.2C-70.3,-18.9,-67.9,-36.8,-58.3,-48.9C-48.7,-61,-31.9,-67.3,-15.6,-69.1C0.7,-70.9,16.5,-68.2,30.7,-74.1C44.9,-80,57.5,-94.5,42.8,-65.2Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Узнайте, как легко вы можете помочь. Ответьте на несколько вопросов и выберите проект, которому хотите помочь.
                  </h2>
                  <p className="text-white/90 text-lg mb-8 max-w-2xl">
                    Пройдите короткий тест и найдите проекты, которые вам действительно близки.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/quiz" 
                      className="inline-block py-4 px-8 bg-white text-primary-600 font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 transform"
                    >
                      Начать тест
                    </Link>
                    <Link 
                      href="/projects" 
                      className="inline-block py-4 px-8 bg-white/10 text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all hover:scale-105 transform"
                    >
                      Посмотреть все проекты
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
} 