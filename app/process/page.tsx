"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CodeRain } from "@/components/code-rain"
import { useLanguage } from "@/contexts/language-context"
import {
  MessageCircle,
  Search,
  Code,
  TestTube,
  Rocket,
  LifeBuoy,
  CheckCircle,
  Clock,
  Users,
  Target,
  Lightbulb,
  FileText,
  Zap,
  Shield,
  TrendingUp,
  Calendar,
  ArrowRight,
  Play,
} from "lucide-react"

export default function ProcessPage() {
  const { t } = useLanguage()
  const [activeStep, setActiveStep] = useState(0)

  const processSteps = [
    {
      id: "discovery",
      title: t("process.discovery.title"),
      duration: t("process.discovery.duration"),
      icon: <MessageCircle className="w-6 h-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      description: t("process.discovery.description"),
      activities: [
        t("process.discovery.activity1"),
        t("process.discovery.activity2"),
        t("process.discovery.activity3"),
        t("process.discovery.activity4"),
        t("process.discovery.activity5"),
      ],
      deliverables: [
        t("process.discovery.deliverable1"),
        t("process.discovery.deliverable2"),
        t("process.discovery.deliverable3"),
        t("process.discovery.deliverable4"),
        t("process.discovery.deliverable5"),
      ],
    },
    {
      id: "design",
      title: t("process.design.title"),
      duration: t("process.design.duration"),
      icon: <Search className="w-6 h-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      description: t("process.design.description"),
      activities: [
        t("process.design.activity1"),
        t("process.design.activity2"),
        t("process.design.activity3"),
        t("process.design.activity4"),
        t("process.design.activity5"),
      ],
      deliverables: [
        t("process.design.deliverable1"),
        t("process.design.deliverable2"),
        t("process.design.deliverable3"),
        t("process.design.deliverable4"),
        t("process.design.deliverable5"),
      ],
    },
    {
      id: "development",
      title: t("process.development.title"),
      duration: t("process.development.duration"),
      icon: <Code className="w-6 h-6" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      description: t("process.development.description"),
      activities: [
        t("process.development.activity1"),
        t("process.development.activity2"),
        t("process.development.activity3"),
        t("process.development.activity4"),
        t("process.development.activity5"),
      ],
      deliverables: [
        t("process.development.deliverable1"),
        t("process.development.deliverable2"),
        t("process.development.deliverable3"),
        t("process.development.deliverable4"),
        t("process.development.deliverable5"),
      ],
    },
    {
      id: "testing",
      title: t("process.testing.title"),
      duration: t("process.testing.duration"),
      icon: <TestTube className="w-6 h-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      description: t("process.testing.description"),
      activities: [
        t("process.testing.activity1"),
        t("process.testing.activity2"),
        t("process.testing.activity3"),
        t("process.testing.activity4"),
        t("process.testing.activity5"),
      ],
      deliverables: [
        t("process.testing.deliverable1"),
        t("process.testing.deliverable2"),
        t("process.testing.deliverable3"),
        t("process.testing.deliverable4"),
        t("process.testing.deliverable5"),
      ],
    },
    {
      id: "deployment",
      title: t("process.deployment.title"),
      duration: t("process.deployment.duration"),
      icon: <Rocket className="w-6 h-6" />,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
      description: t("process.deployment.description"),
      activities: [
        t("process.deployment.activity1"),
        t("process.deployment.activity2"),
        t("process.deployment.activity3"),
        t("process.deployment.activity4"),
        t("process.deployment.activity5"),
      ],
      deliverables: [
        t("process.deployment.deliverable1"),
        t("process.deployment.deliverable2"),
        t("process.deployment.deliverable3"),
        t("process.deployment.deliverable4"),
        t("process.deployment.deliverable5"),
      ],
    },
    {
      id: "support",
      title: t("process.support.title"),
      duration: t("process.support.duration"),
      icon: <LifeBuoy className="w-6 h-6" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      description: t("process.support.description"),
      activities: [
        t("process.support.activity1"),
        t("process.support.activity2"),
        t("process.support.activity3"),
        t("process.support.activity4"),
        t("process.support.activity5"),
      ],
      deliverables: [
        t("process.support.deliverable1"),
        t("process.support.deliverable2"),
        t("process.support.deliverable3"),
        t("process.support.deliverable4"),
        t("process.support.deliverable5"),
      ],
    },
  ]

  const methodologies = [
    {
      title: t("process.agile.title"),
      description: t("process.agile.description"),
      icon: <Zap className="w-6 h-6" />,
      benefits: [t("process.agile.benefit1"), t("process.agile.benefit2"), t("process.agile.benefit3")],
    },
    {
      title: t("process.devops.title"),
      description: t("process.devops.description"),
      icon: <Shield className="w-6 h-6" />,
      benefits: [t("process.devops.benefit1"), t("process.devops.benefit2"), t("process.devops.benefit3")],
    },
    {
      title: t("process.user_centered.title"),
      description: t("process.user_centered.description"),
      icon: <Users className="w-6 h-6" />,
      benefits: [t("process.user_centered.benefit1"), t("process.user_centered.benefit2"), t("process.user_centered.benefit3")],
    },
    {
      title: t("process.quality_assurance.title"),
      description: t("process.quality_assurance.description"),
      icon: <CheckCircle className="w-6 h-6" />,
      benefits: [t("process.quality_assurance.benefit1"), t("process.quality_assurance.benefit2"), t("process.quality_assurance.benefit3")],
    },
  ]

  const tools = [
    {
      category: t("process.tools.project_management"),
      tools: ["Jira", "Asana", "Linear", "Notion"],
      icon: <Target className="w-5 h-5" />,
    },
    {
      category: t("process.tools.design_prototyping"),
      tools: ["Figma", "Adobe Creative Suite", "Sketch", "InVision"],
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      category: t("process.tools.development"),
      tools: ["VS Code", "GitHub", "Docker", "AWS/Vercel"],
      icon: <Code className="w-5 h-5" />,
    },
    {
      category: t("process.tools.testing_qa"),
      tools: ["Jest", "Cypress", "Selenium", "Postman"],
      icon: <TestTube className="w-5 h-5" />,
    },
    {
      category: t("process.tools.communication"),
      tools: ["Slack", "Zoom", "Microsoft Teams", "Discord"],
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      category: t("process.tools.documentation"),
      tools: ["GitBook", "Confluence", "Notion", "Markdown"],
      icon: <FileText className="w-5 h-5" />,
    },
  ]

  const metrics = [
    {
      title: t("process.metrics.on_time_delivery"),
      value: "98%",
      description: t("process.metrics.on_time_description"),
      icon: <Clock className="w-6 h-6" />,
      color: "text-green-500",
    },
    {
      title: t("process.metrics.client_satisfaction"),
      value: "4.9/5",
      description: t("process.metrics.client_satisfaction_description"),
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-500",
    },
    {
      title: t("process.metrics.bug_free_releases"),
      value: "95%",
      description: t("process.metrics.bug_free_description"),
      icon: <CheckCircle className="w-6 h-6" />,
      color: "text-purple-500",
    },
    {
      title: t("process.metrics.performance_improvement"),
      value: "40%",
      description: t("process.metrics.performance_description"),
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-orange-500",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CodeRain />
      </div>
      <NavBar />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("process.page_title").split(" ").slice(0, 1).join(" ")} <span className="text-primary">{t("process.page_title").split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("process.page_subtitle")}
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">{t("process.six_step_process")}</h2>

            {/* Step Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all ${
                    activeStep === index
                      ? "bg-primary/20 text-primary border border-primary/50"
                      : "bg-background/80 backdrop-blur-sm text-muted-foreground border border-border hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  {index + 1}. {step.title}
                </button>
              ))}
            </div>

            {/* Active Step Details */}
            <div
              className={`${processSteps[activeStep].bgColor} ${processSteps[activeStep].borderColor} border rounded-xl p-8`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-12 h-12 ${processSteps[activeStep].bgColor} rounded-lg flex items-center justify-center`}
                >
                  {processSteps[activeStep].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{processSteps[activeStep].title}</h3>
                  <p className="text-muted-foreground">{t("process.duration_label")} {processSteps[activeStep].duration}</p>
                </div>
              </div>

              <p className="text-lg mb-8">{processSteps[activeStep].description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Play className="w-4 h-4 mr-2 text-primary" />
                    {t("process.key_activities")}
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeStep].activities.map((activity, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-primary" />
                    {t("process.deliverables")}
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeStep].deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Methodologies */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">{t("process.methodologies_title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologies.map((methodology, index) => (
                <div
                  key={index}
                  className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {methodology.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{methodology.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{methodology.description}</p>
                  <div className="space-y-1">
                    {methodology.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        <span className="text-xs text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">{t("process.tools_title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((toolCategory, index) => (
                <div key={index} className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {toolCategory.icon}
                    </div>
                    <h3 className="font-semibold">{toolCategory.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {toolCategory.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full border border-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">{t("process.track_record_title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                  <h3 className="font-semibold mb-1">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-2xl font-bold mb-4">{t("process.ready_to_start")}</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("process.ready_description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t("process.schedule_consultation")}
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 bg-background border border-border text-foreground rounded-lg hover:border-primary/50 transition-all duration-300 font-medium"
              >
                {t("process.view_our_work")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
