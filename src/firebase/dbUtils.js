import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    arrayUnion,
  } from "firebase/firestore";
  
  const db = getFirestore();
  
  // 🔹 Save Wishlist Item
  export const addToWishlist = async (uid, product) => {
    if (!uid || !product) return;
  
    const userRef = doc(db, "users", uid);
    try {
      await updateDoc(userRef, {
        wishlist: arrayUnion(product),
      });
    } catch (error) {
      // If document doesn't exist, create it with the wishlist array
      await setDoc(userRef, { wishlist: [product] }, { merge: true });
    }
  };
  
  // 🔹 Remove Wishlist Item
  export const removeFromWishlist = async (uid, productId) => {
    if (!uid || !productId) return;
  
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
  
    if (userSnap.exists()) {
      const data = userSnap.data();
      const updatedWishlist = (data.wishlist || []).filter((item) => item.id !== productId);
      await updateDoc(userRef, { wishlist: updatedWishlist });
    }
  };
  
  // 🔹 Get Wishlist Items
  export const getWishlist = async (uid) => {
    if (!uid) return [];
  
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
  
    return userSnap.exists() ? userSnap.data().wishlist || [] : [];
  };
  
  // 🔹 Save Entire Cart
  export const saveCart = async (uid, cartItems) => {
    if (!uid || !Array.isArray(cartItems)) return;
  
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, { cart: cartItems }, { merge: true });
  };
  
  // 🔹 Get Cart
  export const getCart = async (uid) => {
    if (!uid) return [];
  
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
  
    return userSnap.exists() ? userSnap.data().cart || [] : [];
  };
  
  // 🔹 Update One Cart Item
  export const updateCartItem = async (uid, updatedItem) => {
    if (!uid || !updatedItem) return;
  
    const currentCart = await getCart(uid);
    const newCart = currentCart.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    await saveCart(uid, newCart);
  };
  
  // 🔹 Remove Cart Item by ID
  export const removeFromCart = async (uid, productId) => {
    if (!uid || !productId) return;
  
    const currentCart = await getCart(uid);
    const newCart = currentCart.filter((item) => item.id !== productId);
    await saveCart(uid, newCart);
  };
  
  // 🔹 Save Order
  export const saveOrder = async (uid, orderItems, totalAmount) => {
    if (!uid || !Array.isArray(orderItems)) return;
  
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
  
    const prevOrders = userSnap.exists() ? userSnap.data().orders || [] : [];
  
    const newOrder = {
      items: orderItems,
      total: totalAmount,
      date: new Date().toISOString(),
    };
  
    await setDoc(userRef, { orders: [...prevOrders, newOrder] }, { merge: true });
  };
  
  // 🔹 Get All Orders
  export const getOrders = async (uid) => {
    if (!uid) return [];
  
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
  
    return userSnap.exists() ? userSnap.data().orders || [] : [];
  };
  
  // 🔹 Cancel Order by Index
  export const cancelOrderByIndex = async (uid, index) => {
    if (!uid || typeof index !== "number") return;
  
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) return;
  
    const updated = userSnap.data().orders || [];
    updated.splice(index, 1);
  
    await setDoc(userRef, { orders: updated }, { merge: true });
  };
  