import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Search,
  ClipboardCheck,
  Ship,
  PackageCheck,
  ArrowUpRight,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const SlybestTradeBridgeSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const stages = SITE_CONFIG.tradeBridgeFourStages;

  const cardIcons = [Search, ClipboardCheck, Ship, PackageCheck];

  return (
    <section className="bg-white py-20 sm:py-28 text-brand-midnight border-b border-slate-200 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rayex-Style Editorial Split Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tighter leading-[0.9] text-brand-midnight"
          >
            One partner,
            <br />
            factory to door.
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-sm text-slate-500 font-light max-w-xs lg:text-right leading-relaxed"
          >
            Four stages, one coordinated process across the China to Nigeria trade corridor.
          </motion.p>
        </div>

        {/* Asymmetric 12-Column 7/5 + 5/7 Architectural Grid (Rayex Blueprint in Slybest Palette) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {stages.map((stage, idx) => {
            const Icon = cardIcons[idx] || Search;

            // Card 01 (col-span-7, Soft White), Card 02 (col-span-5, Cobalt Blue),
            // Card 03 (col-span-5, Midnight Black), Card 04 (col-span-7, Soft White)
            const isLightCard = idx === 0 || idx === 3;
            const isCobaltCard = idx === 1;
            const colSpanClass = idx === 0 || idx === 3 ? 'lg:col-span-7' : 'lg:col-span-5';

            const cardBgClass = isLightCard
              ? 'bg-brand-softWhite border-slate-200 text-brand-midnight'
              : isCobaltCard
              ? 'bg-brand-cobalt border-brand-cobalt text-white'
              : 'bg-brand-midnight border-brand-midnight text-white';

            const numberColorClass = isLightCard
              ? 'text-brand-cobalt'
              : isCobaltCard
              ? 'text-white/75'
              : 'text-brand-cyan';

            const iconBoxClass = isLightCard
              ? 'bg-brand-cobalt/10 text-brand-cobalt'
              : isCobaltCard
              ? 'bg-white/15 text-white'
              : 'bg-white/10 text-brand-cyan';

            const titleClass = isLightCard
              ? 'text-brand-midnight group-hover:text-brand-cobalt'
              : 'text-white';

            const arrowClass = isLightCard
              ? 'text-brand-cobalt'
              : isCobaltCard
              ? 'text-white'
              : 'text-brand-cyan';

            const bodyTextClass = isLightCard
              ? 'text-slate-600'
              : isCobaltCard
              ? 'text-white/85'
              : 'text-slate-300';

            const tagClass = isLightCard
              ? 'bg-white border-slate-200 text-slate-700'
              : isCobaltCard
              ? 'bg-white/10 border-white/20 text-white'
              : 'bg-white/[0.06] border-white/15 text-slate-300';

            const targetPath =
              idx === 0
                ? '/china-sourcing'
                : idx === 1
                ? '/request-a-quote'
                : idx === 2
                ? '/shipping-importation'
                : '/services';

            return (
              <motion.div
                key={stage.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`${colSpanClass}`}
              >
                <Link
                  to={targetPath}
                  className={`group ${cardBgClass} border rounded-md p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[240px] sm:min-h-[280px] h-full transition-shadow hover:shadow-xl`}
                >
                  <div className="flex items-start justify-between mb-auto">
                    <span className={`font-mono text-sm font-black ${numberColorClass}`}>
                      {stage.number}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-md flex items-center justify-center ${iconBoxClass}`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-2">
                      <h3
                        className={`text-2xl sm:text-3xl lg:text-4xl font-display font-black uppercase tracking-tight transition-colors ${titleClass}`}
                      >
                        {stage.title}
                      </h3>
                      <ArrowUpRight
                        className={`w-6 h-6 ${arrowClass} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
                        aria-hidden="true"
                      />
                    </div>

                    <p
                      className={`text-sm sm:text-base font-light leading-relaxed max-w-[44ch] ${bodyTextClass}`}
                    >
                      {stage.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-current/10 flex flex-wrap gap-1.5">
                      {stage.slybestServices.map((srv) => (
                        <span
                          key={srv}
                          className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border ${tagClass}`}
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
