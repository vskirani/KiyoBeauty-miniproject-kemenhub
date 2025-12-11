import { use, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../services/productServices";


export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit =8;

  useEffect(() => {
        fetchProducts(page, limit).then(setProducts)
    }, [page]);


  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => page > 1 && setPage((prev) => prev - 1);

  return (
    
    <div>
        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
        </div>

        {/* Paging */}
        <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md disabled:opacity-40 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Previous
        </button>

        <span className="text-[#91C6FA] font-semibold">Page {page}</span>

        <button
          onClick={nextPage}
          className="px-4 py-2 bg-[#91C6FA] text-white hover:bg-[#4183C4] rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Next
        </button>
      </div>

    </div>
    
  );
}
