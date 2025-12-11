import { useEffect, useState } from "react";

export default function ListProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-lg shadow-md border"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-40 object-cover rounded"
          />

          <h3 className="font-semibold mt-3">{item.title}</h3>
          <p className="text-gray-600 text-sm">
            {item.description.slice(0, 60)}...
          </p>
          <p className="text-blue-600 font-bold mt-2">${item.price}</p>
        </div>
      ))}
    </div>
  );
}
