'use client';

import { useState, useEffect, useMemo } from 'react';
import { products as allProducts } from '@/src/data/products';
import ProductCard from '@/src/components/ProductCard';
import Filters from '@/src/components/Filters';
import { ChevronRight } from 'lucide-react';
import Footer from '@/src/components/Footer/Footer';
import {
  getWishlist,
  addToWishlist as addToWishlistDB,
  removeFromWishlist as removeFromWishlistDB,
} from '@/src/firebase/dbUtils';

export default function ProductsPage() {
  const [gender, setGender] = useState('Men');
  const [filters, setFilters] = useState({
    category: '',
    sizes: [],
    price: 2000,
    colors: [],
    brand: '',
    labels: [],
    tags: [],
    rating: '',
    sleeves: [],
    discounts: [],
    offers: [],
  });

  const [sort, setSort] = useState('popularity');
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const data = await getWishlist();
      setWishlist(data || []);
    };
    fetchWishlist();
  }, []);

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  const addToWishlist = async (product) => {
    if (isInWishlist(product.id)) return;
    await addToWishlistDB(product);
    const updated = await getWishlist();
    setWishlist(updated || []);
  };

  const removeFromWishlist = async (id) => {
    await removeFromWishlistDB(id);
    const updated = await getWishlist();
    setWishlist(updated || []);
  };

  const filteredProducts = useMemo(() => {
    let result = allProducts.filter((p) => p.gender === gender);

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.brand) {
      result = result.filter((p) => p.brand === filters.brand);
    }

    if (filters.rating) {
      const ratingVal = Number(filters.rating);
      result = result.filter((p) => Number(p.rating) >= ratingVal);
    }

    if (filters.sleeves.length > 0) {
      result = result.filter((p) =>
        filters.sleeves.includes(p.sleeve ?? '')
      );
    }

    if (filters.discounts.length > 0) {
      result = result.filter((p) =>
        filters.discounts.includes(`${p.discount}%`)
      );
    }

    if (filters.sizes.length > 0) {
      result = result.filter(
        (p) => Array.isArray(p.sizes) && p.sizes.some((size) => filters.sizes.includes(size))
      );
    }

    if (filters.colors.length > 0) {
      result = result.filter(
        (p) => Array.isArray(p.colors) && p.colors.some((color) => filters.colors.includes(color))
      );
    }

    if (filters.labels.length > 0) {
      result = result.filter((p) => filters.labels.includes(p.label ?? ''));
    }

    if (filters.tags.length > 0) {
      result = result.filter((p) => filters.tags.includes(p.tag ?? ''));
    }

    if (filters.offers.length > 0) {
      result = result.filter(
        (p) =>
          Array.isArray(p.offers) &&
          p.offers.some((offer) => filters.offers.includes(offer))
      );
    }

    const priceLimit = Number(filters.price);
    result = result.filter((p) => Number(p.price) <= priceLimit);

    // Sorting logic
    if (sort === 'low-to-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'high-to-low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters, sort, gender]);

  return (
    <>
      <div className="px-6 py-4">
        {/* Gender Toggle */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            {['Men', 'Women'].map((g) => (
              <button
                key={g}
                className={`px-4 py-1 border rounded ${
                  gender === g ? 'bg-black text-white' : 'bg-white text-black'
                }`}
                onClick={() => setGender(g)}
              >
                {g}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="text-sm font-medium">
              Sort by:
            </label>
            <select
              id="sort-select"
              className="border rounded px-2 py-1"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="popularity">Popularity</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 flex items-center gap-2 mb-2">
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium text-black">{gender} Clothing</span>
        </div>

        <h2 className="text-xl font-bold mb-4">
          Clothes for {gender}{' '}
          <span className="text-gray-500 text-sm">
            ({filteredProducts.length} Products)
          </span>
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className="hidden md:block">
            <Filters filters={filters} setFilters={setFilters} />
          </aside>

          {/* Product Cards */}
          <section className="md:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  inWishlist={isInWishlist(product.id)}
                  onAdd={addToWishlist}
                  onRemove={removeFromWishlist}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No products found.
              </p>
            )}
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
