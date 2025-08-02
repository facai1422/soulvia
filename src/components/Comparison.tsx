'use client'

import React, { useState } from 'react'
import { Check, X, AlertTriangle, Shield, Eye, Users, Smartphone } from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export default function Comparison() {
  const [selectedApp, setSelectedApp] = useState('soulvia')

  const comparisonData = [
    {
      category: "Privacy & Anonymity",
      features: [
        {
          feature: "No phone number required",
          soulvia: "check", 
          telegram: "x",
          signal: "x", 
          whatsapp: "x",
          discord: "check"
        },
        {
          feature: "No email required", 
          soulvia: "check",
          telegram: "x", 
          signal: "x",
          whatsapp: "x", 
          discord: "x"
        },
        {
          feature: "True anonymous accounts",
          soulvia: "check",
          telegram: "partial",
          signal: "x",
          whatsapp: "x", 
          discord: "partial"
        },
        {
          feature: "Zero data collection",
          soulvia: "check", 
          telegram: "x",
          signal: "partial",
          whatsapp: "x",
          discord: "x"
        },
        {
          feature: "Automatic message deletion",
          soulvia: "check",
          telegram: "partial", 
          signal: "partial",
          whatsapp: "partial",
          discord: "x"
        }
      ]
    },
    {
      category: "Security",
      features: [
        {
          feature: "End-to-end encryption by default",
          soulvia: "check",
          telegram: "partial",
          signal: "check", 
          whatsapp: "check",
          discord: "x"
        },
        {
          feature: "Zero-knowledge architecture", 
          soulvia: "check",
          telegram: "x",
          signal: "partial",
          whatsapp: "x",
          discord: "x"
        },
        {
          feature: "No cloud backups",
          soulvia: "check",
          telegram: "x", 
          signal: "x",
          whatsapp: "x",
          discord: "x"
        },
        {
          feature: "Open source encryption",
          soulvia: "check",
          telegram: "partial",
          signal: "check", 
          whatsapp: "x",
          discord: "x"
        }
      ]
    },
    {
      category: "Anonymous Features", 
      features: [
        {
          feature: "Anonymous group chats",
          soulvia: "check",
          telegram: "x",
          signal: "x",
          whatsapp: "x", 
          discord: "partial"
        },
        {
          feature: "Confession spaces",
          soulvia: "check", 
          telegram: "x",
          signal: "x",
          whatsapp: "x",
          discord: "x"
        },
        {
          feature: "Anonymous polls", 
          soulvia: "check",
          telegram: "partial",
          signal: "x",
          whatsapp: "x",
          discord: "partial"
        },
        {
          feature: "Workplace anonymous sharing",
          soulvia: "check",
          telegram: "x", 
          signal: "x",
          whatsapp: "x", 
          discord: "x"
        }
      ]
    }
  ]

  const apps = [
    {
      id: 'soulvia',
      name: 'Soulvia',
      tagline: 'True Anonymous Communication',
      color: 'bg-primary-600',
      textColor: 'text-primary-600',
      bgColor: 'bg-primary-50',
      logo: Shield,
      users: '500K+',
      focus: 'Privacy-first anonymous platform'
    },
    {
      id: 'telegram', 
      name: 'Telegram',
      tagline: 'Cloud-based messaging',
      color: 'bg-blue-500',
      textColor: 'text-blue-600', 
      bgColor: 'bg-blue-50',
      logo: Smartphone,
      users: '700M+',
      focus: 'Feature-rich messaging'
    },
    {
      id: 'signal',
      name: 'Signal', 
      tagline: 'Private messenger',
      color: 'bg-indigo-500',
      textColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50', 
      logo: Shield,
      users: '40M+',
      focus: 'Privacy-focused messaging'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      tagline: 'Connect with everyone', 
      color: 'bg-green-500',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      logo: Smartphone,
      users: '2B+', 
      focus: 'Universal messaging platform'
    },
    {
      id: 'discord', 
      name: 'Discord',
      tagline: 'Communities and friends',
      color: 'bg-purple-500',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      logo: Users,
      users: '150M+',
      focus: 'Gaming and community chat'
    }
  ]

  const getIcon = (status: string) => {
    switch(status) {
      case 'check': return <Check className="w-5 h-5 text-green-600" />
      case 'x': return <X className="w-5 h-5 text-red-500" />
      case 'partial': return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      default: return <X className="w-5 h-5 text-gray-400" />
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium mb-4">
            <Eye className="w-4 h-4 mr-2" />
            Honest Comparison
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-6">
            How Soulvia Compares to 
            <span className="gradient-text"> Popular Apps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in transparency. Here's an honest comparison of privacy and anonymity features 
            across popular messaging platforms.
          </p>
        </div>

        {/* App Selection */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => setSelectedApp(app.id)}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                selectedApp === app.id
                  ? `${app.bgColor} ${app.color.replace('bg-', 'border-')} shadow-lg`
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className={`w-12 h-12 ${app.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                {React.createElement(app.logo, { className: "w-6 h-6 text-white" })}
              </div>
              <h3 className={`font-semibold mb-1 ${selectedApp === app.id ? app.textColor : 'text-dark-900'}`}>
                {app.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{app.users} users</p>
              <p className="text-xs text-gray-400">{app.focus}</p>
            </button>
          ))}
        </div>

        {/* Detailed Comparison Table */}
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-6 font-semibold text-dark-900">Features</th>
                  {apps.map((app) => (
                    <th key={app.id} className="text-center p-6">
                      <div className={`w-10 h-10 ${app.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        {React.createElement(app.logo, { className: "w-5 h-5 text-white" })}
                      </div>
                      <div className="font-semibold text-sm text-dark-900">{app.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((category, categoryIndex) => (
                  <React.Fragment key={`category-${categoryIndex}`}>
                    <tr className="bg-gray-100">
                      <td colSpan={apps.length + 1} className="p-4 font-semibold text-dark-900 bg-gray-100">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((item, featureIndex) => (
                      <tr key={`feature-${categoryIndex}-${featureIndex}`} className="border-t border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-medium text-dark-800">{item.feature}</td>
                        <td className="p-4 text-center">{getIcon(item.soulvia)}</td>
                        <td className="p-4 text-center">{getIcon(item.telegram)}</td>
                        <td className="p-4 text-center">{getIcon(item.signal)}</td>
                        <td className="p-4 text-center">{getIcon(item.whatsapp)}</td>
                        <td className="p-4 text-center">{getIcon(item.discord)}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center items-center space-x-8 mt-8">
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Full Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-600">Partial Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <X className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-600">Not Supported</span>
          </div>
        </div>

        {/* Key Differentiator */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-center text-white">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">The Soulvia Difference</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            While other platforms ask for your phone number, email, and personal data, 
            Soulvia is the only platform built from the ground up for true anonymity and digital freedom.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Zero Personal Data</h4>
              <p className="text-sm text-primary-100">No phone, no email, no real name required</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Anonymous by Design</h4>
              <p className="text-sm text-primary-100">Built specifically for anonymous communication</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Mental Health Focus</h4>
              <p className="text-sm text-primary-100">Safe spaces for sensitive conversations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}