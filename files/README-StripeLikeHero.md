# 🎨 Stripe-Like Hero Component - Versión Profesional

Componente hero de nivel profesional con animaciones suaves, diseño moderno y efectos visuales sofisticados.

## ✨ Características Premium

- ✅ **Animaciones profesionales** con easing avanzado (cubic-bezier)
- ✅ **Glassmorphism** (efecto cristal esmerilado)
- ✅ **Gradientes sofisticados** con múltiples capas
- ✅ **Grid de fondo sutil** para profundidad
- ✅ **Íconos animados** con rotación y pulsación
- ✅ **Líneas con gradientes** y animación fluida
- ✅ **Sombras modernas** con transiciones suaves
- ✅ **Tipografía elegante** con degradados en el texto
- ✅ **Botones CTA** con hover effects profesionales
- ✅ **Responsive** diseñado desde mobile-first

## 🚀 Instalación

### 1. Instala Framer Motion (si no lo tienes)
```bash
npm install framer-motion
```

### 2. Copia el componente
Copia `StripeLikeHero.tsx` a tu carpeta `components/`

### 3. Úsalo en tu página

**App Router (Next.js 13+):**
```tsx
// app/page.tsx
import StripeLikeHero from '@/components/StripeLikeHero';

export default function Home() {
  return <StripeLikeHero />;
}
```

**Pages Router:**
```tsx
// pages/index.tsx
import StripeLikeHero from '@/components/StripeLikeHero';

export default function Home() {
  return <StripeLikeHero />;
}
```

## 🎨 Personalización

### Cambiar colores de las tarjetas

Busca los `gradient` en el código:

```tsx
// Tax - Morado
gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"

// Payments - Rosa
gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"

// Radar - Azul
gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
```

**Generadores de gradientes recomendados:**
- https://cssgradient.io/
- https://uigradients.com/

### Cambiar el texto

Edita directamente en el JSX:
- Badge: `"✨ Des solutions modulables"`
- Título: `"Une suite de solutions..."`
- Descripción: `"Réduisez vos coûts..."`
- Botones: `"Commencer maintenant"` y `"Contactez-nous"`

### Añadir más tarjetas

Duplica el componente `<FeatureCard>`:

```tsx
<FeatureCard
  title="Analytics"
  icon={<span className="text-white">📈</span>}
  gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  delay={0.9}
  style={{ left: '450px', top: '200px' }}
/>
```

### Cambiar posiciones de las tarjetas

Ajusta los valores de `style`:
```tsx
style={{ left: '200px', top: '80px' }}
      //      ↑ Horizontal  ↑ Vertical
```

### Modificar las líneas conectoras

```tsx
<AnimatedLine 
  x1={280} y1={150}  // Punto de inicio (x, y)
  x2={280} y2={280}  // Punto final (x, y)
  delay={0.8}        // Delay de animación
  gradient={true}    // true = con gradiente, false = color sólido
/>
```

## 🎯 Para FacilIA

Si quieres adaptarlo a FacilIA, cambia:

**Tarjetas:**
```tsx
<FeatureCard title="Workflows" icon={<span>⚡</span>} ... />
<FeatureCard title="IA Generativa" icon={<span>🤖</span>} ... />
<FeatureCard title="Integraciones" icon={<span>🔗</span>} ... />
```

**Colores corporativos:**
Usa tus colores de brand en vez de morado/rosa/azul

**Texto:**
```tsx
<h1>
  Automatización {' '}
  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
    inteligente
  </span>
  {' '} para tu empresa
</h1>
```

## 💡 Tips de diseño

### Colores que funcionan bien
- **Tech/SaaS**: Azules y morados (#667eea, #764ba2)
- **Fintech**: Verdes y azules (#11998e, #38ef7d)
- **Marketing**: Naranjas y rosas (#f093fb, #f5576c)
- **Healthcare**: Verdes suaves y azules (#43e97b, #38f9d7)

### Animaciones
- **Delays**: Incrementa de 0.2s en 0.2s para efecto escalonado
- **Duration**: 0.6-0.8s para entradas, 0.2-0.3s para hovers
- **Easing**: `[0.22, 1, 0.36, 1]` es el easing de Google Material Design

### Responsive
El diagrama se oculta en mobile (`hidden lg:block`). Para mostrarlo en móvil:
1. Quita `hidden lg:block`
2. Ajusta el `height` para mobile
3. Reduce el tamaño de las tarjetas
4. Reorganiza las posiciones para layout vertical

## 🐛 Troubleshooting

**Las animaciones no funcionan:**
- Verifica que el componente tenga `'use client'` al inicio
- Asegúrate que framer-motion está instalado
- Revisa la consola del navegador por errores

**Las tarjetas no se ven bien posicionadas:**
- Ajusta los valores de `left` y `top` en cada tarjeta
- Prueba en diferentes tamaños de pantalla
- Usa las Dev Tools del navegador para ajustar en tiempo real

**Los gradientes no se ven:**
- Verifica que tu navegador soporte gradients CSS
- Algunos navegadores viejos no soportan `backdrop-blur`

## 📱 Preview URLs

Para ver ejemplos profesionales similares:
- https://stripe.com
- https://vercel.com
- https://linear.app
- https://framer.com

## 🎓 Siguientes pasos

Una vez tengas esto funcionando:
1. Añade animaciones al scroll con `useInView` de Framer Motion
2. Implementa cambio de tema (dark mode)
3. Añade micro-interacciones en los botones
4. Conecta los botones CTA a acciones reales

---

**¿Preguntas?** Siempre puedes pedirle ajustes a Claude Code:
```
Haz las tarjetas más grandes
Cambia el gradiente del título a [colores]
Añade una cuarta tarjeta llamada [nombre]
```
