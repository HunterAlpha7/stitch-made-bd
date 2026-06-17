"use client";

import Image from "next/image";

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-96">
        <Image
          src="/infrastructure_images/main-transformer.jpeg"
          alt="Dedicated Power Infrastructure"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Power Infrastructure & Backup Facility</h1>
            <h2 className="text-2xl font-semibold mb-4 text-teal">Dedicated Power Infrastructure for Uninterrupted Production</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Our in-house electrical substation and generator room ensure 24/7 power availability for our garment manufacturing operations. With dedicated 11KV grid supply, a 500 kVAR transformer, and a 320 kVA backup generator, we eliminate downtime risks and maintain consistent production schedules regardless of external grid conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">

          {/* Section 2: Grid Power & Substation */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">Grid Power & Substation</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-light-gray">
                  <Image
                    src="/infrastructure_images/load-break-switch.jpeg"
                    alt="11KV Load Break Switch"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="bg-light-gray p-3 text-sm text-gray-600 italic border-t border-gray-200">
                    11KV Load Break Switch with analog metering for real-time monitoring of incoming grid power.
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The facility is fed by a dedicated 11KV line, controlled through a load break switch panel equipped with ammeters, wattmeter, and voltmeter for continuous monitoring. This ensures stable high-voltage supply management before stepping down to operational voltage levels.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Transformer */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">Transformer</h2>
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-light-gray">
                  <Image
                    src="/infrastructure_images/main-transformer.jpeg"
                    alt="500 kVAR Transformer"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="bg-light-gray p-3 text-sm text-gray-600 italic border-t border-gray-200">
                    500 kVAR oil-cooled transformer with conservator tank and multi-feed cable distribution.
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our main transformer has a capacity of 500 kVAR, comfortably handling an average production load of 260–280A. The unit features a conservator tank for thermal expansion management and organized high-tension cable routing for reliable power distribution across the factory floor.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Generator & Automatic Changeover */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">Generator & Automatic Changeover</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-light-gray">
                  <Image
                    src="/infrastructure_images/changeover-switch.jpeg"
                    alt="800A Change Over switch"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="bg-light-gray p-3 text-sm text-gray-600 italic border-t border-gray-200">
                    800A rated automatic changeover switch for seamless transition between grid and generator power.
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A 320 kVA generator backs up the entire facility. The 800A changeover switch enables automatic transfer to generator power during grid failure, ensuring zero disruption to cutting, sewing, and finishing operations. The system is rated well above peak load requirements for safe, sustained operation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 5: Power Distribution & Protection */}
      <section className="py-20 bg-light-gray">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">Power Distribution & Protection</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Power is distributed through a protected hierarchy: main 400A breakers handle feeder lines, while sub-panels provide circuit-level protection for individual production zones. All cabling is color-coded, labeled, and routed through organized bus bars to prevent faults and simplify maintenance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-white bg-white">
              <Image
                src="/infrastructure_images/distribution-panel-1.jpeg"
                alt="Main distribution panel"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-sm text-gray-600 italic">
                Main distribution panel with 400A molded case circuit breakers (MCCB) and color-coded bus bar system.
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-white bg-white">
              <Image
                src="/infrastructure_images/distribution-panel-2.jpeg"
                alt="Sub-distribution panel"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-sm text-gray-600 italic">
                Systematic sub-distribution panel with tiered circuit protection and labeled terminal connections.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Safety & Monitoring */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">Safety & Monitoring</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Safety is integrated, not optional. The facility features visible hazard signage, enclosed live equipment, phase-status indicators, and strategically placed fire extinguishers. All personnel access is restricted to authorized electricians.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-light-gray">
              <Image
                src="/infrastructure_images/safety-panel-1.jpeg"
                alt="Status indicator panel"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="bg-light-gray p-4 text-sm text-gray-600 italic">
                Status indicator panel with phase monitoring and fire safety equipment on standby.
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-light-gray">
              <Image
                src="/infrastructure_images/safety-panel-2.jpeg"
                alt="Safety enclosures"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="bg-light-gray p-4 text-sm text-gray-600 italic">
                Safety-compliant switchgear enclosures with clear hazard identification in local language.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-deep-navy text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Specifications</h2>
          <div className="bg-white/10 rounded-xl overflow-hidden border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/10 border-b border-white/20">
                    <th className="p-4 font-semibold text-lg w-1/2">Component</th>
                    <th className="p-4 font-semibold text-lg w-1/2">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">Transformer Capacity</td>
                    <td className="p-4 text-teal font-semibold text-lg">500 kVAR</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">Average Operating Load</td>
                    <td className="p-4 text-teal font-semibold text-lg">260 – 280 A</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">Generator Capacity</td>
                    <td className="p-4 text-teal font-semibold text-lg">320 kVA</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">Changeover Switch Rating</td>
                    <td className="p-4 text-teal font-semibold text-lg">800 A</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">Main Distribution Breakers</td>
                    <td className="p-4 text-teal font-semibold text-lg">400 A MCCB</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">Incoming Grid Voltage</td>
                    <td className="p-4 text-teal font-semibold text-lg">11 KV</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
