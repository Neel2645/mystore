"use client";

import { deleteProduct } from "@/actions/productAction";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105">
      <Image
        width={400}
        height={450}
        alt={product.image}
        src={"/" + product.image}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h5 className="text-xl font-semibold text-gray-900">{product.name}</h5>
        <p className="text-lg text-indigo-600 font-bold">${product.price}</p>
      </div>
      <div className="flex justify-between p-4">
        <Link
          href={"/edit-product/" + product.id}
          className="flex items-center justify-center w-1/2 py-2 border border-gray-300 hover:border-indigo-500 rounded-l-lg text-gray-700 hover:text-indigo-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zM16.862 4.487L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </Link>
        <button
          onClick={() => deleteProduct(product.id)}
          className="flex items-center justify-center w-1/2 py-2 border border-gray-300 hover:border-red-500 rounded-r-lg text-gray-700 hover:text-red-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9L14.394 18m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}
