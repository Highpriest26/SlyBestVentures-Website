import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  MapPin,
  Home,
  Layers,
  Package,
  FileText,
  MessageCircle,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const location = useLocation();

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  };

  // Primary navigation items for desktop top bar
  const headerPrimaryItems = [
    { label: 'Services', path: '/services' },
    { label: 'Product Catalogue', path: '/catalogue' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const moreItems = [
    {
      label: 'China Sourcing',
      path: '/china-sourcing',
      description: '7-step supplier & factory verification in China',
    },
    {
      label: 'Shipping & Importation',
      path: '/shipping-importation',
      description: 'Sea freight, air freight & customs clearing',
    },
    {
      label: 'Projects & Supply Chain',
      path: '/projects',
      description: 'Our work across the China-Nigeria trade corridor',
    },
    {
      label: 'Testimonials',
      path: '/testimonials',
      description: 'Verified customer experiences',
    },
  ];

  const isMoreActive = moreItems.some((m) => m.path === location.pathname);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-brand-midnight/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left Brand Mark */}
            <Link
              to="/"
              onClick={closeMenus}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-md shrink-0"
              aria-label={`${SITE_CONFIG.business.name} Home`}
            >
              <BrandLogo variant="light" size="md" />
            </Link>

            {/* Center Architectural Navigation (Desktop) */}
            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Primary Navigation"
            >
              {headerPrimaryItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors py-1 ${
                      isActive
                        ? 'text-white font-bold border-b-2 border-brand-cobalt'
                        : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Explore Dropdown for Secondary Corridor Pages */}
              <div
                className="relative"
                onMouseEnter={() => setMoreDropdownOpen(true)}
                onMouseLeave={() => setMoreDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen((prev) => !prev)}
                  className={`text-sm font-medium transition-colors inline-flex items-center gap-1 py-1 ${
                    isMoreActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
                  }`}
                  aria-expanded={moreDropdownOpen}
                >
                  <span>Explore</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-75" aria-hidden="true" />
                </button>

                {moreDropdownOpen && (
                  <div className="absolute right-0 pt-3 w-72 z-50">
                    <div className="rounded-md bg-brand-midnight border border-white/15 shadow-2xl p-2">
                      {moreItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={closeMenus}
                          className="block p-3 rounded-md hover:bg-white/[0.06] transition-colors group"
                        >
                          <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-brand-cyan flex items-center justify-between">
                            <span>{sub.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 font-light">
                            {sub.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right CTAs (Desktop & Tablet) */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href={SITE_CONFIG.navigation.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 text-white hover:bg-white hover:text-brand-midnight px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                {SITE_CONFIG.navigation.secondaryCta.label}
              </a>

              <Link
                to={SITE_CONFIG.navigation.primaryCta.path}
                className="bg-brand-cobalt hover:bg-blue-600 text-white px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                {SITE_CONFIG.navigation.primaryCta.label}
              </Link>
            </div>

            {/* Mobile Top Right: Clean Quote CTA Only (Menu Button Removed from Top Right per User Request) */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                to={SITE_CONFIG.navigation.primaryCta.path}
                onClick={closeMenus}
                className="inline-flex items-center px-3.5 py-2 rounded-md text-[11px] font-bold uppercase tracking-wider text-white bg-brand-cobalt hover:bg-blue-600 transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* FLOATING MOBILE FOOTER MENU (Visible in Mobile View < lg) */}
      <div className="lg:hidden fixed bottom-3 inset-x-3 z-50">
        {/* Pop-up Floating Menu Drawer Above the Bottom Bar */}
        {mobileMenuOpen && (
          <div className="mb-2.5 rounded-md bg-brand-midnight/95 backdrop-blur-xl border border-white/15 shadow-2xl p-4 max-h-[72vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-cyan font-bold">
                Slybest Navigation Menu
              </span>
              <button
                type="button"
                onClick={closeMenus}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 text-xs font-bold text-white"
                aria-label="Close mobile menu"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Close</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {SITE_CONFIG.navigation.primary.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `block px-3.5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-brand-cobalt text-white'
                        : 'text-slate-200 bg-white/[0.03] hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 mt-3 border-t border-white/10 grid grid-cols-2 gap-2">
              <Link
                to="/china-sourcing"
                onClick={closeMenus}
                className="px-3 py-2.5 rounded-md bg-white/[0.05] border border-white/10 text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-white"
              >
                China Sourcing
              </Link>
              <Link
                to="/shipping-importation"
                onClick={closeMenus}
                className="px-3 py-2.5 rounded-md bg-white/[0.05] border border-white/10 text-xs font-bold uppercase tracking-wider text-brand-cyan hover:text-white"
              >
                Shipping &amp; Freight
              </Link>
            </div>

            <div className="pt-3 mt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <Link
                to={SITE_CONFIG.navigation.primaryCta.path}
                onClick={closeMenus}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-xs font-black uppercase tracking-widest text-white bg-brand-cobalt"
              >
                <span>{SITE_CONFIG.navigation.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <a
                href={SITE_CONFIG.navigation.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenus}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-xs font-bold uppercase tracking-widest text-white border border-white/30 bg-white/5 hover:bg-white hover:text-brand-midnight transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>{SITE_CONFIG.navigation.secondaryCta.label}</span>
              </a>
            </div>

            <div className="pt-3 mt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-amber" />
                Alaba International Market, Lagos
              </span>
              <div className="flex gap-3">
                {SITE_CONFIG.contacts.phoneNumbers.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="inline-flex items-center gap-1 text-white font-mono"
                  >
                    <Phone className="w-3 h-3 text-brand-cyan" />
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Persistent Floating Bottom Navigation Bar (Mobile Footer Menu) */}
        <nav
          aria-label="Mobile Floating Footer Navigation"
          className="rounded-md bg-brand-midnight/95 backdrop-blur-xl border border-white/15 shadow-2xl p-1.5 grid grid-cols-5 gap-1 items-center"
        >
          <NavLink
            to="/"
            end
            onClick={closeMenus}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 px-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors ${
                isActive && !mobileMenuOpen
                  ? 'bg-brand-cobalt text-white'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <Home className="w-4 h-4 mb-0.5" aria-hidden="true" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenus}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 px-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors ${
                isActive && !mobileMenuOpen
                  ? 'bg-brand-cobalt text-white'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <Layers className="w-4 h-4 mb-0.5" aria-hidden="true" />
            <span>Services</span>
          </NavLink>

          <NavLink
            to="/catalogue"
            onClick={closeMenus}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 px-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors ${
                isActive && !mobileMenuOpen
                  ? 'bg-brand-cobalt text-white'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <Package className="w-4 h-4 mb-0.5" aria-hidden="true" />
            <span>Catalogue</span>
          </NavLink>

          <NavLink
            to="/request-a-quote"
            onClick={closeMenus}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 px-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors ${
                isActive && !mobileMenuOpen
                  ? 'bg-brand-cobalt text-white'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <FileText className="w-4 h-4 mb-0.5" aria-hidden="true" />
            <span>Quote</span>
          </NavLink>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              mobileMenuOpen
                ? 'bg-brand-cobalt text-white'
                : 'bg-white/10 text-brand-cyan hover:text-white hover:bg-white/15'
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 mb-0.5" aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4 mb-0.5" aria-hidden="true" />
            )}
            <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </nav>
      </div>
    </>
  );
};
