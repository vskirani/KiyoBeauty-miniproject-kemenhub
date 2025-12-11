export const fetchProducts = async (page = 1, limit = 8) => {
  const skip = (page - 1) * limit;
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  const data = await res.json();
  return data.products;
};