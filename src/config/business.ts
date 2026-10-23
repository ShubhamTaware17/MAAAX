export const businessConfig = {
  name: 'Maaax Wholesaler',
  marathiName: 'मास होलसेलर',
  tagline: 'Wholesale Fashion. Retail-Ready Style.',
  category: 'Clothing Wholesaler',
  phone: '+91 98073 94444',
  phoneRaw: '+919807394444',
  whatsappNumber: '919807394444',
  email: '', // Add when confirmed by owner
  address: {
    line1: 'Shop No. 88, Mahadevnagar',
    line2: 'Opposite AM College, Manjri Road, Hadapsar',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '412307',
    country: 'India',
    full: 'Shop No. 88, Mahadevnagar, opposite AM College, Manjri Road, Hadapsar, Pune, Maharashtra 412307, India',
    plusCode: 'GX33+VQ Pune, Maharashtra',
  },
  hours: {
    display: '10:00 AM – 10:00 PM',
    note: 'Hours subject to confirmation by the business owner',
    openTime: '10:00',
    closeTime: '22:00',
    days: 'Monday – Sunday',
  },
  maps: {
    query: 'Maaax Wholesaler, Mahadevnagar, Manjri Road, Hadapsar, Pune, Maharashtra 412307',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Shop+No.+88+Mahadevnagar+opposite+AM+College+Manjri+Road+Hadapsar+Pune+Maharashtra+412307',
    embedUrl:
      'https://www.google.com/maps?q=Shop+No.+88+Mahadevnagar+opposite+AM+College+Manjri+Road+Hadapsar+Pune+Maharashtra+412307&output=embed',
  },
  announcement:
    'Wholesale enquiries open — New arrivals now available for retailers & bulk buyers',
  social: {
    // Add social links when confirmed by owner
    instagram: '',
    facebook: '',
  },
} as const;

export type BusinessConfig = typeof businessConfig;
