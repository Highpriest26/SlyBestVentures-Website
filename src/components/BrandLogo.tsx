import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'light', size = 'md' }) => {
  const { logoUrl } = SITE_CONFIG.brand;
  const isLightText = variant === 'light';

  const boxSize =
    size === 'lg' ? 'w-11 h-11' : size === 'sm' ? 'w-8 h-8' : 'w-9 h-9 sm:w-10 sm:h-10';

  return (
    <div className="inline-flex items-center gap-2.5 sm:gap-3 group">
      {/* Official Slybest Ventures Global Hubs SV Emblem (rounded-md) */}
      <div
        className={`${boxSize} rounded-md border border-white/25 flex items-center justify-center overflow-hidden shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-105`}
      >
        <img
          src={logoUrl || '/logo-mark.png'}
          alt={`${SITE_CONFIG.business.name} Logo`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-black uppercase tracking-tight ${
            size === 'lg' ? 'text-xl sm:text-2xl' : size === 'sm' ? 'text-base' : 'text-lg sm:text-xl'
          } ${isLightText ? 'text-white' : 'text-brand-midnight'}`}
        >
          SLYBEST VENTURES
        </span>
        <span
          className={`font-mono text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-bold mt-0.5 ${
            isLightText ? 'text-brand-cyan' : 'text-brand-cobalt'
          }`}
        >
          GLOBAL HUBS
        </span>
      </div>
    </div>
  );
};
