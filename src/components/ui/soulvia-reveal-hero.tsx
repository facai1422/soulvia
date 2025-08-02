"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";
import { ElegantShape } from "./elegant-shape";

interface SoulviaRevealHeroProps {
  title1?: string;
  title2?: string;
  description?: string;
}

export function SoulviaRevealHero({
  title1 = "Your Voice,",
  title2 = "Your Privacy",
  description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology."
}: SoulviaRevealHeroProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1.5 + i * 0.3, // Delay to let RevealText animation finish first
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* RevealText SOULVIA - Main Brand */}
          <div className="mb-8 md:mb-12">
            <RevealText
              text="SOULVIA"
              textColor="text-white"
              overlayColor="text-rose-500"
              fontSize="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px]"
              letterDelay={0.1}
              overlayDelay={0.06}
              overlayDuration={0.5}
              springDuration={800}
              letterImages={[
                "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // S - Ocean
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // O - Mountains
                "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // U - Forest
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // L - Valley
                "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // V - Desert
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // I - Lake
                "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // A - Sky
              ]}
            />
          </div>

          {/* Subtitle */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                {title2}
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              Experience true digital freedom with anonymous communication. 
              Share your authentic thoughts without fear, powered by military-grade encryption.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="https://apps.apple.com/us/app/soulvia/id6745585268?l=zh-Hans-CN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-rose-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-rose-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Download Soulvia App
            </a>
            <a 
              href="/reveal-text-demo"
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              View Animation Demo
            </a>
          </motion.div>


        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}