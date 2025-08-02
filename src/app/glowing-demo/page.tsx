import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo'

export const metadata = {
  title: 'Glowing Effect Demo - Soulvia',
  description: 'Experience our new glowing card effects with interactive animations.',
}

export default function GlowingDemoPage() {
  return (
    <main className="min-h-screen bg-gray-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Interactive Glowing Cards
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Move your mouse over the cards to experience the dynamic glowing border effects
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <GlowingEffectDemo />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Featuring dynamic glowing borders that follow your cursor
          </p>
        </div>
      </div>
    </main>
  )
}