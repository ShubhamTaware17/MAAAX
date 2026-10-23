import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  MessageCircle,
  ClipboardList,
  Check,
  ShoppingCart,
  Tag,
  Ruler,
  Layers,
  Palette,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import {
  getProductBySlug,
  getRelatedProducts,
  getCategoryBySlug,
} from '@/data/catalog';
import {
  buildWhatsAppLink,
  productEnquiryMessage,
  defaultWhatsAppLink,
} from '@/utils/whatsapp';

export default function ProductDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [quantity, setQuantity] = useState('');

  if (!product) {
    return <Navigate to="/collections" replace />;
  }

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product);

  const toggle = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  const waLink = buildWhatsAppLink(
    productEnquiryMessage({
      productName: product.name,
      colors: selectedColors.length ? selectedColors : product.colors,
      sizes: selectedSizes.length ? selectedSizes : product.sizes,
      quantity: quantity || undefined,
    }),
  );

  return (
    <>
      <Seo
        title={`${product.name} | Maaax Wholesaler`}
        description={product.description}
        path={`/product/${product.slug}`}
      />

      {/* Breadcrumb */}
      <div className="container-wide pt-28 lg:pt-32">
        <Link
          to="/collections"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-ink-500 transition-colors hover:text-champagne-600"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Collections
        </Link>
      </div>

      {/* Main */}
      <section className="py-8 lg:py-12">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="overflow-hidden bg-ivory-100">
                <img
                  src={product.images[activeImage]}
                  alt={product.alt}
                  className="aspect-[3/4] w-full object-cover"
                  loading="eager"
                />
              </div>
              {product.images.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative overflow-hidden border-2 transition-colors ${
                        activeImage === i
                          ? 'border-champagne-500'
                          : 'border-transparent hover:border-ink-200'
                      }`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img
                        src={img}
                        alt={product.alt}
                        className="h-24 w-20 object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              {category && (
                <span className="text-[0.65rem] font-medium uppercase tracking-widest text-champagne-600">
                  {category.name}
                </span>
              )}
              <h1 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                {product.description}
              </p>

              {product.isDemo && (
                <p className="mt-4 border border-champagne-200 bg-champagne-50 px-4 py-3 text-xs text-champagne-700">
                  This is a demonstration product. Contact us for actual inventory, sizes,
                  and wholesale pricing.
                </p>
              )}

              {/* Spec grid */}
              <dl className="mt-8 grid grid-cols-2 gap-px border border-ink-200 bg-ink-200">
                {product.fabric && (
                  <SpecItem icon={Layers} label="Fabric" value={product.fabric} />
                )}
                {product.sizes.length > 0 && (
                  <SpecItem icon={Ruler} label="Sizes" value={product.sizes.join(', ')} />
                )}
                {product.colors.length > 0 && (
                  <SpecItem icon={Palette} label="Colours" value={product.colors.join(', ')} />
                )}
                <SpecItem
                  icon={Tag}
                  label="Min. Order Qty"
                  value={product.minOrderQty ? `${product.minOrderQty} pcs` : 'On enquiry'}
                />
                <SpecItem
                  icon={ShoppingCart}
                  label="SKU"
                  value={product.sku || 'On enquiry'}
                />
              </dl>

              {/* Colour picker */}
              {product.colors.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs font-medium uppercase tracking-widest text-ink-500">
                    Colours of interest
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.colors.map((c) => {
                      const active = selectedColors.includes(c);
                      return (
                        <button
                          key={c}
                          onClick={() => toggle(selectedColors, setSelectedColors, c)}
                          className={`inline-flex items-center gap-2 border px-3 py-2 text-xs font-medium transition-colors ${
                            active
                              ? 'border-ink-950 bg-ink-950 text-ivory-50'
                              : 'border-ink-200 text-ink-600 hover:border-ink-400'
                          }`}
                        >
                          {active && <Check className="h-3 w-3" />}
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Size picker */}
              {product.sizes.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-ink-500">
                    Sizes of interest
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.sizes.map((s) => {
                      const active = selectedSizes.includes(s);
                      return (
                        <button
                          key={s}
                          onClick={() => toggle(selectedSizes, setSelectedSizes, s)}
                          className={`inline-flex items-center gap-1 border px-3 py-2 text-xs font-medium transition-colors ${
                            active
                              ? 'border-ink-950 bg-ink-950 text-ivory-50'
                              : 'border-ink-200 text-ink-600 hover:border-ink-400'
                          }`}
                        >
                          {active && <Check className="h-3 w-3" />}
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-6">
                <label
                  htmlFor="pd-qty"
                  className="text-xs font-medium uppercase tracking-widest text-ink-500"
                >
                  Estimated Quantity
                </label>
                <input
                  id="pd-qty"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="input-field mt-2"
                  placeholder="e.g. 50 pieces"
                />
              </div>

              {/* Pricing note */}
              <div className="mt-6 border-l-2 border-champagne-500 bg-ivory-100 px-5 py-4">
                <p className="text-sm text-ink-600">
                  <span className="font-medium text-ink-900">Wholesale pricing:</span> Contact
                  us for availability and pricing. We do not list prices online — all
                  wholesale rates are confirmed directly by our team.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>
                <Link
                  to="/wholesale-enquiry"
                  className="btn-outline"
                >
                  <ClipboardList className="h-4 w-4" />
                  Request Wholesale Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-ivory-100 py-16 lg:py-24">
          <div className="container-wide">
            <Reveal className="mb-10">
              <span className="section-label">More from this collection</span>
              <h2 className="mt-3 heading-md">Related Products</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 60}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function SpecItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-ivory-50 p-4">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
      <div>
        <dt className="text-[0.65rem] font-medium uppercase tracking-widest text-ink-400">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm text-ink-700">{value}</dd>
      </div>
    </div>
  );
}
