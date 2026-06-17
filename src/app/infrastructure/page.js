"use client";

import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

export default function InfrastructurePage() {
  const { t } = useLanguage();
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
            <h1 className="text-5xl font-bold mb-6">{t("infraTitle")}</h1>
            <h2 className="text-2xl font-semibold mb-4 text-teal">{t("infraSubtitle")}</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              {t("infraDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">

          {/* Section 2: Grid Power & Substation */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">{t("gridPowerSubstation")}</h2>
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
                    {t("gridPowerSubstationImageDesc")}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("gridPowerSubstationDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Transformer */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">{t("transformer")}</h2>
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
                    {t("transformerImageDesc")}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("transformerDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Generator & Automatic Changeover */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">{t("generatorChangeover")}</h2>
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
                    {t("generatorChangeoverImageDesc")}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("generatorChangeoverDesc")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 5: Power Distribution & Protection */}
      <section className="py-20 bg-light-gray">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">{t("powerDistributionProtection")}</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t("powerDistributionProtectionDesc")}
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
                {t("mainDistributionImageDesc")}
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
                {t("subDistributionImageDesc")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Safety & Monitoring */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">{t("safetyMonitoring")}</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t("safetyMonitoringDesc")}
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
                {t("statusIndicatorImageDesc")}
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
                {t("safetyEnclosuresImageDesc")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-deep-navy text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">{t("technicalSpecs")}</h2>
          <div className="bg-white/10 rounded-xl overflow-hidden border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/10 border-b border-white/20">
                    <th className="p-4 font-semibold text-lg w-1/2">{t("component")}</th>
                    <th className="p-4 font-semibold text-lg w-1/2">{t("specification")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">{t("transformerCapacity")}</td>
                    <td className="p-4 text-teal font-semibold text-lg">500 kVAR</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">{t("averageOperatingLoad")}</td>
                    <td className="p-4 text-teal font-semibold text-lg">260 – 280 A</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">{t("generatorCapacity")}</td>
                    <td className="p-4 text-teal font-semibold text-lg">320 kVA</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">{t("changeoverSwitchRating")}</td>
                    <td className="p-4 text-teal font-semibold text-lg">800 A</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">{t("mainDistributionBreakers")}</td>
                    <td className="p-4 text-teal font-semibold text-lg">400 A MCCB</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-lg">{t("incomingGridVoltage")}</td>
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
