'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Tipos TypeScript
interface CardProps {
  title: string;
  icon: string;
  color: string;
  delay: number;
  position: { top?: string; bottom?: string; right?: string; left?: string };
}

interface AnimatedLineProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
  color?: string;
}

interface BackgroundIconProps {
  icon: string;
  position: { top: string; left: string };
  delay: number;
}

// Componente de tarjeta flotante
const Card = ({ title, icon, color, delay, position }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="absolute bg-white rounded-xl shadow-lg p-6 w-[140px] cursor-pointer"
      style={position}
    >
      <div
        className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
        }}
      >
        {icon}
      </div>
      <h3 className="text-center font-semibold text-gray-800">{title}</h3>
    </motion.div>
  );
};

// Componente de línea animada SVG
const AnimatedLine = ({ startX, startY, endX, endY, delay, color = '#a78bfa' }: AnimatedLineProps) => {
  const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));

  return (
    <motion.line
      x1={startX}
      y1={startY}
      x2={endX}
      y2={endY}
      stroke={color}
      strokeWidth="2"
      strokeDasharray={length}
      initial={{ strokeDashoffset: length }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ duration: 1, delay, ease: 'easeInOut' }}
    />
  );
};

// Componente de ícono de fondo
const BackgroundIcon = ({ icon, position, delay }: BackgroundIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 0.8, delay }}
      className="absolute text-4xl text-gray-400"
      style={position}
    >
      {icon}
    </motion.div>
  );
};

// Componente principal StripeHero
export default function StripeHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Íconos geométricos para el fondo
  const geometricIcons = ['◯', '△', '◻', '◇', '⬡'];

  // Posiciones aleatorias para los íconos de fondo
  const backgroundPositions = [
    { top: '10%', left: '15%' },
    { top: '20%', left: '75%' },
    { top: '35%', left: '10%' },
    { top: '45%', left: '85%' },
    { top: '55%', left: '20%' },
    { top: '65%', left: '70%' },
    { top: '75%', left: '25%' },
    { top: '85%', left: '80%' },
    { top: '15%', left: '45%' },
    { top: '30%', left: '55%' },
    { top: '50%', left: '40%' },
    { top: '70%', left: '60%' },
    { top: '25%', left: '30%' },
    { top: '60%', left: '15%' },
    { top: '80%', left: '50%' },
    { top: '40%', left: '65%' },
    { top: '90%', left: '35%' },
    { top: '18%', left: '88%' },
  ];

  if (!mounted) return null;

  return (
    <section className="relative h-screen bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
          {/* COLUMNA IZQUIERDA - Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 z-10"
          >
            {/* Etiqueta pequeña */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                Des solutions modulables
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Une suite de solutions de paiement et de produits financiers
            </motion.h1>

            {/* Párrafo descriptivo */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              Des millions d'entreprises de toutes tailles—des startups aux grandes
              multinationales—utilisent nos solutions logicielles et API pour accepter
              les paiements, envoyer des versements et gérer leurs activités en ligne.
            </motion.p>

            {/* Botones CTA */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
                Commencer
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-50 text-purple-600 rounded-lg font-semibold transition-colors border-2 border-purple-200">
                Contactez-nous
              </button>
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA - Diagrama animado */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Íconos de fondo */}
            {backgroundPositions.map((pos, index) => (
              <BackgroundIcon
                key={index}
                icon={geometricIcons[index % geometricIcons.length]}
                position={pos}
                delay={Math.random() * 0.5}
              />
            ))}

            {/* SVG para las líneas conectoras */}
            <svg
              className="absolute inset-0 w-full h-full z-0"
              style={{ pointerEvents: 'none' }}
            >
              {/* Línea Tax → Payments (vertical) */}
              <AnimatedLine
                startX={380}
                startY={120}
                endX={380}
                endY={280}
                delay={0.5}
              />

              {/* Línea Payments → Radar (diagonal) */}
              <AnimatedLine
                startX={380}
                startY={360}
                endX={380}
                endY={480}
                delay={0.8}
              />
            </svg>

            {/* Tarjetas flotantes */}
            <Card
              title="Tax"
              icon="📊"
              color="#a78bfa"
              delay={0}
              position={{ top: '5%', right: '20%' }}
            />

            <Card
              title="Payments"
              icon="💳"
              color="#60a5fa"
              delay={0.2}
              position={{ top: '40%', right: '20%' }}
            />

            <Card
              title="Radar"
              icon="🎯"
              color="#f472b6"
              delay={0.4}
              position={{ top: '75%', right: '20%' }}
            />
          </div>
        </div>
      </div>

      {/* Version móvil del diagrama */}
      <div className="lg:hidden px-6 pb-12">
        <div className="relative h-[400px]">
          {/* Íconos de fondo reducidos para móvil */}
          {backgroundPositions.slice(0, 10).map((pos, index) => (
            <BackgroundIcon
              key={index}
              icon={geometricIcons[index % geometricIcons.length]}
              position={pos}
              delay={Math.random() * 0.5}
            />
          ))}

          {/* Tarjetas en disposición vertical para móvil */}
          <div className="flex flex-col items-center gap-8 pt-8">
            <Card
              title="Tax"
              icon="📊"
              color="#a78bfa"
              delay={0}
              position={{ position: 'relative' as any }}
            />

            <Card
              title="Payments"
              icon="💳"
              color="#60a5fa"
              delay={0.2}
              position={{ position: 'relative' as any }}
            />

            <Card
              title="Radar"
              icon="🎯"
              color="#f472b6"
              delay={0.4}
              position={{ position: 'relative' as any }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
