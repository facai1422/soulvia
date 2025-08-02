'use client'

import React from 'react'
import { Shield, Twitter, Github, Globe, Mail, Heart, Lock, Users, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { name: 'Anonymous Chat', href: '/chat' },
    { name: '3D Experience', href: '/3d-experience' },
    { name: 'Spline Demo', href: '/spline-demo' },
    { name: 'Interactive 3D', href: '/interactive-3d' },
            { name: 'RevealText Demo', href: '/reveal-text-demo' },
        { name: 'Glowing Cards Demo', href: '/glowing-demo' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Database Demo', href: '/database-demo' }
  ]

  const privacyLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Security Audit', href: '/security' },
    { name: 'Transparency Report', href: '/transparency' },
    { name: 'Data Protection', href: '/data-protection' }
  ]

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Safety Guide', href: '/safety' },
    { name: 'Community Guidelines', href: '/guidelines' },
    { name: 'Report Issue', href: '/report' },
    { name: 'Contact Support', href: '/support' }
  ]

  const companyLinks = [
    { name: 'About Soulvia', href: '/about' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'Press Kit', href: '/press' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' }
  ]

  return (
    <footer className="bg-dark-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-dark-700">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Anonymous, Stay Informed
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get privacy tips, security updates, and product news. 
              No tracking, no spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your anonymous email..."
                className="flex-1 px-6 py-4 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy as much as you do. No personal data collected.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Soulvia</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              The world's first truly anonymous communication platform. 
              Your voice, your privacy, your freedom.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-2">
              <div className="flex items-center text-green-400 text-sm">
                <Lock className="w-4 h-4 mr-2" />
                <span>256-bit AES encryption</span>
              </div>
              <div className="flex items-center text-blue-400 text-sm">
                <Users className="w-4 h-4 mr-2" />
                <span>500K+ protected users</span>
              </div>
              <div className="flex items-center text-purple-400 text-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Zero data breaches</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Privacy</h4>
            <ul className="space-y-4">
              {privacyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
              <span>© {currentYear} Soulvia. All rights reserved.</span>
              <span>Made with <Heart className="w-4 h-4 inline text-red-500" /> for digital freedom</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <span>•</span>
              <span>Servers in 12 countries</span>
              <span>•</span>
              <span>99.9% uptime</span>
            </div>
          </div>
          
          {/* Additional Privacy Notice */}
          <div className="mt-8 pt-8 border-t border-dark-800 text-center">
            <p className="text-xs text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Soulvia is committed to protecting your privacy and anonymity. We use advanced cryptographic 
              techniques to ensure your communications remain private. We do not collect, store, or share 
              any personal information. By using our service, you agree to our terms of service and privacy policy. 
              For maximum security, always keep your app updated and use strong passwords.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}