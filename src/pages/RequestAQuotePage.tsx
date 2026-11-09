import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
  Mail,
  Upload,
  FileText,
  X,
  ShieldCheck,
  Phone,
  Copy,
  Check,
  RefreshCw,
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../config/catalogueConfig';
import { SITE_CONFIG } from '../config/siteConfig';
import { POLICIES_CONFIG } from '../config/policiesConfig';
import { PAGE_METADATA } from '../config/seoConfig';
import { PageMeta } from '../components/PageMeta';

const quoteFormSchema = z.object({
  full_name: z.string().trim().min(2, 'Full name is required.'),
  company_name: z.string().trim().optional(),
  phone_number: z.string().trim().min(7, 'Please enter a valid phone number.'),
  whatsapp_number: z.string().trim().min(7, 'Please enter a valid WhatsApp number.'),
  email: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      'Please enter a valid email address.'
    ),
  product_category: z.string().trim().min(1, 'Please select a product category.'),
  product_description: z.string().trim().min(3, 'Please describe the product you need.'),
  product_link: z
    .string()
    .trim()
    .optional()
    .refine((val) => {
      if (!val) return true;
      try {
        const urlToTest = val.startsWith('http') ? val : `https://${val}`;
        new URL(urlToTest);
        return true;
      } catch {
        return false;
      }
    }, 'Please enter a valid URL or leave blank.'),
  quantity: z.string().trim().min(1, 'Quantity required is mandatory.'),
  shipping_method: z
    .string()
    .trim()
    .min(1, 'Please select a preferred shipping method.')
    .refine(
      (val): boolean => ['Sea freight', 'Air freight', 'Not sure'].includes(val),
      'Please select a preferred shipping method.'
    ),
  destination: z.string().trim().min(2, 'Destination city and state in Nigeria is required.'),
  target_delivery_timeframe: z.string().trim().optional(),
  budget: z.string().trim().optional(),
  additional_information: z.string().trim().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

const sanitizeInput = (val?: string): string =>
  (val || '').replace(/[<>]/g, '').trim();

export const RequestAQuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string } | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submittedValues, setSubmittedValues] = useState<QuoteFormValues | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      full_name: '',
      company_name: '',
      phone_number: '',
      whatsapp_number: '',
      email: '',
      product_category: '',
      product_description: '',
      product_link: '',
      quantity: '',
      shipping_method: '',
      destination: '',
      target_delivery_timeframe: '',
      budget: '',
      additional_information: '',
    },
  });

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const productParam = searchParams.get('product');
    const serviceParam = searchParams.get('service');
    const shippingParam = searchParams.get('shipping');

    if (categoryParam) {
      const matched = PRODUCT_CATEGORIES.find(
        (c) => c.name.toLowerCase() === categoryParam.toLowerCase()
      );
      setValue('product_category', matched ? matched.name : categoryParam);
    }
    if (productParam) {
      setValue('product_description', productParam);
    }
    if (serviceParam) {
      setValue('additional_information', `Service requested: ${serviceParam}`);
    }
    if (
      shippingParam === 'Sea freight' ||
      shippingParam === 'Air freight' ||
      shippingParam === 'Not sure'
    ) {
      setValue('shipping_method', shippingParam);
    }
  }, [searchParams, setValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setSelectedFile(null);
      setFileError(null);
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setFileError(
        'Please select a valid image (JPG, PNG, WEBP) or specification document (PDF, DOC, DOCX, XLS, XLSX).'
      );
      e.target.value = '';
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setFileError('File size must not exceed 10 MB.');
      e.target.value = '';
      return;
    }

    const sizeKB = Math.round(file.size / 1024);
    const formattedSize =
      sizeKB > 1024 ? `${(sizeKB / 1024).toFixed(1)} MB` : `${sizeKB} KB`;

    setSelectedFile({
      name: sanitizeInput(file.name),
      size: formattedSize,
    });
    setFileError(null);
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    setFileError(null);
  };

  const buildPrefilledMessage = (vals: QuoteFormValues): string => {
    const lines = [
      `*NEW QUOTATION REQUEST — ${SITE_CONFIG.business.name.toUpperCase()}*`,
      `-----------------------------------------`,
      `*Full Name:* ${sanitizeInput(vals.full_name)}`,
      vals.company_name ? `*Company Name:* ${sanitizeInput(vals.company_name)}` : null,
      `*Phone Number:* ${sanitizeInput(vals.phone_number)}`,
      `*WhatsApp Number:* ${sanitizeInput(vals.whatsapp_number)}`,
      vals.email ? `*Email:* ${sanitizeInput(vals.email)}` : null,
      `-----------------------------------------`,
      `*Product Category:* ${sanitizeInput(vals.product_category)}`,
      `*Product Name / Description:* ${sanitizeInput(vals.product_description)}`,
      vals.product_link ? `*Product Link:* ${sanitizeInput(vals.product_link)}` : null,
      selectedFile
        ? `*Attached File Reference:* ${selectedFile.name} (${selectedFile.size}) — [Will attach in chat]`
        : null,
      `*Quantity Required:* ${sanitizeInput(vals.quantity)}`,
      `*Preferred Shipping Method:* ${vals.shipping_method}`,
      `*Destination (City & State):* ${sanitizeInput(vals.destination)}`,
      vals.target_delivery_timeframe
        ? `*Target Delivery Timeframe:* ${sanitizeInput(vals.target_delivery_timeframe)}`
        : null,
      vals.budget ? `*Target Budget:* ${sanitizeInput(vals.budget)}` : null,
      vals.additional_information
        ? `*Additional Information:* ${sanitizeInput(vals.additional_information)}`
        : null,
    ].filter(Boolean);

    return lines.join('\n');
  };

  const onSubmit = async (data: QuoteFormValues) => {
    try {
      const endpoint = SITE_CONFIG.futureFeatures.quoteSubmissionEndpoint;
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            fileReference: selectedFile,
            submittedAt: new Date().toISOString(),
          }),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      setSubmittedValues(data);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setSubmittedValues(data);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prefilledText = submittedValues ? buildPrefilledMessage(submittedValues) : '';
  const whatsappHandoffUrl = `${SITE_CONFIG.contacts.whatsapp.href}?text=${encodeURIComponent(
    prefilledText
  )}`;
  const emailHandoffUrl = submittedValues
    ? `${SITE_CONFIG.contacts.email.href}?subject=${encodeURIComponent(
        `Quotation Request: ${submittedValues.product_category} — ${submittedValues.full_name}`
      )}&body=${encodeURIComponent(prefilledText.replace(/\*/g, ''))}`
    : '';

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(prefilledText.replace(/\*/g, ''));
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch {
      // Ignore clipboard error
    }
  };

  return (
    <>
      <PageMeta
        title={PAGE_METADATA.requestAQuote.title}
        description={PAGE_METADATA.requestAQuote.description}
      />

      {/* Editorial Page Hero */}
      <section className="bg-brand-midnight text-white py-16 sm:py-22 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-cyan font-bold block mb-3">
              REQUEST A QUOTATION // SOURCE TO DOOR
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Tell Us What You Need and Request a Quotation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Share the product, quantity, destination, and any specifications. Our team will
              review your request and follow up with the relevant sourcing and delivery
              information.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Sidebar */}
      <section className="py-16 sm:py-24 bg-brand-softWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Form Column (8 columns) */}
            <div className="lg:col-span-8">
              {submittedValues ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-md bg-white border border-emerald-200 p-8 sm:p-10 shadow-premium"
                >
                  <div className="w-14 h-14 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-semibold uppercase tracking-wider">
                    Quotation Details Prepared
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-midnight mt-3">
                    Thank You, {submittedValues.full_name}. Your Quotation Summary Is Ready!
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
                    Click below to open WhatsApp with your complete quotation request pre-filled
                    and send it directly to our procurement desk (
                    <strong className="text-brand-midnight">
                      {SITE_CONFIG.contacts.whatsapp.display}
                    </strong>
                    ).
                  </p>

                  {selectedFile && (
                    <div className="mt-4 p-4 rounded-md bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950">
                      <strong>Attachment Note:</strong> Please attach your selected file (
                      <span className="font-mono font-semibold">{selectedFile.name}</span>)
                      directly inside the WhatsApp chat or email once it opens.
                    </div>
                  )}

                  <div className="mt-7 flex flex-col sm:flex-row gap-3.5">
                    <a
                      href={whatsappHandoffUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-base font-bold transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" aria-hidden="true" />
                      <span>Continue &amp; Send on WhatsApp</span>
                    </a>

                    <a
                      href={emailHandoffUrl}
                      className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-md bg-brand-midnight hover:bg-brand-navy text-white text-sm font-semibold transition-colors"
                    >
                      <Mail className="w-4 h-4 text-brand-cyan" aria-hidden="true" />
                      <span>Send via Email</span>
                    </a>
                  </div>

                  <div className="mt-8 rounded-md bg-brand-softWhite border border-slate-200 p-5">
                    <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                        PRE-FILLED QUOTATION MESSAGE PREVIEW
                      </span>
                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cobalt hover:underline"
                      >
                        {copiedSummary ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Summary</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-xs text-slate-700 font-mono whitespace-pre-wrap leading-relaxed">
                      {prefilledText.replace(/\*/g, '')}
                    </pre>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSubmittedValues(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-brand-midnight"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Edit Request Details</span>
                    </button>

                    <Link
                      to="/catalogue"
                      className="text-xs font-bold text-brand-cobalt hover:underline"
                    >
                      Return to Product Catalogue
                    </Link>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="rounded-md bg-white border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-9"
                >
                  {/* Section 1: Contact Details */}
                  <div>
                    <div className="pb-3 mb-5 border-b border-slate-100">
                      <span className="text-xs font-mono uppercase tracking-wider text-brand-cobalt font-bold">
                        01 // YOUR CONTACT DETAILS
                      </span>
                      <h2 className="text-xl font-display font-bold text-brand-midnight mt-0.5">
                        Who Should We Send the Quotation To?
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="full_name"
                          className="block text-sm font-semibold text-brand-midnight mb-1.5"
                        >
                          Full name <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="full_name"
                          type="text"
                          placeholder="e.g. Chukwudi Okafor"
                          {...register('full_name')}
                          aria-invalid={Boolean(errors.full_name)}
                          className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                            errors.full_name
                              ? 'border-red-500 bg-red-50/40'
                              : 'border-slate-300 focus:border-brand-cobalt'
                          }`}
                        />
                        {errors.full_name && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.full_name.message}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="company_name"
                          className="block text-sm font-semibold text-brand-midnight mb-1.5"
                        >
                          Company name{' '}
                          <span className="text-xs font-normal text-slate-400">(Optional)</span>
                        </label>
                        <input
                          id="company_name"
                          type="text"
                          placeholder="Your business or organization name"
                          {...register('company_name')}
                          className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:outline-none focus:border-brand-cobalt"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone_number"
                          className="block text-sm font-semibold text-brand-midnight mb-1.5"
                        >
                          Phone number <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="phone_number"
                          type="tel"
                          placeholder="e.g. 0803 000 0000"
                          {...register('phone_number')}
                          aria-invalid={Boolean(errors.phone_number)}
                          className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                            errors.phone_number
                              ? 'border-red-500 bg-red-50/40'
                              : 'border-slate-300 focus:border-brand-cobalt'
                          }`}
                        />
                        {errors.phone_number && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.phone_number.message}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="whatsapp_number"
                          className="block text-sm font-semibold text-brand-midnight mb-1.5"
                        >
                          WhatsApp number <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="whatsapp_number"
                          type="tel"
                          placeholder="e.g. 0803 000 0000"
                          {...register('whatsapp_number')}
                          aria-invalid={Boolean(errors.whatsapp_number)}
                          className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                            errors.whatsapp_number
                              ? 'border-red-500 bg-red-50/40'
                              : 'border-slate-300 focus:border-brand-cobalt'
                          }`}
                        />
                        {errors.whatsapp_number && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.whatsapp_number.message}</span>
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-brand-midnight mb-1.5"
                        >
                          Email address{' '}
                          <span className="text-xs font-normal text-slate-400">(Optional)</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          {...register('email')}
                          aria-invalid={Boolean(errors.email)}
                          className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-red-500 bg-red-50/40'
                              : 'border-slate-300 focus:border-brand-cobalt'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email.message}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Product Details */}
                  <div>
                    <div className="pb-3 mb-5 border-b border-slate-100">
                      <span className="text-xs font-mono uppercase tracking-wider text-brand-cobalt font-bold">
                        02 // PRODUCT SPECIFICATIONS
                      </span>
                      <h2 className="text-xl font-display font-bold text-brand-midnight mt-0.5">
                        What Product Would You Like to Source or Ship?
                      </h2>
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="product_category"
                            className="block text-sm font-semibold text-brand-midnight mb-1.5"
                          >
                            Product category <span className="text-red-600">*</span>
                          </label>
                          <select
                            id="product_category"
                            {...register('product_category')}
                            aria-invalid={Boolean(errors.product_category)}
                            className={`w-full px-4 py-3 rounded-md border text-sm bg-white focus:outline-none transition-colors ${
                              errors.product_category
                                ? 'border-red-500 bg-red-50/40'
                                : 'border-slate-300 focus:border-brand-cobalt'
                            }`}
                          >
                            <option value="">Select a category...</option>
                            {PRODUCT_CATEGORIES.map((cat) => (
                              <option key={cat.id} value={cat.name}>
                                {cat.name}
                              </option>
                            ))}
                          </select>
                          {errors.product_category && (
                            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.product_category.message}</span>
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="quantity"
                            className="block text-sm font-semibold text-brand-midnight mb-1.5"
                          >
                            Quantity required <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="quantity"
                            type="text"
                            placeholder="e.g. 50 units, 10 cartons, 1x 40ft container"
                            {...register('quantity')}
                            aria-invalid={Boolean(errors.quantity)}
                            className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                              errors.quantity
                                ? 'border-red-500 bg-red-50/40'
                                : 'border-slate-300 focus:border-brand-cobalt'
                            }`}
                          />
                          {errors.quantity && (
                            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.quantity.message}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="product_description"
                          className="block text-sm font-semibold text-brand-midnight mb-1.5"
                        >
                          Product name or description <span className="text-red-600">*</span>
                        </label>
                        <textarea
                          id="product_description"
                          rows={3}
                          placeholder="Describe the product name, model, capacity, size, wattage, or technical specifications..."
                          {...register('product_description')}
                          aria-invalid={Boolean(errors.product_description)}
                          className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                            errors.product_description
                              ? 'border-red-500 bg-red-50/40'
                              : 'border-slate-300 focus:border-brand-cobalt'
                          }`}
                        />
                        {errors.product_description && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.product_description.message}</span>
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="product_link"
                            className="block text-sm font-semibold text-brand-midnight mb-1.5"
                          >
                            Product link{' '}
                            <span className="text-xs font-normal text-slate-400">(Optional)</span>
                          </label>
                          <input
                            id="product_link"
                            type="url"
                            placeholder="https://... (Alibaba, 1688, Made-in-China)"
                            {...register('product_link')}
                            aria-invalid={Boolean(errors.product_link)}
                            className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                              errors.product_link
                                ? 'border-red-500 bg-red-50/40'
                                : 'border-slate-300 focus:border-brand-cobalt'
                            }`}
                          />
                          {errors.product_link && (
                            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{errors.product_link.message}</span>
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="product_file"
                            className="block text-sm font-semibold text-brand-midnight mb-1.5"
                          >
                            Product image or specification{' '}
                            <span className="text-xs font-normal text-slate-400">(Optional)</span>
                          </label>

                          {selectedFile ? (
                            <div className="flex items-center justify-between px-4 py-2.5 rounded-md bg-brand-softWhite border border-brand-cobalt/40 text-xs">
                              <div className="flex items-center gap-2 truncate pr-2">
                                <FileText className="w-4 h-4 text-brand-cobalt shrink-0" />
                                <span className="font-semibold text-brand-midnight truncate">
                                  {selectedFile.name}
                                </span>
                                <span className="text-slate-500 shrink-0">
                                  ({selectedFile.size})
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={clearSelectedFile}
                                className="text-slate-400 hover:text-red-600 p-1"
                                aria-label="Remove selected file"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <label
                              htmlFor="product_file"
                              className="flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-dashed border-slate-300 hover:border-brand-cobalt bg-slate-50/60 hover:bg-brand-softWhite text-xs font-semibold text-slate-700 cursor-pointer transition-colors"
                            >
                              <Upload className="w-4 h-4 text-brand-cobalt" aria-hidden="true" />
                              <span>Choose Image or Spec Sheet (Max 10MB)</span>
                              <input
                                id="product_file"
                                name="product_file"
                                type="file"
                                accept=".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx,.xls,.xlsx"
                                onChange={handleFileChange}
                                className="sr-only"
                              />
                            </label>
                          )}

                          {fileError && (
                            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>{fileError}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Shipping & Destination */}
                  <div>
                    <div className="pb-3 mb-5 border-b border-slate-100">
                      <span className="text-xs font-mono uppercase tracking-wider text-brand-cobalt font-bold">
                        03 // SHIPPING &amp; DELIVERY PREFERENCES
                      </span>
                      <h2 className="text-xl font-display font-bold text-brand-midnight mt-0.5">
                        Freight Mode, Destination &amp; Timeline
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="shipping_method"
                          className="block text-sm font-semibold text-brand-midnight mb-1.5"
                        >
                          Preferred shipping method <span className="text-red-600">*</span>
                        </label>
                        <select
                          id="shipping_method"
                          {...register('shipping_method')}
                          aria-invalid={Boolean(errors.shipping_method)}
                          className={`w-full px-4 py-3 rounded-md border text-sm bg-white focus:outline-none transition-colors ${
                            errors.shipping_method
                              ? 'border-red-500 bg-red-50/40'
                              : 'border-slate-300 focus:border-brand-cobalt'
                          }`}
                        >
                          <option value="">Select shipping method...</option>
                          <option value="Sea freight">Sea freight</option>
                          <option value="Air freight">Air freight</option>
                          <option value="Not sure">Not sure</option>
                        </select>
                        {errors.shipping_method && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.shipping_method.message}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="destination"
                          className="block text-sm font-semibold text-brand-midnight mb-1.5"
                        >
                          Destination city and state <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="destination"
                          type="text"
                          placeholder="e.g. Ojo, Lagos State or Abuja, FCT"
                          {...register('destination')}
                          aria-invalid={Boolean(errors.destination)}
                          className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                            errors.destination
                              ? 'border-red-500 bg-red-50/40'
                              : 'border-slate-300 focus:border-brand-cobalt'
                          }`}
                        />
                        {errors.destination && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.destination.message}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="target_delivery_timeframe"
                          className="block text-sm font-semibold text-brand-midnight mb-1.5"
                        >
                          Target delivery timeframe{' '}
                          <span className="text-xs font-normal text-slate-400">(Optional)</span>
                        </label>
                        <input
                          id="target_delivery_timeframe"
                          type="text"
                          placeholder="e.g. Urgent / Next month / Q2 project"
                          {...register('target_delivery_timeframe')}
                          className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:outline-none focus:border-brand-cobalt"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-semibold text-brand-midnight mb-1.5"
                        >
                          Target budget{' '}
                          <span className="text-xs font-normal text-slate-400">(Optional)</span>
                        </label>
                        <input
                          id="budget"
                          type="text"
                          placeholder="Estimated budget in NGN or USD (if any)"
                          {...register('budget')}
                          className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:outline-none focus:border-brand-cobalt"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="additional_information"
                          className="block text-sm font-semibold text-brand-midnight mb-1.5"
                        >
                          Additional information{' '}
                          <span className="text-xs font-normal text-slate-400">(Optional)</span>
                        </label>
                        <textarea
                          id="additional_information"
                          rows={3}
                          placeholder="Share any custom branding needs, voltage requirements, packaging instructions, or questions..."
                          {...register('additional_information')}
                          className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:outline-none focus:border-brand-cobalt"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Privacy & Quotation Notice */}
                  <div className="p-4 rounded-md bg-brand-softWhite border border-slate-200/80 space-y-2 text-xs text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-brand-midnight">Privacy Notice:</strong> Your contact
                      details and product specifications are used strictly by{' '}
                      {SITE_CONFIG.business.name} to review your enquiry and prepare your
                      quotation. See our{' '}
                      <Link to="/privacy-policy" className="text-brand-cobalt underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <p>
                      <strong className="text-brand-midnight">Quotation Notice:</strong>{' '}
                      {POLICIES_CONFIG.quotationNotice}
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md bg-brand-cobalt hover:bg-blue-500 disabled:opacity-60 text-white text-base font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                        <span>Preparing Your Quotation Request...</span>
                      </>
                    ) : (
                      <span>Submit Quotation Request</span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Sidebar (4 columns) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-md bg-brand-midnight text-white p-7 border border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-bold">
                  SLYBEST TRADE BRIDGE
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-1.5">
                  How We Handle Your Request
                </h3>

                <ol className="mt-5 space-y-4 text-sm text-slate-300">
                  {SITE_CONFIG.tradeBridgeFourStages.map((stage) => (
                    <li key={stage.number} className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-brand-cyan px-2 py-1 rounded bg-white/10 shrink-0 mt-0.5">
                        {stage.number}
                      </span>
                      <div>
                        <strong className="text-white block">{stage.title}</strong>
                        <span className="text-xs text-slate-300">{stage.description}</span>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                  <a
                    href={SITE_CONFIG.contacts.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Chat on WhatsApp ({SITE_CONFIG.contacts.whatsapp.display})</span>
                  </a>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs font-mono text-slate-300">
                    {SITE_CONFIG.contacts.phoneNumbers.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="inline-flex items-center gap-1.5 hover:text-brand-cyan"
                      >
                        <Phone className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-white border border-slate-200 p-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-brand-cobalt font-bold mb-2">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  <span>LAGOS LOCATION</span>
                </div>
                <p className="text-sm font-semibold text-brand-midnight">
                  {SITE_CONFIG.contacts.nigeriaLocation.address}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Business Hours: {SITE_CONFIG.contacts.businessHours}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
