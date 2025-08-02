import { SoulviaTimelineDemo } from '@/components/ui/soulvia-timeline-demo'

export const metadata = {
  title: 'Soulvia Roadmap - Our Journey to Digital Freedom',
  description: 'Explore Soulvia\'s development roadmap and our vision for anonymous communication. Interactive orbital timeline showing our progress.',
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Header overlay */}
      <div className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2 text-white/90">
              Soulvia Roadmap
            </h1>
            <p className="text-white/60 text-sm">
              Click on any node to explore our journey • Drag to interact
            </p>
          </div>
        </div>
      </div>
      
      {/* Timeline Component */}
      <SoulviaTimelineDemo />
      
      {/* Footer overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-50 p-6">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-white/40 text-xs">
              Our mission: Creating the world's most secure anonymous communication platform
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}