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
    "hero.typing_text": "We create the:",



    // Contact Section
    "contact.title": "Ready to innovate?",
    "contact.description":
      "Let's discuss how we can bring your vision to life with cutting-edge technology and engineering excellence.",

    // Footer
    "footer.powered_by": "Powered by Wolty",
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
    "typing.technology": "tecnología",
     "typing.digital_solutions": "soluciones digitales",
     "typing.free_consultation": "consulta gratuita",
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
    "stats.on_time_delivery": "On-Time Delivery",
    
    // Expertise Section Additional
    "expertise.select_service": "Select a Service",
    "expertise.choose_service": "Choose the service you're interested in to start a consultation",
    "expertise.mechanical": "Mechanical",
    "expertise.digital_systems": "Digital Systems",
    "expertise.website": "Website",
    "expertise.mobile_app": "Mobile App",
    "expertise.product_dev": "Product Dev",
    "expertise.architecture_design": "Architecture Design",
    "expertise.verified": "Verified",
    "expertise.growth": "Growth",
    "expertise.recommend_text": "of clients recommend us to other clients",
    "expertise.testimonial": "Their expertise in web development and business systems transformed our operations completely.",
    "expertise.client_satisfaction": "Client Satisfaction",
    "expertise.b2b_partners": "B2B Partners",
    "expertise.growth_rate": "Growth Rate",
    "expertise.innovation": "Innovation",
    "expertise.glasspatch_title": "$2M raised: the strategy behind Glass Patch's growth",
    "expertise.see_case_study": "See case study",
    "expertise.streamlined_process": "A streamlined process, executed with methodical care.",
    "expertise.transform_brands": "We transform overwhelming brands into standout experiences, built to reflect the quality, ambition, and greatness",
    "expertise.timeline": "Timeline",
    "expertise.sony_project": "Website & branding for Sony",
    "expertise.discovery": "Discovery",
    "expertise.concept": "Concept",
    "expertise.execution": "Execution",
    "expertise.learn_process": "Learn about our process",
    "expertise.raised_amount": "Raised by the brands we've partnered with",
    "expertise.powered_by": "powered by",
    "expertise.client_impact": "Client Impact Metrics",
    "expertise.live_data": "Live Data",
    "expertise.real_results": "Real results from our client partnerships",
    "expertise.users_platforms": "Users on platforms we've built",
    "expertise.across_applications": "Across all client applications",
    "expertise.week": "Week",
    "expertise.weeks": "Weeks",
    
    // Consultation Form Questions
    "form.business_name": "What's your business name?",
    "form.business_name_placeholder": "Enter your business name",
    "form.business_type": "What type of business do you have?",
    "form.company_size": "How many employees does your company have?",
    "form.goal": "What's your primary goal?",
    "form.budget": "What's your budget range?",
    "form.timeline": "What's your timeline?",
    "form.location": "Where is your business located?",
    "form.contact_name": "Who is the primary contact for this project?",
    "form.contact_name_placeholder": "Enter your full name",
    "form.email": "What's the best email to reach you?",
    "form.email_placeholder": "Enter your email address",
    
    // Form Options
    "form.startup": "Startup",
    "form.small_business": "Small Business",
    "form.enterprise": "Enterprise",
    "form.non_profit": "Non-Profit",
    "form.increase_revenue": "Increase Revenue",
    "form.improve_efficiency": "Improve Efficiency",
    "form.scale_operations": "Scale Operations",
    "form.digital_transformation": "Digital Transformation",
    "form.asap": "ASAP",
    "form.1_3_months": "1-3 Months",
    "form.3_6_months": "3-6 Months",
    "form.6_plus_months": "6+ Months",
    "form.north_america": "North America",
    "form.europe": "Europe",
    "form.asia": "Asia",
    "form.other": "Other",
    
    // Form UI
    "form.back": "Back",
    "form.consultation": "Consultation",
    "form.step_of": "Step {current} of {total}",
    "form.thank_you": "Thank you!",
    "form.inquiry_sent": "Your inquiry has been sent to our team. We'll get back to you within 24 hours with a customized consultation.",
    "form.schedule_consultation": "Schedule Consultation",
    "form.start_another": "Start Another Consultation",
    "form.continue": "Continue",
    "form.questions_remaining": "{count} questions remaining",
    
    // Projects Page
    "projects.title": "Projects",
    "projects.subtitle": "Explore our comprehensive portfolio of successful client projects.",
    "projects.revenue": "Revenue",
    "projects.search_placeholder": "Search projects...",
    "projects.all_projects": "All Projects",
    "projects.web_development": "Web Development",
    "projects.mobile_apps": "Mobile Apps",
    "projects.physical_products": "Physical Products",
    "projects.featured": "Featured",
    "projects.visit_site": "Visit Site",
    "projects.private_project": "Private Project",
    "projects.overview": "Overview",
    "projects.key_features": "Key Features",
    "projects.technologies": "Technologies",
    "projects.team": "Team",
    "projects.project_milestones": "Project Milestones",
    "projects.completed": "completed",
    "projects.status": "Status",
    "projects.budget": "Budget",
    "projects.timeline": "Timeline",
    "projects.completion": "Completion",
    "projects.rating": "Rating",
    "projects.metrics": "Metrics",
    "projects.users": "Users",
    "projects.satisfaction": "Satisfaction",
    "projects.months": "months",
    "projects.month": "month",
    "projects.weeks": "weeks",
    "projects.week": "week",
    "projects.project_metrics": "Project Metrics",
    "projects.revenue_generated": "Revenue Generated",
    "projects.active_users": "Active Users",
    "projects.in_progress": "In Progress",
    "projects.completed_status": "Completed",
    "projects.private_project_description": "This project contains confidential client information and cannot be previewed publicly.",

    // Process Page
    "process.page_title": "Our Development Process",
    "process.page_subtitle": "A proven methodology that delivers exceptional results through careful planning, expert execution, and continuous collaboration.",
    "process.six_step_process": "Our 6-Step Process",
    "process.methodologies_title": "Our Methodologies",
    "process.tools_title": "Tools & Technologies",
    "process.track_record_title": "Our Track Record",
    "process.ready_to_start": "Ready to Start Your Project?",
    "process.ready_description": "Let's discuss how our proven process can help bring your vision to life. Schedule a free consultation to get started.",
    "process.schedule_consultation": "Schedule Free Consultation",
    "process.view_our_work": "View Our Work",
    
    // Process Steps
    "process.discovery.title": "Discovery & Planning",
    "process.discovery.duration": "1-2 weeks",
    "process.discovery.description": "We dive deep into understanding your business, goals, and technical requirements.",
    "process.design.title": "Design & Prototyping",
    "process.design.duration": "2-3 weeks",
    "process.design.description": "Creating user-centered designs and interactive prototypes to validate concepts.",
    "process.development.title": "Development & Integration",
    "process.development.duration": "4-12 weeks",
    "process.development.description": "Building your solution with clean, scalable code and modern technologies.",
    "process.testing.title": "Testing & Quality Assurance",
    "process.testing.duration": "1-2 weeks",
    "process.testing.description": "Rigorous testing to ensure your solution works flawlessly across all scenarios.",
    "process.deployment.title": "Deployment & Launch",
    "process.deployment.duration": "1 week",
    "process.deployment.description": "Seamless deployment to production with monitoring and optimization.",
    "process.support.title": "Support & Maintenance",
    "process.support.duration": "Ongoing",
    "process.support.description": "Continuous support, updates, and enhancements to keep your solution running smoothly.",
    
    // Process Activities and Deliverables
    "process.key_activities": "Key Activities",
    "process.deliverables": "Deliverables",
    "process.duration_label": "Duration:",
    
    // Methodologies
    "process.agile.title": "Agile Development",
    "process.agile.description": "2-week sprints with regular demos and feedback",
    "process.devops.title": "DevOps Integration",
    "process.devops.description": "Automated testing, deployment, and monitoring",
    "process.user_centered.title": "User-Centered Design",
    "process.user_centered.description": "Design decisions based on user research and testing",
    "process.quality_assurance.title": "Quality Assurance",
    "process.quality_assurance.description": "Comprehensive testing at every stage",
    
    // Tool Categories
    "process.tools.project_management": "Project Management",
    "process.tools.design_prototyping": "Design & Prototyping",
    "process.tools.development": "Development",
    "process.tools.testing_qa": "Testing & QA",
    "process.tools.communication": "Communication",
    "process.tools.documentation": "Documentation",
    
    // Success Metrics
    "process.metrics.on_time_delivery": "On-Time Delivery",
    "process.metrics.on_time_description": "Projects delivered on schedule",
    "process.metrics.client_satisfaction": "Client Satisfaction",
    "process.metrics.client_satisfaction_description": "Average client rating",
    "process.metrics.bug_free_releases": "Bug-Free Releases",
    "process.metrics.bug_free_description": "Releases without critical bugs",
    "process.metrics.performance_improvement": "Performance Improvement",
    "process.metrics.performance_description": "Average performance gain",
    
    // Discovery Activities
    "process.discovery.activity1": "Stakeholder interviews and requirements gathering",
    "process.discovery.activity2": "Technical architecture planning and system design",
    "process.discovery.activity3": "User research and competitive analysis",
    "process.discovery.activity4": "Project roadmap and timeline creation",
    "process.discovery.activity5": "Risk assessment and mitigation planning",
    
    // Discovery Deliverables
    "process.discovery.deliverable1": "Detailed project specification document",
    "process.discovery.deliverable2": "Technical architecture diagram",
    "process.discovery.deliverable3": "Project timeline and milestones",
    "process.discovery.deliverable4": "Resource allocation plan",
    "process.discovery.deliverable5": "Risk management strategy",
    
    // Design Activities
    "process.design.activity1": "User experience (UX) design and user journey mapping",
    "process.design.activity2": "User interface (UI) design and visual identity",
    "process.design.activity3": "Interactive prototyping and wireframing",
    "process.design.activity4": "Design system creation and component library",
    "process.design.activity5": "Usability testing and design iteration",
    
    // Design Deliverables
    "process.design.deliverable1": "Complete UI/UX designs",
    "process.design.deliverable2": "Interactive prototypes",
    "process.design.deliverable3": "Design system and style guide",
    "process.design.deliverable4": "User testing results",
    "process.design.deliverable5": "Final design specifications",
    
    // Development Activities
    "process.development.activity1": "Frontend and backend development",
    "process.development.activity2": "Database design and implementation",
    "process.development.activity3": "API development and third-party integrations",
    "process.development.activity4": "Security implementation and data protection",
    "process.development.activity5": "Performance optimization and scalability planning",
    
    // Development Deliverables
    "process.development.deliverable1": "Fully functional application",
    "process.development.deliverable2": "Clean, documented codebase",
    "process.development.deliverable3": "API documentation",
    "process.development.deliverable4": "Security audit report",
    "process.development.deliverable5": "Performance benchmarks",
    
    // Testing Activities
    "process.testing.activity1": "Automated testing suite development",
    "process.testing.activity2": "Manual testing across devices and browsers",
    "process.testing.activity3": "Performance and load testing",
    "process.testing.activity4": "Security penetration testing",
    "process.testing.activity5": "User acceptance testing (UAT)",
    
    // Testing Deliverables
    "process.testing.deliverable1": "Comprehensive test suite",
    "process.testing.deliverable2": "Testing reports and bug fixes",
    "process.testing.deliverable3": "Performance optimization results",
    "process.testing.deliverable4": "Security assessment report",
    "process.testing.deliverable5": "UAT sign-off documentation",
    
    // Deployment Activities
    "process.deployment.activity1": "Production environment setup and configuration",
    "process.deployment.activity2": "Deployment automation and CI/CD pipeline",
    "process.deployment.activity3": "Monitoring and alerting system setup",
    "process.deployment.activity4": "Performance monitoring and optimization",
    "process.deployment.activity5": "Go-live support and issue resolution",
    
    // Deployment Deliverables
    "process.deployment.deliverable1": "Live production system",
    "process.deployment.deliverable2": "Deployment documentation",
    "process.deployment.deliverable3": "Monitoring dashboards",
    "process.deployment.deliverable4": "Backup and recovery procedures",
    "process.deployment.deliverable5": "Launch success metrics",
    
    // Support Activities
    "process.support.activity1": "24/7 monitoring and incident response",
    "process.support.activity2": "Regular security updates and patches",
    "process.support.activity3": "Performance optimization and scaling",
    "process.support.activity4": "Feature enhancements and new development",
    "process.support.activity5": "Technical support and troubleshooting",
    
    // Support Deliverables
    "process.support.deliverable1": "Monthly performance reports",
    "process.support.deliverable2": "Security update notifications",
    "process.support.deliverable3": "Feature enhancement roadmap",
    "process.support.deliverable4": "Support ticket resolution",
    "process.support.deliverable5": "System health monitoring",
    
    // Methodology Benefits
    "process.agile.benefit1": "Faster delivery",
    "process.agile.benefit2": "Regular feedback",
    "process.agile.benefit3": "Flexible scope",
    "process.devops.benefit1": "Reliable deployments",
    "process.devops.benefit2": "Quick issue resolution",
    "process.devops.benefit3": "Scalable infrastructure",
    "process.user_centered.benefit1": "Better user experience",
    "process.user_centered.benefit2": "Higher adoption",
    "process.user_centered.benefit3": "Reduced support needs",
    "process.quality_assurance.benefit1": "Bug-free releases",
    "process.quality_assurance.benefit2": "Performance optimization",
    "process.quality_assurance.benefit3": "Security compliance",

    // Partnership Page
    "partnership.page_title": "Partnership Benefits",
    "partnership.powered_by": "powered by",
    "partnership.keep_badge_unlock": "Keep our badge and unlock",
    "partnership.exclusive_benefits": "in exclusive partnership benefits",
    "partnership.hero_description": "Display our badge on your website and gain access to premium partnership benefits worth over $37,000. No long-term commitments, remove anytime after project completion.",
    "partnership.ready_to_partner": "Ready to Partner?",
    "partnership.join_program": "Join our partnership program and start saving on your next project",
    "partnership.apply_for_partnership": "Apply for Partnership",
    "partnership.enter_email_description": "Enter your email to get started with our partnership program",
    "partnership.email_placeholder": "Enter your email address",
    "partnership.apply_button": "Apply for Partnership",
    "partnership.agreement_text": "By applying, you agree to display our badge and receive partnership benefits.",
    "partnership.application_submitted": "Application Submitted!",
    "partnership.contact_within_24h": "We've received your partnership application. Our team will contact you within 24 hours with next steps.",
    "partnership.submit_another": "Submit Another Application",
    
    // Partnership Benefits
    "partnership.discount_title": "15% Discount",
    "partnership.discount_subtitle": "Development Projects",
    "partnership.discount_badge": "Save $30K+",
    "partnership.maintenance_title": "Free Maintenance",
    "partnership.maintenance_subtitle": "3 Months Included",
    "partnership.maintenance_badge": "$5K Value",
    "partnership.support_title": "Priority Support",
    "partnership.support_subtitle": "24/7 VIP Access",
    "partnership.support_badge": "Enterprise",
    "partnership.cdn_title": "Global CDN",
    "partnership.cdn_subtitle": "6 Months Free",
    "partnership.cdn_badge": "$2K Value",
    "partnership.performance_title": "Performance",
    "partnership.performance_subtitle": "99.9% Uptime",
    "partnership.performance_badge": "Guaranteed",
    "partnership.flexible_title": "Flexible Badge",
    "partnership.flexible_subtitle": "Remove Anytime",
    "partnership.flexible_badge": "No Strings",

    // Support Page
    "support.ai_powered_support": "AI-Powered Support",
    "support.page_title": "Get Instant Help",
    "support.page_subtitle": "Chat with our AI assistant for immediate support, or browse our comprehensive FAQ section for quick answers.",
    "support.support_assistant": "Support Assistant",
    "support.online": "Online",
    "support.type_message": "Type your message...",
    "support.faq_title": "Frequently Asked Questions",
    "support.faq_subtitle": "Quick answers to common questions about our services and process.",
    "support.initial_bot_message": "Hello! I'm your AI support assistant. How can I help you today?",
    
    // FAQ Questions and Answers
    "support.faq1.question": "How do I get started with a new project?",
    "support.faq1.answer": "Getting started is easy! Simply book a free consultation through our website, and we'll discuss your project requirements, timeline, and budget. Our team will then create a custom proposal tailored to your needs.",
    "support.faq2.question": "What is your typical project timeline?",
    "support.faq2.answer": "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 8-16 weeks. We'll provide a detailed timeline during your consultation.",
    "support.faq3.question": "Do you offer ongoing support and maintenance?",
    "support.faq3.answer": "Yes! We offer comprehensive support packages including regular updates, security monitoring, performance optimization, and technical support. Our maintenance plans start at $299/month.",
    "support.faq4.question": "Can you work with my existing team?",
    "support.faq4.answer": "We love collaborating with in-house teams. We can integrate seamlessly with your existing workflows, provide training, and work alongside your developers and designers.",
    "support.faq5.question": "What technologies do you specialize in?",
    "support.faq5.answer": "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel. We also work with mobile technologies like React Native and Flutter.",
    "support.faq6.question": "How do you handle project communication?",
    "support.faq6.answer": "We use a combination of Slack, email, and regular video calls to keep you updated. You'll have access to a project dashboard where you can track progress, view deliverables, and communicate with the team.",
    "support.faq7.question": "What is your payment structure?",
    "support.faq7.answer": "We typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we can arrange milestone-based payments. We accept all major payment methods and can provide financing options.",
    "support.faq8.question": "Do you provide hosting and domain services?",
    "support.faq8.answer": "Yes, we can handle all aspects of hosting and domain management. We work with premium hosting providers and can set up everything from basic shared hosting to enterprise-level cloud infrastructure.",
    
    // Bot Responses
    "support.bot.price_response": "Our pricing varies based on project scope and complexity. For a detailed quote, I'd recommend booking a free consultation where we can discuss your specific needs. Would you like me to help you schedule one?",
    "support.bot.timeline_response": "Project timelines depend on the complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 8-16 weeks. What type of project are you considering?",
    "support.bot.consultation_response": "I'd be happy to help you schedule a free consultation! You can book directly through our consultation page, or I can connect you with our team. What works better for you?",
    "support.bot.support_response": "We offer comprehensive support packages including updates, security monitoring, and technical support starting at $299/month. Would you like to know more about our support options?",
    "support.bot.default_response": "That's a great question! I'd be happy to connect you with one of our specialists who can provide detailed information. Would you like me to schedule a call, or do you have any other questions I can help with right now?",

    // Dashboard Chart
    "dashboard.client_impact_metrics": "Client Impact Metrics",
    "dashboard.live_data": "Live Data",
    "dashboard.real_results": "Real results from our client partnerships",
    "dashboard.revenue_generated": "Revenue Generated",
    "dashboard.client_growth": "Client Growth",
    "dashboard.active_users": "Active Users",
    "dashboard.success_rate": "Success Rate",
    "dashboard.total_revenue_description": "Total revenue generated for our clients",
    "dashboard.projects_details": "Across 47 successful projects",
    "dashboard.average_growth_description": "Average business growth achieved",
    "dashboard.within_12_months": "Within first 12 months",
    "dashboard.users_platforms_description": "Users on platforms we've built",
    "dashboard.across_applications": "Across all client applications",
    "dashboard.project_success_description": "Project success rate",
    "dashboard.on_time_budget": "On-time, on-budget delivery",
    "dashboard.enterprises": "Enterprises",
    "dashboard.roi_avg": "ROI Avg",

    // Dashboard Page
    "dashboard.page.company_name": "Acme Corp",
    "dashboard.page.login": "Login",
    "dashboard.page.sign_up": "Sign Up",
    "dashboard.page.hero_title": "Unlock Your Potential with Expert-Led Courses",
    "dashboard.page.hero_description": "Transform your career with our comprehensive online courses. Learn from industry experts and gain in-demand skills.",
    "dashboard.page.services": "Services",
    "dashboard.page.free_consultation": "Free Consultation",
    
    // Features
    "dashboard.feature1.name": "Engaging Learning Experience",
    "dashboard.feature1.description": "Interactive lessons and real-world projects make learning fun and effective.",
    "dashboard.feature2.name": "Personalized Mentorship",
    "dashboard.feature2.description": "Receive guidance and support from experienced mentors to achieve your goals.",
    "dashboard.feature3.name": "Collaborative Community",
    "dashboard.feature3.description": "Connect with fellow learners, share ideas, and build lasting relationships.",
    "dashboard.feature4.name": "Career Advancement",
    "dashboard.feature4.description": "Gain in-demand skills and access career resources to unlock new opportunities.",
    
    // Testimonials Section
    "dashboard.testimonials.title": "What Our Students Say",
    "dashboard.testimonials.subtitle": "Don't just take our word for it. See how our courses have helped students achieve their goals.",
    "dashboard.testimonial1.name": "Sarah L.",
    "dashboard.testimonial1.title": "Software Engineer",
    "dashboard.testimonial1.quote": "I landed my dream job after completing this program. The skills I learned were invaluable.",
    "dashboard.testimonial2.name": "David M.",
    "dashboard.testimonial2.title": "Data Scientist",
    "dashboard.testimonial2.quote": "The mentorship and community support were exceptional. I highly recommend this platform.",
    "dashboard.testimonial3.name": "Emily R.",
    "dashboard.testimonial3.title": "UX Designer",
    "dashboard.testimonial3.quote": "I transformed my career with this program. The curriculum is comprehensive and up-to-date.",
    
    // CTA Section
    "dashboard.cta.title": "Ready to Transform Your Career?",
    "dashboard.cta.description": "Join our community of learners and start your journey towards a brighter future.",
    "dashboard.cta.button": "Get Started Today",
    
    // Footer
    "dashboard.footer.copyright": "All rights reserved.",
    "dashboard.footer.terms": "Terms of Service",
    "dashboard.footer.privacy": "Privacy Policy",

    // Consultation Page
    "consultation.strategic_consultation": "Strategic Consultation",
    "consultation.step_of": "Step {current} of {total}",
    "consultation.previous": "Previous",
    "consultation.next_step": "Next Step",
    "consultation.start_consultation": "Start Consultation",
    "consultation.preview_dashboard": "Preview Dashboard",
    
    // Step 1: Business Type
    "consultation.step1.title": "What type of business are you?",
    "consultation.step1.subtitle": "Help us understand your business context",
    "consultation.business.startup": "Startup",
    "consultation.business.startup_desc": "Early-stage innovation",
    "consultation.business.smb": "Small Business",
    "consultation.business.smb_desc": "Established enterprise",
    "consultation.business.enterprise": "Enterprise",
    "consultation.business.enterprise_desc": "Large corporation",
    "consultation.business.agency": "Agency",
    "consultation.business.agency_desc": "Creative & marketing",
    
    // Step 2: Company Size
    "consultation.step2.title": "Company size?",
    "consultation.step2.subtitle": "This helps us scale our recommendations",
    "consultation.size.1-10": "1-10 employees",
    "consultation.size.1-10_desc": "Small team",
    "consultation.size.11-50": "11-50 employees",
    "consultation.size.11-50_desc": "Growing company",
    "consultation.size.51-200": "51-200 employees",
    "consultation.size.51-200_desc": "Mid-size",
    "consultation.size.200+": "200+ employees",
    "consultation.size.200+_desc": "Large corp",
    
    // Step 3: Project Types
    "consultation.step3.title": "What services do you need?",
    "consultation.step3.subtitle": "Select all that apply",
    "consultation.project.website": "Website Development",
    "consultation.project.website_desc": "Web applications",
    "consultation.project.mobile": "Mobile App",
    "consultation.project.mobile_desc": "iOS & Android",
    "consultation.project.digital": "Digital Systems",
    "consultation.project.digital_desc": "Enterprise software",
    "consultation.project.mechanical": "Mechanical Engineering",
    "consultation.project.mechanical_desc": "Product design",
    "consultation.project.product": "Product Development",
    "consultation.project.product_desc": "End-to-end solutions",
    "consultation.project.architecture": "Architecture Design",
    "consultation.project.architecture_desc": "Structural design",
    
    // Step 4: Budget
    "consultation.step4.title": "What's your budget range?",
    "consultation.step4.subtitle": "This helps us recommend the right solution",
    "consultation.budget.5k-25k": "$5K - $25K",
    "consultation.budget.5k-25k_desc": "Small projects",
    "consultation.budget.25k-100k": "$25K - $100K",
    "consultation.budget.25k-100k_desc": "Medium solutions",
    "consultation.budget.100k-500k": "$100K - $500K",
    "consultation.budget.100k-500k_desc": "Enterprise",
    "consultation.budget.500k+": "$500K+",
    "consultation.budget.500k+_desc": "Transformation",
    
    // Step 5: Timeline
    "consultation.step5.title": "When do you want to start?",
    "consultation.step5.subtitle": "Timeline helps us plan your project",
    "consultation.timeline.asap": "ASAP",
    "consultation.timeline.asap_desc": "Immediate start",
    "consultation.timeline.1-3months": "1-3 months",
    "consultation.timeline.1-3months_desc": "Planning phase",
    "consultation.timeline.3-6months": "3-6 months",
    "consultation.timeline.3-6months_desc": "Flexible dev",
    "consultation.timeline.6months+": "6+ months",
    "consultation.timeline.6months+_desc": "Long-term",
    
    // Step 6: Goals
    "consultation.step6.title": "What are your main goals?",
    "consultation.step6.subtitle": "Select all that apply",
    "consultation.goals.increase-sales": "Increase Sales",
    "consultation.goals.improve-efficiency": "Improve Efficiency",
    "consultation.goals.expand-market": "Expand Market",
    "consultation.goals.reduce-costs": "Reduce Costs",
    "consultation.goals.modernize": "Modernize Ops",
    "consultation.goals.competitive-advantage": "Competitive Edge",
    
    // Step 7: Contact
    "consultation.step7.title": "Let's get your consultation scheduled",
    "consultation.step7.subtitle": "Final step to unlock your strategy",
    "consultation.guest_mode": "Try as Guest",
    "consultation.guest_mode_desc": "Preview dashboard without saving info",
    "consultation.guest_mode_active": "Guest Mode Active",
    "consultation.guest_mode_message": "Explore our dashboard and see what we offer. Sign up at the end to save your consultation.",
    "consultation.full_name": "Full Name",
    "consultation.email_address": "Email Address",
    "consultation.company_name": "Company Name",
    "consultation.phone_number": "Phone Number",
    "consultation.full_name_placeholder": "Your full name",
    "consultation.email_placeholder": "your@email.com",
    "consultation.company_placeholder": "Your company",
    "consultation.phone_placeholder": "+1 (555) 123-4567"
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
    "hero.typing_text": "Creamos la:",



    // Contact Section
    "contact.title": "¿Listo para innovar?",
    "contact.description":
      "Hablemos sobre cómo podemos dar vida a su visión con tecnología de vanguardia y excelencia en ingeniería.",

    // Footer
    "footer.powered_by": "Desarrollado por Wolty",
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
    "typing.base_text": "Creamos la ",
    
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
    "stats.on_time_delivery": "Entrega a Tiempo",
    
    // Expertise Section Additional
    "expertise.select_service": "Selecciona un Servicio",
    "expertise.choose_service": "Elige el servicio que te interesa para iniciar una consulta",
    "expertise.mechanical": "Mecánico",
    "expertise.digital_systems": "Sistemas Digitales",
    "expertise.website": "Sitio Web",
    "expertise.mobile_app": "App Móvil",
    "expertise.product_dev": "Desarrollo de Producto",
    "expertise.architecture_design": "Diseño Arquitectónico",
    "expertise.verified": "Verificado",
    "expertise.growth": "Crecimiento",
    "expertise.recommend_text": "de los clientes nos recomiendan a otros clientes",
    "expertise.testimonial": "Su experiencia en desarrollo web y sistemas empresariales transformó completamente nuestras operaciones.",
    "expertise.client_satisfaction": "Satisfacción del Cliente",
    "expertise.b2b_partners": "Socios B2B",
    "expertise.growth_rate": "Tasa de Crecimiento",
    "expertise.innovation": "Innovación",
    "expertise.glasspatch_title": "$2M recaudados: la estrategia detrás del crecimiento de Glass Patch",
    "expertise.see_case_study": "Ver caso de estudio",
    "expertise.streamlined_process": "Un proceso optimizado, ejecutado con cuidado metódico.",
    "expertise.transform_brands": "Transformamos marcas abrumadoras en experiencias destacadas, construidas para reflejar la calidad, ambición y grandeza",
    "expertise.timeline": "Cronograma",
    "expertise.sony_project": "Sitio web y marca para Sony",
    "expertise.discovery": "Descubrimiento",
    "expertise.concept": "Concepto",
    "expertise.execution": "Ejecución",
    "expertise.learn_process": "Conoce nuestro proceso",
    "expertise.raised_amount": "Recaudado por las marcas con las que nos hemos asociado",
    "expertise.powered_by": "desarrollado por",
    "expertise.client_impact": "Métricas de Impacto del Cliente",
    "expertise.live_data": "Datos en Vivo",
    "expertise.real_results": "Resultados reales de nuestras asociaciones con clientes",
    "expertise.users_platforms": "Usuarios en plataformas que hemos construido",
    "expertise.across_applications": "En todas las aplicaciones de clientes",
    "expertise.week": "Semana",
    "expertise.weeks": "Semanas",
    
    // Consultation Form Questions
    "form.business_name": "¿Cuál es el nombre de tu empresa?",
    "form.business_name_placeholder": "Ingresa el nombre de tu empresa",
    "form.business_type": "¿Qué tipo de negocio tienes?",
    "form.company_size": "¿Cuántos empleados tiene tu empresa?",
    "form.goal": "¿Cuál es tu objetivo principal?",
    "form.budget": "¿Cuál es tu rango de presupuesto?",
    "form.timeline": "¿Cuál es tu cronograma?",
    "form.location": "¿Dónde está ubicado tu negocio?",
    "form.contact_name": "¿Quién es el contacto principal para este proyecto?",
    "form.contact_name_placeholder": "Ingresa tu nombre completo",
    "form.email": "¿Cuál es el mejor email para contactarte?",
    "form.email_placeholder": "Ingresa tu dirección de email",
    
    // Form Options
    "form.startup": "Startup",
    "form.small_business": "Pequeña Empresa",
    "form.enterprise": "Empresa",
    "form.non_profit": "Sin Fines de Lucro",
    "form.increase_revenue": "Aumentar Ingresos",
    "form.improve_efficiency": "Mejorar Eficiencia",
    "form.scale_operations": "Escalar Operaciones",
    "form.digital_transformation": "Transformación Digital",
    "form.asap": "Lo Antes Posible",
    "form.1_3_months": "1-3 Meses",
    "form.3_6_months": "3-6 Meses",
    "form.6_plus_months": "6+ Meses",
    "form.north_america": "América del Norte",
    "form.europe": "Europa",
    "form.asia": "Asia",
    "form.other": "Otro",
    
    // Form UI
    "form.back": "Atrás",
    "form.consultation": "Consulta",
    "form.step_of": "Paso {current} de {total}",
    "form.thank_you": "¡Gracias!",
    "form.inquiry_sent": "Tu consulta ha sido enviada a nuestro equipo. Te responderemos en 24 horas con una consulta personalizada.",
    "form.schedule_consultation": "Programar Consulta",
    "form.start_another": "Iniciar Otra Consulta",
    "form.continue": "Continuar",
    "form.questions_remaining": "{count} preguntas restantes",
    
    // Projects Page
    "projects.title": "Proyectos",
    "projects.subtitle": "Explora nuestro portafolio integral de proyectos exitosos para clientes.",
    "projects.revenue": "Ingresos",
    "projects.search_placeholder": "Buscar proyectos...",
    "projects.all_projects": "Todos los Proyectos",
    "projects.web_development": "Desarrollo Web",
    "projects.mobile_apps": "Apps Móviles",
    "projects.physical_products": "Productos Físicos",
    "projects.featured": "Destacado",
    "projects.visit_site": "Visitar Sitio",
    "projects.private_project": "Proyecto Privado",
    "projects.overview": "Resumen",
    "projects.key_features": "Características Clave",
    "projects.technologies": "Tecnologías",
    "projects.team": "Equipo",
    "projects.project_milestones": "Hitos del Proyecto",
    "projects.completed": "completado",
    "projects.status": "Estado",
    "projects.budget": "Presupuesto",
    "projects.timeline": "Cronograma",
    "projects.completion": "Finalización",
    "projects.rating": "Calificación",
    "projects.metrics": "Métricas",
    "projects.users": "Usuarios",
    "projects.satisfaction": "Satisfacción",
    "projects.months": "meses",
    "projects.month": "mes",
    "projects.weeks": "semanas",
    "projects.week": "semana",
    "projects.project_metrics": "Métricas del Proyecto",
    "projects.revenue_generated": "Ingresos Generados",
    "projects.active_users": "Usuarios Activos",
    "projects.in_progress": "En Progreso",
    "projects.completed_status": "Completado",
    "projects.private_project_description": "Este proyecto contiene información confidencial del cliente y no puede ser previsualizad públicamente.",

    // Process Page
    "process.page_title": "Nuestro Proceso de Desarrollo",
    "process.page_subtitle": "Una metodología probada que entrega resultados excepcionales a través de una planificación cuidadosa, ejecución experta y colaboración continua.",
    "process.six_step_process": "Nuestro Proceso de 6 Pasos",
    "process.methodologies_title": "Nuestras Metodologías",
    "process.tools_title": "Herramientas y Tecnologías",
    "process.track_record_title": "Nuestro Historial",
    "process.ready_to_start": "¿Listo para Comenzar tu Proyecto?",
    "process.ready_description": "Hablemos sobre cómo nuestro proceso probado puede ayudar a dar vida a tu visión. Programa una consulta gratuita para comenzar.",
    "process.schedule_consultation": "Programar Consulta Gratuita",
    "process.view_our_work": "Ver Nuestro Trabajo",
    
    // Process Steps
    "process.discovery.title": "Descubrimiento y Planificación",
    "process.discovery.duration": "1-2 semanas",
    "process.discovery.description": "Profundizamos en la comprensión de tu negocio, objetivos y requisitos técnicos.",
    "process.design.title": "Diseño y Prototipado",
    "process.design.duration": "2-3 semanas",
    "process.design.description": "Creando diseños centrados en el usuario y prototipos interactivos para validar conceptos.",
    "process.development.title": "Desarrollo e Integración",
    "process.development.duration": "4-12 semanas",
    "process.development.description": "Construyendo tu solución con código limpio, escalable y tecnologías modernas.",
    "process.testing.title": "Pruebas y Aseguramiento de Calidad",
    "process.testing.duration": "1-2 semanas",
    "process.testing.description": "Pruebas rigurosas para asegurar que tu solución funcione perfectamente en todos los escenarios.",
    "process.deployment.title": "Despliegue y Lanzamiento",
    "process.deployment.duration": "1 semana",
    "process.deployment.description": "Despliegue sin problemas a producción con monitoreo y optimización.",
    "process.support.title": "Soporte y Mantenimiento",
    "process.support.duration": "Continuo",
    "process.support.description": "Soporte continuo, actualizaciones y mejoras para mantener tu solución funcionando sin problemas.",
    
    // Process Activities and Deliverables
    "process.key_activities": "Actividades Clave",
    "process.deliverables": "Entregables",
    "process.duration_label": "Duración:",
    
    // Methodologies
    "process.agile.title": "Desarrollo Ágil",
    "process.agile.description": "Sprints de 2 semanas con demos regulares y retroalimentación",
    "process.devops.title": "Integración DevOps",
    "process.devops.description": "Pruebas automatizadas, despliegue y monitoreo",
    "process.user_centered.title": "Diseño Centrado en el Usuario",
    "process.user_centered.description": "Decisiones de diseño basadas en investigación y pruebas de usuario",
    "process.quality_assurance.title": "Aseguramiento de Calidad",
    "process.quality_assurance.description": "Pruebas integrales en cada etapa",
    
    // Tool Categories
    "process.tools.project_management": "Gestión de Proyectos",
    "process.tools.design_prototyping": "Diseño y Prototipado",
    "process.tools.development": "Desarrollo",
    "process.tools.testing_qa": "Pruebas y QA",
    "process.tools.communication": "Comunicación",
    "process.tools.documentation": "Documentación",
    
    // Success Metrics
    "process.metrics.on_time_delivery": "Entrega a Tiempo",
    "process.metrics.on_time_description": "Proyectos entregados según cronograma",
    "process.metrics.client_satisfaction": "Satisfacción del Cliente",
    "process.metrics.client_satisfaction_description": "Calificación promedio del cliente",
    "process.metrics.bug_free_releases": "Lanzamientos Sin Errores",
    "process.metrics.bug_free_description": "Lanzamientos sin errores críticos",
    "process.metrics.performance_improvement": "Mejora de Rendimiento",
    "process.metrics.performance_description": "Ganancia promedio de rendimiento",
    
    // Discovery Activities
    "process.discovery.activity1": "Entrevistas con stakeholders y recopilación de requisitos",
    "process.discovery.activity2": "Planificación de arquitectura técnica y diseño de sistemas",
    "process.discovery.activity3": "Investigación de usuarios y análisis competitivo",
    "process.discovery.activity4": "Creación de hoja de ruta y cronograma del proyecto",
    "process.discovery.activity5": "Evaluación de riesgos y planificación de mitigación",
    
    // Discovery Deliverables
    "process.discovery.deliverable1": "Documento detallado de especificaciones del proyecto",
    "process.discovery.deliverable2": "Diagrama de arquitectura técnica",
    "process.discovery.deliverable3": "Cronograma del proyecto e hitos",
    "process.discovery.deliverable4": "Plan de asignación de recursos",
    "process.discovery.deliverable5": "Estrategia de gestión de riesgos",
    
    // Design Activities
    "process.design.activity1": "Diseño de experiencia de usuario (UX) y mapeo del viaje del usuario",
    "process.design.activity2": "Diseño de interfaz de usuario (UI) e identidad visual",
    "process.design.activity3": "Prototipado interactivo y wireframing",
    "process.design.activity4": "Creación de sistema de diseño y biblioteca de componentes",
    "process.design.activity5": "Pruebas de usabilidad e iteración de diseño",
    
    // Design Deliverables
    "process.design.deliverable1": "Diseños completos de UI/UX",
    "process.design.deliverable2": "Prototipos interactivos",
    "process.design.deliverable3": "Sistema de diseño y guía de estilo",
    "process.design.deliverable4": "Resultados de pruebas de usuario",
    "process.design.deliverable5": "Especificaciones finales de diseño",
    
    // Development Activities
    "process.development.activity1": "Desarrollo frontend y backend",
    "process.development.activity2": "Diseño e implementación de base de datos",
    "process.development.activity3": "Desarrollo de API e integraciones de terceros",
    "process.development.activity4": "Implementación de seguridad y protección de datos",
    "process.development.activity5": "Optimización de rendimiento y planificación de escalabilidad",
    
    // Development Deliverables
    "process.development.deliverable1": "Aplicación completamente funcional",
    "process.development.deliverable2": "Código base limpio y documentado",
    "process.development.deliverable3": "Documentación de API",
    "process.development.deliverable4": "Informe de auditoría de seguridad",
    "process.development.deliverable5": "Benchmarks de rendimiento",
    
    // Testing Activities
    "process.testing.activity1": "Desarrollo de suite de pruebas automatizadas",
    "process.testing.activity2": "Pruebas manuales en dispositivos y navegadores",
    "process.testing.activity3": "Pruebas de rendimiento y carga",
    "process.testing.activity4": "Pruebas de penetración de seguridad",
    "process.testing.activity5": "Pruebas de aceptación del usuario (UAT)",
    
    // Testing Deliverables
    "process.testing.deliverable1": "Suite de pruebas integral",
    "process.testing.deliverable2": "Informes de pruebas y corrección de errores",
    "process.testing.deliverable3": "Resultados de optimización de rendimiento",
    "process.testing.deliverable4": "Informe de evaluación de seguridad",
    "process.testing.deliverable5": "Documentación de aprobación UAT",
    
    // Deployment Activities
    "process.deployment.activity1": "Configuración y setup del entorno de producción",
    "process.deployment.activity2": "Automatización de despliegue y pipeline CI/CD",
    "process.deployment.activity3": "Configuración de sistema de monitoreo y alertas",
    "process.deployment.activity4": "Monitoreo y optimización de rendimiento",
    "process.deployment.activity5": "Soporte de lanzamiento y resolución de problemas",
    
    // Deployment Deliverables
    "process.deployment.deliverable1": "Sistema de producción en vivo",
    "process.deployment.deliverable2": "Documentación de despliegue",
    "process.deployment.deliverable3": "Dashboards de monitoreo",
    "process.deployment.deliverable4": "Procedimientos de respaldo y recuperación",
    "process.deployment.deliverable5": "Métricas de éxito del lanzamiento",
    
    // Support Activities
    "process.support.activity1": "Monitoreo 24/7 y respuesta a incidentes",
    "process.support.activity2": "Actualizaciones regulares de seguridad y parches",
    "process.support.activity3": "Optimización de rendimiento y escalamiento",
    "process.support.activity4": "Mejoras de características y nuevo desarrollo",
    "process.support.activity5": "Soporte técnico y resolución de problemas",
    
    // Support Deliverables
    "process.support.deliverable1": "Informes mensuales de rendimiento",
    "process.support.deliverable2": "Notificaciones de actualizaciones de seguridad",
    "process.support.deliverable3": "Hoja de ruta de mejoras de características",
    "process.support.deliverable4": "Resolución de tickets de soporte",
    "process.support.deliverable5": "Monitoreo de salud del sistema",
    
    // Methodology Benefits
    "process.agile.benefit1": "Entrega más rápida",
    "process.agile.benefit2": "Retroalimentación regular",
    "process.agile.benefit3": "Alcance flexible",
    "process.devops.benefit1": "Despliegues confiables",
    "process.devops.benefit2": "Resolución rápida de problemas",
    "process.devops.benefit3": "Infraestructura escalable",
    "process.user_centered.benefit1": "Mejor experiencia de usuario",
    "process.user_centered.benefit2": "Mayor adopción",
    "process.user_centered.benefit3": "Necesidades de soporte reducidas",
    "process.quality_assurance.benefit1": "Lanzamientos sin errores",
    "process.quality_assurance.benefit2": "Optimización de rendimiento",
    "process.quality_assurance.benefit3": "Cumplimiento de seguridad",

    // Partnership Page
    "partnership.page_title": "Beneficios de Asociación",
    "partnership.powered_by": "desarrollado por",
    "partnership.keep_badge_unlock": "Mantén nuestro badge y desbloquea",
    "partnership.exclusive_benefits": "en beneficios exclusivos de asociación",
    "partnership.hero_description": "Muestra nuestro badge en tu sitio web y obtén acceso a beneficios premium de asociación valorados en más de $37,000. Sin compromisos a largo plazo, remuévelo en cualquier momento después de completar el proyecto.",
    "partnership.ready_to_partner": "¿Listo para Asociarte?",
    "partnership.join_program": "Únete a nuestro programa de asociación y comienza a ahorrar en tu próximo proyecto",
    "partnership.apply_for_partnership": "Solicitar Asociación",
    "partnership.enter_email_description": "Ingresa tu email para comenzar con nuestro programa de asociación",
    "partnership.email_placeholder": "Ingresa tu dirección de email",
    "partnership.apply_button": "Solicitar Asociación",
    "partnership.agreement_text": "Al solicitar, aceptas mostrar nuestro badge y recibir beneficios de asociación.",
    "partnership.application_submitted": "¡Solicitud Enviada!",
    "partnership.contact_within_24h": "Hemos recibido tu solicitud de asociación. Nuestro equipo te contactará dentro de 24 horas con los próximos pasos.",
    "partnership.submit_another": "Enviar Otra Solicitud",
    
    // Partnership Benefits
    "partnership.discount_title": "15% Descuento",
    "partnership.discount_subtitle": "Proyectos de Desarrollo",
    "partnership.discount_badge": "Ahorra $30K+",
    "partnership.maintenance_title": "Mantenimiento Gratuito",
    "partnership.maintenance_subtitle": "3 Meses Incluidos",
    "partnership.maintenance_badge": "Valor $5K",
    "partnership.support_title": "Soporte Prioritario",
    "partnership.support_subtitle": "Acceso VIP 24/7",
    "partnership.support_badge": "Empresarial",
    "partnership.cdn_title": "CDN Global",
    "partnership.cdn_subtitle": "6 Meses Gratis",
    "partnership.cdn_badge": "Valor $2K",
    "partnership.performance_title": "Rendimiento",
    "partnership.performance_subtitle": "99.9% Disponibilidad",
    "partnership.performance_badge": "Garantizado",
    "partnership.flexible_title": "Badge Flexible",
    "partnership.flexible_subtitle": "Remueve en Cualquier Momento",
    "partnership.flexible_badge": "Sin Ataduras",

    // Support Page
    "support.ai_powered_support": "Soporte con IA",
    "support.page_title": "Obtén Ayuda Instantánea",
    "support.page_subtitle": "Chatea con nuestro asistente de IA para soporte inmediato, o navega por nuestra sección completa de preguntas frecuentes para respuestas rápidas.",
    "support.support_assistant": "Asistente de Soporte",
    "support.online": "En línea",
    "support.type_message": "Escribe tu mensaje...",
    "support.faq_title": "Preguntas Frecuentes",
    "support.faq_subtitle": "Respuestas rápidas a preguntas comunes sobre nuestros servicios y proceso.",
    "support.initial_bot_message": "¡Hola! Soy tu asistente de soporte con IA. ¿Cómo puedo ayudarte hoy?",
    
    // FAQ Questions and Answers
    "support.faq1.question": "¿Cómo empiezo con un nuevo proyecto?",
    "support.faq1.answer": "¡Empezar es fácil! Simplemente reserva una consulta gratuita a través de nuestro sitio web, y discutiremos los requisitos de tu proyecto, cronograma y presupuesto. Nuestro equipo creará entonces una propuesta personalizada adaptada a tus necesidades.",
    "support.faq2.question": "¿Cuál es su cronograma típico de proyecto?",
    "support.faq2.answer": "Los cronogramas de proyecto varían dependiendo de la complejidad y alcance. Los sitios web simples típicamente toman 2-4 semanas, mientras que las aplicaciones complejas pueden tomar 8-16 semanas. Proporcionaremos un cronograma detallado durante tu consulta.",
    "support.faq3.question": "¿Ofrecen soporte y mantenimiento continuo?",
    "support.faq3.answer": "¡Sí! Ofrecemos paquetes de soporte integral incluyendo actualizaciones regulares, monitoreo de seguridad, optimización de rendimiento y soporte técnico. Nuestros planes de mantenimiento comienzan en $299/mes.",
    "support.faq4.question": "¿Pueden trabajar con mi equipo existente?",
    "support.faq4.answer": "Nos encanta colaborar con equipos internos. Podemos integrarnos perfectamente con tus flujos de trabajo existentes, proporcionar capacitación y trabajar junto a tus desarrolladores y diseñadores.",
    "support.faq5.question": "¿En qué tecnologías se especializan?",
    "support.faq5.answer": "Nos especializamos en tecnologías web modernas incluyendo React, Next.js, Node.js, Python, y plataformas en la nube como AWS y Vercel. También trabajamos con tecnologías móviles como React Native y Flutter.",
    "support.faq6.question": "¿Cómo manejan la comunicación del proyecto?",
    "support.faq6.answer": "Usamos una combinación de Slack, email y videollamadas regulares para mantenerte actualizado. Tendrás acceso a un panel de proyecto donde puedes seguir el progreso, ver entregables y comunicarte con el equipo.",
    "support.faq7.question": "¿Cuál es su estructura de pagos?",
    "support.faq7.answer": "Típicamente trabajamos con un 50% de pago por adelantado y 50% al completar para proyectos pequeños. Para proyectos más grandes, podemos organizar pagos basados en hitos. Aceptamos todos los métodos de pago principales y podemos proporcionar opciones de financiamiento.",
    "support.faq8.question": "¿Proporcionan servicios de hosting y dominio?",
    "support.faq8.answer": "Sí, podemos manejar todos los aspectos de hosting y gestión de dominios. Trabajamos con proveedores de hosting premium y podemos configurar todo desde hosting compartido básico hasta infraestructura empresarial en la nube.",
    
    // Bot Responses
    "support.bot.price_response": "Nuestros precios varían según el alcance y complejidad del proyecto. Para una cotización detallada, recomendaría reservar una consulta gratuita donde podamos discutir tus necesidades específicas. ¿Te gustaría que te ayude a programar una?",
    "support.bot.timeline_response": "Los cronogramas de proyecto dependen de la complejidad y alcance. Los sitios web simples típicamente toman 2-4 semanas, mientras que las aplicaciones complejas pueden tomar 8-16 semanas. ¿Qué tipo de proyecto estás considerando?",
    "support.bot.consultation_response": "¡Me encantaría ayudarte a programar una consulta gratuita! Puedes reservar directamente a través de nuestra página de consulta, o puedo conectarte con nuestro equipo. ¿Qué funciona mejor para ti?",
    "support.bot.support_response": "Ofrecemos paquetes de soporte integral incluyendo actualizaciones, monitoreo de seguridad y soporte técnico comenzando en $299/mes. ¿Te gustaría saber más sobre nuestras opciones de soporte?",
    "support.bot.default_response": "¡Esa es una excelente pregunta! Me encantaría conectarte con uno de nuestros especialistas que puede proporcionar información detallada. ¿Te gustaría que programe una llamada, o tienes alguna otra pregunta con la que pueda ayudarte ahora mismo?",

    // Dashboard Chart
    "dashboard.client_impact_metrics": "Métricas de Impacto del Cliente",
    "dashboard.live_data": "Datos en Vivo",
    "dashboard.real_results": "Resultados reales de nuestras asociaciones con clientes",
    "dashboard.revenue_generated": "Ingresos Generados",
    "dashboard.client_growth": "Crecimiento del Cliente",
    "dashboard.active_users": "Usuarios Activos",
    "dashboard.success_rate": "Tasa de Éxito",
    "dashboard.total_revenue_description": "Ingresos totales generados para nuestros clientes",
    "dashboard.projects_details": "A través de 47 proyectos exitosos",
    "dashboard.average_growth_description": "Crecimiento empresarial promedio logrado",
    "dashboard.within_12_months": "Dentro de los primeros 12 meses",
    "dashboard.users_platforms_description": "Usuarios en plataformas que hemos construido",
    "dashboard.across_applications": "A través de todas las aplicaciones de clientes",
    "dashboard.project_success_description": "Tasa de éxito del proyecto",
    "dashboard.on_time_budget": "Entrega a tiempo y dentro del presupuesto",
    "dashboard.enterprises": "Empresas",
    "dashboard.roi_avg": "ROI Promedio",

    // Dashboard Page
    "dashboard.page.company_name": "Acme Corp",
    "dashboard.page.login": "Iniciar Sesión",
    "dashboard.page.sign_up": "Registrarse",
    "dashboard.page.hero_title": "Desbloquea tu Potencial con Cursos Dirigidos por Expertos",
    "dashboard.page.hero_description": "Transforma tu carrera con nuestros cursos en línea integrales. Aprende de expertos de la industria y obtén habilidades en demanda.",
    "dashboard.page.services": "Servicios",
    "dashboard.page.free_consultation": "Consulta Gratuita",
    
    // Features
    "dashboard.feature1.name": "Experiencia de Aprendizaje Atractiva",
    "dashboard.feature1.description": "Lecciones interactivas y proyectos del mundo real hacen que el aprendizaje sea divertido y efectivo.",
    "dashboard.feature2.name": "Mentoría Personalizada",
    "dashboard.feature2.description": "Recibe orientación y apoyo de mentores experimentados para lograr tus objetivos.",
    "dashboard.feature3.name": "Comunidad Colaborativa",
    "dashboard.feature3.description": "Conecta con otros estudiantes, comparte ideas y construye relaciones duraderas.",
    "dashboard.feature4.name": "Avance Profesional",
    "dashboard.feature4.description": "Obtén habilidades en demanda y accede a recursos profesionales para desbloquear nuevas oportunidades.",
    
    // Testimonials Section
    "dashboard.testimonials.title": "Lo que Dicen Nuestros Estudiantes",
    "dashboard.testimonials.subtitle": "No solo tomes nuestra palabra. Ve cómo nuestros cursos han ayudado a los estudiantes a lograr sus objetivos.",
    "dashboard.testimonial1.name": "Sarah L.",
    "dashboard.testimonial1.title": "Ingeniera de Software",
    "dashboard.testimonial1.quote": "Conseguí el trabajo de mis sueños después de completar este programa. Las habilidades que aprendí fueron invaluables.",
    "dashboard.testimonial2.name": "David M.",
    "dashboard.testimonial2.title": "Científico de Datos",
    "dashboard.testimonial2.quote": "La mentoría y el apoyo de la comunidad fueron excepcionales. Recomiendo altamente esta plataforma.",
    "dashboard.testimonial3.name": "Emily R.",
    "dashboard.testimonial3.title": "Diseñadora UX",
    "dashboard.testimonial3.quote": "Transformé mi carrera con este programa. El plan de estudios es integral y actualizado.",
    
    // CTA Section
    "dashboard.cta.title": "¿Listo para Transformar tu Carrera?",
    "dashboard.cta.description": "Únete a nuestra comunidad de estudiantes y comienza tu viaje hacia un futuro más brillante.",
    "dashboard.cta.button": "Comenzar Hoy",
    
    // Footer
    "dashboard.footer.copyright": "Todos los derechos reservados.",
    "dashboard.footer.terms": "Términos de Servicio",
    "dashboard.footer.privacy": "Política de Privacidad",

    // Consultation Page
    "consultation.strategic_consultation": "Consulta Estratégica",
    "consultation.step_of": "Paso {current} de {total}",
    "consultation.previous": "Anterior",
    "consultation.next_step": "Siguiente Paso",
    "consultation.start_consultation": "Iniciar Consulta",
    "consultation.preview_dashboard": "Vista Previa del Dashboard",
    
    // Step 1: Business Type
    "consultation.step1.title": "¿Qué tipo de negocio eres?",
    "consultation.step1.subtitle": "Ayúdanos a entender el contexto de tu negocio",
    "consultation.business.startup": "Startup",
    "consultation.business.startup_desc": "Innovación en etapa temprana",
    "consultation.business.smb": "Pequeña Empresa",
    "consultation.business.smb_desc": "Empresa establecida",
    "consultation.business.enterprise": "Empresa",
    "consultation.business.enterprise_desc": "Corporación grande",
    "consultation.business.agency": "Agencia",
    "consultation.business.agency_desc": "Creativa y marketing",
    
    // Step 2: Company Size
    "consultation.step2.title": "¿Tamaño de la empresa?",
    "consultation.step2.subtitle": "Esto nos ayuda a escalar nuestras recomendaciones",
    "consultation.size.1-10": "1-10 empleados",
    "consultation.size.1-10_desc": "Equipo pequeño",
    "consultation.size.11-50": "11-50 empleados",
    "consultation.size.11-50_desc": "Empresa en crecimiento",
    "consultation.size.51-200": "51-200 empleados",
    "consultation.size.51-200_desc": "Tamaño medio",
    "consultation.size.200+": "200+ empleados",
    "consultation.size.200+_desc": "Corporación grande",
    
    // Step 3: Project Types
    "consultation.step3.title": "¿Qué servicios necesitas?",
    "consultation.step3.subtitle": "Selecciona todos los que apliquen",
    "consultation.project.website": "Desarrollo Web",
    "consultation.project.website_desc": "Aplicaciones web",
    "consultation.project.mobile": "App Móvil",
    "consultation.project.mobile_desc": "iOS y Android",
    "consultation.project.digital": "Sistemas Digitales",
    "consultation.project.digital_desc": "Software empresarial",
    "consultation.project.mechanical": "Ingeniería Mecánica",
    "consultation.project.mechanical_desc": "Diseño de productos",
    "consultation.project.product": "Desarrollo de Productos",
    "consultation.project.product_desc": "Soluciones integrales",
    "consultation.project.architecture": "Diseño Arquitectónico",
    "consultation.project.architecture_desc": "Diseño estructural",
    
    // Step 4: Budget
    "consultation.step4.title": "¿Cuál es tu rango de presupuesto?",
    "consultation.step4.subtitle": "Esto nos ayuda a recomendar la solución correcta",
    "consultation.budget.5k-25k": "$5K - $25K",
    "consultation.budget.5k-25k_desc": "Proyectos pequeños",
    "consultation.budget.25k-100k": "$25K - $100K",
    "consultation.budget.25k-100k_desc": "Soluciones medianas",
    "consultation.budget.100k-500k": "$100K - $500K",
    "consultation.budget.100k-500k_desc": "Empresarial",
    "consultation.budget.500k+": "$500K+",
    "consultation.budget.500k+_desc": "Transformación",
    
    // Step 5: Timeline
    "consultation.step5.title": "¿Cuándo quieres empezar?",
    "consultation.step5.subtitle": "El cronograma nos ayuda a planificar tu proyecto",
    "consultation.timeline.asap": "Lo antes posible",
    "consultation.timeline.asap_desc": "Inicio inmediato",
    "consultation.timeline.1-3months": "1-3 meses",
    "consultation.timeline.1-3months_desc": "Fase de planificación",
    "consultation.timeline.3-6months": "3-6 meses",
    "consultation.timeline.3-6months_desc": "Desarrollo flexible",
    "consultation.timeline.6months+": "6+ meses",
    "consultation.timeline.6months+_desc": "Largo plazo",
    
    // Step 6: Goals
    "consultation.step6.title": "¿Cuáles son tus objetivos principales?",
    "consultation.step6.subtitle": "Selecciona todos los que apliquen",
    "consultation.goals.increase-sales": "Aumentar Ventas",
    "consultation.goals.improve-efficiency": "Mejorar Eficiencia",
    "consultation.goals.expand-market": "Expandir Mercado",
    "consultation.goals.reduce-costs": "Reducir Costos",
    "consultation.goals.modernize": "Modernizar Operaciones",
    "consultation.goals.competitive-advantage": "Ventaja Competitiva",
    
    // Step 7: Contact
    "consultation.step7.title": "Programemos tu consulta",
    "consultation.step7.subtitle": "Último paso para desbloquear tu estrategia",
    "consultation.guest_mode": "Probar como Invitado",
    "consultation.guest_mode_desc": "Vista previa del dashboard sin guardar información",
    "consultation.guest_mode_active": "Modo Invitado Activo",
    "consultation.guest_mode_message": "Explora nuestro dashboard y ve lo que ofrecemos. Regístrate al final para guardar tu consulta.",
    "consultation.full_name": "Nombre Completo",
    "consultation.email_address": "Dirección de Email",
    "consultation.company_name": "Nombre de la Empresa",
    "consultation.phone_number": "Número de Teléfono",
    "consultation.full_name_placeholder": "Tu nombre completo",
    "consultation.email_placeholder": "tu@email.com",
    "consultation.company_placeholder": "Tu empresa",
    "consultation.phone_placeholder": "+1 (555) 123-4567"
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
    "footer.powered_by": "Propulsé par Wolty",
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
    "footer.powered_by": "Betrieben von Wolty",
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
    "footer.powered_by": "由Wolty提供支持",
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
    "footer.powered_by": "Woltyによって提供",
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
