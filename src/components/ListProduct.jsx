import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  
  const limit =8;

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
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
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md disabled:opacity-40"
        >
          Previous
        </button>

        <span className="font-semibold">Page {page}</span>

        <button
          onClick={nextPage}
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md"
        >
          Next
        </button>
      </div>

    </div>
    
  );
}
