// src/app/products/[id]/page.js
import { notFound } from "next/navigation";
import { products } from "../../../data/products"; // Make sure the path is correct
import ProductDetailClient from "./ProductDetailClient"; // Client component

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) return notFound();

  const similarItems = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4); // Limit to 4 similar products

  return (
    <ProductDetailClient product={product} similarItems={similarItems} />
  );
}
