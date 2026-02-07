// ============================================
// DEMO AUTOMÁTICA - VISUAL LOOP
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Configuración de la demo automática
    const STEP_DURATION = 1500; // Duración de cada paso en ms
    const PAUSE_BETWEEN_LOOPS = 2000; // Pausa antes de reiniciar el loop
    let currentStep = 0;
    let isRunning = false;
    let animationInterval;

    // Función para iniciar la demo automática
    function startAutomaticDemo() {
        if (isRunning) return;
        isRunning = true;
        runDemoLoop();
    }

    // Loop principal de la demo
    async function runDemoLoop() {
        while (isRunning) {
            // Reset antes de comenzar
            resetAllSteps();
            await sleep(500);

            // Ejecutar 5 pasos secuencialmente
            for (let i = 1; i <= 5; i++) {
                if (!isRunning) break;

                await activateStep(i);
                await sleep(STEP_DURATION);
                await completeStep(i);

                // Mostrar data cards en pasos específicos
                if (i === 2) showDataCard(1);
                if (i === 3) showDataCard(2);
                if (i === 5) showDataCard(3);
            }

            // Pausar antes de reiniciar
            await sleep(PAUSE_BETWEEN_LOOPS);

            // Ocultar data cards
            hideAllDataCards();
        }
    }

    // Reset todos los pasos
    function resetAllSteps() {
        const steps = document.querySelectorAll('.auto-step');
        steps.forEach(step => {
            step.classList.remove('active', 'completed');
        });

        // Reset progress bar
        const progressBar = document.getElementById('auto-progress-bar');
        if (progressBar) {
            progressBar.style.width = '0%';
        }
    }

    // Activar un paso
    async function activateStep(stepNumber) {
        const step = document.querySelector(`.auto-step[data-step="${stepNumber}"]`);
        if (step) {
            step.classList.add('active');

            // Actualizar progress bar
            const progressBar = document.getElementById('auto-progress-bar');
            if (progressBar) {
                const progress = (stepNumber / 5) * 100;
                progressBar.style.width = `${progress}%`;
            }
        }
    }

    // Completar un paso
    async function completeStep(stepNumber) {
        const step = document.querySelector(`.auto-step[data-step="${stepNumber}"]`);
        if (step) {
            step.classList.remove('active');
            step.classList.add('completed');
        }
    }

    // Mostrar data card
    function showDataCard(cardNumber) {
        const card = document.querySelector(`.data-card-${cardNumber}`);
        if (card) {
            card.classList.add('show');
        }
    }

    // Ocultar todas las data cards
    function hideAllDataCards() {
        const cards = document.querySelectorAll('.data-card');
        cards.forEach(card => {
            card.classList.remove('show');
        });
    }

    // Utilidad sleep
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Detectar cuando el usuario ve la demo
    const demoSection = document.querySelector('.demo-section');
    if (demoSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startAutomaticDemo();
                } else {
                    isRunning = false;
                }
            });
        }, {
            threshold: 0.3 // Comenzar cuando el 30% de la sección es visible
        });

        observer.observe(demoSection);
    }

    // También iniciar automáticamente si la demo está visible al cargar
    setTimeout(() => {
        const rect = demoSection?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
            startAutomaticDemo();
        }
    }, 1000);

    console.log('🎬 Demo automática inicializada');
});

// ============================================
// CAROUSEL DE SOLUCIONES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dotsContainer = document.getElementById('carousel-dots');

    if (!track) return;

    const cards = track.querySelectorAll('.solution-card');
    const totalCards = cards.length;

    // Configuración del carrusel
    let cardsPerView = 3;
    let currentIndex = 0;

    // Actualizar cards por vista según el ancho de pantalla
    function updateCardsPerView() {
        const width = window.innerWidth;
        if (width < 768) {
            cardsPerView = 1;
        } else if (width < 1024) {
            cardsPerView = 2;
        } else {
            cardsPerView = 3;
        }
    }

    // Calcular total de páginas
    function getTotalPages() {
        return Math.ceil(totalCards / cardsPerView);
    }

    // Crear dots de navegación
    function createDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        const totalPages = getTotalPages();

        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToPage(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Ir a una página específica
    function goToPage(pageIndex) {
        const totalPages = getTotalPages();
        currentIndex = Math.max(0, Math.min(pageIndex, totalPages - 1));
        updateCarousel();
    }

    // Actualizar posición del carrusel
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 24; // 1.5rem en pixels
        const offset = currentIndex * cardsPerView * (cardWidth + gap);

        track.style.transform = `translateX(-${offset}px)`;

        // Actualizar dots
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Actualizar botones
        const totalPages = getTotalPages();
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex >= totalPages - 1;
    }

    // Navegación
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const totalPages = getTotalPages();
            if (currentIndex < totalPages - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    // Auto-play del carrusel (opcional)
    let autoPlayInterval;

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            const totalPages = getTotalPages();
            if (currentIndex < totalPages - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }, 5000); // Cambiar cada 5 segundos
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Pausar auto-play al hacer hover
    if (track) {
        track.addEventListener('mouseenter', stopAutoPlay);
        track.addEventListener('mouseleave', startAutoPlay);
    }

    // Swipe en móviles
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - siguiente
                const totalPages = getTotalPages();
                if (currentIndex < totalPages - 1) {
                    currentIndex++;
                    updateCarousel();
                }
            } else {
                // Swipe right - anterior
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            }
        }
    }

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn?.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn?.click();
        }
    });

    // Inicializar
    updateCardsPerView();
    createDots();
    updateCarousel();
    startAutoPlay();

    // Reinicializar en resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCardsPerView();
            createDots();
            currentIndex = 0;
            updateCarousel();
        }, 250);
    });
});

// ============================================
// SCROLL SUAVE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para todos los enlaces con #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Añadir sombra al hacer scroll
            if (currentScroll > 50) {
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }

            lastScroll = currentScroll;
        });
    }
});

// ============================================
// ANIMACIONES AL HACER SCROLL (INTERSECTION OBSERVER)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Elementos a animar
    const animatedElements = document.querySelectorAll(`
        .benefit-card,
        .solution-card,
        .use-case-card,
        .pricing-card,
        .section-header
    `);

    // Configuración del observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Callback del observer
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';

                // Pequeño delay para que se note la animación
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                // Dejar de observar una vez animado
                observer.unobserve(entry.target);
            }
        });
    };

    // Crear observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar elementos
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// ============================================
// VALIDACIÓN DE FORMULARIO CTA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const ctaForm = document.querySelector('.cta-form');

    if (ctaForm) {
        const ctaInput = ctaForm.querySelector('.cta-input');
        const ctaButton = ctaForm.querySelector('.btn-primary');

        ctaButton?.addEventListener('click', (e) => {
            e.preventDefault();

            const email = ctaInput?.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email) {
                alert('Por favor ingresa tu email corporativo');
                ctaInput?.focus();
                return;
            }

            if (!emailRegex.test(email)) {
                alert('Por favor ingresa un email válido');
                ctaInput?.focus();
                return;
            }

            // Simular envío exitoso
            ctaButton.textContent = 'Enviado ✓';
            ctaButton.style.background = 'linear-gradient(135deg, #00d4aa 0%, #00a67e 100%)';
            ctaInput.value = '';

            setTimeout(() => {
                alert(`¡Gracias por tu interés! Te contactaremos pronto a ${email}`);
                ctaButton.textContent = 'Comenzar gratis';
                ctaButton.style.background = '';
            }, 1000);
        });
    }
});

// ============================================
// CONTADOR ANIMADO PARA ESTADÍSTICAS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function para suavizar
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            const current = Math.floor(start + (target - start) * easeOutQuart);
            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(update);
    }

    // Observar las estadísticas del hero
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target;
                const text = statValue.textContent;

                // Extraer número del texto
                const match = text.match(/[\d,]+/);
                if (match) {
                    const number = parseInt(match[0].replace(/,/g, ''));
                    if (!isNaN(number)) {
                        animateCounter(statValue, number);
                    }
                }

                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observar todos los stat-value
    document.querySelectorAll('.stat-value').forEach(stat => {
        statsObserver.observe(stat);
    });
});

// ============================================
// EASTER EGG: KONAMI CODE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];

    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;

            if (konamiIndex === konamiCode.length) {
                // Activar modo fiesta
                document.body.style.animation = 'rainbow 3s linear infinite';

                // Añadir keyframes si no existen
                if (!document.getElementById('rainbow-animation')) {
                    const style = document.createElement('style');
                    style.id = 'rainbow-animation';
                    style.textContent = `
                        @keyframes rainbow {
                            0% { filter: hue-rotate(0deg); }
                            100% { filter: hue-rotate(360deg); }
                        }
                    `;
                    document.head.appendChild(style);
                }

                alert('🎉 ¡Modo fiesta activado! 🎉');

                // Desactivar después de 10 segundos
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 10000);

                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
});

// ============================================
// PERFORMANCE: LAZY LOADING DE IMÁGENES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// ============================================
// ANIMATED SVG DIAGRAM - SUITE SECTION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const suiteSection = document.querySelector('.suite-section');
    if (!suiteSection) return;

    let animationStarted = false;

    // Intersection Observer para iniciar la animación
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationStarted) {
                animationStarted = true;
                startDiagramAnimation();
                animateCounters();
                showInfoCards();
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(suiteSection);

    // Animar el diagrama SVG
    function startDiagramAnimation() {
        const lines = document.querySelectorAll('.connection-line');
        const particles = document.querySelectorAll('.particle');

        // Animar líneas secuencialmente
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('active');

                // Animar partícula correspondiente
                if (particles[index]) {
                    animateParticle(particles[index], line, index);
                }
            }, index * 300);
        });

        // Loop infinito para las partículas
        setInterval(() => {
            particles.forEach((particle, index) => {
                const line = lines[index];
                if (line) {
                    setTimeout(() => {
                        animateParticle(particle, line, index);
                    }, index * 400);
                }
            });
        }, 5000);
    }

    // Animar partícula a lo largo de una línea
    function animateParticle(particle, line, index) {
        const pathLength = line.getTotalLength();
        const duration = 2000;
        const startTime = Date.now();

        particle.style.opacity = '1';

        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const point = line.getPointAtLength(progress * pathLength);
            particle.setAttribute('cx', point.x);
            particle.setAttribute('cy', point.y);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                particle.style.opacity = '0';
            }
        }

        requestAnimationFrame(animate);
    }

    // Animar contadores
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const startTime = Date.now();
            const startValue = 0;

            function updateCounter() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(startValue + (target - startValue) * easeOutQuart);

                if (target === 99) {
                    counter.textContent = current + '%';
                } else if (target === 24) {
                    counter.textContent = current + '/7';
                } else {
                    counter.textContent = current + '+';
                }

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    if (target === 99) {
                        counter.textContent = '99.9%';
                    } else if (target === 24) {
                        counter.textContent = '24/7';
                    } else {
                        counter.textContent = target + '+';
                    }
                }
            }

            requestAnimationFrame(updateCounter);
        });
    }

    // Mostrar info cards con delay
    function showInfoCards() {
        const cards = document.querySelectorAll('.info-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, 1000 + (index * 300));
        });
    }

    // Interactividad: Hover en nodos
    const nodes = document.querySelectorAll('.node');
    nodes.forEach((node, index) => {
        node.addEventListener('mouseenter', () => {
            highlightNode(index + 1);
        });

        node.addEventListener('mouseleave', () => {
            removeHighlight(index + 1);
        });
    });

    function highlightNode(nodeNumber) {
        const line = document.querySelector(`.line-${nodeNumber}`);
        if (line) {
            line.style.strokeWidth = '4';
            line.style.filter = 'drop-shadow(0 0 8px rgba(99, 91, 255, 0.6))';
        }
    }

    function removeHighlight(nodeNumber) {
        const line = document.querySelector(`.line-${nodeNumber}`);
        if (line) {
            line.style.strokeWidth = '2';
            line.style.filter = 'none';
        }
    }

    console.log('🎨 Diagrama SVG animado inicializado');
});

// ============================================
// DARK MODE TOGGLE (BONUS)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Detectar preferencia del sistema
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Escuchar cambios en la preferencia del sistema
    prefersDarkScheme.addEventListener('change', (e) => {
        if (e.matches) {
            console.log('Usuario prefiere modo oscuro');
        } else {
            console.log('Usuario prefiere modo claro');
        }
    });
});

console.log('🚀 AutomaPro JavaScript cargado correctamente');
console.log('💡 Tip: Intenta el Konami Code para una sorpresa...');
