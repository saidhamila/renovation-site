import React from 'react';
import Image from 'next/image';

const BlobSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M433.5,332Q423,414,354,437Q285,460,229.5,417.5Q174,375,123.5,358.5Q73,342,67.5,274Q62,206,108.5,159.5Q155,113,212.5,103.5Q270,94,334.5,103Q399,112,429.5,178.5Q460,245,433.5,332Z"
      fill="currentColor"
    />
  </svg>
);

const phoneMockups = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/9b66e378-09f3-4f98-9825-abddb433b5f4/generated_images/high-fidelity-realistic-iphone-mockup-di-05e673ee-20250925235318.jpg?",
    alt: "Application Renovation Man - Suivi de chantier",
    className: "top-[15%] left-[10%] w-[27%] z-10",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/9b66e378-09f3-4f98-9825-abddb433b5f4/generated_images/high-fidelity-realistic-iphone-mockup-di-fa90b918-20250925235324.jpg?",
    alt: "Application Renovation Man - Devis en ligne",
    className: "top-[8%] left-[24%] w-[27%] z-20",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/9b66e378-09f3-4f98-9825-abddb433b5f4/generated_images/high-fidelity-realistic-iphone-mockup-di-a648fff7-20250925235333.jpg?",
    alt: "Application Renovation Man - Paiement sécurisé",
    className: "top-0 left-[38%] w-[27%] z-30",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/9b66e378-09f3-4f98-9825-abddb433b5f4/generated_images/high-fidelity-realistic-iphone-mockup-di-1e56183e-20250925235340.jpg?",
    alt: "Application Renovation Man - Communication",
    className: "top-[17%] left-[63%] w-[27%] z-20",
  },
];

const MobileAppShowcase = () => {
  return (
    <section className="relative z-20 bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950 py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <span className="text-accent text-base font-medium">
          Un espace sur mesure
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-white">
          Votre suivi, dans la poche
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed text-white">
          Depuis votre espace client, gérez simplement et en toute sécurité chaque étape de votre projet : devis en ligne, signature électronique et paiement sécurisés.
        </p>
      </div>

      <div className="mt-16 sm:mt-20 lg:mt-24 w-full flex justify-center">
        <div className="relative w-full max-w-[1080px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] mx-auto">
          <BlobSvg className="absolute inset-0 w-full h-full text-primary z-0 opacity-20 animate-pulse" />
          
          {phoneMockups.map((phone, i) => (
            <div 
              key={i} 
              className={`absolute ${phone.className} transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 cursor-pointer group ${i === 0 || i === 2 ? 'hover:z-40' : 'hover:z-30'}`}
            >
              <div className="relative">
                <Image 
                  src={phone.src}
                  alt={phone.alt}
                  width={291}
                  height={588}
                  className="w-full h-auto drop-shadow-2xl rounded-xl group-hover:drop-shadow-3xl transition-all duration-300"
                  priority={i === 0}
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppShowcase;