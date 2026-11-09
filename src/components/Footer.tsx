import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PRODUCT_CATEGORIES } from '../config/catalogueConfig';
import { SERVICES_LIST } from '../config/servicesConfig';
import { POLICIES_CONFIG } from '../config/policiesConfig';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-midnight text-white pt-16 sm:pt-20 pb-24 lg:pb-10 mt-auto border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Column 1: Brand & Trade Corridor Summary (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-flex mb-5 focus:outline-none">
              <BrandLogo variant="light" size="md" />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light mb-6">
              China • Nigeria • Global Trade
              <br />
              <br />
              {SITE_CONFIG.business.description}
            </p>

            {/* Operations & Direct Connect */}
            <div className="text-sm text-slate-400 space-y-2 mb-6 font-light">
              <p>
                <strong className="text-white font-semibold">Lagos Office:</strong>{' '}
                {SITE_CONFIG.contacts.nigeriaLocation.address}
              </p>
              <p>
                <strong className="text-white font-semibold">Phone:</strong>{' '}
                {SITE_CONFIG.contacts.phoneNumbers.map((phone, i) => (
                  <React.Fragment key={phone.href}>
                    <a
                      href={phone.href}
                      className="text-slate-300 hover:text-brand-cyan font-mono transition-colors"
                    >
                      {phone.display}
                    </a>
                    {i < SITE_CONFIG.contacts.phoneNumbers.length - 1 ? ' / ' : ''}
                  </React.Fragment>
                ))}
              </p>
              <p>
                <strong className="text-white font-semibold">Email:</strong>{' '}
                <a
                  href={SITE_CONFIG.contacts.email.href}
                  className="text-slate-300 hover:text-brand-cyan transition-colors break-all"
                >
                  {SITE_CONFIG.contacts.email.display}
                </a>
              </p>
              <p>
                <strong className="text-white font-semibold">Hours:</strong>{' '}
                <span className="text-emerald-400 font-medium">
                  {SITE_CONFIG.contacts.businessHours}
                </span>
              </p>
            </div>

            {/* Social & WhatsApp Links */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={SITE_CONFIG.contacts.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-brand-cobalt hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href={SITE_CONFIG.contacts.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-brand-cyan" aria-hidden="true" />
              </a>

              <a
                href={SITE_CONFIG.contacts.tiktok.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <span>TikTok</span>
                <ArrowUpRight className="w-3 h-3 text-brand-cyan" aria-hidden="true" />
              </a>

              <a
                href={SITE_CONFIG.contacts.whatsappChannel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <span>WhatsApp Channel</span>
                <ArrowUpRight className="w-3 h-3 text-brand-cyan" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Company & Corridor Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h2 className="font-bold text-xs tracking-widest uppercase text-slate-500 mb-4 sm:mb-6">
              Company
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-300 font-light">
              {SITE_CONFIG.navigation.primary.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors py-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/china-sourcing"
                  className="hover:text-white transition-colors py-0.5 inline-block"
                >
                  China Sourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-importation"
                  className="hover:text-white transition-colors py-0.5 inline-block"
                >
                  Shipping &amp; Importation
                </Link>
              </li>
              <li>
                <Link
                  to="/request-a-quote"
                  className="text-brand-cyan hover:text-white font-semibold transition-colors py-0.5 inline-block"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h2 className="font-bold text-xs tracking-widest uppercase text-slate-500 mb-4 sm:mb-6">
              Services
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-light">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-white transition-colors line-clamp-1 py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Product Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h2 className="font-bold text-xs tracking-widest uppercase text-slate-500 mb-4 sm:mb-6">
              Product Categories
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-300 font-light">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/catalogue?category=${encodeURIComponent(category.name)}`}
                    className="hover:text-white transition-colors line-clamp-1 py-0.5"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quotation Notice Banner */}
        <div className="mb-8 pt-6 border-t border-slate-900">
          <div className="rounded-md bg-[#0B1F3A]/80 border border-white/10 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-brand-amber shrink-0" aria-hidden="true" />
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              <strong className="text-white font-bold uppercase tracking-wider mr-1.5">
                Quotation Notice:
              </strong>
              {POLICIES_CONFIG.quotationNotice}
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {SITE_CONFIG.business.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
