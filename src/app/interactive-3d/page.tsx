import { SplineSceneBasic } from '@/components/ui/spline-scene-basic'

export const metadata = {
  title: 'Interactive 3D Scene - Soulvia',
  description: 'Experience our beautiful 3D scene with spotlight effects, exactly as you requested.',
}

export default function Interactive3DPage() {
  return (
    <main className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            完全一样的交互式3D体验
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-2">
            这就是您要求的组件：左侧文字介绍，右侧3D机器人，黑色卡片背景，白色聚光灯效果
          </p>
          <p className="text-sm text-gray-400">
            完全按照您提供的代码实现 - SplineSceneBasic 组件
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <SplineSceneBasic />
        </div>
        
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-xl">3D</span>
              </div>
              <h3 className="text-white font-semibold mb-2">3D场景</h3>
              <p className="text-gray-400 text-sm">右侧交互式3D机器人</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 text-xl">✨</span>
              </div>
              <h3 className="text-white font-semibold mb-2">聚光灯效果</h3>
              <p className="text-gray-400 text-sm">白色spotlight动画</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 text-xl">🎨</span>
              </div>
              <h3 className="text-white font-semibold mb-2">黑色背景</h3>
              <p className="text-gray-400 text-sm">现代黑色半透明卡片</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}