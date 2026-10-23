import { useState } from 'react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import {
  enquiryFormMessage,
  buildWhatsAppLink,
  type EnquiryFormPayload,
} from '@/utils/whatsapp';

type Status = 'idle' | 'success' | 'error';

const initial: EnquiryFormPayload = {
  name: '',
  businessName: '',
  mobile: '',
  city: '',
  products: '',
  quantity: '',
  message: '',
};

// Indian mobile number: 10 digits, optional +91/0 prefix
const mobileRegex = /^(\+91[\s-]?|0)?[6-9]\d{9}$/;

export default function EnquiryForm({
  productContext,
  compact = false,
}: {
  productContext?: string;
  compact?: boolean;
}) {
  const [data, setData] = useState<EnquiryFormPayload>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (key: keyof EnquiryFormPayload, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: '' }));
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = 'Please enter your name.';
    if (!data.mobile.trim()) {
      e.mobile = 'Please enter your mobile number.';
    } else if (!mobileRegex.test(data.mobile.trim())) {
      e.mobile = 'Please enter a valid 10-digit mobile number.';
    }
    if (!data.products.trim() && !productContext) {
      e.products = 'Please tell us what you are interested in.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }
    const payload: EnquiryFormPayload = {
      ...data,
      products: data.products || productContext || 'General wholesale enquiry',
    };
    const message = enquiryFormMessage(payload);
    const link = buildWhatsAppLink(message);
    setStatus('success');
    // Open WhatsApp with the pre-filled enquiry in a new tab
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const reset = () => {
    setData(initial);
    setStatus('idle');
    setErrors({});
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center border border-champagne-200 bg-champagne-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-champagne-500" />
        <h3 className="mt-4 heading-md">Enquiry Ready</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
          Your wholesale enquiry has been prepared and opened in WhatsApp. Please send the
          message to complete your enquiry. If WhatsApp did not open, please try again.
        </p>
        <div className="mt-6 flex gap-3">
          <button onClick={reset} className="btn-outline">
            Submit Another
          </button>
          <a
            href={buildWhatsAppLink(enquiryFormMessage({ ...data, products: data.products || productContext || 'General wholesale enquiry' }))}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            Reopen WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === 'error' && Object.keys(errors).length > 0 && (
        <div className="flex items-center gap-3 border border-red-200 bg-red-50 p-4">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
          <p className="text-sm text-red-700">
            Please review the highlighted fields and try again.
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ef-name" className="block text-xs font-medium uppercase tracking-widest text-ink-500">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="ef-name"
            type="text"
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            className={`input-field mt-2 ${errors.name ? 'border-red-400' : ''}`}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="ef-business" className="block text-xs font-medium uppercase tracking-widest text-ink-500">
            Business / Shop Name
          </label>
          <input
            id="ef-business"
            type="text"
            value={data.businessName}
            onChange={(e) => update('businessName', e.target.value)}
            className="input-field mt-2"
            placeholder="Your shop or business"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ef-mobile" className="block text-xs font-medium uppercase tracking-widest text-ink-500">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="ef-mobile"
            type="tel"
            inputMode="tel"
            value={data.mobile}
            onChange={(e) => update('mobile', e.target.value)}
            className={`input-field mt-2 ${errors.mobile ? 'border-red-400' : ''}`}
            placeholder="10-digit mobile number"
            aria-invalid={!!errors.mobile}
          />
          {errors.mobile && <p className="mt-1.5 text-xs text-red-600">{errors.mobile}</p>}
        </div>
        <div>
          <label htmlFor="ef-city" className="block text-xs font-medium uppercase tracking-widest text-ink-500">
            City / Location
          </label>
          <input
            id="ef-city"
            type="text"
            value={data.city}
            onChange={(e) => update('city', e.target.value)}
            className="input-field mt-2"
            placeholder="Your city"
          />
        </div>
      </div>

      {!compact && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="ef-products" className="block text-xs font-medium uppercase tracking-widest text-ink-500">
              Interested Products / Categories{' '}
              {!productContext && <span className="text-red-500">*</span>}
            </label>
            <input
              id="ef-products"
              type="text"
              value={data.products || productContext || ''}
              onChange={(e) => update('products', e.target.value)}
              className={`input-field mt-2 ${errors.products ? 'border-red-400' : ''}`}
              placeholder="e.g. Men's shirts, formal trousers"
              aria-invalid={!!errors.products}
            />
            {errors.products && <p className="mt-1.5 text-xs text-red-600">{errors.products}</p>}
          </div>
          <div>
            <label htmlFor="ef-qty" className="block text-xs font-medium uppercase tracking-widest text-ink-500">
              Estimated Quantity
            </label>
            <input
              id="ef-qty"
              type="text"
              value={data.quantity}
              onChange={(e) => update('quantity', e.target.value)}
              className="input-field mt-2"
              placeholder="e.g. 50 pieces, 100 pcs"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="ef-message" className="block text-xs font-medium uppercase tracking-widest text-ink-500">
          Message / Requirements
        </label>
        <textarea
          id="ef-message"
          rows={4}
          value={data.message}
          onChange={(e) => update('message', e.target.value)}
          className="input-field mt-2 resize-none"
          placeholder="Tell us about your requirements, sizes, colours, delivery, etc."
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-primary">
          <Send className="h-4 w-4" />
          Submit Enquiry via WhatsApp
        </button>
        <p className="flex items-center text-xs text-ink-400">
          Your enquiry opens in WhatsApp with all details pre-filled.
        </p>
      </div>
    </form>
  );
}
