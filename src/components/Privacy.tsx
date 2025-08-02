'use client'

import React, { useState } from 'react'
import { AlertTriangle, Shield, Eye, Database, Globe, TrendingUp, Users, BookOpen } from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export default function Privacy() {
  const [activeTab, setActiveTab] = useState(0)

  const privacyThreats = [
    {
      icon: Database,
      title: "Data Collection Epidemic",
      stat: "97%",
      description: "of mobile apps collect personal data without explicit consent",
      impact: "Your conversations, location, contacts, and behavior patterns are sold to advertisers"
    },
    {
      icon: Eye,
      title: "Government Surveillance",
      stat: "2.8B",
      description: "messages monitored daily by governments worldwide",
      impact: "Private communications are increasingly subject to mass surveillance programs"
    },
    {
      icon: TrendingUp,
      title: "Identity Theft Rising",
      stat: "+22%",
      description: "increase in identity theft cases from messaging app breaches",
      impact: "Personal information leaked from messaging platforms leads to financial fraud"
    },
    {
      icon: Users,
      title: "Social Credit Systems",
      stat: "14+",
      description: "countries implementing social scoring based on digital behavior",
      impact: "Your online communications can affect your real-world opportunities"
    }
  ]

  const educationTabs = [
    {
      title: "Why Privacy Matters",
      icon: Shield,
      content: {
        headline: "Your Digital Rights Are Under Attack",
        points: [
          {
            title: "Freedom of Expression",
            text: "Without privacy, people self-censor, afraid their thoughts will be used against them"
          },
          {
            title: "Mental Health Protection",
            text: "Anonymous spaces allow healing discussions about trauma, addiction, and personal struggles"
          },
          {
            title: "Professional Safety",
            text: "Whistleblowers and activists need secure channels to expose wrongdoing safely"
          },
          {
            title: "Personal Growth",
            text: "We need spaces to question beliefs, explore ideas, and make mistakes without permanent judgment"
          }
        ]
      }
    },
    {
      title: "Digital Surveillance Reality",
      icon: Eye,
      content: {
        headline: "The Scope of Modern Surveillance",
        points: [
          {
            title: "Metadata Collection",
            text: "Even 'encrypted' apps often collect who you talk to, when, and for how long"
          },
          {
            title: "Behavioral Analysis",
            text: "AI systems analyze your communication patterns to predict and influence your behavior"
          },
          {
            title: "Cross-Platform Tracking",
            text: "Data brokers combine information from multiple sources to build detailed profiles"
          },
          {
            title: "Permanent Records",
            text: "Digital communications can be stored indefinitely and used against you years later"
          }
        ]
      }
    },
    {
      title: "How Soulvia Protects You",
      icon: Globe,
      content: {
        headline: "Technical Privacy Protection",
        points: [
          {
            title: "Zero-Knowledge Architecture",
            text: "We literally cannot read your messages - they're encrypted before leaving your device"
          },
          {
            title: "No Data Retention",
            text: "Messages are automatically deleted, and we keep no logs of your conversations"
          },
          {
            title: "Anonymous by Design",
            text: "No phone numbers, emails, or personal information required to use the platform"
          },
          {
            title: "Open Source Security",
            text: "Our encryption protocols are publicly auditable by security researchers"
          }
        ]
      }
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium mb-3 sm:mb-4 text-sm">
            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Digital Privacy Crisis
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4 sm:mb-6">
            Your Privacy Is 
            <span className="gradient-text"> Under Attack</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Every day, billions of private messages are intercepted, stored, and analyzed. 
            Here's what you need to know to protect yourself.
          </p>
        </div>

        {/* Privacy Threats Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {privacyThreats.map((threat, index) => {
            // Assign different text colors for different cards
            const textColors = [
              { stat: "text-red-400", title: "text-white", icon: "text-red-500" }, // Red
              { stat: "text-purple-400", title: "text-white", icon: "text-purple-500" }, // Purple
              { stat: "text-red-300", title: "text-white", icon: "text-red-400" }, // Light red
              { stat: "text-purple-300", title: "text-white", icon: "text-purple-400" } // Light purple
            ];
            const colors = textColors[index % textColors.length];
            
            return (
              <div key={index} className="privacy-card text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  {React.createElement(threat.icon, { className: `w-8 h-8 ${colors.icon}` })}
                </div>
                <div className={`text-3xl font-bold ${colors.stat} mb-2`}>{threat.stat}</div>
                <h3 className={`font-semibold ${colors.title} mb-3`}>{threat.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{threat.description}</p>
                <div className="text-xs text-gray-400 bg-black/20 p-3 rounded-lg border border-white/10">
                  <strong className="text-white">Impact:</strong> {threat.impact}
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Content Tabs */}
        <div className="relative h-full rounded-[1.5rem] border-[0.75px] border-border p-2">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-[0.75px] bg-white shadow-2xl">
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row border-b border-gray-200">
            {educationTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center px-6 py-4 font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {React.createElement(tab.icon, { className: "w-5 h-5 mr-2" })}
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-dark-900 mb-8">
                {educationTabs[activeTab].content.headline}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {educationTabs[activeTab].content.points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-2">{point.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-white">
            <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">
              Take Control of Your Digital Privacy
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Don't wait for the next data breach. Start protecting your conversations today with Soulvia's zero-knowledge encryption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300">
                Start Anonymous Chat
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300">
                Learn More About Privacy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}