export default function PriceSummary({ subtotal, discount, applyCoupon, couponApplied }) {
    const total = subtotal - discount;
  
    return (
      <div className="border p-4 rounded space-y-3">
        <h3 className="font-semibold text-lg">Price Summary</h3>
        <p>Subtotal: ₹{subtotal}</p>
        <p className="text-green-600">Discount: -₹{discount}</p>
        <p className="font-semibold">Total: ₹{total}</p>
  
        {!couponApplied && (
          <button
            onClick={applyCoupon}
            className="text-blue-500 text-sm underline"
          >
            Apply OOF10 coupon
          </button>
        )}
  
        {couponApplied && <p className="text-sm text-green-600">OOF10 coupon applied!</p>}
  
        <p className="text-sm text-green-600">Free Delivery on this order!</p>
        <button className="bg-yellow-400 w-full py-2 rounded mt-2 font-semibold" onClick={() => {
          const orders = JSON.parse(localStorage.getItem('orders') || '[]');
          orders.push({ items: JSON.parse(localStorage.getItem('cart') || '[]'), total });
          localStorage.setItem('orders', JSON.stringify(orders));
          localStorage.removeItem('cart');
          window.location.href = '/orders';
          alert('order placed successfully!');
          
        }}>PROCEED</button>
      </div>
    );
  }
  