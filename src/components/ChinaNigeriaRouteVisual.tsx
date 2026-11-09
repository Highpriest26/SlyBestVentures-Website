import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Ship,
  Plane,
  ArrowRight,
  FileText,
  ShieldCheck,
  Calculator,
  Truck,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const STAGE_IMAGES: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
  2: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
  3: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  4: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=80',
  5: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
};

export const ChinaNigeriaRouteVisual: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const steps = SITE_CONFIG.processSteps;
  const currentStep = steps.find((s) => s.number === activeStage) || steps[0];

  const getStageIcon = (num: number) => {
    switch (num) {
      case 1:
        return <FileText className="w-5 h-5" aria-hidden="true" />;
      case 2:
        return <ShieldCheck className="w-5 h-5" aria-hidden="true" />;
      case 3:
        return <Calculator className="w-5 h-5" aria-hidden="true" />;
      case 4:
        return <Ship className="w-5 h-5" aria-hidden="true" />;
      case 5:
      default:
        return <Truck className="w-5 h-5" aria-hidden="true" />;
    }
  };

  const stageCoordinates = [
    { number: 1, x: 110, y: 145, label: '01. Request' },
    { number: 2, x: 305, y: 95, label: '02. Source' },
    { number: 3, x: 500, y: 75, label: '03. Quote' },
    { number: 4, x: 695, y: 95, label: '04. Freight' },
    { number: 5, x: 890, y: 145, label: '05. Deliver' },
  ];

  return (
    <div className="rounded-md bg-brand-midnight border border-white/10 shadow-premium-dark overflow-hidden text-white">
      {/* Top Sleek Corridor Header */}
      <div className="px-6 py-4 bg-white/[0.03] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-cyan animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan font-bold">
            CHINA &rarr; NIGERIA INTERACTIVE TRADE BRIDGE
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-cobalt/20 border border-brand-cyan/30 text-brand-cyan font-medium">
            <Ship className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Sea Freight</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-amber/15 border border-brand-amber/30 text-brand-amber font-medium">
            <Plane className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Air Freight</span>
          </span>
        </div>
      </div>

      {/* Animated SVG Corridor Visual */}
      <div className="relative px-4 sm:px-8 pt-6 pb-2 bg-grid-pattern">
        <div className="flex items-center justify-between text-xs font-mono mb-1 px-2">
          <div className="flex items-center gap-2 text-brand-amber">
            <span className="w-2 h-2 rounded-full bg-brand-amber" />
            <span>ORIGIN: CHINA SUPPLIER NETWORK</span>
          </div>
          <div className="flex items-center gap-2 text-brand-cyan">
            <span>DESTINATION: LAGOS &amp; NATIONWIDE NIGERIA</span>
            <span className="w-2 h-2 rounded-full bg-brand-cyan" />
          </div>
        </div>

        <svg
          viewBox="0 0 1000 210"
          className="w-full h-auto min-h-[130px]"
          role="img"
          aria-label="Animated China-to-Nigeria trade route connecting five sourcing-to-delivery stages"
        >
          <defs>
            <linearGradient id="corridorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5A623" />
              <stop offset="50%" stopColor="#1264FF" />
              <stop offset="100%" stopColor="#19C3FF" />
            </linearGradient>
            <linearGradient id="seaRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1264FF" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#19C3FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1264FF" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Lower Sea Route Curve */}
          <path
            d="M 110 145 Q 500 215 890 145"
            fill="none"
            stroke="url(#seaRouteGrad)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          {/* Main Trade Bridge Curve */}
          <path
            d="M 110 145 C 240 85, 360 75, 500 75 C 640 75, 760 85, 890 145"
            fill="none"
            stroke="#1E293B"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 110 145 C 240 85, 360 75, 500 75 C 640 75, 760 85, 890 145"
            fill="none"
            stroke="url(#corridorGradient)"
            strokeWidth="3.5"
            strokeDasharray="12 8"
            className="animate-route-dash"
            strokeLinecap="round"
          />

          {/* Animated Cargo Pulses */}
          <circle r="5" fill="#19C3FF">
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M 110 145 C 240 85, 360 75, 500 75 C 640 75, 760 85, 890 145"
            />
          </circle>
          <circle r="4" fill="#F5A623">
            <animateMotion
              dur="12s"
              repeatCount="indefinite"
              path="M 110 145 Q 500 215 890 145"
            />
          </circle>

          {/* 5 Interactive Stage Nodes */}
          {stageCoordinates.map((node) => {
            const isSelected = activeStage === node.number;
            const isCompletedOrActive = node.number <= activeStage;

            return (
              <g
                key={node.number}
                className="cursor-pointer"
                onClick={() => setActiveStage(node.number)}
              >
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="26"
                    fill="#1264FF"
                    fillOpacity="0.3"
                  />
                )}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="16"
                  fill={isSelected ? '#1264FF' : isCompletedOrActive ? '#0B1F3A' : '#07111F'}
                  stroke={
                    node.number === 1
                      ? '#F5A623'
                      : node.number === 5
                      ? '#19C3FF'
                      : isSelected
                      ? '#19C3FF'
                      : '#334155'
                  }
                  strokeWidth="2.5"
                />
                <text
                  x={node.x}
                  y={node.y + 4}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {node.number}
                </text>
                <text
                  x={node.x}
                  y={node.y + 34}
                  textAnchor="middle"
                  fill={isSelected ? '#19C3FF' : '#94A3B8'}
                  fontSize="12"
                  fontWeight={isSelected ? '700' : '500'}
                  fontFamily="Manrope, sans-serif"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Interactive 5-Step Tabs + Visual Spotlight Card */}
        <div className="mt-2 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 5 Interactive Step Pills */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2">
            {steps.map((step) => {
              const isActive = step.number === activeStage;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStage(step.number)}
                  className={`w-full text-left px-4 py-3.5 rounded-md border transition-all flex items-center gap-3.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-cobalt/30 to-brand-navy border-brand-cyan text-white shadow-glow-cobalt'
                      : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07] hover:text-white'
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-md font-mono text-xs font-extrabold flex items-center justify-center shrink-0 ${
                      isActive
                        ? 'bg-brand-cyan text-brand-midnight'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    0{step.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold truncate">{step.title}</div>
                    <div className="text-[11px] text-slate-400 truncate">
                      {step.locationTag}
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-brand-cyan translate-x-0.5' : 'opacity-30'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Visual Stage Spotlight Card with Photography */}
          <div className="lg:col-span-7 rounded-md overflow-hidden relative min-h-[280px] flex flex-col justify-end p-6 sm:p-8 border border-white/15 group">
            <img
              src={STAGE_IMAGES[currentStep.number]}
              alt={currentStep.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/80 to-brand-midnight/30" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-brand-cobalt text-white font-mono text-xs font-bold">
                  STEP 0{currentStep.number} OF 05
                </span>
                <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md text-brand-cyan font-mono text-xs">
                  {currentStep.locationTag}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-md bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan">
                  {getStageIcon(currentStep.number)}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                  {currentStep.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed">
                {currentStep.description}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/request-a-quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-brand-cobalt hover:bg-blue-500 text-white text-xs font-bold shadow-glow-cobalt transition-all"
                >
                  <span>Start Step 1: Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-xs font-semibold text-brand-cyan hover:text-white inline-flex items-center gap-1"
                >
                  <span>Full process breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
