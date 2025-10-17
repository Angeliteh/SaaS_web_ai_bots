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
        buyNow: "🛒 Comprar Ahora"
      },
      modal: {
        buyStandard: "🛒 Comprar Plan Estándar",
        buyPremium: "🛒 Comprar Plan Premium",
        subtitle: "Completa tus datos y procede al pago",
        plan: "Plan:",
        price: "Precio:",
        priceStd: "USD $40/mes",
        pricePre: "USD $70/mes",
        contactInfo: "📋 Información de Contacto",
        fullName: "Nombre Completo *",
        fullNamePh: "Juan Pérez",
        email: "Email *",
        emailPh: "juan@empresa.com",
        phone: "Teléfono / WhatsApp *",
        phonePh: "+52 123 456 7890",
        businessName: "Nombre del Negocio *",
        businessNamePh: "Mi Empresa",
        botConfig: "🤖 Configuración Básica del Bot",
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
        securePayment: "💳 Pago seguro procesado por PayPal",
        payWithPayPal: "Pagar con PayPal",
        backToEdit: "← Volver a editar datos",
        planStandard: "Plan Estándar:"
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
          featuresTitle: "✨ Lo que incluye:",
          feature1: "✅ Widget de chat personalizable (colores, posición, mensajes)",
          feature2: "✅ Integración con JavaScript simple (solo agregar código)",
          feature3: "✅ Respuestas automáticas 24/7 con IA",
          feature4: "✅ Captura de leads automática",
          feature5: "✅ Dashboard para monitorear conversaciones",
          feature6: "✅ Entrenamiento personalizado con tu contenido",
          feature7: "✅ Funciona en cualquier sitio web (WordPress, Shopify, custom)",
          feature8: "✅ Opción: Creación de sitio web desde cero (costo extra)",
          howTitle: "🔧 Cómo funciona técnicamente:",
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
          featuresTitle: "✨ Lo que incluye:",
          feature1: "✅ Integración oficial con SDK de Meta (Facebook)",
          feature2: "✅ Conexión segura mediante inicio de sesión oficial",
          feature3: "✅ Webhook API para recibir mensajes en tiempo real",
          feature4: "✅ Respuestas automáticas 24/7 con IA",
          feature5: "✅ Captura y clasificación de leads",
          feature6: "✅ Dashboard para monitorear todas las conversaciones",
          feature7: "✅ Entrenamiento personalizado con tu información",
          feature8: "✅ Compatible con WhatsApp, Messenger e Instagram",
          howTitle: "🔧 Cómo funciona técnicamente:",
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
        hook: " Save an employee. Automate responses 24/7 for $40/month.",
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
        title: "How Our Technology Works",
        subtitle: "Professional architecture that allows automating up to 50 businesses simultaneously",
        social: {
          title: "Social Media Integration",
          desc: "I use Meta's official SDK to connect WhatsApp, Messenger, and Instagram. Your page is registered in my Meta Developers app, giving me access to messages via Webhook API. When a customer writes, the message reaches my private server, the bot processes it with AI and responds automatically in less than 2 seconds."
        },
        web: {
          title: "Website Bots",
          desc: "For websites, I install a customizable chat widget that integrates with a simple script. The widget sends messages to my server via webhook, just like social networks. If you don't have a website, I can create it for you with the bot already integrated. The widget is 100% customizable (colors, position, messages)."
        },
        architecture: {
          title: "Scalable Horizontal Architecture",
          desc: "Everything runs on my private server with horizontal architecture, allowing handling up to 50 simultaneous bots with minimum energy consumption. Each bot is independent but shares infrastructure, optimizing resources. Bots run in parallel without interfering with each other."
        },
        database: {
          title: "Centralized Database",
          desc: "All data is stored in Supabase (enterprise database). I maintain persistence of messages, sessions, and contexts organized and centralized. This allows the bot to remember previous conversations and maintain context. You access your dashboard to see conversations, leads, and real-time statistics."
        },
        personalization: {
          title: "Total Business Customization",
          desc: "Each bot is trained with specific information from your business: products, services, prices, FAQs, tone of voice. Information is completely personalized per bot and specific function. The bot learns from each conversation and continuously improves its responses based on real feedback."
        },
        security: {
          title: "Security and Privacy",
          desc: "All data is encrypted with enterprise standards. I use Supabase for secure storage and comply with privacy protocols. Each client has access only to their own data. Conversations remain private and secure, with daily automatic backups."
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
        altContact: "Questions? Contact me",
        popular: "Most Popular",
        contact: "Contact",
        contactForQuote: "Contact me",
        custom: "custom",
        buyNow: "🛒 Buy Now"
      },
      modal: {
        buyStandard: "🛒 Buy Standard Plan",
        buyPremium: "🛒 Buy Premium Plan",
        subtitle: "Complete your details and proceed to payment",
        plan: "Plan:",
        price: "Price:",
        priceStd: "USD $40/month",
        pricePre: "USD $70/month",
        contactInfo: "📋 Contact Information",
        fullName: "Full Name *",
        fullNamePh: "John Doe",
        email: "Email *",
        emailPh: "john@company.com",
        phone: "Phone / WhatsApp *",
        phonePh: "+1 123 456 7890",
        businessName: "Business Name *",
        businessNamePh: "My Company",
        botConfig: "🤖 Basic Bot Configuration",
        platform: "Where do you want the bot? *",
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
        industryRestaurant: "Restaurant / Food",
        industryHealth: "Health / Wellness",
        industryEducation: "Education",
        industryRealEstate: "Real Estate",
        industryTech: "Technology",
        industryOther: "Other",
        description: "Brief Business Description *",
        descriptionPh: "What products or services do you offer?",
        continue: "Continue to Payment →",
        dataSaved: "Data Saved Successfully",
        proceedPayment: "Now proceed with secure payment through PayPal",
        name: "Name:",
        company: "Company:",
        platformLabel: "Platform:",
        securePayment: "💳 Secure payment processed by PayPal",
        payWithPayPal: "Pay with PayPal",
        backToEdit: "← Back to edit data",
        planStandard: "Standard Plan:"
      },
      contact: {
        title: "Contact Me",
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
        mainTitle: "What are AI Conversational Agents?",
        mainSubtitle: "Replace the people who respond to messages in your business with intelligent agents that work 24/7",
        introTitle: "Intelligent Conversation Automation",
        introPara1: "AI conversational agents are virtual assistants that perfectly simulate a real person responding to messages. Thanks to advanced language models (LLM), they can maintain natural, human and contextual conversations with your customers.",
        introPara2: "Why are they necessary? Because your business receives the same questions over and over again: prices, availability, hours, location, services. An AI agent answers all of this instantly, without errors, without breaks and without limits. Information flows non-stop, 24/7, with professional quality and human realism.",
        benefit1: "Instant responses (less than 2 seconds)",
        benefit2: "Always accurate and up-to-date information",
        benefit3: "Save time and money on customer service",
        benefit4: "Works 24/7, even when you sleep",
        dividerTitle: "Choose Where You Want to Automate",
        dividerSubtitle: "Two options: your website or your social networks (or both)",
        title: "Bot Types",
        subtitle: "Choose where to automate: your website or your social networks",
        demo: "See more information",
        web: {
          title: "Website Bot",
          subtitle: "Intelligent chat widget that integrates into your website",
          intro: "Intelligent chat widget that integrates into your website. Serves each visitor as if they were a real employee, automatically captures leads and answers questions instantly.",
          desc: "Why is it useful? Because 70% of visitors abandon websites without buying due to lack of immediate attention. A web bot converts visitors into customers by responding just when they have questions.",
          gallery1: "Video: Bot responding in real time",
          gallery1Sub: "(Coming soon: widget demo video in action)",
          gallery2: "Dashboard: Real-time control panel",
          gallery2Sub: "(Coming soon: dashboard screenshots)",
          gallery3: "Configuration: Total customization",
          gallery3Sub: "(Coming soon: configuration images)",
          featuresTitle: "✨ What's included:",
          feature1: "✅ Customizable chat widget (colors, position, messages)",
          feature2: "✅ Simple JavaScript integration (just add code)",
          feature3: "✅ 24/7 automatic responses with AI",
          feature4: "✅ Automatic lead capture",
          feature5: "✅ Dashboard to monitor conversations",
          feature6: "✅ Custom training with your content",
          feature7: "✅ Works on any website (WordPress, Shopify, custom)",
          feature8: "✅ Option: Website creation from scratch (extra cost)",
          howTitle: "🔧 How it works technically:",
          step1Title: "Widget Installation",
          step1Desc: "I add JavaScript and CSS code to your website (index.html or wherever needed). The widget appears in the corner of your site.",
          step2Title: "Server Connection",
          step2Desc: "When a visitor types, the message is sent to my private server via webhook. The bot processes the query with AI and responds instantly.",
          step3Title: "Total Customization",
          step3Desc: "The bot is trained with your information: products, services, prices, FAQs, communication style. It behaves as you want, 100% natural and human.",
          step4Title: "Dashboard Monitoring",
          step4Desc: "You access your dashboard to see all conversations, captured leads, real-time statistics and adjust the bot whenever you want.",
          cta: "See Plans and Pricing"
        },
        social: {
          title: "Social Media Bot",
          subtitle: "Automate WhatsApp, Messenger and Instagram with AI",
          intro: "Total automation on WhatsApp, Messenger and Instagram. Responds to messages, classifies leads, schedules appointments and sends key information without you lifting a finger.",
          desc: "Why is it necessary? Because your customers expect fast responses on social media. If you take more than 5 minutes, 80% go to the competition. A bot responds in 2 seconds, always.",
          gallery1: "Video: Bot responding to messages on Messenger",
          gallery1Sub: "(Coming soon: demo video of real conversations)",
          gallery2: "Dashboard: Conversation monitoring",
          gallery2Sub: "(Coming soon: control panel screenshots)",
          gallery3: "Configuration: Meta integration",
          gallery3Sub: "(Coming soon: setup process images)",
          featuresTitle: "✨ What's included:",
          feature1: "✅ Official integration with Meta SDK (Facebook)",
          feature2: "✅ Secure connection via official login",
          feature3: "✅ Webhook API to receive messages in real time",
          feature4: "✅ 24/7 automatic responses with AI",
          feature5: "✅ Lead capture and classification",
          feature6: "✅ Dashboard to monitor all conversations",
          feature7: "✅ Custom training with your information",
          feature8: "✅ Compatible with WhatsApp, Messenger and Instagram",
          howTitle: "🔧 How it works technically:",
          step1Title: "Official Meta Connection",
          step1Desc: "You use Meta's official SDK to log in securely. Your page/account is registered in my Meta Developers app, obtaining the necessary token.",
          step2Title: "Active Webhook API",
          step2Desc: "I configure the webhook so all messages you receive arrive at my private server. The bot processes each message with AI and responds automatically.",
          step3Title: "Total Customization",
          step3Desc: "The bot is trained specifically for your business: products, services, prices, communication style, promotions. It behaves exactly as you want, without limits.",
          step4Title: "Dashboard Monitoring",
          step4Desc: "You access your dashboard to see conversations, captured leads, real-time statistics. You can adjust responses and train the bot whenever you want.",
          cta: "See Plans and Pricing"
        }
      },
      cases: {
        title: "Real Success Cases",
        subtitle: "7 bots currently running: 4 on social networks + 3 on websites",
        socialTitle: "📱 Bots on Social Networks (Facebook/Instagram/WhatsApp)",
        webTitle: "💻 Website Bots",
        view: "See Bot in Action",
        badge: { social: "🔵 Facebook", web: "🌐 Web" },
        solar: {
          title: "Bot for Solar Panel Business",
          desc: "Automatically answers queries about installation, prices, energy savings, and financing. Qualifies leads by budget and urgency. Schedules appointments for quotes.",
          stat1: "• 95% messages answered instantly",
          stat2: "• Saves 4 hours/day in customer service",
          testimonial: "\"I no longer waste time answering the same thing 20 times a day. The bot qualifies leads and I only attend those ready to buy.\"",
          author: "- Carlos M., Owner"
        },
        restaurant: {
          title: "Bot for Restaurant",
          desc: "Answers daily menu, hours, location, and promotions. Takes reservations automatically via Messenger. Sends reservation reminders.",
          stat1: "• 0% missed calls during peak hours",
          stat2: "• 40% more weekly reservations",
          testimonial: "\"We used to lose 60% of calls during peak hours. Now the bot takes reservations 24/7 and we have full tables.\"",
          author: "- María G., Manager"
        },
        webdev: {
          title: "Bot for Website Sales",
          desc: "Explains web development services, shows portfolio, answers prices and delivery times. Qualifies leads by budget and project urgency.",
          stat1: "• 3x more qualified inquiries",
          stat2: "• Instant response 24/7",
          testimonial: "\"The bot filters serious clients from those just asking. Now I only talk to leads with budget who are ready.\"",
          author: "- Luis R., Developer"
        },
        realestate: {
          title: "Bot for Real Estate",
          desc: "Answers property features, prices, locations, and availability. Schedules visits automatically. Sends property catalogs based on client budget.",
          stat1: "• 70% more scheduled visits",
          stat2: "• 90% leads answered in <1 min",
          testimonial: "\"Clients want immediate information. The bot responds instantly and schedules visits while I sleep. We doubled conversions.\"",
          author: "- Ana L., Real Estate Agent"
        },
        portfolio1: {
          title: "Professional Portfolio (Career)",
          desc: "Bot that explains my experience, projects, and technical skills. Answers recruiters' questions and facilitates the hiring process. Shows my work while automatically answering queries.",
          stat1: "• Saves 2 hours/day explaining my work",
          stat2: "• Recruiters get instant info"
        },
        portfolio2: {
          title: "Web/Frontend Portfolio",
          desc: "Focused on website sales. The bot explains services, shows previous projects, answers prices and delivery times. Qualifies leads and schedules quote calls.",
          stat1: "• Information reaches more people",
          stat2: "• Leads qualified automatically"
        },
        thissite: {
          title: "This Site (BotFlow AI)",
          desc: "The bot you're seeing right now. Explains my chatbot services, answers technical questions, shows prices and use cases. Practices what it preaches: automates the explanation of how bots work.",
          stat1: "• Avoids manually explaining the service",
          stat2: "• Dashboard shows how it operates in real-time",
          highlight: "👉 Try the bot right now in the bottom right corner to see how it works"
        },
        cta: {
          title: "Ready to have your own bot?",
          desc: "These 7 bots are running right now. Yours could be next.",
          button: "See Plans and Pricing"
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Detailed answers about how AI chatbots work",
        q1: "How does an AI chatbot work?",
        a1: "An AI chatbot uses natural language processing (NLP) to understand and answer questions automatically. It's trained with specific information from your business (products, services, FAQs) and can handle inquiries 24/7 on WhatsApp, Messenger, Instagram, or your website. The bot learns from each conversation and continuously improves its responses.",
        q2: "How is the bot integrated into social networks (WhatsApp, Messenger, Instagram)?",
        a2: "For social networks, I use Meta's (Facebook) official SDK. I register your page or account in my Meta Developers application, which gives me access to messages via Webhook API. When a customer writes to you, the message reaches my private server, the bot processes the query with AI and responds automatically. Everything works in real-time (less than 2 seconds) and data is stored in Supabase to maintain conversation history and context.",
        q3: "How does the bot work on websites?",
        a3: "For websites, I install a chat widget (like the one you see on this page) that integrates with a simple script. When a visitor writes, the message is sent to my server via webhook, the bot processes the query and responds instantly. The widget is fully customizable (colors, position, welcome messages) and works on any website. If you don't have a site, I can create it for you.",
        q4: "How much does a chatbot cost and what's included?",
        a4: "Plans start from $40 USD/month (Standard Plan) with 200 messages included, monitoring dashboard, and continuous support. The Premium Plan costs $70 USD/month and includes 500 messages, complete analytics, immediate support, and on-demand changes. Both plans include initial setup, bot training, technical integration, and updates. Compared to hiring an employee ($800-2000 USD/month), the savings is 95%.",
        q5: "How long does implementation take?",
        a5: "Complete implementation takes between 2 and 4 business days. Day 1: We collect information about your business (products, services, FAQs). Day 2-3: We train the bot with AI using your content and perform internal tests. Day 4: We integrate the bot to your platforms, do final tests, and activate it. After launch, I continuously monitor and optimize based on real conversations.",
        q6: "Where are data and conversations stored?",
        a6: "All data is securely stored in Supabase (enterprise database with encryption). I maintain persistence of messages, sessions, and contexts so the bot remembers previous conversations. Data is organized and centralized, allowing multiple bots to function in parallel without interference. You have full access to your dashboard to see all conversations, captured leads, and real-time statistics.",
        q7: "Can I have bots on multiple platforms simultaneously?",
        a7: "Yes, absolutely. You can have the same bot running on WhatsApp, Messenger, Instagram, and your website at the same time. All bots share the same knowledge base but adapt to each platform's format. For example, on WhatsApp it can send images and buttons, on web it can show interactive forms. My server's horizontal architecture allows handling up to 50 simultaneous bots with minimum resource consumption.",
        q8: "What happens if I exceed the messages included in my plan?",
        a8: "I automatically notify you when you reach 80% of your message limit. You have two options: (1) Upgrade to a higher plan to get more included messages, or (2) Wait for the next monthly cycle. The bot never stops abruptly; there's always a grace period. Most businesses with the Standard Plan (200 messages) comfortably handle 50-100 daily queries, as many are automatic responses that don't consume additional messages."
      },
      trust: {
        title: "Trust & Transparency",
        subtitle: "Your peace of mind is our priority",
        security: {
          title: "Guaranteed Security",
          desc: "All payments are processed through PayPal, a secure and globally recognized platform. Your data is protected with bank-level encryption.",
          badge: "100% Secure Payment"
        },
        delivery: {
          title: "Delivery Time",
          desc: "The bot configuration and training process takes between 2 and 4 business days, depending on the selected plan and your business complexity.",
          day1: "Day 1",
          step1: "Initial setup",
          day2: "Day 2-3",
          step2: "Bot training",
          day3: "Day 4",
          step3: "Testing & delivery"
        },
        guarantee: {
          title: "Performance Guarantee",
          desc: "If there are any errors or the bot doesn't work correctly upon delivery, we'll make all necessary adjustments at no additional cost until you're completely satisfied.",
          item1: "✓ Unlimited adjustments in the first month",
          item2: "✓ Technical support included",
          item3: "✓ Personalized training"
        },
        confirmation: {
          title: "Automatic Confirmation",
          desc: "You'll receive automatic payment confirmation via email and a message from us with next steps in less than 24 hours."
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


