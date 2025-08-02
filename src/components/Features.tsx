'use client'

import React, { useState } from 'react'
import { 
  Shield, 
  Eye, 
  EyeOff, 
  Lock, 
  Users, 
  MessageCircle, 
  Trash2, 
  Globe, 
  Clock,
  UserX,
  Zap,
  Heart
} from 'lucide-react'
import { DatabaseDemo } from '@/components/ui/database-demo'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "Your messages are protected with AES-256 encryption, the same standard used by governments and banks worldwide.",
      details: [
        "End-to-end encryption for all communications",
        "Zero-knowledge architecture",
        "Perfect forward secrecy",
        "Quantum-resistant algorithms"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: EyeOff,
      title: "True Anonymity",
      description: "No phone numbers, no email verification, no personal information required. Be truly anonymous.",
      details: [
        "No personal data collection",
        "Anonymous account creation",
        "IP address protection via Tor",
        "Metadata scrubbing"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Trash2,
      title: "Burn After Read",
      description: "Messages automatically disappear after 24 hours. Share sensitive thoughts without permanent records.",
      details: [
        "Auto-deletion in 1-24 hours",
        "Screenshot notifications",
        "Secure message erasure",
        "No cloud backups"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Anonymous Groups",
      description: "Create or join topic-based communities where everyone can speak freely without judgment.",
      details: [
        "Topic-based anonymous rooms",
        "Workplace confessions",
        "Dating experiences",
        "Life advice sharing"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: UserX,
      title: "No Identity Required",
      description: "Unlike other platforms, we never ask for your real name, phone, or email. Your privacy comes first.",
      details: [
        "No KYC requirements",
        "Pseudonym-based profiles",
        "Optional custom avatars",
        "No social graph analysis"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Global Privacy Focus",
      description: "Built for users who value digital rights, with features tailored for privacy-conscious individuals.",
      details: [
        "GDPR compliant by design",
        "No data retention policies",
        "Regular privacy audits",
        "Transparent operations"
      ],
      color: "from-yellow-500 to-amber-500"
    }
  ]

  const quickFeatures = [
    { icon: Clock, text: "24h disappearing messages" },
    { icon: Zap, text: "Instant anonymous signup" },
    { icon: Heart, text: "Mental health safe spaces" },
    { icon: MessageCircle, text: "Anonymous polls & voting" }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Privacy-First Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-6">
            Built for Your 
            <span className="gradient-text"> Digital Freedom</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soulvia combines cutting-edge privacy technology with intuitive design, 
            giving you the freedom to express yourself without compromise.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  activeFeature === index
                    ? 'bg-white shadow-xl border-primary-200'
                    : 'bg-gray-50/50 hover:bg-white border-transparent hover:shadow-lg'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                  {React.createElement(feature.icon, { className: "w-6 h-6 text-white" })}
                </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Details */}
          <div className="lg:sticky lg:top-8">
            <div className="relative h-full rounded-[1.5rem] border-[0.75px] border-border p-2">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-[0.75px] bg-background p-8 shadow-sm"
                   style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} shadow-lg mb-4`}>
                  {React.createElement(features[activeFeature].icon, { 
                    className: "w-8 h-8 text-white" 
                  })}
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-3">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {features[activeFeature].description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-dark-800 mb-4">Key Features:</h4>
                {features[activeFeature].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="btn-primary w-full">
                  Try {features[activeFeature].title}
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Architecture Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-dark-900 mb-4">
              Secure API Architecture
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our REST API handles all anonymous communications with military-grade security protocols
            </p>
          </div>
          <div className="flex justify-center">
            <DatabaseDemo />
          </div>
        </div>

        {/* Quick Features */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Everything You Need for Anonymous Communication
            </h3>
            <p className="text-primary-100 text-lg">
              Discover features designed for your safety and peace of mind
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  {React.createElement(feature.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <p className="text-white font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}