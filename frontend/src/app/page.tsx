import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, FileText, Globe } from 'lucide-react';

export default function Home() {
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
                <Button variant="ghost">Disease Detection</Button>
              </Link>
              <Link href="/labels">
                <Button variant="ghost">Disease Types</Button>
              </Link>
              <Link href="/notebook">
                <Button variant="ghost">Research</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Protect Your Tomato Plants with
            <span className="text-red-600"> AI</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Our advanced AI model helps you identify and diagnose tomato plant diseases quickly and accurately.
            Upload a photo and get instant results to keep your crops healthy.
          </p>
          <Link href="/predict">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Start Detecting
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose TomatoGuard AI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/predict" className="transition-transform hover:scale-105">
              <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm h-full cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Leaf className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Instant Detection</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get immediate results about your plant's health status using our advanced AI model.
                  </p>
                  <Button variant="ghost" className="mt-4 text-red-600 hover:text-red-700">
                    Try Now →
                  </Button>
                </CardContent>
              </Card>
            </Link>
            <Link href="/labels" className="transition-transform hover:scale-105">
              <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm h-full cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Detailed Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access comprehensive information about various tomato diseases and their characteristics.
                  </p>
                  <Button variant="ghost" className="mt-4 text-red-600 hover:text-red-700">
                    View Types →
                  </Button>
                </CardContent>
              </Card>
            </Link>
            <Link href="/notebook" className="transition-transform hover:scale-105">
              <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm h-full cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Research Backed</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built on extensive research and trained on a comprehensive dataset of tomato plant diseases.
                  </p>
                  <Button variant="ghost" className="mt-4 text-red-600 hover:text-red-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Protect Your Tomato Plants?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Start using our AI-powered disease detection system today and keep your crops healthy.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/predict">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Start Detection
              </Button>
            </Link>
            <Link href="/labels">
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                Browse Diseases
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
