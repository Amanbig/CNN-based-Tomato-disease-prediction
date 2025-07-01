import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">TomatoGuard AI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Protecting your tomato plants with advanced AI-powered disease detection.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/predict" className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
                  Disease Detection
                </Link>
              </li>
              <li>
                <Link href="/labels" className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
                  Disease Types
                </Link>
              </li>
              <li>
                <Link href="/notebook" className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/notebook" className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="https://github.com/amansvg/CNN-based-Tomato-disease-prediction" className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 inline-flex items-center gap-1">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Have questions? Reach out to us at{" "}
              <a href="mailto:amanpreetsinghjhiwant7@gmail.com" className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                amanpreetsinghjhiwant7@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} TomatoGuard AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}