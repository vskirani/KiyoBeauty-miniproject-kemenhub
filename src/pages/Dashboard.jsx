import ListProduct from "../components/ListProduct";


export default function Dashboard() {
  return (
    <div className="ml-16 mt-16 p-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Product List
      </h1>

      <p className="text-gray-600 mb-6">
        Temukan berbagai produk kecantikan pilihan yang kami tampilkan langsung dari sumber data terpercaya
      </p>

      <ListProduct />
    </div>
  );
}
