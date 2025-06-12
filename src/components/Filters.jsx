'use client';

const Filters = ({ filters, setFilters }) => {
  const toggleMultiSelect = (key, value) => {
    const current = filters[key] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setFilters((prev) => ({ ...prev, [key]: updated }));
  };

  return (
    <div className="p-4 space-y-6 bg-gray-50 rounded shadow-sm">
      <h3 className="font-semibold text-lg">Filters</h3>

      {/* Category */}
      <div>
        <h4 className="font-medium mb-1">Category</h4>
        {["T-Shirt", "Shirt", "Polo", "Hoodie", "Bottomwear","Topwear","Dress"].map((cat) => (
          <div key={cat} className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              checked={filters.category === cat}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  category: prev.category === cat ? "" : cat,
                }))
              }
            />
            <label>{cat}</label>
          </div>
        ))}
      </div>

      {/* Size (Multi) */}
      <div>
        <h4 className="font-medium mb-1">Size</h4>
        {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
          <div key={size} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.sizes?.includes(size)}
              onChange={() => toggleMultiSelect("sizes", size)}
            />
            <label>{size}</label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-medium mb-1">Price Range</h4>
        <input
          type="range"
          min="0"
          max="2000"
          step="50"
          value={filters.price ?? 2000}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              price: parseInt(e.target.value),
            }))
          }
        />
        <div className="flex justify-between text-sm">
          <span>₹0</span>
          <span>₹{filters.price ?? 2000}</span>
        </div>
      </div>

      {/* Color (Multi) */}
      <div>
        <h4 className="font-medium mb-1">Color</h4>
        {["Red", "Blue", "Green", "Black", "Yellow", "Pink", "Purple", "Cream", "White", "Orange", "Brown", "Maroon", "Grey", "Beige", "Teal", "Navy Blue", "Olive", "Turquoise", "Peach", "Lavender"].map((color) => (
          <div key={color} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.colors?.includes(color)}
              onChange={() => toggleMultiSelect("colors", color)}
            />
            <label>{color}</label>
          </div>
        ))}
      </div>

      {/* Brand (Single) */}
      <div>
        <h4 className="font-medium mb-1">Brand</h4>
        {["UrbanUptrend Luxe", "UrbanUptrend GenZ", "UrbanUptrend Basics", "UrbanUptrend StreetWear"].map((brand) => (
          <div key={brand} className="flex items-center space-x-2">
            <input
              type="radio"
              name="brand"
              checked={filters.brand === brand}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  brand: prev.brand === brand ? "" : brand,
                }))
              }
            />
            <label>{brand}</label>
          </div>
        ))}
      </div>

      {/* Label (Multi) */}
      <div>
        <h4 className="font-medium mb-1">Material Label</h4>
        {["100% Cotton", "Organic Blend", "Recycled Cotton", "Premium Fabric"].map((label) => (
          <div key={label} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.labels?.includes(label)}
              onChange={() => toggleMultiSelect("labels", label)}
            />
            <label>{label}</label>
          </div>
        ))}
      </div>

      {/* Sleeve (Multi) */}
      <div>
        <h4 className="font-medium mb-1">Sleeve Type</h4>
        {["Half Sleeve", "Full Sleeve", "Sleeveless", "Raglan", "Cap Sleeve"].map((sleeve) => (
          <div key={sleeve} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.sleeves?.includes(sleeve)}
              onChange={() => toggleMultiSelect("sleeves", sleeve)}
            />
            <label>{sleeve}</label>
          </div>
        ))}
      </div>

      {/* Discount (Multi) */}
      <div>
        <h4 className="font-medium mb-1">Discount</h4>
        {["10%", "20%", "30%", "40%", "50%"].map((disc) => (
          <div key={disc} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.discounts?.includes(disc)}
              onChange={() => toggleMultiSelect("discounts", disc)}
            />
            <label>{disc} or more</label>
          </div>
        ))}
      </div>

      {/* Offers (Multi) */}
      <div>
        <h4 className="font-medium mb-1">Offers</h4>
        {["BOGO", "Flat ₹200 Off", "Buy 1 Get 1", "Free Shipping", "Clearance Sale"].map((offer) => (
          <div key={offer} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.offers?.includes(offer)}
              onChange={() => toggleMultiSelect("offers", offer)}
            />
            <label>{offer}</label>
          </div>
        ))}
      </div>

      {/* Tags (Multi) */}
      <div>
        <h4 className="font-medium mb-1">Tags</h4>
        {["BUY 3 FOR 999", "LIMITED EDITION", "TRENDING", "BOXY FIT", "OVERSIZED"].map((tag) => (
          <div key={tag} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.tags?.includes(tag)}
              onChange={() => toggleMultiSelect("tags", tag)}
            />
            <label>{tag}</label>
          </div>
        ))}
      </div>

      {/* Rating (Single) */}
      <div>
        <h4 className="font-medium mb-1">Customer Rating</h4>
        {[4.0, 4.5].map((rating) => (
          <div key={rating} className="flex items-center space-x-2">
            <input
              type="radio"
              name="rating"
              checked={Number(filters.rating) === rating}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  rating: Number(prev.rating) === rating ? "" : rating,
                }))
              }
            />
            <label>{rating} ★ & above</label>
          </div>
        ))}
      </div>

      {/* Clear All Filters */}
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={() =>
          setFilters({
            category: "",
            sizes: [],
            price: 2000,
            colors: [],
            brand: "",
            labels: [],
            tags: [],
            rating: "",
            discounts: [],
            sleeves: [],
            offers: [],
          })
        }
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
