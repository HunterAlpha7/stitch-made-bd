export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-96 bg-gradient-to-r from-teal to-deep-navy">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Stitch Made BD</h1>
            <p className="text-xl opacity-90">Excellence in Garment Manufacturing</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-8">Mission</h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
            At Stitch Made BD, our mission is to deliver exceptional garment manufacturing services 
            while maintaining the highest standards of quality, sustainability, and ethical practices. 
            We strive to be a trusted partner for global fashion brands, creating innovative and 
            high-quality apparel that meets international standards. Our commitment to excellence, 
            combined with our skilled workforce and state-of-the-art facilities, enables us to 
            produce garments that exceed customer expectations and contribute to the growth of 
            Bangladesh&apos;s textile industry.
          </p>
        </div>
      </section>

      {/* Organogram Section */}
      <section className="py-20 bg-light-gray">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">Organizational Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">CEO</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Chief Executive Officer</h3>
              <p className="text-gray-600">Strategic leadership and company vision</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">COO</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Chief Operations Officer</h3>
              <p className="text-gray-600">Production management and quality control</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">CFO</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Chief Financial Officer</h3>
              <p className="text-gray-600">Financial planning and business development</p>
            </div>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">Licenses & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-deep-navy">Trade License</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>License Number:</strong> TL-2024-001234</p>
                <p><strong>Issued Date:</strong> January 15, 2024</p>
                <p><strong>Valid Until:</strong> December 31, 2025</p>
                <p><strong>Issuing Authority:</strong> Dhaka City Corporation</p>
              </div>
            </div>
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-deep-navy">Bond License</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>License Number:</strong> BL-2024-005678</p>
                <p><strong>Issued Date:</strong> February 1, 2024</p>
                <p><strong>Valid Until:</strong> January 31, 2026</p>
                <p><strong>Issuing Authority:</strong> Bangladesh Customs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Layout Section */}
      <section className="py-20 bg-light-gray">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">Factory Layout</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-deep-navy">Our Facility</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Ground Floor - Cutting Department</h4>
                    <p>Advanced cutting machines and fabric inspection area</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">1st Floor - Sewing Department</h4>
                    <p>200+ sewing machines with quality control stations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">2nd Floor - Finishing & Packaging</h4>
                    <p>Final inspection, ironing, and packaging facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">3rd Floor - Office & Training</h4>
                    <p>Administrative offices and employee training center</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="aspect-square bg-gradient-to-br from-teal/20 to-deep-navy/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏭</div>
                  <p className="text-gray-600">Factory Layout Diagram</p>
                  <p className="text-sm text-gray-500 mt-2">Interactive layout coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Information Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">Equipment & Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light-gray p-6 rounded-lg">
              <div className="text-4xl mb-4">✂️</div>
              <h3 className="text-xl font-semibold mb-3 text-deep-navy">Cutting Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Computerized cutting machines</li>
                <li>• Automatic fabric spreaders</li>
                <li>• Laser cutting systems</li>
                <li>• Fabric inspection tables</li>
              </ul>
            </div>
            <div className="bg-light-gray p-6 rounded-lg">
              <div className="text-4xl mb-4">🧵</div>
              <h3 className="text-xl font-semibold mb-3 text-deep-navy">Sewing Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Single needle lockstitch machines</li>
                <li>• Overlock machines</li>
                <li>• Buttonhole machines</li>
                <li>• Embroidery machines</li>
              </ul>
            </div>
            <div className="bg-light-gray p-6 rounded-lg">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3 text-deep-navy">Finishing Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Industrial steam irons</li>
                <li>• Quality inspection stations</li>
                <li>• Packaging machines</li>
                <li>• Labeling systems</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-deep-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">Production Capacity</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal">50,000+</div>
                <div className="text-sm opacity-80">Pieces per month</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal">200+</div>
                <div className="text-sm opacity-80">Sewing machines</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal">150+</div>
                <div className="text-sm opacity-80">Skilled workers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal">24/7</div>
                <div className="text-sm opacity-80">Production capability</div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
  );
}

