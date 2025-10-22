"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ServiceAreas = () => {
  const cities = [
    "Île-de-France",
    
  ];

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    // Show button when scrolled below a certain point.
    // The button belongs to this section, so we can use a threshold.
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="ou-nous-trouver" className="relative bg-white pt-20 pb-32 bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-accent text-lg font-medium text-white">Nos zones d'intervention</span>
          <h2 className="mt-2 text-[40px] font-bold text-primary">
            Où nous retrouver ?
          </h2>
          <p className="mt-4 text-lg text-dark-gray leading-relaxed text-white">
            Notre ambition est de réconcilier les français avec les travaux de rénovation. Nous développons progressivement notre service dans toute la France avec des experts travaux locaux qui sélectionnent les meilleurs artisans de votre région et vous accompagnent dans votre projet.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <Image
              src="images/map.jpeg"
              alt="Carte de France des zones d'intervention"
              width={465}
              height={468}
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-3/5">
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-white">
              {cities.map((city) => (
                <div
                  key={city}
                  className="bg-light-gray cursor-pointer text-dark-gray py-2.5 px-5 rounded-full font-medium transition-colors hover:bg-gray-200 hover:text-black"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
          {showButton && (
        <button
          onClick={scrollToTop}
          className="hidden lg:flex fixed bottom-8 right-8 items-center gap-2 bg-white text-dark-gray font-medium py-3 px-5 rounded-lg shadow-lg z-50 transition-opacity duration-300 hover:opacity-80"
          style={{ 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <Image
            src="/images/flash-services-logo.png"
            alt="Icône flèche vers le haut"
            width={19}
            height={20}
          />
          Revenir en haut
        </button>
      )}
    </section>
  );
};

export default ServiceAreas;
