// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Animate nodes on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe use case cards
document.querySelectorAll('.use-case-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Animate integration icons
document.querySelectorAll('.integration-icon').forEach((icon, index) => {
    icon.style.opacity = '0';
    icon.style.transform = 'scale(0)';
    icon.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    
    const iconObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, observerOptions);
    
    iconObserver.observe(icon);
});

// Add tooltip functionality
document.querySelectorAll('.integration-icon').forEach(icon => {
    const tooltip = icon.getAttribute('data-tooltip');
    if (tooltip) {
        icon.addEventListener('mouseenter', function() {
            const tooltipEl = document.createElement('div');
            tooltipEl.className = 'tooltip';
            tooltipEl.textContent = tooltip;
            tooltipEl.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                font-size: 0.875rem;
                white-space: nowrap;
                pointer-events: none;
                z-index: 1000;
                transform: translateY(-100%) translateX(-50%);
                left: 50%;
                top: -10px;
            `;
            icon.style.position = 'relative';
            icon.appendChild(tooltipEl);
        });
        
        icon.addEventListener('mouseleave', function() {
            const tooltip = icon.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    }
});

// Mouse interactivity for Aurora background
const heroSection = document.querySelector('.hero');
const auroraLayers = document.querySelectorAll('.aurora-layer');

if (heroSection && auroraLayers.length > 0) {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        targetX = (x - 50) / 50; // -1 to 1
        targetY = (y - 50) / 50; // -1 to 1
    });
    
    // Smooth animation loop
    function animateAurora() {
        mouseX += (targetX - mouseX) * 0.1;
        mouseY += (targetY - mouseY) * 0.1;
        
        auroraLayers.forEach((layer, index) => {
            const intensity = 25;
            const delay = index * 0.15;
            
            const moveX = mouseX * intensity * (1 - delay * 0.5);
            const moveY = mouseY * intensity * (1 - delay * 0.5);
            
            layer.style.setProperty('--mouse-x', `${moveX}px`);
            layer.style.setProperty('--mouse-y', `${moveY}px`);
        });
        
        requestAnimationFrame(animateAurora);
    }
    
    animateAurora();
    
    // Reset on mouse leave
    heroSection.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
    });
}

// Live Automation Simulator Animation - Initialize on window load
window.addEventListener('load', function() {
    const liveAutomation = document.querySelector('.live-automation');
    const automationSteps = document.querySelectorAll('.automation-step');
    const connectionSvgs = document.querySelectorAll('.connection-svg');
    const actionItems = document.querySelectorAll('.action-item');
    const inputText = document.getElementById('automation-input-text');
    const intelligenceText = document.getElementById('automation-intelligence-text');
    
    if (liveAutomation && automationSteps.length > 0) {
        let currentStep = 0;
        const stepDuration = 2500; // 2.5 seconds per step
        const totalSteps = automationSteps.length;
        
        // Input messages to cycle through
        const inputMessages = [
            "Nouveau lead reçu",
            "Question client urgente",
            "Demande de devis",
            "Commentaire positif"
        ];
        let messageIndex = 0;
        
        function resetSteps() {
            automationSteps.forEach(step => {
                step.classList.remove('active');
            });
            connectionSvgs.forEach(svg => {
                svg.classList.remove('active');
            });
            actionItems.forEach(item => {
                item.classList.remove('active');
            });
            currentStep = 0;
        }
        
        function activateStep(stepIndex) {
            // Remove active from all steps
            automationSteps.forEach(step => {
                step.classList.remove('active');
            });
            connectionSvgs.forEach(svg => {
                svg.classList.remove('active');
            });
            actionItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Activate current step and all previous steps
            for (let i = 0; i <= stepIndex; i++) {
                if (automationSteps[i]) {
                    automationSteps[i].classList.add('active');
                }
            }
            
            // Activate connection lines
            if (stepIndex >= 0) {
                const svg1 = document.querySelector('.connection-svg-1');
                if (svg1) svg1.classList.add('active');
            }
            
            if (stepIndex >= 1) {
                const svg2 = document.querySelector('.connection-svg-2');
                const svg3 = document.querySelector('.connection-svg-3');
                if (svg2) svg2.classList.add('active');
                if (svg3) svg3.classList.add('active');
            }
            
            // Activate action items with pulse animation
            if (stepIndex >= 2) {
                actionItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('active');
                    }, index * 200);
                });
            }
            
            // Update texts
            if (stepIndex === 0 && inputText && inputMessages.length > 0) {
                inputText.style.opacity = '0';
                setTimeout(() => {
                    inputText.textContent = inputMessages[messageIndex % inputMessages.length];
                    inputText.style.opacity = '1';
                    messageIndex++;
                }, 200);
            }
            
            if (stepIndex === 1 && intelligenceText) {
                intelligenceText.style.opacity = '0';
                setTimeout(() => {
                    intelligenceText.textContent = "Analyse du besoin par l'IA...";
                    intelligenceText.style.opacity = '1';
                }, 200);
            }
        }
        
        function nextStep() {
            activateStep(currentStep);
            currentStep++;
            
            if (currentStep >= totalSteps) {
                // Wait a bit before restarting
                setTimeout(() => {
                    resetSteps();
                    setTimeout(() => {
                        nextStep();
                    }, 500);
                }, stepDuration);
            } else {
                setTimeout(nextStep, stepDuration);
            }
        }
        
        // Start animation immediately on load
        setTimeout(() => {
            nextStep();
        }, 500);
    }
});

// Demo button interactions
document.querySelectorAll('.btn-demo, .btn-hero').forEach(button => {
    button.addEventListener('click', () => {
        // Add your demo booking logic here
        alert('Merci pour votre intérêt ! Nous vous contacterons prochainement pour planifier votre démo.');
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// AI Widget Animation - Execute on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    const processSteps = document.querySelectorAll('.process-step');
    const inputText = document.getElementById('input-text');
    
    if (processSteps.length > 0) {
    let currentStep = 0;
    const stepDuration = 2000; // 2 seconds per step
    const totalSteps = processSteps.length;
    
    // Input messages to cycle through
    const inputMessages = [
        "Un nouveau lead arrive via WhatsApp",
        "Question client sur le produit X",
        "Demande de devis urgente",
        "Commentaire positif sur les réseaux sociaux"
    ];
    let messageIndex = 0;
    
    function resetSteps() {
        processSteps.forEach(step => {
            step.classList.remove('active', 'completed');
        });
        currentStep = 0;
    }
    
    function activateStep(stepIndex) {
        // Mark previous steps as completed
        for (let i = 0; i < stepIndex; i++) {
            processSteps[i].classList.remove('active');
            processSteps[i].classList.add('completed');
        }
        
        // Activate current step
        if (processSteps[stepIndex]) {
            processSteps[stepIndex].classList.remove('completed');
            processSteps[stepIndex].classList.add('active');
        }
        
        // Update input message
        if (inputText && inputMessages.length > 0) {
            inputText.textContent = inputMessages[messageIndex % inputMessages.length];
            messageIndex++;
        }
    }
    
    function nextStep() {
        activateStep(currentStep);
        currentStep++;
        
        if (currentStep >= totalSteps) {
            // Wait a bit before restarting
            setTimeout(() => {
                resetSteps();
                setTimeout(() => {
                    nextStep();
                }, 500);
            }, stepDuration);
        } else {
            setTimeout(nextStep, stepDuration);
        }
    }
    
    // Start animation immediately on DOMContentLoaded
    setTimeout(() => {
        nextStep();
    }, 500);
    
    }
});

// New Problems Widget Animation - Separate from the existing one
document.addEventListener('DOMContentLoaded', function() {
    const problemsSteps = document.querySelectorAll('.process-step-problem');
    const problemsInputText = document.getElementById('problems-input-text');
    const problemsMessageTime = document.getElementById('problems-message-time');
    
    if (problemsSteps.length > 0) {
        let currentProblemStep = 0;
        const problemStepDuration = 2500; // 2.5 seconds per step
        const totalProblemSteps = problemsSteps.length;
        
        // WhatsApp messages to cycle through
        const problemsMessages = [
            "Nouveau message reçu",
            "Question client sur les tarifs",
            "Demande d'information urgente",
            "Message Instagram reçu",
            "Commentaire sur le produit",
            "Demande de rendez-vous"
        ];
        let problemsMessageIndex = 0;
        
        // Update time function
        function updateTime() {
            if (problemsMessageTime) {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                problemsMessageTime.textContent = `${hours}:${minutes}`;
            }
        }
        
        function resetProblemsSteps() {
            problemsSteps.forEach(step => {
                step.classList.remove('active', 'completed');
            });
            currentProblemStep = 0;
        }
        
        function activateProblemStep(stepIndex) {
            // Mark previous steps as completed
            for (let i = 0; i < stepIndex; i++) {
                problemsSteps[i].classList.remove('active');
                problemsSteps[i].classList.add('completed');
            }
            
            // Activate current step
            if (problemsSteps[stepIndex]) {
                problemsSteps[stepIndex].classList.remove('completed');
                problemsSteps[stepIndex].classList.add('active');
            }
            
            // Update WhatsApp message
            if (problemsInputText && problemsMessages.length > 0) {
                problemsInputText.textContent = problemsMessages[problemsMessageIndex % problemsMessages.length];
                problemsMessageIndex++;
            }
            
            // Update time
            updateTime();
        }
        
        function nextProblemStep() {
            activateProblemStep(currentProblemStep);
            currentProblemStep++;
            
            if (currentProblemStep >= totalProblemSteps) {
                // Wait a bit before restarting
                setTimeout(() => {
                    resetProblemsSteps();
                    setTimeout(() => {
                        nextProblemStep();
                    }, 500);
                }, problemStepDuration);
            } else {
                setTimeout(nextProblemStep, problemStepDuration);
            }
        }
        
        // Start animation with a delay to avoid conflict with the first widget
        setTimeout(() => {
            updateTime();
            nextProblemStep();
        }, 1500);
    }
});

// Connections Diagram - Draw connection lines
function drawConnections() {
    const svg = document.getElementById('connectionsSvg');
    const center = document.getElementById('center');
    const nodes = [
        document.getElementById('node1'),
        document.getElementById('node2'),
        document.getElementById('node3'),
        document.getElementById('node4'),
        document.getElementById('node5'),
        document.getElementById('node6')
    ];

    // Check if elements exist
    if (!svg || !center || nodes.some(node => !node)) {
        return;
    }

    // Limpiar SVG
    svg.innerHTML = '';

    // Obtener posición del centro
    const centerRect = center.getBoundingClientRect();
    const containerRect = svg.getBoundingClientRect();
    
    const centerX = centerRect.left + centerRect.width / 2 - containerRect.left;
    const centerY = centerRect.top + centerRect.height / 2 - containerRect.top;

    // Crear líneas hacia cada nodo
    nodes.forEach((node, index) => {
        const nodeRect = node.getBoundingClientRect();
        const nodeX = nodeRect.left + nodeRect.width / 2 - containerRect.left;
        const nodeY = nodeRect.top + nodeRect.height / 2 - containerRect.top;

        // Crear curva bezier
        const controlX = (centerX + nodeX) / 2;
        const controlY = (centerY + nodeY) / 2;
        
        // Ajustar punto de control para crear curva
        const angle = Math.atan2(nodeY - centerY, nodeX - centerX);
        const perpAngle = angle + Math.PI / 2;
        const offset = 50; // Curvatura
        
        const cx = controlX + Math.cos(perpAngle) * offset;
        const cy = controlY + Math.sin(perpAngle) * offset;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${centerX} ${centerY} Q ${cx} ${cy} ${nodeX} ${nodeY}`);
        path.setAttribute('class', `connection-line connection-line-${index + 1}`);
        path.style.animationDelay = `${index * 0.1}s`;

        svg.appendChild(path);
    });
}

// Dibujar conexiones al cargar y al redimensionar
window.addEventListener('load', () => {
    setTimeout(drawConnections, 100);
});

window.addEventListener('resize', () => {
    setTimeout(drawConnections, 100);
});

// También dibujar cuando el diagrama sea visible (scroll)
document.addEventListener('DOMContentLoaded', () => {
    const diagramSection = document.querySelector('.connections-diagram-section');
    if (diagramSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(drawConnections, 100);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(diagramSection);
    }
});

// Dynamic Carousel - Load images from JSON file
function loadCarouselImages() {
    const carouselTrack = document.getElementById('carousel-track');
    
    if (!carouselTrack) {
        return;
    }

    // Fetch the images list from JSON file
    fetch('images-list.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load images list');
            }
            return response.json();
        })
        .then(data => {
            const images = data.images || [];
            
            // Clear existing content
            carouselTrack.innerHTML = '';
            
            // Create carousel items for each image
            images.forEach((imageName, index) => {
                const imagePath = `images/${imageName}`;
                const altText = imageName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
                
                // Create carousel item
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';
                
                const img = document.createElement('img');
                img.src = imagePath;
                img.alt = altText;
                img.className = 'carousel-image';
                
                // Handle image load errors
                img.onerror = function() {
                    console.warn(`Failed to load image: ${imagePath}`);
                    // Optionally hide the item or show a placeholder
                    carouselItem.style.display = 'none';
                };
                
                carouselItem.appendChild(img);
                carouselTrack.appendChild(carouselItem);
            });
            
            // Duplicate items for infinite scroll effect
            images.forEach((imageName) => {
                const imagePath = `images/${imageName}`;
                const altText = imageName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
                
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';
                
                const img = document.createElement('img');
                img.src = imagePath;
                img.alt = altText;
                img.className = 'carousel-image';
                
                img.onerror = function() {
                    carouselItem.style.display = 'none';
                };
                
                carouselItem.appendChild(img);
                carouselTrack.appendChild(carouselItem);
            });
        })
        .catch(error => {
            console.error('Error loading carousel images:', error);
            // Fallback: try to load a default set of images
            loadFallbackImages();
        });
}

// Fallback function if JSON file is not available
function loadFallbackImages() {
    const carouselTrack = document.getElementById('carousel-track');
    if (!carouselTrack) return;
    
    // List of known images as fallback
    const fallbackImages = [
        '1.png', '2.png', '3.png', '4.png',
        'anim1.jpg', 'anim2.jpg', 'anim3.jpg', 'anim4.jpg', 'anim5.jpg', 'anim6.jpg',
        '9c7eb8c2-a0de-41f1-be5b-7873a6a16f6f.jpg',
        'Attached_image.png',
        'fonfo reseaux.jpg',
        'mails (2).jpg',
        'mails.jpg',
        'ordi.jpg',
        'ordi1.jpg',
        'ordi2.jpg',
        'phone3.jpg',
        'prueba.jpg',
        'res.jpg',
        'site web.jpg',
        'unnamed.jpg'
    ];
    
    carouselTrack.innerHTML = '';
    
    // Create items for all images (original + duplicate for infinite scroll)
    [...fallbackImages, ...fallbackImages].forEach((imageName) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        
        const img = document.createElement('img');
        img.src = `images/${imageName}`;
        img.alt = imageName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
        img.className = 'carousel-image';
        
        img.onerror = function() {
            carouselItem.style.display = 'none';
        };
        
        carouselItem.appendChild(img);
        carouselTrack.appendChild(carouselItem);
    });
}

// Load carousel images when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadCarouselImages();
});

// Also try loading on window load as backup
window.addEventListener('load', function() {
    const carouselTrack = document.getElementById('carousel-track');
    if (carouselTrack && carouselTrack.children.length === 0) {
        loadCarouselImages();
    }
});