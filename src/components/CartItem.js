'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CartItem({ item, onRemove, onUpdate }) {
  const [qty, setQty] = useState(item.qty || 1);
  const [size, setSize] = useState(item.size || item.sizes?.[0] || '');
  const [color, setColor] = useState(item.color || item.colors?.[0] || '');

  useEffect(() => {
    onUpdate({ ...item, qty, size, color });
  }, [qty, size, color]);

  return (
    <div className="flex gap-4 border rounded p-4 relative">
      <img src={item.image} alt={item.name} className="w-24 h-28 object-cover rounded" />

      <div className="flex-1">
        <h2 className="font-semibold">{item.name}</h2>
        <p className="text-sm text-gray-600">{item.description}</p>
        <p className="text-green-600 text-xs mt-1">{item.tag}</p>

        <div className="mt-2 text-sm">
          <span className="text-gray-500">Size:</span>
          {item.sizes?.length > 0 ? (
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="ml-1 px-2 py-1 border rounded"
            >
              {item.sizes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          ) : (
            <span className="ml-2">N/A</span>
          )}

          <span className="ml-4 text-gray-500">Color:</span>
          {item.colors?.length > 0 ? (
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="ml-1 px-2 py-1 border rounded"
            >
              {item.colors.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          ) : (
            <span className="ml-2">N/A</span>
          )}

          <span className="ml-4 text-gray-500">Qty:</span>
          <select
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value))}
            className="ml-1 px-2 py-1 border rounded"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>

        <div className="mt-2">
          <span className="font-semibold text-lg">₹{item.price * qty}</span>
          <span className="ml-2 text-gray-400 line-through text-sm">₹{item.originalPrice * qty}</span>
          <span className="ml-2 text-green-600 text-sm">
            You saved ₹{(item.originalPrice - item.price) * qty}
          </span>
        </div>
      </div>

      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
        onClick={() => onRemove(item.id)}
      >
        <X />
      </button>
    </div>
  );
}
