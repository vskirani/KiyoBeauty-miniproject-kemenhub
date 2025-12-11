export default function ProductCard({ item }) {
  // Hitung harga setelah diskon
  const discountedPrice = (
    item.price -
    (item.price * item.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="bg-white border rounded-xl shadow-md hover:shadow-lg transition p-4 relative">

      {/* Badge Discount */}
      {item.discountPercentage > 0 && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          -{item.discountPercentage}%
        </span>
      )}

      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h3 className="font-semibold text-lg mt-3">{item.title}</h3>

      <p className="text-gray-600 text-sm mt-1">
        {item.description.slice(0, 55)}...
      </p>

      {/* Harga */}
      <div className="mt-3">
        {/* Harga awal dicoret jika ada diskon */}
        {item.discountPercentage > 0 ? (
          <div>
            <p className="text-gray-400 text-sm line-through">
              ${item.price}
            </p>
            <p className="text-[#6BC779] font-bold text-lg">
              ${discountedPrice}
            </p>
          </div>
        ) : (
          <p className="text-[#6BC779] font-bold text-lg">
            ${item.price}
          </p>
        )}
      </div>
    </div>
  );
}
