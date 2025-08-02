import { DatabaseDemo } from '@/components/ui/database-demo'

export default function DatabaseDemoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Soulvia API Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interactive demonstration of our secure REST API that powers anonymous communication
          </p>
        </div>
        
        <div className="flex justify-center">
          <DatabaseDemo />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Click the buttons to see the animated API flows in action
          </p>
        </div>
      </div>
    </main>
  )
}