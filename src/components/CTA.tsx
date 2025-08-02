'use client'

import React, { useState } from 'react'
import { 
  Download, 
  Smartphone, 
  Globe, 
  Shield, 
  Gift, 
  Clock, 
  Users, 
  ArrowRight,
  Apple,
  Play
} from 'lucide-react'

export default function CTA() {
  const [selectedPlan, setSelectedPlan] = useState('free')

  const plans = [
    {
      id: 'free',
      name: 'Anonymous Basic',
      price: '$0',
      period: 'Forever Free',
      description: 'Perfect for getting started with anonymous communication',
      features: [
        'Unlimited anonymous messages',
        'Join public anonymous rooms',
        '24-hour message auto-deletion',
        'Basic encryption protection',
        'Anonymous polls and voting'
      ],
      highlight: false,
      cta: 'Start Free Now'
    },
    {
      id: 'premium',
      name: 'Privacy Pro',
      price: '$4.99',
      period: 'per month',
      originalPrice: '$9.99',
      description: 'Advanced privacy features for serious anonymous communication',
      features: [
        'Everything in Anonymous Basic',
        'Create private anonymous rooms',
        'Custom disappearing timers (1-24h)',
        'Advanced encryption algorithms',
        'Anonymous file sharing',
        'Priority customer support',
        'No ads experience',
        'Export anonymous data'
      ],
      highlight: true,
      cta: 'Start Free Trial',
      badge: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Organization Shield',
      price: 'Custom',
      period: 'Contact Us',
      description: 'Enterprise-grade anonymous communication for organizations',
      features: [
        'Everything in Privacy Pro',
        'Custom anonymous domains',
        'Advanced admin controls',
        'Compliance reporting',
        'Single sign-on integration',
        'Dedicated account manager',
        'Custom retention policies',
        'Priority technical support'
      ],
      highlight: false,
      cta: 'Contact Sales'
    }
  ]

  const launchOffers = [
    {
      icon: Gift,
      title: 'Early Bird Special',
      description: 'First 10,000 users get Privacy Pro free for 6 months',
      validity: 'Limited time only'
    },
    {
      icon: Users,
      title: 'Invite Rewards',
      description: 'Earn 1 month free Premium for every 5 friends you invite',
      validity: 'Unlimited referrals'
    },
    {
      icon: Clock,
      title: 'Launch Week Bonus',
      description: '50% off Premium subscriptions during our launch week',
      validity: 'Ends February 15th'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Ready to Take Control?
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-dark-900 mb-6">
            Your Anonymous Voice
            <span className="gradient-text block"> Starts Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join half a million users who've discovered the freedom of truly anonymous communication. 
            No phone number, no email, no compromises.
          </p>

          {/* Quick Download Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="flex items-center justify-center bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg">
              <Apple className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </button>
            <button className="flex items-center justify-center bg-green-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg">
              <Play className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </button>
            <button className="flex items-center justify-center bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg">
              <Globe className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs">Use in</div>
                <div className="text-lg font-bold">Web Browser</div>
              </div>
            </button>
          </div>
        </div>

        {/* Launch Offers */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {launchOffers.map((offer, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-200">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                {React.createElement(offer.icon, { className: "w-6 h-6 text-white" })}
              </div>
              <h3 className="text-xl font-semibold text-dark-900 mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-3">{offer.description}</p>
              <div className="text-sm text-primary-600 font-medium">{offer.validity}</div>
            </div>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-dark-900 mb-4">
              Choose Your Privacy Level
            </h3>
            <p className="text-lg text-gray-600">
              Start free, upgrade when you need advanced anonymous features
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative card p-8 transition-all duration-300 ${
                  plan.highlight
                    ? 'ring-2 ring-primary-500 shadow-2xl scale-105'
                    : 'hover:shadow-xl'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-dark-900">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                    )}
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-dark-900 via-dark-800 to-primary-900 rounded-3xl p-8 lg:p-16 text-center text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-400/10 rounded-full blur-xl"></div>
          </div>

          <div className="relative z-10">
            <Shield className="w-20 h-20 mx-auto mb-8 text-primary-400" />
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              Don't Wait for the Next
              <span className="block gradient-text">Privacy Breach</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Every day you wait is another day your conversations could be monitored, 
              stored, and used against you. Take control of your digital privacy now.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-dark-900 font-bold px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl flex items-center group">
                Start Anonymous Chat Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span>423 users online now</span>
                </div>
                <div className="text-gray-500">•</div>
                <span>No signup required</span>
              </div>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-gray-300">
              <div>
                <div className="text-2xl font-bold text-white">30 seconds</div>
                <div className="text-sm">Setup time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Zero</div>
                <div className="text-sm">Personal data required</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Unlimited</div>
                <div className="text-sm">Anonymous conversations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}