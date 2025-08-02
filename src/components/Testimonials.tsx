'use client'

import React, { useState, useEffect } from 'react'
import { Star, Quote, Shield, Users, Heart, Briefcase } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      category: "Mental Health",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      quote: "Finally found a space where I can discuss my struggles with depression without fear of judgment or having it tied to my real identity. This platform literally saved my mental health.",
      author: "Anonymous Healthcare Worker",
      location: "New York, USA",
      rating: 5,
      verified: true
    },
    {
      category: "Workplace",
      icon: Briefcase,
      color: "from-blue-500 to-indigo-500", 
      quote: "Exposed toxic management practices at my company through Soulvia without risking my career. Other employees came forward too, and real change happened.",
      author: "Anonymous Software Engineer",
      location: "London, UK",
      rating: 5,
      verified: true
    },
    {
      category: "Privacy Advocate",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      quote: "As a privacy researcher, I've tested dozens of messaging apps. Soulvia is the only one that truly delivers on its anonymity promises. The architecture is brilliant.",
      author: "Anonymous Security Researcher", 
      location: "Berlin, Germany",
      rating: 5,
      verified: true
    },
    {
      category: "Community",
      icon: Users,
      color: "from-purple-500 to-violet-500",
      quote: "The anonymous dating advice community helped me through my divorce. Real people sharing honest experiences without the fake social media persona.",
      author: "Anonymous Parent",
      location: "Toronto, Canada", 
      rating: 5,
      verified: true
    },
    {
      category: "Student Life",
      icon: Heart,
      color: "from-yellow-500 to-orange-500",
      quote: "University counseling services had long wait times. Soulvia's peer support groups gave me immediate help with anxiety and academic pressure.",
      author: "Anonymous University Student",
      location: "Sydney, Australia",
      rating: 5,
      verified: true
    }
  ]

  const stats = [
    { number: "98%", label: "Users feel safer sharing", icon: Shield },
    { number: "89%", label: "Reduced social anxiety", icon: Heart },
    { number: "94%", label: "Would recommend to friends", icon: Users },
    { number: "0", label: "Privacy breaches ever", icon: Shield }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Real User Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-6">
            Lives Changed by 
            <span className="gradient-text"> Anonymous Freedom</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from real users who found courage, healing, and community through 
            secure anonymous communication.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className={`bg-gradient-to-r ${testimonials[currentTestimonial].color} p-8 text-white`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    {React.createElement(testimonials[currentTestimonial].icon, { 
                      className: "w-6 h-6" 
                    })}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonials[currentTestimonial].category}</div>
                    <div className="text-sm opacity-80">Verified User Story</div>
                  </div>
                </div>
                <Quote className="w-8 h-8 opacity-50" />
              </div>
              
              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{testimonials[currentTestimonial].author}</div>
                  <div className="text-sm opacity-80">{testimonials[currentTestimonial].location}</div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="p-6">
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${testimonial.color} rounded-lg flex items-center justify-center mr-3`}>
                  {React.createElement(testimonial.icon, { className: "w-5 h-5 text-white" })}
                </div>
                <div>
                  <div className="font-semibold text-dark-900">{testimonial.category}</div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "{testimonial.quote.slice(0, 150)}..."
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-medium">{testimonial.author}</div>
                <div>{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              The Numbers Don't Lie
            </h3>
            <p className="text-xl text-primary-100">
              Real impact measured from our user community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  {React.createElement(stat.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-primary-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-primary-100 mb-6">
              Join thousands who've found their voice through anonymous freedom
            </p>
            <button className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Start Your Anonymous Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}