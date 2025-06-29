// src/components/CartItem.jsx

'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CartItem({ item, onRemove, onUpdate }) {
  const [qty, setQty] = useState(item.qty || 1);
  const [size, setSize] = useState(item.size || item.sizes?.[0] || '');
  const [color, setColor] = useState(item.color || item.colors?.[0] || '');

  useEffect(() => {
    if (onUpdate) {
      onUpdate({
        ...item,
        qty,
        size,
        color,
      });
    }
  }, [qty, size, color]);

  return (
    <div className="flex gap-4 border rounded p-4 relative shadow-sm bg-white">
      <img
        src={item.image}
        alt={item.name || 'Product Image'}
        className="w-24 h-28 object-cover rounded"
      />

      <div className="flex-1">
        <h2 className="font-semibold">{item.name}</h2>
        <div className="mt-2 text-sm flex flex-wrap items-center gap-3">
          <label className="text-gray-500">Size:</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="px-2 py-1 border rounded"
          >
            {item.sizes?.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <label className="text-gray-500">Color:</label>
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="px-2 py-1 border rounded"
          >
            {item.colors?.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <label className="text-gray-500">Qty:</label>
          <select
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value))}
            className="px-2 py-1 border rounded"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-3">
          <span className="font-semibold text-lg">₹{item.price * qty}</span>
          {item.originalPrice && (
            <>
              <span className="ml-2 text-gray-400 line-through text-sm">
                ₹{item.originalPrice * qty}
              </span>
              <span className="ml-2 text-green-600 text-sm">
                You saved ₹{(item.originalPrice - item.price) * qty}
              </span>
            </>
          )}
        </div>
      </div>

      {onRemove && (
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
          onClick={() => onRemove(item.id)}
        >
          <X />
        </button>
      )}
    </div>
  );
}
