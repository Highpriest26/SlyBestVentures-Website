import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  MessageCircle,
  X,
  PackageCheck,
} from 'lucide-react';
import {
  PRODUCT_CATEGORIES,
  CATALOGUE_ITEMS,
} from '../config/catalogueConfig';
import { SITE_CONFIG } from '../config/siteConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';
import { CategoryIcon } from '../components/CategoryIcon';
import { FinalQuoteCtaSection } from '../components/FinalQuoteCtaSection';

export const CataloguePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryParam = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryParam);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'items' | 'categories'>('items');

  useEffect(() => {
    const catFromUrl = searchParams.get('category');
    if (catFromUrl) {
      setSelectedCategory(catFromUrl);
    } else {
      setSelectedCategory('All');
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    if (categoryName === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: categoryName });
    }
  };

  const filteredCategories = useMemo(() => {
    return PRODUCT_CATEGORIES.filter((cat) => {
      const matchesCategory =
        selectedCategory === 'All' || cat.name.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;
      return (
        matchesCategory &&
        (cat.name.toLowerCase().includes(q) ||
          cat.shortDescription.toLowerCase().includes(q) ||
          cat.exampleItems.some((item) => item.toLowerCase().includes(q)))
      );
    });
  }, [selectedCategory, searchQuery]);

  const filteredItems = useMemo(() => {
    return CATALOGUE_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;
      return (
        matchesCategory &&
        (item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.shortDescription.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  const buildWhatsAppProductHref = (title: string, category: string) => {
    const message = `Hello Slybest Ventures Global Hubs, I would like to enquire about sourcing "${title}" (${category}) from China to Nigeria.`;
    return `${SITE_CONFIG.contacts.whatsapp.href}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <PageMeta
        title={PAGE_METADATA.catalogue.title}
        description={PAGE_METADATA.catalogue.description}
      />

      {/* Sleek Visual Hero & Search Bar */}
      <section className="relative bg-brand-midnight text-white py-14 sm:py-20 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold">
                15 PRODUCT SECTORS // QUOTE-BASED SOURCING
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-2 tracking-tight">
                Source Products That Fit Your Business or Project
              </h1>
            </div>

            {/* Tab Switcher: Featured Sourcing Items vs 15 Category Sectors */}
            <div className="inline-flex p-1.5 rounded-md bg-white/[0.06] border border-white/10 self-start">
              <button
                type="button"
                onClick={() => setActiveTab('items')}
                className={`px-5 py-2 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'items'
                    ? 'bg-brand-cobalt text-white shadow-glow-cobalt'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Catalogue Items ({filteredItems.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('categories')}
                className={`px-5 py-2 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'categories'
                    ? 'bg-brand-cobalt text-white shadow-glow-cobalt'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                All 15 Categories
              </button>
            </div>
          </div>

          {/* Floating Glass Search & Category Pill Strip */}
          <div className="mt-8 p-4 rounded-md bg-white/[0.05] backdrop-blur-xl border border-white/15">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <label htmlFor="catalogue-search" className="sr-only">
                  Search by product or category
                </label>
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="catalogue-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search vehicles, solar panels, inverters, 4K TVs, freezers, POS..."
                  className="w-full pl-11 pr-10 py-3 rounded-md bg-brand-midnight/90 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-brand-cyan"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <select
                aria-label="Filter by category"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="sm:w-72 px-4 py-3 rounded-md bg-brand-midnight/90 border border-white/15 text-white text-sm focus:outline-none focus:border-brand-cyan"
              >
                <option value="All">All 15 Categories</option>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Horizontal Scrollable Category Pills */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => handleCategoryChange('All')}
                className={`shrink-0 px-3.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-brand-cyan text-brand-midnight'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                All (15)
              </button>
              {PRODUCT_CATEGORIES.map((cat) => {
                const isSelected =
                  selectedCategory.toLowerCase() === cat.name.toLowerCase();
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.name)}
                    className={`shrink-0 px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-brand-cyan text-brand-midnight font-bold'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Visual Grid */}
      <section className="py-14 sm:py-20 bg-brand-softWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'items' ? (
            filteredItems.length === 0 ? (
              <div className="rounded-md bg-white border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-sm">
                <PackageCheck className="w-12 h-12 text-brand-cobalt mx-auto mb-3" />
                <h2 className="text-xl font-display font-extrabold text-brand-midnight">
                  Need a Custom Product From China?
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Tell us what you need and our team will locate the right manufacturer in China
                  and prepare your quotation.
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <Link
                    to={`/request-a-quote?product=${encodeURIComponent(searchQuery)}`}
                    className="px-6 py-3 rounded-md bg-brand-cobalt text-white text-xs font-bold hover:bg-blue-600"
                  >
                    Request Custom Quote
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      handleCategoryChange('All');
                      setSearchQuery('');
                    }}
                    className="px-5 py-3 rounded-md bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
                  >
                    Reset Filter
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredItems.map((item) => (
                  <article
                    key={item.id}
                    className="group rounded-md bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-premium hover:border-brand-cobalt/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* High-Res Visual Header */}
                      <div className="h-52 relative overflow-hidden bg-brand-midnight">
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-brand-midnight/20 to-transparent" />

                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                          <span className="px-3 py-1 rounded-md bg-brand-midnight/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-brand-cyan truncate">
                            {item.category}
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-brand-amber/90 text-brand-midnight font-mono text-[10px] font-extrabold shrink-0">
                            {item.approvedPrice ? item.approvedPrice : 'Quote-Based'}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] font-mono text-slate-300">
                          <span>{item.recommendedFreight}</span>
                          <span>CN &rarr; NG</span>
                        </div>
                      </div>

                      {/* Concise Product Info */}
                      <div className="p-6">
                        <h2 className="text-lg font-display font-extrabold text-brand-midnight group-hover:text-brand-cobalt transition-colors leading-snug">
                          {item.name}
                        </h2>
                        <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                          {item.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Sleek Dual Action Buttons */}
                    <div className="px-6 pb-6 flex items-center gap-2.5">
                      <Link
                        to={`/request-a-quote?category=${encodeURIComponent(
                          item.category
                        )}&product=${encodeURIComponent(item.name)}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-md text-xs font-bold text-white bg-brand-cobalt hover:bg-blue-600 transition-colors"
                      >
                        <span>Request a Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>

                      <a
                        href={buildWhatsAppProductHref(item.name, item.category)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-md text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                        <span>Ask on WhatsApp</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )
          ) : (
            /* All 15 Categories Visual Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="group relative rounded-md overflow-hidden min-h-[260px] flex flex-col justify-between p-6 text-white shadow-sm"
                >
                  {category.imageUrl && (
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/70 to-brand-midnight/25" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-11 h-11 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-brand-cyan flex items-center justify-center">
                      <CategoryIcon icon={category.icon} className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-md bg-brand-midnight/80 border border-white/15 text-[11px] font-mono text-slate-200">
                      {category.freightRecommendation}
                    </span>
                  </div>

                  <div className="relative z-10 mt-auto pt-10">
                    <h3 className="text-xl font-display font-extrabold text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">
                      {category.shortDescription}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2">
                      <Link
                        to={`/request-a-quote?category=${encodeURIComponent(category.name)}`}
                        className="flex-1 text-center py-2 rounded-md bg-brand-cobalt hover:bg-blue-500 text-xs font-bold text-white transition-colors"
                      >
                        Request a Quote
                      </Link>
                      <a
                        href={buildWhatsAppProductHref(category.name, category.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-md bg-white/15 hover:bg-emerald-600 text-xs font-bold text-white inline-flex items-center gap-1 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <FinalQuoteCtaSection
        preselectedCategory={selectedCategory !== 'All' ? selectedCategory : undefined}
      />
    </>
  );
};
