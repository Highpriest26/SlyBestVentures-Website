import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'light', size = 'md' }) => {
  const { logoUrl } = SITE_CONFIG.brand;
  const isLightText = variant === 'light';

  if (logoUrl) {
    return (
      <div className="inline-flex items-center gap-3">
        <img
          src={logoUrl}
          alt={SITE_CONFIG.business.name}
          className={size === 'lg' ? 'h-12 w-auto' : size === 'sm' ? 'h-8 w-auto' : 'h-10 w-auto'}
        />
      </div>
    );
  }

  const boxSize =
    size === 'lg' ? 'w-10 h-10 text-lg' : size === 'sm' ? 'w-7 h-7 text-sm' : 'w-8 h-8 text-base';

  return (
    <div className="inline-flex items-center gap-2.5 group">
      {/* Architectural Cobalt Brand Mark with rounded-md */}
      <div
        className={`${boxSize} bg-brand-cobalt text-white font-black flex items-center justify-center rounded-md shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-105`}
        aria-hidden="true"
      >
        S
      </div>

      <div className="flex items-baseline gap-2 leading-none">
        <span
          className={`font-display font-black uppercase tracking-tight ${
            size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-lg' : 'text-xl'
          } ${isLightText ? 'text-white' : 'text-brand-midnight'}`}
        >
          SLYBEST
        </span>
        <span
          className={`font-mono text-[10px] tracking-[0.18em] uppercase font-bold hidden sm:inline-block ${
            isLightText ? 'text-brand-cyan' : 'text-brand-cobalt'
          }`}
        >
          GLOBAL HUBS
        </span>
      </div>
    </div>
  );
};
