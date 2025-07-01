import Link from 'next/link';
import Prediction from '@/components/app/prediction';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

export default function PredictPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">TomatoGuard AI</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/predict">
                <Button variant="ghost" className='cursor-pointer'>Disease Detection</Button>
              </Link>
              <Link href="/labels">
                <Button variant="ghost" className='cursor-pointer'>Disease Types</Button>
              </Link>
              <Link href="/notebook">
                <Button variant="ghost" className='cursor-pointer'>Research</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tomato Disease Detection
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Upload a photo of your tomato plant and our AI model will help identify any diseases.
          </p>
        </div>
        <Prediction />
      </main>
    </div>
  );
}
