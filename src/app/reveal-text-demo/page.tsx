"use client";

import { RevealText } from "@/components/ui/reveal-text";

export default function RevealTextDemoPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="mb-12">
        <RevealText 
          text="SOULVIA"
          textColor="text-white"
          overlayColor="text-purple-500"
          fontSize="text-[125px] lg:text-[200px]"
          letterDelay={0.08}
          overlayDelay={0.05}
          overlayDuration={0.4}
          springDuration={600}
          letterImages={[
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // S
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // O
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // U
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // L
            "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // V
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // I
            "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // A
          ]}
        />
      </div>
      
      <div className="text-center text-white/80 max-w-2xl mx-auto px-4">
        <p className="text-xl mb-4">悬停在字母上查看图片效果</p>
        <p className="text-sm text-white/60">
          每个字母都有独特的弹簧动画效果，悬停时显示不同的背景图片，还有红色扫描动画
        </p>
      </div>
      
      <div className="mt-16">
        <RevealText 
          text="STUNNING"
          textColor="text-white"
          overlayColor="text-red-500"
          fontSize="text-[80px] lg:text-[125px]"
          letterDelay={0.06}
          overlayDelay={0.04}
          overlayDuration={0.3}
          springDuration={500}
        />
      </div>
    </div>
  );
}