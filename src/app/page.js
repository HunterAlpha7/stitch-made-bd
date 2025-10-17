'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

// Carousel Component
function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/factory_images/factory1.jpg',
    '/factory_images/factory2.jpg', 
    '/factory_images/factory3.jpg',
    '/factory_images/factory4.jpg',
    '/factory_images/factory5.jpg',
    '/factory_images/factory6.jpg',
    '/factory_images/factory7.jpg',
    '/factory_images/factory8.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  const { t } = useLanguage();

  return (
    <section className="relative h-96 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="w-full h-full bg-gradient-to-r from-teal/80 to-deep-navy/80"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{t("welcome")}</h1>
          <p className="text-xl opacity-90">{t("excellenceInManufacturing")}</p>
        </div>
      </div>
    </section>
  );
}

// Count Animation Component
function CountAnimation({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-teal mb-2">
        {count.toLocaleString()}{suffix}
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ image, title, href }) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300">
        <div 
          className="h-96 w-64 bg-gradient-to-br from-teal/20 to-deep-navy/20"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-deep-navy px-6 py-3 rounded-lg font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
              {title}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Buyer Logo Component
function BuyerLogo({ logo, name, website }) {
  return (
    <a 
      href={website} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
    >
      <div className="w-24 h-24 mx-auto bg-light-gray rounded-lg flex items-center justify-center">
        {logo ? (
          <img src={logo} alt={name} className="max-w-full max-h-full object-contain" />
        ) : (
          <span className="text-2xl font-bold text-deep-navy">{name}</span>
        )}
      </div>
      <p className="text-center mt-3 text-sm text-gray-600">{name}</p>
    </a>
  );
}

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Image Carousel */}
      <ImageCarousel />

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-8">{t("whoWeAre")}</h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            {t("whoWeAreDescription")}
          </p>
        </div>
      </section>

      {/* Milestone Section */}
      <section className="py-20 bg-light-gray">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("ourMilestones")}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <CountAnimation end={3} suffix="+" />
              <h3 className="text-xl font-semibold mb-2 text-deep-navy">{t("yearsOfExperience")}</h3>
              <p className="text-gray-600">{t("dedicatedToExcellence")}</p>
            </div>
            <div className="text-center">
              <CountAnimation end={98} suffix="%" />
              <h3 className="text-xl font-semibold mb-2 text-deep-navy">{t("repeatCustomers")}</h3>
              <p className="text-gray-600">{t("trustAndSatisfaction")}</p>
            </div>
            <div className="text-center">
              <CountAnimation end={4} suffix="M" />
              <h3 className="text-xl font-semibold mb-2 text-deep-navy">{t("annualTurnover")}</h3>
              <p className="text-gray-600">{t("growingBusiness")}</p>
            </div>
            <div className="text-center">
              <CountAnimation end={300} suffix="K" />
              <h3 className="text-xl font-semibold mb-2 text-deep-navy">{t("capacityPerYear")}</h3>
              <p className="text-gray-600">{t("unitsProduced")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("ourProducts")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard 
              image="/Workwear.jpg"
              title={t("workWear")}
              href="/products/"
            />
            <ProductCard 
              image="/ladies-bottom.png"
              title={t("ladiesBottom")}
              href="/products"
            />
            <ProductCard 
              image="/mens-bottom.png"
              title={t("mensBottom")}
              href="/products"
            />
          </div>
        </div>
      </section>

      {/* Our Buyers Section */}
      <section className="py-20 bg-light-gray">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">{t("ourBuyers")}</h2>
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-4">
                <BuyerLogo
                  logo="/logos/chori-logo.svg"
                  name="Chori"
                  website="https://www.chori.co.jp/english/"
                />
              </div>
              <BuyerLogo
                logo="/logos/takihyo-logo.png"
                name="Takihyo"
                website="https://www.takihyo.co.jp/en/"
              />
              <BuyerLogo
                logo="/tawaraya-logo.png"
                name="Tawaraya"
                website="#"
              />
              <BuyerLogo
                logo="/"
                name="Yamaichi"
                website="#"
              />
              
              <BuyerLogo
                logo="/"
                name="Yamanishi"
                website="#"
              />
              
            </div>
            <div className="flex-shrink-0 grid grid-cols-1 gap-8">
              <BuyerLogo
                logo="/logos/shinmen-logo.png"
                name="Shinmen"
              />
              <BuyerLogo
                logo="/logos/sowa-logo.png"
                name="SOWA"
                website="#"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-deep-navy text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("partnerWithUs")}</h2>
          <p className="text-xl opacity-90 mb-8">
            {t("callToActionDescription")}
          </p>
          <Link href="/contact" className="bg-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal/90 transition-colors inline-block">
            {t("getInTouch")}
          </Link>
        </div>
    </section>
    </div>
  );
}
