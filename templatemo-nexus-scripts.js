/*

TemplateMo 594 nexus flow

https://templatemo.com/tm-594-nexus-flow

*/

// JavaScript Document

// Initialize mobile menu functionality
        function initializeMobileMenu() {
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
            const mobileMenuClose = document.getElementById('mobileMenuClose');
            const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');
            const mobileMenuCta = document.querySelector('.mobile-menu-cta');
            const mobileMenuCtaButton = document.querySelector('.mobile-menu-cta a');
            const mobileMenuLogo = document.querySelector('.mobile-menu-logo');

            // Check if essential elements exist
            if (!mobileMenuBtn || !mobileMenu || !mobileMenuOverlay || !mobileMenuClose) {
                return;
            }

            function openMobileMenu() {
                mobileMenuBtn.classList.add('active');
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Reset and trigger animations for links
                mobileMenuLinks.forEach((link, index) => {
                    if (link) {
                        link.style.animation = 'none';
                        link.style.opacity = '0';
                        link.style.transform = 'translateX(20px)';
                        
                        // Apply animation with delay
                        setTimeout(() => {
                            if (link) {
                                link.style.animation = `slideInLeft 0.4s ease forwards`;
                            }
                        }, 250 + (index * 100));
                    }
                });
                
                // Animate CTA button
                if (mobileMenuCta) {
                    mobileMenuCta.style.animation = 'none';
                    mobileMenuCta.style.opacity = '0';
                    mobileMenuCta.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        if (mobileMenuCta) {
                            mobileMenuCta.style.animation = 'slideInUp 0.4s ease forwards';
                        }
                    }, 100);
                }
            }

            function closeMobileMenu() {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            // Toggle mobile menu
            mobileMenuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            });

            // Close mobile menu
            mobileMenuClose.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeMobileMenu();
            });
            
            mobileMenuOverlay.addEventListener('click', (e) => {
                e.stopPropagation();
                closeMobileMenu();
            });

            // Close menu when clicking on navigation links
            mobileMenuLinks.forEach(link => {
                if (link) {
                    link.addEventListener('click', () => {
                        closeMobileMenu();
                    });
                }
            });

            // Close menu when clicking on CTA button
            if (mobileMenuCtaButton) {
                mobileMenuCtaButton.addEventListener('click', (e) => {
                    if (mobileMenuCtaButton.getAttribute('href') === '#') {
                        e.preventDefault();
                    }
                    closeMobileMenu();
                });
            }

            // Close menu when clicking on logo
            if (mobileMenuLogo) {
                mobileMenuLogo.addEventListener('click', () => {
                    closeMobileMenu();
                });
            }

            // Close mobile menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });

            // Prevent body scroll when menu is open
            if (mobileMenu) {
                mobileMenu.addEventListener('touchmove', (e) => {
                    e.stopPropagation();
                });
            }
        }

        // Initialize mobile menu when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeMobileMenu);
        } else {
            initializeMobileMenu();
        }

        // Generate Matrix Rain Effect
        function generateMatrixRain() {
            const matrixRain = document.getElementById('matrixRain');
            const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            const columns = Math.floor(window.innerWidth / 20);
            
            for (let i = 0; i < columns; i++) {
                const column = document.createElement('div');
                column.className = 'matrix-column';
                column.style.left = `${i * 20}px`;
                column.style.animationDuration = `${Math.random() * 5 + 10}s`;
                column.style.animationDelay = `${Math.random() * 5}s`;
                
                // Generate random characters for the column
                let text = '';
                const charCount = Math.floor(Math.random() * 20 + 10);
                for (let j = 0; j < charCount; j++) {
                    text += characters[Math.floor(Math.random() * characters.length)] + ' ';
                }
                column.textContent = text;
                
                matrixRain.appendChild(column);
            }
        }

        // Generate Floating Particles
        function generateParticles() {
            const particlesContainer = document.getElementById('particlesContainer');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 20}s`;
                particle.style.animationDuration = `${Math.random() * 10 + 20}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Generate Data Streams
        function generateDataStreams() {
            const dataStreams = document.getElementById('dataStreams');
            const streamCount = 10;
            
            for (let i = 0; i < streamCount; i++) {
                const stream = document.createElement('div');
                stream.className = 'data-stream';
                stream.style.top = `${Math.random() * 100}%`;
                stream.style.left = `-300px`;
                stream.style.animationDelay = `${Math.random() * 5}s`;
                stream.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
                
                dataStreams.appendChild(stream);
            }
        }

        // Initialize background effects
        generateMatrixRain();
        generateParticles();
        generateDataStreams();

        // Regenerate matrix rain on window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const matrixRain = document.getElementById('matrixRain');
                matrixRain.innerHTML = '';
                generateMatrixRain();
            }, 250);
        });

        // Interactive mouse glow effect (throttled for performance)
        let mouseTimer;
        document.addEventListener('mousemove', (e) => {
            if (!mouseTimer) {
                mouseTimer = setTimeout(() => {
                    const mouseX = e.clientX;
                    const mouseY = e.clientY;
                    
                    // Move orbs slightly based on mouse position
                    const orbs = document.querySelectorAll('.orb');
                    orbs.forEach((orb, index) => {
                        const speed = (index + 1) * 0.02;
                        const x = (mouseX - window.innerWidth / 2) * speed;
                        const y = (mouseY - window.innerHeight / 2) * speed;
                        orb.style.transform = `translate(${x}px, ${y}px)`;
                    });
                    
                    // Make nearby particles glow brighter (desktop only)
                    if (window.innerWidth > 768) {
                        const particles = document.querySelectorAll('.particle');
                        particles.forEach(particle => {
                            const rect = particle.getBoundingClientRect();
                            const particleX = rect.left + rect.width / 2;
                            const particleY = rect.top + rect.height / 2;
                            const distance = Math.sqrt(Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2));
                            
                            if (distance < 150) {
                                const brightness = 1 - (distance / 150);
                                particle.style.boxShadow = `0 0 ${20 + brightness * 30}px rgba(0, 255, 255, ${0.5 + brightness * 0.5})`;
                                particle.style.transform = `scale(${1 + brightness * 0.5})`;
                            } else {
                                particle.style.boxShadow = '';
                                particle.style.transform = '';
                            }
                        });
                    }
                    
                    mouseTimer = null;
                }, 16); // ~60fps
            }
        });

        // Add a glow that follows the cursor (desktop only)
        if (window.innerWidth > 768) {
            const cursorGlow = document.createElement('div');
            cursorGlow.style.cssText = `
                position: fixed;
                width: 400px;
                height: 400px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                transition: opacity 0.3s ease;
                opacity: 0;
            `;
            document.body.appendChild(cursorGlow);

            document.addEventListener('mousemove', (e) => {
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
                cursorGlow.style.opacity = '1';
            });

            document.addEventListener('mouseleave', () => {
                cursorGlow.style.opacity = '0';
            });
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                // Only prevent default and scroll if href is more than just '#'
                if (href && href.length > 1) {
                    e.preventDefault();
                    if (href === '#top') {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    } else {
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(15, 15, 35, 0.95)';
                nav.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.2)';
            } else {
                nav.style.background = 'rgba(15, 15, 35, 0.9)';
                nav.style.boxShadow = 'none';
            }
        });

        // Variables globales para datos del cliente
        let clienteData = {};
        let clienteDataPremium = {};

        // Formulario pre-compra ESTÁNDAR
        const preCompraForm = document.getElementById('preCompraForm');
        if (preCompraForm) {
            preCompraForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                // Capturar datos del formulario
                clienteData = {
                    nombre: document.getElementById('pc-nombre').value,
                    email: document.getElementById('pc-email').value,
                    telefono: document.getElementById('pc-telefono').value,
                    empresa: document.getElementById('pc-empresa').value,
                    plataforma: document.getElementById('pc-plataforma').value,
                    giro: document.getElementById('pc-giro').value,
                    descripcion: document.getElementById('pc-descripcion').value,
                    plan: 'Estándar',
                    precio: 'MXN $700/mes',
                    fecha: new Date().toISOString()
                };
                
                // Enviar datos a Google Sheets
                try {
                    await fetch('https://script.google.com/macros/s/AKfycbxaRELSHPXsM5i3JLOQ7JZClKgnJvkKTp2vjXO0Kj0jpbchfhdvxyvrRXYX6_XS0F6Y/exec', {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(clienteData)
                    });
                } catch (error) {
                    console.warn('Error enviando datos pre-compra:', error);
                }
                
                // Mostrar confirmación y datos
                document.getElementById('confirm-nombre').textContent = clienteData.nombre;
                document.getElementById('confirm-email').textContent = clienteData.email;
                document.getElementById('confirm-empresa').textContent = clienteData.empresa;
                document.getElementById('confirm-plataforma').textContent = clienteData.plataforma;
                
                // Cambiar a paso de pago
                document.getElementById('paso-formulario').style.display = 'none';
                document.getElementById('paso-pago').style.display = 'block';
            });
        }

        // Formulario pre-compra PREMIUM
        const preCompraFormPremium = document.getElementById('preCompraFormPremium');
        if (preCompraFormPremium) {
            preCompraFormPremium.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                // Capturar datos del formulario
                clienteDataPremium = {
                    nombre: document.getElementById('pc-nombre-premium').value,
                    email: document.getElementById('pc-email-premium').value,
                    telefono: document.getElementById('pc-telefono-premium').value,
                    empresa: document.getElementById('pc-empresa-premium').value,
                    plataforma: document.getElementById('pc-plataforma-premium').value,
                    giro: document.getElementById('pc-giro-premium').value,
                    descripcion: document.getElementById('pc-descripcion-premium').value,
                    plan: 'Premium',
                    precio: 'MXN $1300/mes',
                    fecha: new Date().toISOString()
                };
                
                // Enviar datos a Google Sheets
                try {
                    await fetch('https://script.google.com/macros/s/AKfycbxaRELSHPXsM5i3JLOQ7JZClKgnJvkKTp2vjXO0Kj0jpbchfhdvxyvrRXYX6_XS0F6Y/exec', {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(clienteDataPremium)
                    });
                } catch (error) {
                    console.warn('Error enviando datos pre-compra Premium:', error);
                }
                
                // Mostrar confirmación y datos
                document.getElementById('confirm-nombre-premium').textContent = clienteDataPremium.nombre;
                document.getElementById('confirm-email-premium').textContent = clienteDataPremium.email;
                document.getElementById('confirm-empresa-premium').textContent = clienteDataPremium.empresa;
                document.getElementById('confirm-plataforma-premium').textContent = clienteDataPremium.plataforma;
                
                // Cambiar a paso de pago
                document.getElementById('paso-formulario-premium').style.display = 'none';
                document.getElementById('paso-pago-premium').style.display = 'block';
            });
        }

        // Función para volver al formulario ESTÁNDAR
        window.volverFormulario = function() {
            document.getElementById('paso-pago').style.display = 'none';
            document.getElementById('paso-formulario').style.display = 'block';
        };

        // Función para volver al formulario PREMIUM
        window.volverFormularioPremium = function() {
            document.getElementById('paso-pago-premium').style.display = 'none';
            document.getElementById('paso-formulario-premium').style.display = 'block';
        };

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(el => {
            observer.observe(el);
        });

        // Button effects
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.6)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        });

        // Simple modal logic
        function openModalById(id) {
            const el = document.getElementById(id);
            if (!el) return;
            el.classList.add('active');
            el.setAttribute('aria-hidden', 'false');
            el.setAttribute('aria-modal', 'true');
            document.body.style.overflow = 'hidden';
        }
        function closeModals() {
            document.querySelectorAll('.modal.active').forEach(m => {
                m.classList.remove('active');
                m.setAttribute('aria-hidden', 'true');
                m.setAttribute('aria-modal', 'false');
            });
            document.body.style.overflow = '';
        }
        document.querySelectorAll('.open-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const id = btn.getAttribute('data-modal');
                if (id) openModalById(id);
            });
        });
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (target?.getAttribute && target.getAttribute('data-close') === 'modal') {
                closeModals();
            }
            if (target?.classList && target.classList.contains('modal-close')) {
                closeModals();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModals();
        });

        // Stats counter animation
        const animateStats = () => {
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
                let count = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        clearInterval(timer);
                        count = target;
                    }
                    const suffix = stat.textContent.replace(/[\d]/g, '');
                    stat.textContent = Math.floor(count) + suffix;
                }, 20);
            });
        };

        // Trigger stats animation when section is visible
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // Glitch effect on hover for feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.animation = 'glitch1 0.3s ease-in-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 300);
            });
        });

        // Random cyber text effects
        const cyberTexts = ['CONNECTING...', 'NEURAL LINK ESTABLISHED', 'QUANTUM SYNC ACTIVE', 'REALITY MATRIX LOADED'];
        
        setInterval(() => {
            const randomText = cyberTexts[Math.floor(Math.random() * cyberTexts.length)];
            const tempElement = document.createElement('div');
            tempElement.textContent = randomText;
            tempElement.style.cssText = `
                position: fixed;
                top: ${Math.random() * 100}vh;
                left: ${Math.random() * 100}vw;
                color: var(--primary-cyan);
                font-size: 0.8rem;
                font-weight: 700;
                z-index: 1000;
                opacity: 0.7;
                pointer-events: none;
                animation: fadeOut 3s ease-out forwards;
                text-shadow: 0 0 10px var(--primary-cyan);
            `;
            document.body.appendChild(tempElement);
            
            setTimeout(() => {
                document.body.removeChild(tempElement);
            }, 3000);
        }, 5000);

        // Add fadeOut animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut {
                0% { opacity: 0.7; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-50px); }
            }
        `;
        document.head.appendChild(style);

        // Contact form submission to Google Apps Script
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                const submitBtn = contactForm.querySelector('.btn-submit');
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                if (!name || !email || !message) return;
                const action = contactForm.getAttribute('action');
                try {
                    if (submitBtn) {
                        submitBtn.textContent = 'Enviando...';
                        submitBtn.disabled = true;
                    }
                    const res = await fetch(action, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ nombre: name, email: email, mensaje: message })
                    });
                    if (submitBtn) {
                        submitBtn.textContent = 'Enviado';
                        submitBtn.style.background = 'var(--primary-cyan)';
                    }
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('message').value = '';
                    setTimeout(() => {
                        if (submitBtn) {
                            submitBtn.textContent = document.documentElement.lang === 'en' ? 'Send Message' : 'Enviar Mensaje';
                            submitBtn.disabled = false;
                            submitBtn.style.background = '';
                        }
                    }, 2500);
                } catch (err) {
                    console.error(err);
                    if (submitBtn) {
                        submitBtn.textContent = document.documentElement.lang === 'en' ? 'Error. Try again' : 'Error. Intenta de nuevo';
                        setTimeout(() => {
                            submitBtn.textContent = document.documentElement.lang === 'en' ? 'Send Message' : 'Enviar Mensaje';
                            submitBtn.disabled = false;
                        }, 2500);
                    }
                }
            });
        }

        // Gallery carousel for bot modals
        function initializeGalleryCarousel() {
            const modals = document.querySelectorAll('.modal-bot');
            
            modals.forEach(modal => {
                const dots = modal.querySelectorAll('.dot');
                const items = modal.querySelectorAll('.gallery-item');
                let currentSlide = 0;
                let autoPlayInterval;

                function showSlide(index) {
                    // Remove active class from all
                    items.forEach(item => item.classList.remove('active'));
                    dots.forEach(dot => dot.classList.remove('active'));
                    
                    // Add active class to current
                    if (items[index]) items[index].classList.add('active');
                    if (dots[index]) dots[index].classList.add('active');
                    
                    currentSlide = index;
                }

                function nextSlide() {
                    currentSlide = (currentSlide + 1) % items.length;
                    showSlide(currentSlide);
                }

                function startAutoPlay() {
                    autoPlayInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
                }

                function stopAutoPlay() {
                    if (autoPlayInterval) {
                        clearInterval(autoPlayInterval);
                    }
                }

                // Add click event to dots
                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        stopAutoPlay();
                        showSlide(index);
                        startAutoPlay();
                    });
                });

                // Start autoplay when modal opens
                const modalElement = modal;
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.attributeName === 'aria-hidden') {
                            const isHidden = modalElement.getAttribute('aria-hidden') === 'true';
                            if (!isHidden) {
                                showSlide(0);
                                startAutoPlay();
                            } else {
                                stopAutoPlay();
                            }
                        }
                    });
                });

                observer.observe(modalElement, { attributes: true });
            });
        }

        // Initialize gallery carousel
        initializeGalleryCarousel();
    