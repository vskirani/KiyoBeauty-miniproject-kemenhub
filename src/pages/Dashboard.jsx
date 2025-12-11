import ListProduct from "../components/ListProduct";

export default function Dashboard() {
  return (
    <div className="ml-64 mt-20 p-6">
      <h1 className="text-3xl font-bold mb-4">Product Catalog</h1>

      <ListProduct />
    </div>
  );
}
