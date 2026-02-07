'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Componente de tarjeta individual
const FeatureCard = ({ 
  title, 
  icon, 
  gradient,
  delay = 0,
  style 
}: { 
  title: string; 
  icon: React.ReactNode; 
  gradient: string;
  delay?: number;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="absolute"
      style={style}
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 w-40 border border-white/20">
        <motion.div 
          className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-3xl"
          style={{ 
            background: gradient,
          }}
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
      </div>
    </motion.div>
  );
};

// Componente de línea animada
const AnimatedLine = ({ 
  x1, 
  y1, 
  x2, 
  y2, 
  delay = 0,
  gradient = false
}: { 
  x1: number; 
  y1: number; 
  x2: number; 
  y2: number; 
  delay?: number;
  gradient?: boolean;
}) => {
  const [length, setLength] = useState(0);

  useEffect(() => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    setLength(Math.sqrt(dx * dx + dy * dy));
  }, [x1, y1, x2, y2]);

  return (
    <>
      {gradient && (
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      )}
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={gradient ? "url(#lineGradient)" : "#8b5cf6"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={length}
        initial={{ strokeDashoffset: length }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ 
          duration: 1.2, 
          delay, 
          ease: [0.22, 1, 0.36, 1]
        }}
        opacity="0.6"
      />
    </>
  );
};

// Íconos decorativos de fondo
const BackgroundIcon = ({ 
  x, 
  y, 
  size = 32,
  delay = 0
}: { 
  x: number; 
  y: number; 
  size?: number;
  delay?: number;
}) => {
  const shapes = ['●', '◆', '▲', '■', '⬢'];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.08, 0.08],
        scale: [0, 1, 1],
        rotate: [0, 0, 360]
      }}
      transition={{ 
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 5,
        ease: "easeInOut"
      }}
      className="absolute text-purple-400"
      style={{ 
        left: `${x}px`, 
        top: `${y}px`,
        fontSize: `${size}px`
      }}
    >
      {shape}
    </motion.div>
  );
};

// Componente principal adaptado para FacilIA
export default function FacilIAHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/30 overflow-hidden">
      
      {/* Grid sutil de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Gradiente radial para profundidad */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-purple-200/20 to-transparent blur-3xl" />
      
      <div className="relative container mx-auto px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna izquierda - Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm text-purple-700 font-medium text-sm border border-purple-200/50">
                🤖 Solutions d'automatisation IA
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 mt-6 leading-tight tracking-tight"
            >
              Automatisation{' '}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                intelligente
              </span>
              {' '}pour votre entreprise
            </motion.h1>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              Transformez vos processus métier avec l'IA. FacilIA vous aide à automatiser 
              vos workflows, optimiser vos opérations et gagner en productivité grâce à 
              des solutions d'automatisation intelligentes adaptées aux TPE et PME.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Démarrer maintenant
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300">
                Découvrir nos solutions
              </button>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Diagrama animado */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            
            {/* Íconos decorativos de fondo */}
            {Array.from({ length: 15 }, (_, i) => (
              <BackgroundIcon
                key={i}
                x={Math.random() * 500 + 50}
                y={Math.random() * 550 + 25}
                size={Math.random() * 20 + 24}
                delay={Math.random() * 2}
              />
            ))}

            {/* SVG para las líneas */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              style={{ zIndex: 5 }}
            >
              {/* Líneas conectoras con gradiente */}
              <AnimatedLine 
                x1={280} y1={150} 
                x2={280} y2={280} 
                delay={0.8} 
                gradient={true}
              />
              <AnimatedLine 
                x1={290} y1={320} 
                x2={400} y2={420} 
                delay={1.2}
                gradient={true}
              />
              
              {/* Puntos decorativos en las conexiones */}
              <motion.circle
                cx={280} cy={215}
                r={6}
                fill="#8b5cf6"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.4, delay: 1.4 }}
              />
            </svg>

            {/* Tarjetas flotantes - Adaptadas a FacilIA */}
            <FeatureCard
              title="Workflows"
              icon={<span className="text-white">⚡</span>}
              gradient="linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
              delay={0.3}
              style={{ left: '200px', top: '80px' }}
            />

            <FeatureCard
              title="IA Générative"
              icon={<span className="text-white">🤖</span>}
              gradient="linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)"
              delay={0.5}
              style={{ left: '200px', top: '250px' }}
            />

            <FeatureCard
              title="Intégrations"
              icon={<span className="text-white">🔗</span>}
              gradient="linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
              delay={0.7}
              style={{ left: '330px', top: '370px' }}
            />

          </motion.div>
        </div>
      </div>
    </div>
  );
}
