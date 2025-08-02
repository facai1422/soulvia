'use client'

import React from 'react';
import { EyeOff } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const AnonymityCard = () => {
  const features = [
    {
      title: "No personal data collection",
      subtitle: "不收集个人数据"
    },
    {
      title: "Anonymous account creation", 
      subtitle: "匿名账户创建"
    },
    {
      title: "IP address protection via Tor",
      subtitle: "通过Tor保护IP地址"
    },
    {
      title: "Metadata scrubbing",
      subtitle: "元数据清理"
    }
  ];

  return (
    <div className="max-w-sm mx-auto">
      <div className="relative h-full rounded-[1.5rem] border-[0.75px] border-border p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-[0.75px] bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
          <EyeOff className="w-8 h-8 text-white" />
        </div>
      </div>
      
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          True Anonymity
        </h2>
        <h3 className="text-lg font-medium text-slate-300 mb-4">
          真正的匿名性
        </h3>
        
        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-2">
          No phone numbers, no email verification, no personal information required. Be truly anonymous.
        </p>
        <p className="text-slate-500 text-xs leading-relaxed">
          无需电话号码，无需电子邮件验证，无需个人信息。真正匿名。
        </p>
      </div>
      
      {/* Separator */}
      <div className="w-full h-px bg-slate-600 mb-6"></div>
      
      {/* Features List */}
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="text-white text-sm font-medium mb-1">
                {feature.title}
              </div>
              <div className="text-slate-400 text-xs">
                {feature.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Button */}
      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
        Try True Anonymity 尝试真正的匿名
      </button>
        </div>
      </div>
    </div>
  );
}

export default AnonymityCard;
