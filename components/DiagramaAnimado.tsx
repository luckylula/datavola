'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Card {
  id: string;
  title: string;
  icon: string;
  color: string;
  position: string;
}

const cards: Card[] = [
  {
    id: 'tax',
    title: 'Tax',
    icon: '📊',
    color: '#a78bfa',
    position: 'top-0 left-1/2 -translate-x-1/2',
  },
  {
    id: 'payments',
    title: 'Payments',
    icon: '💳',
    color: '#60a5fa',
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
  {
    id: 'radar',
    title: 'Radar',
    icon: '🎯',
    color: '#f472b6',
    position: 'bottom-0 right-12 md:right-20',
  },
];

const DiagramaAnimado: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="relative w-full max-w-4xl h-[500px]">
        {/* SVG para líneas conectoras */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        >
          {/* Línea 1: Tax a Payments (vertical) */}
          <motion.line
            x1="50%"
            y1="15%"
            x2="50%"
            y2="50%"
            stroke="#a78bfa"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: 'easeInOut',
            }}
          />

          {/* Línea 2: Payments a Radar (diagonal) */}
          <motion.line
            x1="50%"
            y1="50%"
            x2="75%"
            y2="85%"
            stroke="#a78bfa"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.3,
              ease: 'easeInOut',
            }}
          />

          {/* Puntos decorativos en las conexiones */}
          <motion.circle
            cx="50%"
            cy="50%"
            r="6"
            fill="#a78bfa"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 1.5,
              ease: 'easeOut',
            }}
          />
        </svg>

        {/* Tarjetas */}
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`absolute ${card.position}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: 'easeInOut',
            }}
            style={{ zIndex: 10 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 w-40 md:w-48 flex flex-col items-center cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Círculo con ícono y gradiente */}
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4"
                style={{
                  background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}dd 100%)`,
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                {card.icon}
              </motion.div>

              {/* Título */}
              <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center">
                {card.title}
              </h3>

              {/* Línea decorativa debajo del título */}
              <motion.div
                className="w-12 h-1 rounded-full mt-2"
                style={{ backgroundColor: card.color }}
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + 0.3,
                  ease: 'easeOut',
                }}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Partículas decorativas de fondo */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-purple-300 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DiagramaAnimado;
