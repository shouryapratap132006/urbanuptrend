"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import {
  getOrders,
  cancelOrderByIndex,
  getCart,
  saveCart,
} from "../../firebase/dbUtils";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        const data = await getOrders(user.uid); // 🔧 Pass UID
        setOrders(data);
      } else {
        setUid(null);
        setOrders([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const cancelOrder = async (index) => {
    if (!uid) return;
    await cancelOrderByIndex(uid, index); // 🔧 Pass UID
    const updated = [...orders];
    updated.splice(index, 1);
    setOrders(updated);
  };

  const reorder = async (items) => {
    if (!uid) {
      alert("Please log in to reorder.");
      return;
    }

    const existingCart = await getCart(uid); // 🔧 Pass UID
    const updatedCart = [...existingCart, ...items];
    await saveCart(uid, updatedCart); // 🔧 Pass UID
    alert("Items added to your cart!");
  };

  const filteredOrders = orders.filter((order) => {
    const dateMatch = filterDate
      ? new Date(order.date).toLocaleDateString() === filterDate
      : true;
    const brandMatch = filterBrand
      ? order.items.some((item) => item.brand === filterBrand)
      : true;
    return dateMatch && brandMatch;
  });

  const brands = Array.from(
    new Set(
      orders.flatMap((order) =>
        order.items.map((item) => item.brand).filter(Boolean)
      )
    )
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="text-sm text-gray-600 mr-2">Filter by Brand:</label>
          <select
            value={filterBrand}
            onChange={(e) => setFilterBrand(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="">All</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 mr-2">Filter by Date:</label>
          <input
            type="date"
            className="border px-2 py-1 rounded"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
      </div>

      {/* Orders Display */}
      {filteredOrders.length === 0 ? (
        <p className="text-gray-500 text-center">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order, index) => (
            <div
              key={index}
              className="border rounded-lg p-5 shadow-sm bg-white"
            >
              <div className="mb-3 flex justify-between items-center text-sm text-gray-600">
                <span>
                  Order Placed:{" "}
                  <span className="font-medium">
                    {new Date(order.date).toLocaleString()}
                  </span>
                </span>

                <div className="space-x-2">
                  <button
                    onClick={() => reorder(order.items)}
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Reorder
                  </button>
                  <button
                    onClick={() => cancelOrder(index)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Cancel Order
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex border rounded p-3 items-center gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="text-sm space-y-1">
                      <p className="font-semibold">{item.name}</p>
                      <p>Brand: {item.brand}</p>
                      <p>Qty: {item.qty}</p>
                      <p>Size: {item.size}</p>
                      <p>Color: {item.color}</p>
                      <p>Price: ₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-right font-semibold text-lg mt-4">
                Total: ₹{order.total}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
