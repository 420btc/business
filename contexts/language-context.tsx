"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define available languages with Apple flag emojis
export const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
]

// Comprehensive translations
const translations = {
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.support": "Support",
    "nav.portfolio": "Portfolio",
    "nav.partnership": "Partnership",

    // CTA and Buttons
    "cta.consultation": "Free Consultation",
    "cta.explore": "Explore Services",
    "cta.learn_more": "Learn More",
    "cta.get_started": "Get Started",
    "cta.contact_us": "Contact Us",
    "cta.view_portfolio": "View Portfolio",

    // Hero Section
    "hero.title": "Innovative Solutions",
    "hero.subtitle": "Digital Technology & Mechanical Engineering",
    "hero.description":
      "Innovative solutions at the intersection of digital technology and mechanical engineering excellence.",
    "hero.typing_text": "Let's create tomorrow's technology",



    // Contact Section
    "contact.title": "Ready to innovate?",
    "contact.description":
      "Let's discuss how we can bring your vision to life with cutting-edge technology and engineering excellence.",

    // Footer
    "footer.powered_by": "Powered by Weltivation",
    "footer.rights": "All rights reserved",

    // Process Steps
    "process.concept": "Concept Design",
    "process.modeling": "3D Modeling",
    "process.prototyping": "Prototyping",
    "process.testing": "Testing & Validation",
    "process.manufacturing": "Manufacturing Prep",
    "process.production": "Production Ready",

    // Home page specific
    "home.hero.description": "Transforming ideas into powerful digital solutions that drive growth and innovation for forward-thinking businesses.",
    "home.contact.title": "Ready to innovate?",
    "home.contact.description": "Let's discuss how we can transform your vision into reality with cutting-edge technology and strategic innovation.",
    "home.steps.no_commitment": "No commitment required",
    "home.steps.strategy_session": "30-minute strategy session",
    "home.steps.expert_guidance": "Expert guidance",
    "typing.technology": "technology",
    "typing.digital_solutions": "digital solutions",
    "typing.free_consultation": "free consultation",
    "typing.base_text": "Let's create tomorrow's ",
    
    // Expertise Section
    "expertise.trusted_by": "Trusted by industry leaders",
    "expertise.main_title": "We help brands grow with strategic design that's thoughtful, visually bold, and built to make an impression.",
    "expertise.fact_01": "Fact 01",
    "expertise.fact_02": "Fact 02",
    "expertise.fact_03": "Fact 03",
    
    // Services
    "services.website.title": "Website Development",
    "services.website.subtitle": "Modern, Fast & Scalable",
    "services.website.description": "Transform your digital presence with cutting-edge websites that convert visitors into customers. Built with the latest technologies for maximum performance and user experience.",
    "services.mobile.title": "Mobile App Development",
    "services.mobile.subtitle": "Native & Cross-Platform",
    "services.mobile.description": "Create powerful mobile experiences that engage users and drive business growth. From concept to app store, we deliver apps that users love and businesses depend on.",
    "services.digital.title": "Digital Systems",
    "services.digital.subtitle": "Automation & Integration",
    "services.digital.description": "Streamline your operations with intelligent digital systems that automate workflows, integrate seamlessly, and scale with your business growth.",
    "services.mechanical.title": "Mechanical Engineering",
    "services.mechanical.subtitle": "Design & Prototyping",
    "services.mechanical.description": "Bring your physical products to life with precision engineering, rapid prototyping, and manufacturing-ready designs that meet the highest industry standards.",
    "services.product.title": "Product Development",
    "services.product.subtitle": "From Idea to Market",
    "services.product.description": "Transform innovative ideas into market-ready products with our comprehensive development process, from initial concept through successful launch.",
    "services.architecture.title": "Architecture Design",
    "services.architecture.subtitle": "Spaces That Inspire",
    "services.architecture.description": "Create stunning architectural designs that blend functionality with aesthetics, delivering spaces that inspire and environments that enhance human experience.",
    
    // Services Section Header
    "services.section.premium": "Premium Services",
    "services.section.title": "Services That Transform",
    "services.section.subtitle": "Comprehensive solutions designed to accelerate your business growth and digital transformation",
    "services.section.view_projects": "View Our Projects",
    
    // Service Features
    "features.lightning_fast": "Lightning-fast loading speeds",
    "features.enterprise_security": "Enterprise-grade security",
    "features.conversion_optimized": "Conversion-optimized design",
    "features.uptime_guarantee": "99.9% uptime guarantee",
    "features.cross_platform": "Cross-platform compatibility",
    "features.real_time_sync": "Real-time synchronization",
    "features.advanced_security": "Advanced security features",
    "features.built_in_analytics": "Built-in analytics",
    "features.workflow_automation": "Workflow automation",
    "features.data_integration": "Data integration",
    "features.cloud_native": "Cloud-native architecture",
    "features.api_first": "API-first design",
    "features.innovative_design": "Innovative design solutions",
    "features.cad_modeling": "CAD modeling & simulation",
    "features.rapid_prototyping": "Rapid prototyping",
    "features.quality_assurance": "Quality assurance",
    "features.market_research": "Market research & validation",
    "features.mvp_development": "MVP development",
    "features.go_to_market": "Go-to-market strategy",
    "features.post_launch": "Post-launch optimization",
    "features.sustainable_design": "Sustainable design principles",
    "features.3d_visualization": "3D visualization & VR",
    "features.building_compliance": "Building code compliance",
    "features.award_winning": "Award-winning designs",
    
    // Service Stats
    "stats.speed_increase": "Average Speed Increase",
    "stats.conversion_boost": "Conversion Rate Boost",
    "stats.client_satisfaction": "Client Satisfaction",
    "stats.app_store_rating": "App Store Rating",
    "stats.user_retention": "User Retention",
    "stats.development_speed": "Development Speed",
    "stats.efficiency_increase": "Efficiency Increase",
    "stats.cost_reduction": "Cost Reduction",
    "stats.error_reduction": "Error Reduction",
    "stats.design_accuracy": "Design Accuracy",
    "stats.time_to_prototype": "Time to Prototype",
    "stats.manufacturing_ready": "Manufacturing Ready",
    "stats.success_rate": "Success Rate",
    "stats.time_to_market": "Time to Market",
    "stats.roi_average": "ROI Average",
    "stats.projects_completed": "Projects Completed",
    "stats.on_time_delivery": "On-Time Delivery"
  },
  es: {
    // Navigation
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.process": "Proceso",
    "nav.contact": "Contacto",
    "nav.support": "Soporte",
    "nav.portfolio": "Portafolio",
    "nav.partnership": "Asociación",

    // CTA and Buttons
    "cta.consultation": "Consulta Gratuita",
    "cta.explore": "Explorar Servicios",
    "cta.learn_more": "Saber Más",
    "cta.get_started": "Comenzar",
    "cta.contact_us": "Contáctanos",
    "cta.view_portfolio": "Ver Portafolio",

    // Hero Section
    "hero.title": "Soluciones Innovadoras",
    "hero.subtitle": "Tecnología Digital e Ingeniería Mecánica",
    "hero.description":
      "Soluciones innovadoras en la intersección de la tecnología digital y la excelencia en ingeniería mecánica.",
    "hero.typing_text": "Creemos la tecnología del mañana",



    // Contact Section
    "contact.title": "¿Listo para innovar?",
    "contact.description":
      "Hablemos sobre cómo podemos dar vida a su visión con tecnología de vanguardia y excelencia en ingeniería.",

    // Footer
    "footer.powered_by": "Desarrollado por Weltivation",
    "footer.rights": "Todos los derechos reservados",

    // Process Steps
    "process.concept": "Diseño Conceptual",
    "process.modeling": "Modelado 3D",
    "process.prototyping": "Prototipado",
    "process.testing": "Pruebas y Validación",
    "process.manufacturing": "Preparación de Fabricación",
    "process.production": "Listo para Producción",

    // Home page specific
    "home.hero.description": "Transformando ideas en soluciones digitales poderosas que impulsan el crecimiento y la innovación para empresas visionarias.",
    "home.contact.title": "¿Listo para innovar?",
    "home.contact.description": "Hablemos sobre cómo podemos transformar tu visión en realidad con tecnología de vanguardia e innovación estratégica.",
    "home.steps.no_commitment": "Sin compromiso requerido",
    "home.steps.strategy_session": "Sesión de estrategia de 30 minutos",
    "home.steps.expert_guidance": "Orientación experta",
    "typing.technology": "tecnología",
    "typing.digital_solutions": "soluciones digitales",
    "typing.free_consultation": "consulta gratuita",
    "typing.base_text": "Creemos la ",
    
    // Expertise Section
    "expertise.trusted_by": "Confiado por líderes de la industria",
    "expertise.main_title": "Ayudamos a las marcas a crecer con diseño estratégico que es reflexivo, visualmente audaz y construido para causar una impresión.",
    "expertise.fact_01": "Dato 01",
    "expertise.fact_02": "Dato 02",
    "expertise.fact_03": "Dato 03",
    
    // Services
    "services.website.title": "Desarrollo Web",
    "services.website.subtitle": "Moderno, Rápido y Escalable",
    "services.website.description": "Transforma tu presencia digital con sitios web de vanguardia que convierten visitantes en clientes. Construidos con las últimas tecnologías para máximo rendimiento y experiencia de usuario.",
    "services.mobile.title": "Desarrollo de Apps Móviles",
    "services.mobile.subtitle": "Nativo y Multiplataforma",
    "services.mobile.description": "Crea experiencias móviles poderosas que involucran a los usuarios e impulsan el crecimiento empresarial. Desde el concepto hasta la tienda de aplicaciones, entregamos apps que los usuarios aman y las empresas necesitan.",
    "services.digital.title": "Sistemas Digitales",
    "services.digital.subtitle": "Automatización e Integración",
    "services.digital.description": "Optimiza tus operaciones con sistemas digitales inteligentes que automatizan flujos de trabajo, se integran perfectamente y escalan con el crecimiento de tu negocio.",
    "services.mechanical.title": "Ingeniería Mecánica",
    "services.mechanical.subtitle": "Diseño y Prototipado",
    "services.mechanical.description": "Da vida a tus productos físicos con ingeniería de precisión, prototipado rápido y diseños listos para fabricación que cumplen los más altos estándares de la industria.",
    "services.product.title": "Desarrollo de Productos",
    "services.product.subtitle": "De la Idea al Mercado",
    "services.product.description": "Transforma ideas innovadoras en productos listos para el mercado con nuestro proceso de desarrollo integral, desde el concepto inicial hasta el lanzamiento exitoso.",
    "services.architecture.title": "Diseño Arquitectónico",
    "services.architecture.subtitle": "Espacios que Inspiran",
    "services.architecture.description": "Crea diseños arquitectónicos impresionantes que combinan funcionalidad con estética, entregando espacios que inspiran y ambientes que mejoran la experiencia humana.",
    
    // Services Section Header
    "services.section.premium": "Servicios Premium",
    "services.section.title": "Servicios Que Transforman",
    "services.section.subtitle": "Soluciones integrales diseñadas para acelerar el crecimiento de tu negocio y la transformación digital",
    "services.section.view_projects": "Ver Nuestros Proyectos",
    
    // Service Features
    "features.lightning_fast": "Velocidades de carga ultrarrápidas",
    "features.enterprise_security": "Seguridad de nivel empresarial",
    "features.conversion_optimized": "Diseño optimizado para conversiones",
    "features.uptime_guarantee": "Garantía de disponibilidad del 99.9%",
    "features.cross_platform": "Compatibilidad multiplataforma",
    "features.real_time_sync": "Sincronización en tiempo real",
    "features.advanced_security": "Características de seguridad avanzadas",
    "features.built_in_analytics": "Analíticas integradas",
    "features.workflow_automation": "Automatización de flujos de trabajo",
    "features.data_integration": "Integración de datos",
    "features.cloud_native": "Arquitectura nativa en la nube",
    "features.api_first": "Diseño API-first",
    "features.innovative_design": "Soluciones de diseño innovadoras",
    "features.cad_modeling": "Modelado CAD y simulación",
    "features.rapid_prototyping": "Prototipado rápido",
    "features.quality_assurance": "Aseguramiento de calidad",
    "features.market_research": "Investigación y validación de mercado",
    "features.mvp_development": "Desarrollo de MVP",
    "features.go_to_market": "Estrategia de lanzamiento al mercado",
    "features.post_launch": "Optimización post-lanzamiento",
    "features.sustainable_design": "Principios de diseño sostenible",
    "features.3d_visualization": "Visualización 3D y VR",
    "features.building_compliance": "Cumplimiento de códigos de construcción",
    "features.award_winning": "Diseños galardonados",
    
    // Service Stats
    "stats.speed_increase": "Aumento Promedio de Velocidad",
    "stats.conversion_boost": "Impulso en Tasa de Conversión",
    "stats.client_satisfaction": "Satisfacción del Cliente",
    "stats.app_store_rating": "Calificación en App Store",
    "stats.user_retention": "Retención de Usuarios",
    "stats.development_speed": "Velocidad de Desarrollo",
    "stats.efficiency_increase": "Aumento de Eficiencia",
    "stats.cost_reduction": "Reducción de Costos",
    "stats.error_reduction": "Reducción de Errores",
    "stats.design_accuracy": "Precisión de Diseño",
    "stats.time_to_prototype": "Tiempo hasta Prototipo",
    "stats.manufacturing_ready": "Listo para Fabricación",
    "stats.success_rate": "Tasa de Éxito",
    "stats.time_to_market": "Tiempo al Mercado",
    "stats.roi_average": "ROI Promedio",
    "stats.projects_completed": "Proyectos Completados",
    "stats.on_time_delivery": "Entrega a Tiempo"
  },
  fr: {
    // Navigation
    "nav.services": "Services",
    "nav.projects": "Projets",
    "nav.process": "Processus",
    "nav.contact": "Contact",
    "nav.support": "Support",
    "nav.portfolio": "Portfolio",
    "nav.partnership": "Partenariat",

    // CTA and Buttons
    "cta.consultation": "Consultation Gratuite",
    "cta.explore": "Explorer les Services",
    "cta.learn_more": "En Savoir Plus",
    "cta.get_started": "Commencer",
    "cta.contact_us": "Nous Contacter",
    "cta.view_portfolio": "Voir le Portfolio",

    // Hero Section
    "hero.title": "Solutions Innovantes",
    "hero.subtitle": "Technologie Numérique et Ingénierie Mécanique",
    "hero.description":
      "Solutions innovantes à l'intersection de la technologie numérique et de l'excellence en ingénierie mécanique.",
    "hero.typing_text": "Créons la technologie de demain",



    // Contact Section
    "contact.title": "Prêt à innover?",
    "contact.description":
      "Discutons de la façon dont nous pouvons donner vie à votre vision avec une technologie de pointe et une excellence en ingénierie.",

    // Footer
    "footer.powered_by": "Propulsé par Weltivation",
    "footer.rights": "Tous droits réservés",

    // Process Steps
    "process.concept": "Conception Conceptuelle",
    "process.modeling": "Modélisation 3D",
    "process.prototyping": "Prototypage",
    "process.testing": "Tests et Validation",
    "process.manufacturing": "Préparation de Fabrication",
    "process.production": "Prêt pour la Production",
  },
  de: {
    // Navigation
    "nav.services": "Dienstleistungen",
    "nav.projects": "Projekte",
    "nav.process": "Prozess",
    "nav.contact": "Kontakt",
    "nav.support": "Support",
    "nav.portfolio": "Portfolio",
    "nav.partnership": "Partnerschaft",

    // CTA and Buttons
    "cta.consultation": "Kostenlose Beratung",
    "cta.explore": "Services Erkunden",
    "cta.learn_more": "Mehr Erfahren",
    "cta.get_started": "Loslegen",
    "cta.contact_us": "Kontaktieren Sie Uns",
    "cta.view_portfolio": "Portfolio Ansehen",

    // Hero Section
    "hero.title": "Innovative Lösungen",
    "hero.subtitle": "Digitale Technologie & Maschinenbau",
    "hero.description":
      "Innovative Lösungen an der Schnittstelle von digitaler Technologie und maschinenbaulicher Exzellenz.",
    "hero.typing_text": "Lassen Sie uns die Technologie von morgen schaffen",



    // Contact Section
    "contact.title": "Bereit zu innovieren?",
    "contact.description":
      "Lassen Sie uns besprechen, wie wir Ihre Vision mit modernster Technologie und technischer Exzellenz zum Leben erwecken können.",

    // Footer
    "footer.powered_by": "Betrieben von Weltivation",
    "footer.rights": "Alle Rechte vorbehalten",

    // Process Steps
    "process.concept": "Konzeptdesign",
    "process.modeling": "3D-Modellierung",
    "process.prototyping": "Prototyping",
    "process.testing": "Testen & Validierung",
    "process.manufacturing": "Fertigungsvorbereitung",
    "process.production": "Produktionsbereit",
  },
  zh: {
    // Navigation
    "nav.services": "服务",
    "nav.projects": "项目",
    "nav.process": "流程",
    "nav.contact": "联系我们",
    "nav.support": "支持",
    "nav.portfolio": "作品集",
    "nav.partnership": "合作伙伴",

    // CTA and Buttons
    "cta.consultation": "免费咨询",
    "cta.explore": "探索服务",
    "cta.learn_more": "了解更多",
    "cta.get_started": "开始",
    "cta.contact_us": "联系我们",
    "cta.view_portfolio": "查看作品集",

    // Hero Section
    "hero.title": "创新解决方案",
    "hero.subtitle": "数字技术与机械工程",
    "hero.description": "在数字技术和机械工程卓越的交汇点提供创新解决方案。",
    "hero.typing_text": "让我们创造明天的技术",



    // Contact Section
    "contact.title": "准备创新了吗？",
    "contact.description": "让我们讨论如何用尖端技术和工程卓越将您的愿景变为现实。",

    // Footer
    "footer.powered_by": "由Weltivation提供支持",
    "footer.rights": "版权所有",

    // Process Steps
    "process.concept": "概念设计",
    "process.modeling": "3D建模",
    "process.prototyping": "原型制作",
    "process.testing": "测试与验证",
    "process.manufacturing": "制造准备",
    "process.production": "生产就绪",
  },
  ja: {
    // Navigation
    "nav.services": "サービス",
    "nav.projects": "プロジェクト",
    "nav.process": "プロセス",
    "nav.contact": "お問い合わせ",
    "nav.support": "サポート",
    "nav.portfolio": "ポートフォリオ",
    "nav.partnership": "パートナーシップ",

    // CTA and Buttons
    "cta.consultation": "無料相談",
    "cta.explore": "サービスを探索",
    "cta.learn_more": "詳細を見る",
    "cta.get_started": "始める",
    "cta.contact_us": "お問い合わせ",
    "cta.view_portfolio": "ポートフォリオを見る",

    // Hero Section
    "hero.title": "革新的なソリューション",
    "hero.subtitle": "デジタル技術と機械工学",
    "hero.description": "デジタル技術と機械工学の卓越性の交差点での革新的なソリューション。",
    "hero.typing_text": "明日のテクノロジーを創造しましょう",



    // Contact Section
    "contact.title": "革新の準備はできましたか？",
    "contact.description": "最先端技術と工学的卓越性でお客様のビジョンを実現する方法について話し合いましょう。",

    // Footer
    "footer.powered_by": "Weltivationによって提供",
    "footer.rights": "全著作権所有",

    // Process Steps
    "process.concept": "コンセプトデザイン",
    "process.modeling": "3Dモデリング",
    "process.prototyping": "プロトタイピング",
    "process.testing": "テストと検証",
    "process.manufacturing": "製造準備",
    "process.production": "生産準備完了",
  },
}

type LanguageContextType = {
  currentLanguage: (typeof languages)[0]
  setLanguage: (code: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  // Load saved language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      const lang = languages.find((l) => l.code === savedLanguage)
      if (lang) setCurrentLanguage(lang)
    }
  }, [])

  const setLanguage = (code: string) => {
    const newLang = languages.find((l) => l.code === code)
    if (newLang) {
      setCurrentLanguage(newLang)
      localStorage.setItem("language", code)
      document.documentElement.lang = code
    }
  }

  // Translation function
  const t = (key: string): string => {
    const langTranslations = translations[currentLanguage.code as keyof typeof translations] || translations.en
    return langTranslations[key as keyof typeof langTranslations] || key
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
