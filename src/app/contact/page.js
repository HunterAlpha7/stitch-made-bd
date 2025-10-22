"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-teal to-deep-navy">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">We&apos;re here to discuss your apparel manufacturing needs.</p>
          </div>
        </div>
      </section>

      {/* Contact Information + Maps Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-deep-navy">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">Our Factory Address</h4>
                    <p className="text-gray-600">Holding # 72/3, Block #3, Bahadurpur, Bhawal Mirzapur, Gazipur City, Gazipur - 1703</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">Email Us</h4>
                    <p className="text-gray-600">info@stitchmadebd.com</p>
                    <p className="text-gray-600">sales@stitchmadebd.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">Call Us</h4>
                    <p className="text-gray-600">+880 1678 306 200</p>                 
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">Business Hours</h4>
                    <p className="text-gray-600">Saturday - Thursday: 9 AM - 5 PM</p>
                    <p className="text-gray-600">Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Maps Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-deep-navy text-center">Find Us on the Map</h3>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="aspect-video bg-gradient-to-br from-teal/20 to-deep-navy/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-600">Interactive Map Coming Soon!</p>
                    <p className="text-sm text-gray-500 mt-2">Moroa, Valuka, Mymensingh, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

