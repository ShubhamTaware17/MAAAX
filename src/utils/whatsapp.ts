import { businessConfig } from '@/config/business';

/**
 * Generate a wa.me link with a pre-filled, URL-encoded message.
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${encoded}`;
}

export const defaultWhatsAppMessage =
  'Hello Maaax Wholesaler, I am interested in your clothing wholesale collection. Please share the available products, sizes, minimum order quantities, and wholesale prices.';

export const defaultWhatsAppLink = buildWhatsAppLink(defaultWhatsAppMessage);

export function productEnquiryMessage(opts: {
  productName: string;
  colors?: string[];
  sizes?: string[];
  quantity?: string;
  note?: string;
}): string {
  const lines: string[] = [
    `Hello Maaax Wholesaler,`,
    ``,
    `I am interested in the following product:`,
    `• Product: ${opts.productName}`,
  ];
  if (opts.colors && opts.colors.length) {
    lines.push(`• Colours of interest: ${opts.colors.join(', ')}`);
  }
  if (opts.sizes && opts.sizes.length) {
    lines.push(`• Sizes of interest: ${opts.sizes.join(', ')}`);
  }
  if (opts.quantity) {
    lines.push(`• Estimated quantity: ${opts.quantity}`);
  }
  if (opts.note) {
    lines.push(`• Note: ${opts.note}`);
  }
  lines.push(``, `Please share availability and wholesale pricing.`);
  return lines.join('\n');
}

export interface EnquiryFormPayload {
  name: string;
  businessName?: string;
  mobile: string;
  city?: string;
  products?: string;
  quantity?: string;
  message?: string;
}

export function enquiryFormMessage(d: EnquiryFormPayload): string {
  const lines: string[] = [
    `Hello Maaax Wholesaler, I would like to submit a wholesale enquiry.`,
    ``,
    `• Name: ${d.name}`,
  ];
  if (d.businessName) lines.push(`• Business / Shop: ${d.businessName}`);
  lines.push(`• Mobile: ${d.mobile}`);
  if (d.city) lines.push(`• City: ${d.city}`);
  if (d.products) lines.push(`• Interested in: ${d.products}`);
  if (d.quantity) lines.push(`• Estimated quantity: ${d.quantity}`);
  if (d.message) lines.push(`• Message: ${d.message}`);
  lines.push(``, `Please share availability and wholesale pricing.`);
  return lines.join('\n');
}

export function buildTelLink(): string {
  return `tel:${businessConfig.phoneRaw}`;
}

export function buildMapsDirectionsUrl(): string {
  return businessConfig.maps.directionsUrl;
}
