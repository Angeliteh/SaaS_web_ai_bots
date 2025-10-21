(() => {
  const translations = {
    es: {
      brand: "BotFlow AI",
      nav: { services: "Servicios", cases: "Casos de Éxito", plans: "Planes", faq: "FAQ", contact: "Contacto" },
      cta: { demo: "Demo Gratis" },
      hero: {
        hook: " Ahórrate un trabajador. Automatiza respuestas 24/7 por $40/mes.",
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
        title: "Cómo Funciona Nuestra Tecnología",
        subtitle: "Arquitectura profesional que permite automatizar hasta 50 negocios simultáneamente",
        social: {
          title: "Integración con Redes Sociales",
          desc: "Utilizo el SDK oficial de Meta para conectar WhatsApp, Messenger e Instagram. Tu página se registra en mi app de Meta Developers, lo que me da acceso a mensajes mediante Webhook API. Cuando un cliente escribe, el mensaje llega a mi servidor privado, el bot procesa con IA y responde automáticamente en menos de 2 segundos."
        },
        web: {
          title: "Bots para Sitios Web",
          desc: "Para sitios web, instalo un widget de chat personalizable que se integra con un simple script. El widget envía mensajes a mi servidor mediante webhook, igual que las redes sociales. Si no tienes sitio web, puedo crearlo para ti con el bot ya integrado. El widget es 100% personalizable (colores, posición, mensajes)."
        },
        architecture: {
          title: "Arquitectura Horizontal Escalable",
          desc: "Todo funciona en mi servidor privado con arquitectura horizontal, permitiendo manejar hasta 50 bots simultáneos con mínimo consumo energético. Cada bot es independiente pero comparte la infraestructura, optimizando recursos. Los bots funcionan en paralelo sin interferencias entre sí."
        },
        database: {
          title: "Base de Datos Centralizada",
          desc: "Todos los datos se guardan en Supabase (base de datos empresarial). Mantengo persistencia de mensajes, sesiones y contextos organizados y centralizados. Esto permite que el bot recuerde conversaciones anteriores y mantenga contexto. Tú accedes a tu dashboard para ver conversaciones, leads y estadísticas en tiempo real."
        },
        personalization: {
          title: "Personalización Total por Negocio",
          desc: "Cada bot se entrena con información específica de tu negocio: productos, servicios, precios, FAQs, tono de voz. La información es completamente personalizada por bot y función específica. El bot aprende de cada conversación y mejora continuamente sus respuestas basado en feedback real."
        },
        security: {
          title: "Seguridad y Privacidad",
          desc: "Todos los datos están encriptados con estándares empresariales. Uso Supabase para almacenamiento seguro y cumplo con protocolos de privacidad. Cada cliente tiene acceso solo a sus propios datos. Las conversaciones se mantienen privadas y seguras, con backups automáticos diarios."
        }
      },
      pricing: {
        title: "Planes de Servicio",
        subtitle: "Elige el plan perfecto para automatizar tu negocio",
        standard: "Estándar",
        premium: "Premium",
        enterprise: "Empresarial",
        perMonth: "por mes",
        priceStd: "USD $40",
        pricePre: "USD $70",
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
        altContact: "¿Tienes dudas? Contáctame",
        popular: "Más Popular",
        contact: "Contactar",
        contactForQuote: "Contáctame",
        custom: "a medida",
        buyNow: "Comprar Ahora"
      },
      modal: {
        buyStandard: "Comprar Plan Estándar",
        buyPremium: "Comprar Plan Premium",
        subtitle: "Completa tus datos y procede al pago",
        plan: "Plan:",
        price: "Precio:",
        priceStd: "USD $40/mes",
        pricePre: "USD $70/mes",
        contactInfo: "Información de Contacto",
        fullName: "Nombre Completo *",
        fullNamePh: "Juan Pérez",
        email: "Email *",
        emailPh: "juan@empresa.com",
        phone: "Teléfono / WhatsApp *",
        phonePh: "+52 123 456 7890",
        businessName: "Nombre del Negocio *",
        businessNamePh: "Mi Empresa",
        botConfig: "Configuración del Bot",
        platform: "¿Dónde quieres el bot? *",
        platformSelect: "Selecciona una opción",
        platformWeb: "Sitio Web",
        platformMessenger: "Facebook Messenger",
        platformWhatsApp: "WhatsApp",
        platformInstagram: "Instagram",
        platformMultiple: "Múltiples plataformas",
        industry: "Giro o Industria *",
        industrySelect: "Selecciona una opción",
        industryEcommerce: "E-commerce / Tienda Online",
        industryServices: "Servicios Profesionales",
        industryRestaurant: "Restaurante / Comida",
        industryHealth: "Salud / Bienestar",
        industryEducation: "Educación",
        industryRealEstate: "Bienes Raíces",
        industryTech: "Tecnología",
        industryOther: "Otro",
        description: "Descripción Breve de tu Negocio *",
        descriptionPh: "¿Qué productos o servicios ofreces?",
        continue: "Continuar al Pago →",
        dataSaved: "Datos Guardados Correctamente",
        proceedPayment: "Ahora procede con el pago seguro a través de PayPal",
        name: "Nombre:",
        company: "Empresa:",
        platformLabel: "Plataforma:",
        securePayment: "Pago seguro procesado por PayPal",
        payWithPayPal: "Pagar con PayPal",
        backToEdit: "← Volver a editar datos",
        planStandard: "Plan Estándar:",
        planPremiumLabel: "Plan Premium: USD $70/mes"
      },
      contact: {
        title: "Contáctame",
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
        mainTitle: "¿Qué son los Agentes IA Conversacionales?",
        mainSubtitle: "Reemplaza a las personas que responden mensajes en tu negocio con agentes inteligentes que trabajan 24/7",
        introTitle: "Automatización Inteligente de Conversaciones",
        introPara1: "Los agentes IA conversacionales son asistentes virtuales que simulan a la perfección a una persona real respondiendo mensajes. Gracias a los modelos de lenguaje avanzados (LLM), pueden mantener conversaciones naturales, humanas y contextuales con tus clientes.",
        introPara2: "¿Por qué son necesarios? Porque tu negocio recibe las mismas preguntas una y otra vez: precios, disponibilidad, horarios, ubicación, servicios. Un agente IA responde todo esto instantáneamente, sin errores, sin descansos y sin límites. La información fluye sin parar, 24/7, con calidad profesional y realismo humano.",
        benefit1: "Respuestas instantáneas (menos de 2 segundos)",
        benefit2: "Información siempre precisa y actualizada",
        benefit3: "Ahorra tiempo y dinero en atención al cliente",
        benefit4: "Trabaja 24/7, incluso cuando duermes",
        dividerTitle: "Elige Dónde Quieres Automatizar",
        dividerSubtitle: "Dos opciones: tu sitio web o tus redes sociales (o ambos)",
        title: "Tipos de Bots",
        subtitle: "Elige dónde quieres automatizar: tu sitio web o tus redes sociales",
        demo: "Ver más información",
        web: {
          title: "Bot para Sitio Web",
          subtitle: "Widget de chat inteligente que se integra en tu sitio web",
          intro: "Widget de chat inteligente que se integra en tu sitio web. Atiende a cada visitante como si fuera un empleado real, captura leads automáticamente y responde dudas al instante.",
          desc: "¿Por qué es útil? Porque el 70% de visitantes abandonan sitios web sin comprar por falta de atención inmediata. Un bot web convierte visitantes en clientes respondiendo justo cuando tienen dudas.",
          gallery1: "Video: Bot respondiendo en tiempo real",
          gallery1Sub: "(Próximamente: video demo del widget en acción)",
          gallery2: "Dashboard: Panel de control en tiempo real",
          gallery2Sub: "(Próximamente: screenshots del dashboard)",
          gallery3: "Configuración: Personalización total",
          gallery3Sub: "(Próximamente: imágenes de configuración)",
          featuresTitle: "Características incluidas:",
          feature1: "Widget de chat personalizable (colores, posición, mensajes)",
          feature2: "Integración con JavaScript simple (solo agregar código)",
          feature3: "Respuestas automáticas 24/7 con IA",
          feature4: "Captura de leads automática",
          feature5: "Dashboard para monitorear conversaciones",
          feature6: "Entrenamiento personalizado con tu contenido",
          feature7: "Funciona en cualquier sitio web (WordPress, Shopify, custom)",
          feature8: "Opción: Creación de sitio web desde cero (costo extra)",
          howTitle: "Cómo funciona técnicamente:",
          step1Title: "Instalación del Widget",
          step1Desc: "Agrego un código JavaScript y CSS en tu sitio web (index.html o donde lo necesites). El widget aparece en la esquina de tu sitio.",
          step2Title: "Conexión con Servidor",
          step2Desc: "Cuando un visitante escribe, el mensaje se envía a mi servidor privado vía webhook. El bot procesa la consulta con IA y responde al instante.",
          step3Title: "Personalización Total",
          step3Desc: "El bot está entrenado con tu información: productos, servicios, precios, FAQs, estilo de comunicación. Se comporta como tú quieres, 100% natural y humano.",
          step4Title: "Monitoreo en Dashboard",
          step4Desc: "Accedes a tu dashboard para ver todas las conversaciones, leads capturados, estadísticas en tiempo real y ajustar el bot cuando quieras.",
          cta: "Ver Planes y Precios"
        },
        social: {
          title: "Bot para Redes Sociales",
          subtitle: "Automatiza WhatsApp, Messenger e Instagram con IA",
          intro: "Automatización total en WhatsApp, Messenger e Instagram. Responde mensajes, clasifica leads, agenda citas y envía información clave sin que muevas un dedo.",
          desc: "¿Por qué es necesario? Porque tus clientes esperan respuestas rápidas en redes sociales. Si tardas más de 5 minutos, el 80% se va con la competencia. Un bot responde en 2 segundos, siempre.",
          gallery1: "Video: Bot respondiendo mensajes en Messenger",
          gallery1Sub: "(Próximamente: video demo de conversaciones reales)",
          gallery2: "Dashboard: Monitoreo de conversaciones",
          gallery2Sub: "(Próximamente: screenshots del panel de control)",
          gallery3: "Configuración: Integración con Meta",
          gallery3Sub: "(Próximamente: imágenes del proceso de setup)",
          featuresTitle: "Características incluidas:",
          feature1: "Integración oficial con SDK de Meta (Facebook)",
          feature2: "Conexión segura mediante inicio de sesión oficial",
          feature3: "Webhook API para recibir mensajes en tiempo real",
          feature4: "Respuestas automáticas 24/7 con IA",
          feature5: "Captura y clasificación de leads",
          feature6: "Dashboard para monitorear todas las conversaciones",
          feature7: "Entrenamiento personalizado con tu información",
          feature8: "Compatible con WhatsApp, Messenger e Instagram",
          howTitle: "Cómo funciona técnicamente:",
          step1Title: "Conexión Oficial con Meta",
          step1Desc: "Usas el SDK oficial de Meta para iniciar sesión de forma segura. Tu página/cuenta se registra en mi aplicación de Meta Developers, obteniendo el token necesario.",
          step2Title: "Webhook API Activo",
          step2Desc: "Configuro el webhook para que todos los mensajes que recibas lleguen a mi servidor privado. El bot procesa cada mensaje con IA y responde automáticamente.",
          step3Title: "Personalización Total",
          step3Desc: "El bot está entrenado específicamente para tu negocio: productos, servicios, precios, estilo de comunicación, promociones. Se comporta exactamente como tú quieres, sin límites.",
          step4Title: "Monitoreo en Dashboard",
          step4Desc: "Accedes a tu dashboard para ver conversaciones, leads capturados, estadísticas en tiempo real. Puedes ajustar respuestas y entrenar al bot cuando quieras.",
          cta: "Ver Planes y Precios"
        }
      },
      cases: {
        title: "Casos de Éxito Reales",
        subtitle: "7 bots funcionando actualmente: 4 en redes sociales + 3 en sitios web",
        socialTitle: "📱 Bots en Redes Sociales (Facebook/Instagram/WhatsApp)",
        webTitle: "💻 Bots en Sitios Web",
        view: "Ver Bot en Acción",
        badge: { social: "🔵 Facebook", web: "🌐 Web" },
        solar: {
          title: "Bot para Negocio de Paneles Solares",
          desc: "Responde automáticamente consultas sobre instalación, precios, ahorro energético y financiamiento. Califica leads según presupuesto y urgencia. Agenda citas para cotizaciones.",
          stat1: "• 95% mensajes respondidos instantáneamente",
          stat2: "• Ahorro de 4 horas/día en atención",
          testimonial: "\"Ya no pierdo tiempo respondiendo lo mismo 20 veces al día. El bot califica leads y yo solo atiendo los que están listos para comprar.\"",
          author: "- Carlos M., Dueño"
        },
        restaurant: {
          title: "Bot para Restaurante",
          desc: "Responde menú del día, horarios, ubicación y promociones. Toma reservaciones automáticamente vía Messenger. Envía recordatorios de reservaciones.",
          stat1: "• 0% llamadas perdidas en horas pico",
          stat2: "• 40% más reservaciones semanales",
          testimonial: "\"Antes perdíamos el 60% de las llamadas en horas pico. Ahora el bot toma reservaciones 24/7 y tenemos las mesas llenas.\"",
          author: "- María G., Gerente"
        },
        webdev: {
          title: "Bot para Venta de Sitios Web",
          desc: "Explica servicios de desarrollo web, muestra portafolio, responde precios y tiempos de entrega. Califica leads según presupuesto y urgencia del proyecto.",
          stat1: "• 3x más consultas calificadas",
          stat2: "• Respuesta instantánea 24/7",
          testimonial: "\"El bot filtra clientes serios de los que solo preguntan. Ahora solo hablo con leads que tienen presupuesto y están listos.\"",
          author: "- Luis R., Desarrollador"
        },
        realestate: {
          title: "Bot para Inmobiliaria",
          desc: "Responde características de propiedades, precios, ubicaciones y disponibilidad. Agenda visitas automáticamente. Envía catálogos de propiedades según presupuesto del cliente.",
          stat1: "• 70% más visitas agendadas",
          stat2: "• 90% leads respondidos en <1 min",
          testimonial: "\"Los clientes quieren información inmediata. El bot responde al instante y agenda visitas mientras duermo. Duplicamos conversiones.\"",
          author: "- Ana L., Agente Inmobiliaria"
        },
        portfolio1: {
          title: "Portafolio Profesional (Trayectoria)",
          desc: "Bot que explica mi experiencia, proyectos y habilidades técnicas. Responde preguntas de reclutadores y facilita el proceso de contratación. Muestra mi trabajo mientras responde consultas automáticamente.",
          stat1: "• Ahorra 2 horas/día explicando mi trabajo",
          stat2: "• Reclutadores obtienen info instantánea"
        },
        portfolio2: {
          title: "Portafolio Web/Frontend",
          desc: "Enfocado en venta de sitios web. El bot explica servicios, muestra proyectos anteriores, responde precios y tiempos de entrega. Califica leads y agenda llamadas de cotización.",
          stat1: "• Información llega a más personas",
          stat2: "• Leads calificados automáticamente"
        },
        thissite: {
          title: "Este Sitio (BotFlow AI)",
          desc: "El bot que estás viendo ahora mismo. Explica mis servicios de chatbots, responde preguntas técnicas, muestra precios y casos de uso. Practica lo que predica: automatiza la explicación de cómo funcionan los bots.",
          stat1: "• Evita explicar manualmente el servicio",
          stat2: "• Dashboard muestra cómo opera en tiempo real",
          highlight: "👉 Prueba el bot ahora mismo en la esquina inferior derecha para ver cómo funciona"
        },
        cta: {
          title: "¿Listo para tener tu propio bot?",
          desc: "Estos 7 bots están funcionando ahora mismo. El tuyo podría ser el siguiente.",
          button: "Ver Planes y Precios"
        }
      },
      faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Respuestas detalladas sobre cómo funcionan los chatbots IA",
        q1: "¿Cómo funciona un chatbot con IA?",
        a1: "Un chatbot con IA utiliza procesamiento de lenguaje natural (NLP) para entender y responder preguntas automáticamente. Se entrena con información específica de tu negocio (productos, servicios, FAQs) y puede atender consultas 24/7 en WhatsApp, Messenger, Instagram o tu sitio web. El bot aprende de cada conversación y mejora continuamente sus respuestas.",
        q2: "¿Cómo se integra el bot en redes sociales (WhatsApp, Messenger, Instagram)?",
        a2: "Para redes sociales, utilizo el SDK oficial de Meta (Facebook). Registro tu página o cuenta en mi aplicación de Meta Developers, lo que me da acceso a los mensajes mediante Webhook API. Cuando un cliente te escribe, el mensaje llega a mi servidor privado, el bot procesa la consulta con IA y responde automáticamente. Todo funciona en tiempo real (menos de 2 segundos) y los datos se guardan en Supabase para mantener historial y contexto de conversaciones.",
        q3: "¿Cómo funciona el bot en sitios web?",
        a3: "Para sitios web, instalo un widget de chat (como el que ves en esta página) que se integra con un simple script. Cuando un visitante escribe, el mensaje se envía a mi servidor mediante webhook, el bot procesa la consulta y responde instantáneamente. El widget es completamente personalizable (colores, posición, mensajes de bienvenida) y funciona en cualquier sitio web. Si no tienes sitio, puedo crearlo para ti.",
        q4: "¿Cuánto cuesta un chatbot y qué incluye?",
        a4: "Los planes inician desde $40 USD/mes (Plan Estándar) con 200 mensajes incluidos, dashboard de monitoreo y soporte continuo. El Plan Premium cuesta $70 USD/mes e incluye 500 mensajes, analytics completo, soporte inmediato y cambios bajo demanda. Ambos planes incluyen configuración inicial, entrenamiento del bot, integración técnica y actualizaciones. Comparado con contratar un empleado ($800-2000 USD/mes), el ahorro es del 95%.",
        q5: "¿Cuánto tiempo tarda la implementación?",
        a5: "La implementación completa tarda entre 2 y 4 días hábiles. Día 1: Recopilamos información de tu negocio (productos, servicios, FAQs). Día 2-3: Entrenamos el bot con IA usando tu contenido y realizamos pruebas internas. Día 4: Integramos el bot a tus plataformas, hacemos pruebas finales y lo activamos. Después del lanzamiento, monitoreo continuamente y optimizo basado en conversaciones reales.",
        q6: "¿Dónde se guardan los datos y conversaciones?",
        a6: "Todos los datos se guardan de forma segura en Supabase (base de datos empresarial con encriptación). Mantengo persistencia de mensajes, sesiones y contextos para que el bot recuerde conversaciones anteriores. Los datos están organizados y centralizados, permitiendo que múltiples bots funcionen en paralelo sin interferencias. Tú tienes acceso completo a tu dashboard para ver todas las conversaciones, leads capturados y estadísticas en tiempo real.",
        q7: "¿Puedo tener bots en múltiples plataformas simultáneamente?",
        a7: "Sí, absolutamente. Puedes tener el mismo bot funcionando en WhatsApp, Messenger, Instagram y tu sitio web al mismo tiempo. Todos los bots comparten la misma base de conocimiento pero se adaptan al formato de cada plataforma. Por ejemplo, en WhatsApp puede enviar imágenes y botones, en web puede mostrar formularios interactivos. La arquitectura horizontal de mi servidor permite manejar hasta 50 bots simultáneos con mínimo consumo de recursos.",
        q8: "¿Qué pasa si rebaso los mensajes incluidos en mi plan?",
        a8: "Te notifico automáticamente cuando llegues al 80% de tu límite de mensajes. Tienes dos opciones: (1) Actualizar a un plan superior para obtener más mensajes incluidos, o (2) Esperar al siguiente ciclo mensual. El bot nunca se detiene abruptamente; siempre hay un periodo de gracia. La mayoría de negocios con el Plan Estándar (200 mensajes) manejan cómodamente 50-100 consultas diarias, ya que muchas son respuestas automáticas que no consumen mensajes adicionales."
      },
      trust: {
        title: "Confianza y Transparencia",
        subtitle: "Tu tranquilidad es nuestra prioridad",
        security: {
          title: "Seguridad Garantizada",
          desc: "Todos los pagos se procesan mediante PayPal, una plataforma segura y reconocida mundialmente. Tus datos están protegidos con encriptación de nivel bancario.",
          badge: "Pago 100% Seguro"
        },
        delivery: {
          title: "Tiempo de Entrega",
          desc: "El proceso de configuración y entrenamiento del bot tarda entre 2 y 4 días hábiles, dependiendo del plan seleccionado y la complejidad de tu negocio.",
          day1: "Día 1",
          step1: "Configuración inicial",
          day2: "Día 2-3",
          step2: "Entrenamiento del bot",
          day3: "Día 4",
          step3: "Pruebas y entrega"
        },
        guarantee: {
          title: "Garantía de Funcionamiento",
          desc: "Si hay algún error o el bot no funciona correctamente al entregarse, realizaremos todos los ajustes necesarios sin costo adicional hasta que quedes completamente satisfecho.",
          item1: "✓ Ajustes ilimitados en el primer mes",
          item2: "✓ Soporte técnico incluido",
          item3: "✓ Capacitación personalizada"
        },
        confirmation: {
          title: "Confirmación Automática",
          desc: "Recibirás confirmación automática de tu pago por email y un correo nuestro con los siguientes pasos en menos de 24 horas."
        }
      }
    },
    en: {
      brand: "BotFlow AI",
      nav: { services: "Services", cases: "Success Cases", plans: "Pricing", faq: "FAQ", contact: "Contact" },
      cta: { demo: "Free Demo" },
      hero: {
        hook: "Replace a full-time employee. Automate responses 24/7 for just $40/month.",
        subtitle: "Automate your customer support with cutting-edge AI. Turn visitors into customers around the clock.",
        primary: "Get Free Demo",
        secondary: "View Success Stories"
      },
      stats: {
        daily: "Daily Conversations",
        uptime: "Uptime",
        satisfaction: "Customer Satisfaction",
        conversions: "More Conversions"
      },
      features: {
        title: "How Our Technology Works",
        subtitle: "Enterprise-grade architecture powering up to 50 businesses simultaneously",
        social: {
          title: "Social Media Integration",
          desc: "Built on Meta's official SDK for WhatsApp, Messenger, and Instagram. Your page connects to our Meta Developers app through secure Webhook API. When customers message you, our AI processes and responds in under 2 seconds—automatically."
        },
        web: {
          title: "Website Chat Bots",
          desc: "Deploy a fully customizable chat widget with a simple script integration. Messages route through webhooks to our server, just like social platforms. No website? We'll build one for you with the bot pre-installed. Customize everything: colors, position, and messaging."
        },
        architecture: {
          title: "Scalable Cloud Architecture",
          desc: "Runs on our private cloud infrastructure with horizontal scaling, supporting up to 50 concurrent bots with minimal resource usage. Each bot operates independently while sharing optimized infrastructure. Zero interference, maximum efficiency."
        },
        database: {
          title: "Enterprise Database",
          desc: "Powered by Supabase enterprise database with full message persistence, session management, and context retention. Your bot remembers every conversation. Access your real-time dashboard to track conversations, captured leads, and analytics."
        },
        personalization: {
          title: "Fully Customized Training",
          desc: "Every bot is trained on your specific business data: products, services, pricing, FAQs, and brand voice. Completely personalized for your needs. The bot learns from every interaction, continuously improving responses based on real customer feedback."
        },
        security: {
          title: "Bank-Level Security",
          desc: "Enterprise-grade encryption protects all data. Secure storage via Supabase with full privacy compliance. Strict data isolation—you only access your data. All conversations stay private with automated daily backups."
        }
      },
      pricing: {
        title: "Pricing Plans",
        subtitle: "Choose the perfect plan to automate your business",
        standard: "Standard",
        premium: "Premium",
        enterprise: "Enterprise",
        perMonth: "per month",
        priceStd: "USD $40",
        pricePre: "USD $70",
        std1: "1 bot (monthly subscription)",
        std2: "Monitoring dashboard access",
        std3: "200 messages/month included",
        std4: "Continuous support",
        std5: "Website or social media",
        pre1: "Everything in Standard, plus:",
        pre2: "Advanced analytics dashboard",
        pre3: "Priority support",
        pre4: "Unlimited customization",
        pre5: "500 messages/month included",
        ef1: "Unlimited bots",
        ef2: "Custom solution",
        ef3: "Unlimited conversations",
        ef4: "24/7 dedicated support",
        ef5: "Custom API",
        ef6: "Specialized training",
        start: "Get Started",
        altContact: "Have questions? Contact us",
        popular: "Most Popular",
        contact: "Contact",
        contactForQuote: "Contact me",
        custom: "custom",
        buyNow: "Buy Now"
      },
      modal: {
        buyStandard: "Purchase Standard Plan",
        buyPremium: "Purchase Premium Plan",
        subtitle: "Complete your information and proceed to checkout",
        plan: "Plan:",
        price: "Price:",
        priceStd: "USD $40/month",
        pricePre: "USD $70/month",
        contactInfo: "Your Contact Information",
        fullName: "Full Name *",
        fullNamePh: "John Doe",
        email: "Email *",
        emailPh: "john@company.com",
        phone: "Phone / WhatsApp *",
        phonePh: "+1 123 456 7890",
        businessName: "Business Name *",
        businessNamePh: "My Company",
        botConfig: "Bot Setup",
        platform: "Where do you need the bot? *",
        platformSelect: "Select an option",
        platformWeb: "Website",
        platformMessenger: "Facebook Messenger",
        platformWhatsApp: "WhatsApp",
        platformInstagram: "Instagram",
        platformMultiple: "Multiple platforms",
        industry: "Industry *",
        industrySelect: "Select an option",
        industryEcommerce: "E-commerce / Online Store",
        industryServices: "Professional Services",
        industryRestaurant: "Restaurant / Food Service",
        industryHealth: "Healthcare / Wellness",
        industryEducation: "Education",
        industryRealEstate: "Real Estate",
        industryTech: "Technology",
        industryOther: "Other",
        description: "Brief Business Description *",
        descriptionPh: "Tell us about your products or services...",
        continue: "Proceed to Payment →",
        dataSaved: "Information Saved Successfully",
        proceedPayment: "Complete your secure payment via PayPal below",
        name: "Name:",
        company: "Company:",
        platformLabel: "Platform:",
        securePayment: "Secure payment powered by PayPal",
        payWithPayPal: "Pay with PayPal",
        backToEdit: "← Edit Information",
        planStandard: "Standard Plan:",
        planPremiumLabel: "Premium Plan: USD $70/month"
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Ready to automate your business? Let's talk",
        nameLabel: "Full Name",
        namePh: "Your full name",
        emailLabel: "Business Email",
        emailPh: "your.email@company.com",
        messageLabel: "Message",
        messagePh: "Tell us about your business and what you need...",
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
        mainTitle: "What Are AI Conversational Agents?",
        mainSubtitle: "Replace your customer service team with intelligent AI agents that work 24/7—no breaks, no errors",
        introTitle: "Intelligent Conversation Automation",
        introPara1: "AI conversational agents are virtual assistants that flawlessly mimic human conversation. Powered by advanced language models (LLMs), they engage customers with natural, contextual dialogue that feels genuinely human.",
        introPara2: "Why do you need one? Your business fields the same questions constantly: pricing, availability, hours, location, services. An AI agent handles all of this instantly—no errors, no downtime, no limitations. Professional-quality responses flow 24/7 with human-like authenticity.",
        benefit1: "Lightning-fast responses (under 2 seconds)",
        benefit2: "Always accurate, always current",
        benefit3: "Massive savings on customer support costs",
        benefit4: "Never sleeps—works 24/7/365",
        dividerTitle: "Choose Your Automation Platform",
        dividerSubtitle: "Deploy on your website, social media, or both",
        title: "Bot Types",
        subtitle: "Choose where to automate: your website or your social networks",
        demo: "See more information",
        web: {
          title: "Website Bot",
          subtitle: "Smart chat widget that integrates seamlessly into your site",
          intro: "Smart chat widget that integrates seamlessly into your website. Engages every visitor like a real employee would, captures leads automatically, and answers questions instantly.",
          desc: "Why you need it: 70% of website visitors leave without buying because they can't get immediate help. A web bot converts browsers into buyers by answering questions the moment they arise.",
          gallery1: "Video: Live Bot Responses",
          gallery1Sub: "(Coming soon: live widget demo)",
          gallery2: "Dashboard: Real-Time Analytics",
          gallery2Sub: "(Coming soon: dashboard preview)",
          gallery3: "Configuration: Full Customization",
          gallery3Sub: "(Coming soon: setup walkthrough)",
          featuresTitle: "Features Included:",
          feature1: "Fully customizable widget (colors, position, messaging)",
          feature2: "Simple JavaScript integration (one-line install)",
          feature3: "AI-powered 24/7 auto-responses",
          feature4: "Automatic lead capture & qualification",
          feature5: "Real-time conversation monitoring",
          feature6: "Trained on your business content",
          feature7: "Works on any platform (WordPress, Shopify, custom sites)",
          feature8: "Optional: Custom website build (additional fee)",
          howTitle: "How It Works:",
          step1Title: "Widget Installation",
          step1Desc: "We add a simple JavaScript snippet to your site (index.html or any page). The widget appears in your chosen corner—ready to engage.",
          step2Title: "Server Connection",
          step2Desc: "When visitors type, messages route to our secure server via webhook. Our AI processes queries and responds instantly—under 2 seconds.",
          step3Title: "Custom Training",
          step3Desc: "Your bot learns your business inside-out: products, services, pricing, FAQs, and brand voice. 100% natural, human-like responses tailored to your needs.",
          step4Title: "Dashboard Control",
          step4Desc: "Access your dashboard anytime to review conversations, track captured leads, monitor real-time stats, and fine-tune bot responses.",
          cta: "View Pricing Plans"
        },
        social: {
          title: "Social Media Bot",
          subtitle: "Automate WhatsApp, Messenger & Instagram with AI",
          intro: "Complete automation for WhatsApp, Messenger, and Instagram. Responds to messages, qualifies leads, schedules appointments, and delivers key information—all hands-free.",
          desc: "Why you need it: Customers expect instant responses on social media. Wait longer than 5 minutes and 80% will choose your competitor. Our bot responds in 2 seconds, every time.",
          gallery1: "Video: Live Messenger Conversations",
          gallery1Sub: "(Coming soon: real conversation demos)",
          gallery2: "Dashboard: Conversation Tracking",
          gallery2Sub: "(Coming soon: analytics preview)",
          gallery3: "Configuration: Meta Integration",
          gallery3Sub: "(Coming soon: setup guide)",
          featuresTitle: "Features Included:",
          feature1: "Official Meta SDK integration (Facebook-certified)",
          feature2: "Secure OAuth connection",
          feature3: "Real-time Webhook API for instant messaging",
          feature4: "AI-powered 24/7 auto-responses",
          feature5: "Smart lead capture & qualification",
          feature6: "Unified dashboard for all conversations",
          feature7: "Trained on your business data",
          feature8: "Full support for WhatsApp, Messenger & Instagram",
          howTitle: "How It Works:",
          step1Title: "Official Meta Connection",
          step1Desc: "Secure login via Meta's official SDK. Your page/account registers with our Meta Developers app, obtaining the necessary authentication token.",
          step2Title: "Active Webhook API",
          step2Desc: "We configure webhooks to route all incoming messages to our secure server. Our AI processes each message and responds automatically—no manual intervention needed.",
          step3Title: "Custom Training",
          step3Desc: "Your bot is trained specifically for your business: products, services, pricing, brand voice, and promotions. Behaves exactly how you want—unlimited customization.",
          step4Title: "Dashboard Control",
          step4Desc: "Access your dashboard to review conversations, track leads, and monitor real-time analytics. Adjust responses and retrain your bot anytime.",
          cta: "View Pricing Plans"
        }
      },
      cases: {
        title: "Real Success Stories",
        subtitle: "7 active bots: 4 on social media + 3 on websites",
        socialTitle: "📱 Social Media Bots (Facebook/Instagram/WhatsApp)",
        webTitle: "💻 Website Bots",
        view: "View Live Bot",
        badge: { social: "🔵 Facebook", web: "🌐 Web" },
        solar: {
          title: "Solar Panel Business Bot",
          desc: "Automatically handles installation queries, pricing, energy savings, and financing options. Qualifies leads by budget and urgency. Books quote appointments.",
          stat1: "• 95% instant response rate",
          stat2: "• Saves 4 hours daily on support",
          testimonial: "\"I'm done answering the same questions 20 times a day. The bot pre-qualifies leads—I only talk to buyers who are ready.\"",
          author: "- Carlos M., Owner"
        },
        restaurant: {
          title: "Restaurant Bot",
          desc: "Shares daily menu, hours, location, and specials. Automatically books reservations via Messenger. Sends automated reminders.",
          stat1: "• Zero missed calls during rush hours",
          stat2: "• 40% increase in weekly bookings",
          testimonial: "\"We used to miss 60% of calls during peak times. Now our bot handles reservations 24/7—our tables are always full.\"",
          author: "- María G., Manager"
        },
        webdev: {
          title: "Web Development Sales Bot",
          desc: "Explains services, showcases portfolio, provides pricing and timelines. Pre-qualifies leads by budget and project timeline.",
          stat1: "• 3x more qualified leads",
          stat2: "• 24/7 instant responses",
          testimonial: "\"The bot separates serious clients from tire-kickers. Now I only spend time on qualified leads with real budgets.\"",
          author: "- Luis R., Developer"
        },
        realestate: {
          title: "Real Estate Bot",
          desc: "Provides property details, pricing, locations, and availability. Auto-schedules property viewings. Sends customized listings based on budget.",
          stat1: "• 70% more scheduled showings",
          stat2: "• 90% of leads answered under 1 minute",
          testimonial: "\"Buyers want instant answers. The bot responds immediately and books showings while I sleep. We've doubled our conversion rate.\"",
          author: "- Ana L., Real Estate Agent"
        },
        portfolio1: {
          title: "Professional Portfolio Bot",
          desc: "Explains experience, projects, and technical skills. Answers recruiter questions and streamlines the hiring process. Showcases work while handling queries automatically.",
          stat1: "• Saves 2 hours daily on explanations",
          stat2: "• Recruiters get instant answers"
        },
        portfolio2: {
          title: "Web Development Portfolio Bot",
          desc: "Sales-focused bot that explains services, showcases past projects, provides pricing and timelines. Pre-qualifies leads and books quote calls.",
          stat1: "• Reaches more potential clients",
          stat2: "• Auto-qualifies every lead"
        },
        thissite: {
          title: "This Website (BotFlow AI)",
          desc: "The bot you're interacting with right now. Explains our chatbot services, answers technical questions, provides pricing and use cases. We practice what we preach—automating bot explanations with a bot.",
          stat1: "• Eliminates manual service explanations",
          stat2: "• Live dashboard shows real-time operations",
          highlight: "👉 Try our bot now (bottom right corner) to see it in action"
        },
        cta: {
          title: "Ready for Your Own Bot?",
          desc: "These 7 bots are live right now. Yours could be next.",
          button: "View Pricing Plans"
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about AI chatbots",
        q1: "How does an AI chatbot work?",
        a1: "Our AI chatbot uses natural language processing (NLP) to understand and respond to customer questions automatically. It's trained on your specific business data—products, services, FAQs, and more. Available 24/7 across WhatsApp, Messenger, Instagram, and your website. The bot learns from every conversation, continuously improving its accuracy and effectiveness.",
        q2: "How does the bot integrate with social media (WhatsApp, Messenger, Instagram)?",
        a2: "We use Meta's official SDK for seamless integration. Your page or account connects to our Meta Developers app, granting secure access via Webhook API. When customers message you, their queries route to our server where AI processes and responds automatically—all in under 2 seconds. Conversation history and context are stored securely in Supabase for continuity.",
        q3: "How does the website bot work?",
        a3: "We install a customizable chat widget (like the one on this page) using a simple script. When visitors type messages, they're sent to our server via webhook. Our AI processes queries and responds instantly. The widget is fully customizable—colors, position, welcome messages—and works on any platform. Don't have a website? We can build one for you.",
        q4: "What does a chatbot cost and what's included?",
        a4: "Plans start at $40/month (Standard) with 200 messages, monitoring dashboard, and ongoing support. Premium is $70/month with 500 messages, advanced analytics, priority support, and unlimited customization. Both include complete setup, custom training, technical integration, and regular updates. Compare that to hiring full-time support ($800-2000/month)—you'll save 95%.",
        q5: "How long does setup take?",
        a5: "Full implementation takes 2-4 business days. Day 1: We gather your business info (products, services, FAQs). Days 2-3: We train your bot with AI using your content and run internal tests. Day 4: We integrate across your platforms, conduct final testing, and go live. Post-launch, we continuously monitor and optimize based on real customer interactions.",
        q6: "Where is my data stored?",
        a6: "All data is securely stored in Supabase, an enterprise-grade database with full encryption. We maintain complete message persistence, session management, and conversation context so your bot remembers past interactions. Data is centralized and organized, enabling multiple bots to run simultaneously without interference. You get full dashboard access to view conversations, leads, and real-time analytics.",
        q7: "Can I deploy bots across multiple platforms?",
        a7: "Absolutely. Run the same bot on WhatsApp, Messenger, Instagram, and your website simultaneously. All bots share one unified knowledge base while adapting to each platform's unique features. For example, WhatsApp bots can send images and buttons, while web bots display interactive forms. Our scalable architecture supports up to 50 concurrent bots with minimal resource usage.",
        q8: "What if I exceed my message limit?",
        a8: "We'll notify you automatically at 80% of your limit. You have two options: (1) Upgrade to a higher plan for more messages, or (2) Wait until your next billing cycle. Your bot never stops abruptly—we provide a grace period. Most Standard Plan users (200 messages) easily handle 50-100 daily queries since many automated responses don't count toward your limit."
      },
      trust: {
        title: "Trust & Transparency",
        subtitle: "Your peace of mind comes first",
        security: {
          title: "Guaranteed Security",
          desc: "All payments processed through PayPal, a globally trusted platform. Your data is protected with bank-grade encryption.",
          badge: "100% Secure Payments"
        },
        delivery: {
          title: "Implementation Timeline",
          desc: "Bot setup and training takes 2-4 business days, depending on your plan and business complexity.",
          day1: "Day 1",
          step1: "Initial configuration",
          day2: "Days 2-3",
          step2: "AI training & testing",
          day3: "Day 4",
          step3: "Final testing & launch"
        },
        guarantee: {
          title: "Satisfaction Guarantee",
          desc: "If your bot has any issues or doesn't perform as expected, we'll make unlimited adjustments at no extra cost until you're 100% satisfied.",
          item1: "✓ Unlimited tweaks in month one",
          item2: "✓ Full technical support included",
          item3: "✓ Custom training sessions"
        },
        confirmation: {
          title: "Instant Confirmation",
          desc: "You'll receive automatic payment confirmation via email, plus a message from us with next steps within 24 hours."
        }
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
      // Update dynamic badges
      document.querySelectorAll('.pricing-card.featured').forEach(el => {
        el.setAttribute('data-badge', lang === 'es' ? 'Más Popular' : 'Most Popular');
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
    const labelMobile = document.getElementById('langLabelMobile');
    if (labelMobile) labelMobile.textContent = lang === 'es' ? 'Español' : 'English';
    const labelDesktop = document.getElementById('langLabelDesktop');
    if (labelDesktop) labelDesktop.textContent = lang === 'es' ? 'Español' : 'English';
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
    const btnMobile = document.getElementById('langToggleMobile');
    if (btnMobile) btnMobile.addEventListener('click', toggleLang);
    const btnDesktop = document.getElementById('langToggleDesktop');
    if (btnDesktop) btnDesktop.addEventListener('click', toggleLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


