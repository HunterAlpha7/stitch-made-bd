import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-gray">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* 404 SVG */}
        <div className="mb-8">
          <img 
            src="/404.svg" 
            alt="404 Error" 
            className="mx-auto max-w-md"
          />
        </div>
        
        {/* Quirky Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-deep-navy mb-4">Oops! Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-4">
            Looks like this page decided to take a sewing break! 🧵
          </p>
          <p className="text-lg text-gray-500 mb-6">
            Don't worry, we'll help you find your way back to the main fabric of our website!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block bg-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal/90 transition-colors"
          >
            🏠 Go Back Home
          </Link>
          <div className="text-sm text-gray-500">
            <p>Or try one of these popular pages:</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/about" className="text-teal hover:underline">About Us</Link>
              <Link href="/services" className="text-teal hover:underline">Services</Link>
              <Link href="/contact" className="text-teal hover:underline">Contact</Link>
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border-l-4 border-teal">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🪡</span>
            <div className="text-left">
              <p className="text-sm text-gray-600">
                <strong>Industry Fun Fact:</strong> A single sewing machine can make up to 8,000 stitches per minute. That's faster than most people can type!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
