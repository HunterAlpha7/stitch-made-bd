"use client";

import Image from "next/image";
import { useLanguage } from '../../contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-96">
        <Image
          src="/factory_images/factory1.jpg"
          alt="Stitch Made BD Factory"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{t("aboutStitchMadeBD")}</h1>
            <p className="text-xl opacity-90">{t("excellenceInManufacturing")}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-8">{t("mission")}</h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
            {t("missionDescription")}
          </p>
        </div>
      </section>

      {/* Organogram Section */}
      <section className="py-20 bg-light-gray">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("organizationalStructure")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">{t("ceo")}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("chiefExecutiveOfficer")}</h3>
              <p className="text-gray-600">{t("strategicLeadership")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">{t("coo")}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("chiefOperationsOfficer")}</h3>
              <p className="text-gray-600">{t("productionManagement")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">{t("cfo")}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("chiefFinancialOfficer")}</h3>
              <p className="text-gray-600">{t("financialPlanning")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("licensesCertifications")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-deep-navy">{t("tradeLicense")}</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>{t("licenseNumber")}</strong> 362/ 2025 - 2026</p>
                <p><strong>{t("issuedDate")}</strong> August 17, 2024</p>
                <p><strong>{t("validUntil")}</strong> June 30, 2026</p>
                <p><strong>{t("issuingAuthority")}</strong> {t("dhakaCityCorporation")}</p>
              </div>
            </div>
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-deep-navy">{t("fireLicense")}</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>{t("licenseNumber")}</strong> DD/DHAKA/35645/2025</p>
                <p><strong>{t("issuedDate")}</strong> September 24, 2025</p>
                <p><strong>{t("validUntil")}</strong> June 30, 2026</p>
                <p><strong>{t("issuingAuthority")}</strong> {t("fireServiceAndCivilDefense")}</p>
              </div>
            </div>
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-deep-navy">{t("factoryLicense")}</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>{t("licenseNumber")}</strong> 33-30-1-002-00448</p>
                <p><strong>{t("issuedDate")}</strong> September 22, 2025</p>
                <p><strong>{t("validUntil")}</strong> September 21, 2026</p>
                <p><strong>{t("issuingAuthority")}</strong> {t("departmentOfInspectionForFactoriesAndEstablishments")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Layout Section */}
      <section className="py-20 bg-light-gray">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("factoryLayout")}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-deep-navy">{t("ourFacility")}</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">{t("groundFloorCutting")}</h4>
                    <p>{t("cuttingDescription")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">{t("firstFloorSewing")}</h4>
                    <p>{t("sewingDescription")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="aspect-square bg-gradient-to-br from-teal/20 to-deep-navy/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏭</div>
                  <p className="text-gray-600">{t("factoryLayoutDiagram")}</p>
                  <p className="text-sm text-gray-500 mt-2">{t("interactiveLayoutComingSoon")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Information Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("equipmentTechnology")}</h2>
          {/* JINDEX X7 */}
          <section className="py-20 bg-light-gray">
            <div className="w-full px-4">
              <h2 className="text-2xl font-bold text-center text-deep-navy mb-8">{t("jindexX7Title")}</h2>
              <div className="flex flex-col gap-12">
                <div>
                  <Image
                    src="/factory_images/Jindex_X7.jpg"
                    alt="High-Precision Multi-Function CNC Cutting Machine"
                    width={600}
                    height={400}
                    objectFit="contain"
                    className="rounded-lg mx-auto block"
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t("jindexX7Description")}
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-deep-navy">{t("keySpecifications")}</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>{t("maxCuttingSpeed")}</li>
                    <li>{t("cuttingAccuracy")}</li>
                    <li>{t("cuttingStyle")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light-gray p-6 rounded-lg">
              <div className="text-4xl mb-4">✂️</div>
              <h3 className="text-xl font-semibold mb-3 text-deep-navy">{t("cuttingEquipment")}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>{t("computerizedCuttingMachines")}</li>
                <li>{t("automaticFabricSpreaders")}</li>
                <li>{t("laserCuttingSystems")}</li>
                <li>{t("fabricInspectionTables")}</li>
              </ul>
            </div>
            <div className="bg-light-gray p-6 rounded-lg">
              <div className="text-4xl mb-4">🧵</div>
              <h3 className="text-xl font-semibold mb-3 text-deep-navy">{t("sewingEquipment")}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>{t("singleNeedleMachines")}</li>
                <li>{t("overlockMachines")}</li>
                <li>{t("buttonholeMachines")}</li>
                <li>{t("embroideryMachines")}</li>
              </ul>
            </div>
            <div className="bg-light-gray p-6 rounded-lg">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3 text-deep-navy">{t("finishingEquipment")}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>{t("industrialSteamIrons")}</li>
                <li>{t("qualityInspectionStations")}</li>
                <li>{t("packagingMachines")}</li>
                <li>{t("labelingSystems")}</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-deep-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">{t("productionCapacity")}</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal">50,000+</div>
                <div className="text-sm opacity-80">{t("piecesPerMonth")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal">200+</div>
                <div className="text-sm opacity-80">{t("sewingMachines")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal">150+</div>
                <div className="text-sm opacity-80">{t("skilledWorkers")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal">24/7</div>
                <div className="text-sm opacity-80">{t("productionCapability")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

