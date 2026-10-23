export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  alt: string;
  colors: string[];
  sizes: string[];
  fabric?: string;
  minOrderQty?: number;
  sku?: string;
  featured?: boolean;
  isDemo: boolean;
}

/**
 * Centralized product data.
 *
 * All entries below are DEMONSTRATION data — clearly marked with `isDemo: true`.
 * The owner should replace these with real inventory photos, names, and details.
 *
 * Prices and SKUs are intentionally omitted. The enquiry flow asks
 * the owner for availability and wholesale pricing via WhatsApp.
 */

export const categories: Category[] = [
  {
    slug: 'mens-shirts',
    name: "Men's Shirts",
    description: 'Formal and casual shirts in a range of fabrics, weaves, and finishes.',
    image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Men\u2019s shirts neatly hanging on a clothing rack',
  },
  {
    slug: 'mens-tshirts',
    name: "Men's T-Shirts",
    description: 'Plain, printed, and polo t-shirts suitable for retail and resale.',
    image: 'https://images.pexels.com/photos/36074834/pexels-photo-36074834.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Colourful t-shirts arranged on hangers in a store',
  },
  {
    slug: 'trousers-pants',
    name: 'Trousers & Pants',
    description: 'Formal trousers, chinos, and casual pants in multiple fits.',
    image: 'https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Denim and trousers showing various shades and textures',
  },
  {
    slug: 'casual-wear',
    name: 'Casual Wear',
    description: 'Everyday apparel for relaxed, off-duty styling.',
    image: 'https://images.pexels.com/photos/8311880/pexels-photo-8311880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'People browsing casual clothing in a modern fashion store',
  },
  {
    slug: 'formal-wear',
    name: 'Formal Wear',
    description: 'Suits, blazers, and tailored separates for formal occasions.',
    image: 'https://images.pexels.com/photos/13673656/pexels-photo-13673656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Men\u2019s formal suit displayed in a boutique window',
  },
  {
    slug: 'other-apparel',
    name: 'Other Apparel',
    description: 'Seasonal, ethnic, and miscellaneous garments for diverse retail needs.',
    image: 'https://images.pexels.com/photos/12713395/pexels-photo-12713395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Man wearing traditional Indian formal attire',
  },
];

export const products: Product[] = [
  {
    id: 'p001',
    slug: 'classic-cotton-formal-shirt',
    name: 'Classic Cotton Formal Shirt',
    category: 'mens-shirts',
    description:
      'A versatile formal shirt in breathable cotton with a clean, structured collar. Suitable for office and occasion wear across seasons.',
    images: [
      'https://images.pexels.com/photos/16062780/pexels-photo-16062780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/2421356/pexels-photo-2421356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17960004/pexels-photo-17960004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Man wearing a classic cotton formal shirt',
    colors: ['White', 'Sky Blue', 'Light Pink'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fabric: '100% Cotton',
    featured: true,
    isDemo: true,
  },
  {
    id: 'p002',
    slug: 'slim-fit-stripe-shirt',
    name: 'Slim Fit Stripe Shirt',
    category: 'mens-shirts',
    description:
      'A contemporary slim-fit shirt with a refined stripe pattern. A strong seller for modern retail shelves.',
    images: [
      'https://images.pexels.com/photos/16062780/pexels-photo-16062780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17901274/pexels-photo-17901274.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Man wearing a slim fit stripe shirt',
    colors: ['Blue Stripe', 'Grey Stripe'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: 'Cotton Blend',
    featured: true,
    isDemo: true,
  },
  {
    id: 'p003',
    slug: 'premium-polo-tshirt',
    name: 'Premium Polo T-Shirt',
    category: 'mens-tshirts',
    description:
      'A classic pique-knit polo with a structured collar and ribbed cuffs. A wardrobe staple for casual retail collections.',
    images: [
      'https://images.pexels.com/photos/30197672/pexels-photo-30197672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/28261878/pexels-photo-28261878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Man wearing a premium polo t-shirt',
    colors: ['Navy', 'Black', 'Maroon', 'Olive'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    fabric: 'Pique Cotton',
    featured: true,
    isDemo: true,
  },
  {
    id: 'p004',
    slug: 'plain-round-neck-tshirt',
    name: 'Plain Round Neck T-Shirt',
    category: 'mens-tshirts',
    description:
      'A wardrobe essential — plain round-neck t-shirt in solid colours. Ideal for bulk resale and value retail.',
    images: [
      'https://images.pexels.com/photos/6311251/pexels-photo-6311251.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9897551/pexels-photo-9897551.png?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Man wearing a plain white round neck t-shirt',
    colors: ['White', 'Black', 'Grey', 'Navy', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fabric: 'Combed Cotton',
    featured: true,
    isDemo: true,
  },
  {
    id: 'p005',
    slug: 'tailored-formal-trousers',
    name: 'Tailored Formal Trousers',
    category: 'trousers-pants',
    description:
      'Flat-front formal trousers with a clean drape and comfortable fit. A dependable category for office-wear retail.',
    images: [
      'https://images.pexels.com/photos/9464625/pexels-photo-9464625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6207132/pexels-photo-6207132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Tailored formal trousers paired with elegant shoes',
    colors: ['Charcoal', 'Black', 'Navy'],
    sizes: ['30', '32', '34', '36', '38', '40'],
    fabric: 'Poly-Viscose Blend',
    featured: true,
    isDemo: true,
  },
  {
    id: 'p006',
    slug: 'chino-casual-pants',
    name: 'Chino Casual Pants',
    category: 'trousers-pants',
    description:
      'A smart-casual chino with a tapered leg and a soft, brushed finish. Popular across seasonal retail lines.',
    images: [
      'https://images.pexels.com/photos/16238583/pexels-photo-16238583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/20574052/pexels-photo-20574052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Person wearing chino casual pants with a white sweater',
    colors: ['Beige', 'Khaki', 'Olive', 'Navy'],
    sizes: ['30', '32', '34', '36', '38'],
    fabric: 'Cotton Twill',
    isDemo: true,
  },
  {
    id: 'p007',
    slug: 'printed-casual-shirt',
    name: 'Printed Casual Shirt',
    category: 'casual-wear',
    description:
      'A relaxed printed shirt with a soft hand-feel and a contemporary print. A strong pick for youth-focussed retail.',
    images: [
      'https://images.pexels.com/photos/2421356/pexels-photo-2421356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Man wearing a printed casual shirt',
    colors: ['Floral Print', 'Geometric Print'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: 'Rayon',
    isDemo: true,
  },
  {
    id: 'p008',
    slug: 'everyday-casual-tee',
    name: 'Everyday Casual Tee',
    category: 'casual-wear',
    description:
      'A lightweight, easy-care casual tee designed for everyday comfort and value-conscious retail.',
    images: [
      'https://images.pexels.com/photos/9897551/pexels-photo-9897551.png?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8162656/pexels-photo-8162656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Man wearing an everyday casual tee',
    colors: ['Heather Grey', 'White', 'Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fabric: 'Cotton Blend',
    isDemo: true,
  },
  {
    id: 'p009',
    slug: 'two-piece-formal-suit',
    name: 'Two-Piece Formal Suit',
    category: 'formal-wear',
    description:
      'A tailored two-piece suit with a structured shoulder and clean lapel. A dependable occasion-wear category for retail.',
    images: [
      'https://images.pexels.com/photos/17542178/pexels-photo-17542178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/28557819/pexels-photo-28557819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Man wearing a two-piece formal suit',
    colors: ['Black', 'Navy', 'Charcoal'],
    sizes: ['38', '40', '42', '44', '46'],
    fabric: 'Poly-Wool Blend',
    featured: true,
    isDemo: true,
  },
  {
    id: 'p010',
    slug: 'classic-blazer',
    name: 'Classic Blazer',
    category: 'formal-wear',
    description:
      'A versatile single-breasted blazer suitable for formal and smart-casual styling. A valuable addition to occasion-wear ranges.',
    images: [
      'https://images.pexels.com/photos/5350693/pexels-photo-5350693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7256412/pexels-photo-7256412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Man wearing a classic blazer',
    colors: ['Black', 'Navy', 'Beige'],
    sizes: ['38', '40', '42', '44'],
    fabric: 'Poly-Viscose',
    isDemo: true,
  },
  {
    id: 'p011',
    slug: 'festive-ethnic-kurta',
    name: 'Festive Ethnic Kurta',
    category: 'other-apparel',
    description:
      'A festive ethnic kurta with traditional detailing — a seasonal favourite for festival and wedding-adjacent retail.',
    images: [
      'https://images.pexels.com/photos/31371016/pexels-photo-31371016.png?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14768018/pexels-photo-14768018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Man wearing a festive ethnic kurta',
    colors: ['Maroon', 'Cream', 'Emerald'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    fabric: 'Cotton-Silk Blend',
    isDemo: true,
  },
  {
    id: 'p012',
    slug: 'printed-casual-shirt-two',
    name: 'Ombre Casual Shirt',
    category: 'casual-wear',
    description:
      'An ombre-finish casual shirt with a soft gradient and a relaxed drape. A conversation piece for contemporary retail racks.',
    images: [
      'https://images.pexels.com/photos/31618286/pexels-photo-31618286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17890975/pexels-photo-17890975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    alt: 'Man wearing an ombre casual shirt',
    colors: ['Ombre Blue', 'Ombre Grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    fabric: 'Rayon Blend',
    isDemo: true,
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
