"use client";

import Image from "next/image";
// import { useLanguage } from '../../contexts/LanguageContext'; // Removed as per edit hint

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function SewingMachineCard({ image, title }) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group">
      <div
        className="h-64 w-64 bg-gradient-to-br from-teal/20 to-deep-navy/20 flex items-center justify-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  // const { t } = useLanguage(); // Commented out to remove language functionality

  const sewingMachines = [
    { id: 1, name: "Automatic Pattern Sewing Machine", image: "/sewing_machines/Auto_Pattern_Sewing.jpg" },
    { id: 2, name: "Chainstitch Machine", image: "/sewing_machines/chainstitch_machine.png" },
    { id: 3, name: "Two Needle Machine", image: "/sewing_machines/double-needle.png" },
    { id: 4, name: "Flatlock Machine", image: "/sewing_machines/flatlock.png" },
    { id: 5, name: "Kansai Machine", image: "/sewing_machines/Kansai.png" },
    { id: 6, name: "Overlock Machine", image: "/sewing_machines/Overlock_Machine.png" },
    { id: 7, name: "Plain Machine", image: "/sewing_machines/plain_machine.png" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-96">
        <Image
          src="/Jindex_X7.jpg"
          alt="Stitch Made BD Factory"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 h-full flex items-center justify-center">
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
            At Stitch Made BD, our mission is to deliver exceptional garment manufacturing services while maintaining the highest standards of quality, sustainability, and ethical practices. We strive to be a trusted partner for global fashion brands, creating innovative and high-quality apparel that meets international standards. Our commitment to excellence, combined with our skilled workforce and state-of-the-art facilities, enables us to produce garments that exceed customer expectations and contribute to the growth of Bangladesh&apos;s textile industry.
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-deep-navy">Trade License</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>License Number:</strong> 362/ 2025 - 2026</p>
                <p><strong>Issued Date:</strong> August 17, 2024</p>
                <p><strong>Valid Until:</strong> June 30, 2026</p>
                <p><strong>Issuing Authority:</strong> Gazipur City Corporation</p>
              </div>
            </div>
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-deep-navy">Fire License</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>License Number:</strong> DD/DHAKA/35645/2025</p>
                <p><strong>Issued Date:</strong> September 24, 2025</p>
                <p><strong>Valid Until:</strong> June 30, 2026</p>
                <p><strong>Issuing Authority:</strong> Fire Service and Civil Defense, Dhaka</p>
              </div>
            </div>
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-deep-navy">Factory License</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>License Number:</strong> 33-30-1-002-00448</p>
                <p><strong>Issued Date:</strong> September 22, 2025</p>
                <p><strong>Valid Until:</strong> September 21, 2026</p>
                <p><strong>Issuing Authority:</strong> Department of Inspection for Factories and Establishments, Gazipur</p>
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
          {/* Cutting Section */}
          <section className="py-20 bg-light-gray">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">Cutting Section</h2>
              {/* JINDEX X7 */}
              <div className="w-full px-4 mb-12">
                <h3 className="text-2xl font-bold text-center text-deep-navy mb-8">Jindex X7: High-Precision CNC Cutting Machine</h3>
                <div className="flex flex-col gap-12 lg:flex-row items-center">
                  <div className="lg:w-1/2">
                    <Image
                      src="/factory_images/Jindex_X7.jpg"
                      alt="High-Precision Multi-Function CNC Cutting Machine"
                      width={600}
                      height={400}
                      objectFit="contain"
                      className="rounded-lg mx-auto block"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      At Stitch Made BD, we pride ourselves on leveraging cutting-edge technology to achieve unparalleled precision and efficiency. Our flagship Jindex X7 high-precision multi-function CNC cutting machine is a testament to this commitment. Engineered for mass production, it serves diverse sectors. This advanced system masterfully handles soft materials, consistently achieving a remarkable 7 cm cutting thickness after adsorption. It stands out with exceptional cutting speed, industry-leading accuracy, and intelligent, energy-efficient operations, underscoring our dedication to innovative and sustainable manufacturing.
                    </p>
                    <h4 className="text-xl font-semibold mb-3 text-deep-navy">Key Specifications:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Max cutting speed: 80 meters / minute</li>
                      <li>• Cutting accuracy: +/- 1mm</li>
                      <li>• Cutting style: Vibrating knife tool at 5000 rpm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sewing Machines Section */}
          <section className="py-20 bg-white">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">Sewing Machines
              </h2>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                loop={true} // Enable infinite loop
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {sewingMachines.map((machine) => (
                  <SwiperSlide key={machine.id} className="flex justify-center items-center">
                    <SewingMachineCard
                      image={machine.image}
                      title={machine.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* Finishing Section */}
          <section className="py-20 bg-light-gray">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">Finishing Section</h2>
              <div className="bg-light-gray p-6 rounded-lg">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3 text-deep-navy">Finishing Equipment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Industrial steam irons</li>
                  <li>Quality inspection stations</li>
                  <li>Packaging machines</li>
                  <li>Labeling systems</li>
                </ul>
              </div>
            </div>
          </section>

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
                <div className="text-3xl font-bold text-teal">250+</div>
                <div className="text-sm opacity-80">Skilled workers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal">99%</div>
                <div className="text-sm opacity-80">QC Pass</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

