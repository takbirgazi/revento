'use client';

import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/admin-motionmark/30min?primary_color=1cba86'
      });
    }
  };

  return (
    <button
      onClick={openCalendly}
      className="group bg-white hover:bg-[#051a2f] text-[#051a2f] hover:text-white font-bold rounded-full px-3 md:px-7 py-2 border-4 border-transparent hover:border-white uppercase text-sm lg:text-lg flex items-center gap-2 transition-all duration-300"
    >
      <span>Join Forces with Motion Mark</span>
      <span className="relative h-4 w-5 lg:h-5 overflow-hidden">
        <FaArrowRight className="absolute top-0 group-hover:translate-x-8 text-[#051a2f] transition-all duration-500" />
        <FaArrowRight className="absolute top-0 -translate-x-8 text-white group-hover:translate-x-0 transition-all duration-500" />
      </span>
    </button>
  );
};