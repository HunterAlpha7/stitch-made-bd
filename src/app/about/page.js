"use client";

import Image from "next/image";
import { useLanguage } from '../../contexts/LanguageContext';

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
  const { t } = useLanguage();

  const sewingMachines = [
    { id: 1, name: t("automaticPatternSewingMachine"), image: "/sewing_machines/Auto_Pattern_Sewing.jpg" },
    { id: 2, name: t("chainstitchMachine"), image: "/sewing_machines/chainstitch_machine.png" },
    { id: 3, name: t("twoNeedleMachine"), image: "/sewing_machines/double-needle.png" },
    { id: 4, name: t("flatlockMachine"), image: "/sewing_machines/flatlock.png" },
    { id: 5, name: t("kansaiMachine"), image: "/sewing_machines/Kansai.png" },
    { id: 6, name: t("overlockMachine"), image: "/sewing_machines/Overlock_Machine.png" },
    { id: 7, name: t("plainMachine"), image: "/sewing_machines/plain_machine.png" },
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
            <h1 className="text-5xl font-bold mb-4">{t("aboutStitchMadeBD")}</h1>
            <p className="text-xl opacity-90">{t("excellenceInGarmentManufacturing")}</p>
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
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-4">{t("organizationalStructure")}</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t("organizationalStructureDescription")}
          </p>
          <div className="relative w-full max-w-5xl mx-auto">
            <Image
              src="/organogram.svg"
              alt="Stitch Made BD organizational structure"
              width={3086}
              height={2798}
              className="w-full h-auto rounded-lg shadow-md border border-gray-200 bg-white"
              priority
            />
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
                <p><strong>{t("licenseNumber")}:</strong> 362/ 2025 - 2026</p>
                <p><strong>{t("issuedDate")}:</strong> August 17, 2024</p>
                <p><strong>{t("validUntil")}:</strong> June 30, 2026</p>
                <p><strong>{t("issuingAuthority")}:</strong> Gazipur City Corporation</p>
              </div>
            </div>
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-deep-navy">{t("fireLicense")}</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>{t("licenseNumber")}:</strong> DD/DHAKA/35645/2025</p>
                <p><strong>{t("issuedDate")}:</strong> September 24, 2025</p>
                <p><strong>{t("validUntil")}:</strong> June 30, 2026</p>
                <p><strong>{t("issuingAuthority")}:</strong> Fire Service and Civil Defense, Dhaka</p>
              </div>
            </div>
            <div className="bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-deep-navy">{t("factoryLicense")}</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>{t("licenseNumber")}:</strong> 33-30-1-002-00448</p>
                <p><strong>{t("issuedDate")}:</strong> September 22, 2025</p>
                <p><strong>{t("validUntil")}:</strong> September 21, 2026</p>
                <p><strong>{t("issuingAuthority")}:</strong> Department of Inspection for Factories and Establishments, Gazipur</p>
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
                    <h4 className="font-semibold">{t("groundFloorCuttingDepartment")}</h4>
                    <p>{t("cuttingDepartmentDescription")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">{t("firstFloorSewingDepartment")}</h4>
                    <p>{t("sewingDepartmentDescription")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/factory_images/Factory_layout.jpg"
                alt="Factory layout diagram"
                width={800}
                height={800}
                className="w-full h-auto rounded-lg object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Information Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("equipmentTechnology")}</h2>
          {/* Cutting Section */}
          <section className="py-20 bg-light-gray">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("cuttingSection")}</h2>
              {/* JINDEX X7 */}
              <div className="w-full px-4 mb-12">
                <h3 className="text-2xl font-bold text-center text-deep-navy mb-8">{t("jindexX7HighPrecisionCNCCuttingMachine")}</h3>
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
                      {t("jindexX7Description")}
                    </p>
                    <h4 className="text-xl font-semibold mb-3 text-deep-navy">{t("keySpecifications")}:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• {t("maxCuttingSpeed")}</li>
                      <li>• {t("cuttingAccuracy")}</li>
                      <li>• {t("cuttingStyle")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sewing Machines Section */}
          <section className="py-20 bg-white">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("sewingMachines")}
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
              <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("finishingSection")}</h2>
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
          </section>

          <div className="mt-12 bg-deep-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">{t("productionCapacity")}</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal">50,000+</div>
                <div className="text-sm opacity-80">{t("piecesPerMonth")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal">200+</div>
                <div className="text-sm opacity-80">{t("sewingMachinesCount")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal">250+</div>
                <div className="text-sm opacity-80">{t("skilledWorkers")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal">99%</div>
                <div className="text-sm opacity-80">{t("qcPass")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

