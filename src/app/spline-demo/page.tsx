import { SplineSceneBasic } from '@/components/ui/spline-scene-basic'

export const metadata = {
  title: 'Soulvia 3D Spline Demo - Interactive Experience',
  description: 'Experience our new 3D Spline integration with spotlight effects and modern UI components.',
}

export default function SplineDemoPage() {
  return (
    <main className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Interactive 3D Spline Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience our enhanced 3D integration with spotlight effects and seamless UI components
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <SplineSceneBasic />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Featuring Aceternity Spotlight effects and optimized 3D rendering
          </p>
        </div>
      </div>
    </main>
  )
}