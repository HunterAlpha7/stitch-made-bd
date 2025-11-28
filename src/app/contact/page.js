"use client";

import { useLanguage } from '../../contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapLocationQuery = process.env.NEXT_PUBLIC_MAP_LOCATION_QUERY || "Stitch Made Ltd (SML)";
  const mapPlaceLabel = process.env.NEXT_PUBLIC_MAP_PLACE_LABEL || "Holding # 72/3, Block #3, Bahadurpur, Bhawal Mirzapur, Gazipur City, Gazipur - 1703";
  const encodedLocation = encodeURIComponent(mapLocationQuery);
  const mapSrc = googleMapsApiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodedLocation}&zoom=15`
    : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-teal to-deep-navy">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{t("contactUs")}</h1>
            <p className="text-xl opacity-90">{t("wereHereToDiscuss")}</p>
          </div>
        </div>
      </section>

      {/* Contact Information + Maps Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("getInTouchTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-deep-navy">{t("contactInformation")}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">{t("ourFactoryAddress")}</h4>
                    <p className="text-gray-600">Holding # 72/3, Block #3, Bahadurpur, Bhawal Mirzapur, Gazipur City, Gazipur - 1703</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">{t("emailUs")}</h4>
                    <p className="text-gray-600">info@stitchmadebd.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">{t("callUs")}</h4>
                    <p className="text-gray-600">+880 1678 306 036</p>                 
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">{t("businessHours")}</h4>
                    <p className="text-gray-600">{t("saturdayThursday")}</p>
                    <p className="text-gray-600">{t("friday")}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Maps Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-deep-navy text-center">{t("findUsOnTheMap")}</h3>
              <div className="bg-white p-8 rounded-lg shadow-md">
                {mapSrc ? (
                  <iframe
                    title="Stitch Made BD Location"
                    src={mapSrc}
                    loading="lazy"
                    allowFullScreen
                    className="w-full aspect-video rounded-lg border border-gray-200"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-teal/20 to-deep-navy/20 rounded-lg flex items-center justify-center text-center px-6">
                    <div>
                      <div className="text-6xl mb-4">🗺️</div>
                      <p className="text-gray-600">{t("mapPreviewUnavailable")}</p>
                      <p className="text-sm text-gray-500 mt-2">{t("addGoogleMapsApiKey")}</p>
                      <p className="text-sm text-gray-500 mt-2">{mapPlaceLabel}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

