(() => {
  const translations = {
    es: {
      brand: "BotFlow AI",
      nav: { services: "Servicios", plans: "Planes", results: "Resultados", contact: "Contacto" },
      cta: { demo: "Demo Gratis" },
      hero: {
        subtitle: "Automatiza tu atención al cliente con IA avanzada. Convierte visitantes en clientes 24/7.",
        primary: "Solicitar Demo",
        secondary: "Ver Casos de Éxito"
      },
      stats: {
        daily: "Conversaciones Diarias",
        uptime: "Disponibilidad",
        satisfaction: "Satisfacción Cliente",
        conversions: "Más Conversiones"
      },
      features: {
        title: "Nuestros Servicios",
        subtitle: "Soluciones de IA conversacional diseñadas para maximizar tus ventas y automatizar tu atención",
        intelligent: {
          title: "Bots Inteligentes",
          desc: "Chatbots con IA avanzada que entienden el contexto y responden como un experto en tu negocio, disponibles 24/7."
        },
        multi: {
          title: "Multi-Plataforma",
          desc: "Integración perfecta con Facebook Messenger, WhatsApp, Instagram y tu sitio web desde una sola plataforma."
        },
        analytics: {
          title: "Análisis de Leads",
          desc: "Dashboard completo para monitorear conversaciones, identificar leads calientes y optimizar tu estrategia de ventas."
        },
        security: {
          title: "Seguridad Total",
          desc: "Protocolos de seguridad empresarial que protegen los datos de tus clientes con encriptación de nivel bancario."
        },
        instant: {
          title: "Respuesta Instantánea",
          desc: "Tiempo de respuesta menor a 2 segundos en cualquier plataforma, sin importar el volumen de consultas."
        },
        predictive: {
          title: "IA Predictiva",
          desc: "Algoritmos que identifican la intención del cliente y lo guían hacia la conversión de manera natural."
        }
      },
      pricing: {
        title: "Planes de Servicio",
        subtitle: "Elige el plan perfecto para automatizar tu negocio",
        standard: "Estándar",
        premium: "Premium",
        enterprise: "Empresarial",
        perMonth: "por mes",
        priceStd: "MXN $700",
        pricePre: "MXN $1300",
        std1: "1 bot en renta mensual",
        std2: "Acceso a dashboard para monitoreo",
        std3: "200 mensajes incluidos",
        std4: "Soporte continuo",
        std5: "Sitio web o redes sociales",
        pre1: "Incluye todo Estándar",
        pre2: "Dashboard completo con analytics",
        pre3: "Soporte inmediato",
        pre4: "Cambios y personalización",
        pre5: "500 mensajes incluidos",
        ef1: "Bots ilimitados",
        ef2: "Solución personalizada",
        ef3: "Conversaciones ilimitadas",
        ef4: "Soporte dedicado 24/7",
        ef5: "API personalizada",
        ef6: "Entrenamiento especializado",
        start: "Empezar",
        popular: "Más Popular",
        contact: "Contactar",
        contactForQuote: "Contáctanos para cotización",
        custom: "a medida"
      },
      contact: {
        title: "Contacta con Nosotros",
        subtitle: "¿Listo para automatizar tu negocio? Hablemos",
        nameLabel: "Nombre Completo",
        namePh: "Tu nombre completo",
        emailLabel: "Email Empresarial",
        emailPh: "tu.email@empresa.com",
        messageLabel: "Mensaje",
        messagePh: "Cuéntanos sobre tu negocio y cómo podemos ayudarte...",
        send: "Enviar Mensaje"
      },
      footer: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        docs: "Documentation",
        support: "Contact Support",
        tagline: "Automatización inteligente para tu negocio",
        copyright: "© 2025 BotFlow AI. Todos los derechos reservados."
      }
      ,
      bots: {
        title: "Tipos de Bots",
        subtitle: "Elige dónde quieres automatizar: tu sitio web o tus redes sociales",
        demo: "Ver demo",
        web: {
          title: "Bot para Sitio Web",
          desc: "Atiende visitantes de tu web en tiempo real, capta leads y responde FAQs.",
          modal: "Este es el mismo widget de chat que ves en la esquina. Se integra a tu web y responde con tu información."
        },
        social: {
          title: "Bot para Redes (Messenger/IG/WA)",
          desc: "Responde automáticamente mensajes en tus redes, 24/7, con tu información.",
          modal: "Misma lógica aplicada a redes sociales: responde mensajes, clasifica leads y envía info clave automáticamente."
        },
        videoPlaceholder: "Área para video demo (puedes insertar un video de Messenger más adelante)"
      },
      cases: {
        title: "Casos de Éxito",
        subtitle: "Ejemplos reales de agentes IA en acción y tu trayectoria",
        general: { title: "Agente IA General (Trayectoria)", desc: "Explica tus proyectos, experiencia y habilidades de forma clara y detallada." },
        web: { title: "Portafolio Web / Frontend", desc: "Enfocado a venta de sitios web y tu experiencia en frontend." },
        site: { title: "Este Sitio (botsaiservices.online)", desc: "La propia página incluye un bot funcional como ejemplo real del servicio." },
        view: "Ver Portafolio"
      },
      faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Respuestas rápidas a dudas comunes",
        q1: "¿Cómo integro el bot en mi sitio o redes?",
        a1: "Yo realizo la integración por ti. En web se agrega un script; en redes se conecta a tu página o cuenta.",
        q2: "¿Cómo entrena el bot con mi información?",
        a2: "Cargamos FAQs, documentos y enlaces. El bot responde con base en tu contenido y se ajusta con feedback.",
        q3: "¿Qué pasa al rebasar los mensajes del plan?",
        a3: "En el dashboard (incluido en ambos planes) ves el contador de mensajes. Al superar el límite, el bot se bloquea hasta comprar más: 100 mensajes extra por USD $10 o MXN $180.",
        q4: "¿Puedo personalizar el tono y flujo?",
        a4: "Sí. Ajustamos tono, mensajes clave, captación de leads y flujos de preguntas específicas.",
        q5: "¿Qué soporte incluyen los planes?",
        a5: "Estándar incluye soporte continuo. Premium agrega soporte inmediato y cambios bajo demanda."
      }
    },
    en: {
      brand: "BotFlow AI",
      nav: { services: "Services", plans: "Pricing", results: "Results", contact: "Contact" },
      cta: { demo: "Free Demo" },
      hero: {
        subtitle: "Automate customer support with advanced AI. Convert visitors 24/7.",
        primary: "Request Demo",
        secondary: "See Case Studies"
      },
      stats: {
        daily: "Daily Conversations",
        uptime: "Uptime",
        satisfaction: "Customer Satisfaction",
        conversions: "More Conversions"
      },
      features: {
        title: "Our Services",
        subtitle: "Conversational AI solutions designed to maximize sales and automate support",
        intelligent: {
          title: "Intelligent Bots",
          desc: "Advanced AI chatbots that understand context and respond like an expert in your business, available 24/7."
        },
        multi: {
          title: "Multi-Platform",
          desc: "Seamless integration with Facebook Messenger, WhatsApp, Instagram and your website from a single platform."
        },
        analytics: {
          title: "Lead Analytics",
          desc: "Full dashboard to monitor conversations, identify hot leads, and optimize your sales strategy."
        },
        security: {
          title: "Enterprise Security",
          desc: "Security protocols that protect customer data with bank-level encryption."
        },
        instant: {
          title: "Instant Response",
          desc: "Response time under 2 seconds on any platform, regardless of volume."
        },
        predictive: {
          title: "Predictive AI",
          desc: "Algorithms that detect customer intent and guide them naturally to conversion."
        }
      },
      pricing: {
        title: "Service Plans",
        subtitle: "Choose the perfect plan to automate your business",
        standard: "Standard",
        premium: "Premium",
        enterprise: "Enterprise",
        perMonth: "per month",
        priceStd: "USD $40",
        pricePre: "USD $70",
        std1: "1 bot monthly rental",
        std2: "Dashboard access for monitoring",
        std3: "200 messages included",
        std4: "Ongoing support",
        std5: "Website or social networks",
        pre1: "Includes everything in Standard",
        pre2: "Full analytics dashboard",
        pre3: "Immediate support",
        pre4: "Changes & customization",
        pre5: "500 messages included",
        ef1: "Unlimited bots",
        ef2: "Custom solution",
        ef3: "Unlimited conversations",
        ef4: "24/7 dedicated support",
        ef5: "Custom API",
        ef6: "Specialized training",
        start: "Get Started",
        popular: "Most Popular",
        contact: "Contact",
        contactForQuote: "Contact us for a quote",
        custom: "custom"
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Ready to automate your business? Let's talk",
        nameLabel: "Full Name",
        namePh: "Your full name",
        emailLabel: "Business Email",
        emailPh: "your.email@company.com",
        messageLabel: "Message",
        messagePh: "Tell us about your business and how we can help...",
        send: "Send Message"
      },
      footer: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        docs: "Documentation",
        support: "Contact Support",
        tagline: "Intelligent automation for your business",
        copyright: "© 2025 BotFlow AI. All rights reserved."
      },
      bots: {
        title: "Bot Types",
        subtitle: "Choose where to automate: your website or your social networks",
        demo: "See demo",
        web: {
          title: "Website Bot",
          desc: "Serve website visitors in real time, capture leads and answer FAQs.",
          modal: "This is the same chat widget you see on the corner. It integrates into your site and answers with your content."
        },
        social: {
          title: "Social Bot (Messenger/IG/WA)",
          desc: "Automatically responds to messages on your social networks 24/7 with your information.",
          modal: "Same logic applied to social networks: replies to messages, classifies leads and sends key info automatically."
        },
        videoPlaceholder: "Area for demo video (you can embed a Messenger video later)"
      },
      cases: {
        title: "Success Cases",
        subtitle: "Real examples of AI agents in action and your trajectory",
        general: { title: "General AI Agent (Trajectory)", desc: "Explains your projects, experience and skills clearly and in detail." },
        web: { title: "Web / Frontend Portfolio", desc: "Focused on selling websites and your frontend experience." },
        site: { title: "This Site (botsaiservices.online)", desc: "This very website includes a working bot as a real example of the service." },
        view: "View Portfolio"
      },
      faq: {
        title: "FAQ",
        subtitle: "Quick answers to common questions",
        q1: "How do I integrate the bot into my site or socials?",
        a1: "I handle the integration. On web we add a script; on socials we connect to your page/account.",
        q2: "How is the bot trained with my content?",
        a2: "We load FAQs, documents and links. The bot answers based on your content and improves with feedback.",
        q3: "What happens when I exceed the plan's messages?",
        a3: "In the dashboard (included in both plans) you can see your message counter. After exceeding the limit the bot is paused until you purchase more: 100 extra messages for USD $10 or MXN $180.",
        q4: "Can I customize tone and flows?",
        a4: "Yes. We adjust tone, key messages, lead capture and specific question flows.",
        q5: "What support is included?",
        a5: "Standard includes ongoing support. Premium adds immediate support and on-demand changes."
      }
    }
  };

  const STORAGE_KEY = 'site_lang';
  const defaultLang = localStorage.getItem(STORAGE_KEY) || 'es';

  function getByPath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.es;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const txt = getByPath(dict, key);
      if (typeof txt === 'string') {
        el.textContent = txt;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const txt = getByPath(dict, key);
      if (typeof txt === 'string') {
        el.setAttribute('placeholder', txt);
      }
    });
    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang.toUpperCase();
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
  }

  function toggleLang() {
    const current = localStorage.getItem(STORAGE_KEY) || defaultLang;
    const next = current === 'es' ? 'en' : 'es';
    localStorage.setItem(STORAGE_KEY, next);
    applyTranslations(next);
  }

  function init() {
    const lang = localStorage.getItem(STORAGE_KEY) || defaultLang;
    applyTranslations(lang);
    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', toggleLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


