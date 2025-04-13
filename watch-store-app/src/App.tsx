import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";
import { data } from "./db/data";
import { useFilterStore } from "./store/store";

interface Product {
  id: string;
  country: string;
  img: Record<string, string>;
  price: number;
}

const App = () => {
  const { selectedCountries, selectedColors, selectedPriceRange } =
    useFilterStore();

  const filterData = data.filter((item: Product) => {
    const matchColors =
      selectedColors.length === 0 ||
      Object.keys(item.img).some((color) => selectedColors.includes(color));

    const matchCountry =
      selectedCountries.length === 0 ||
      selectedCountries.includes(item.country);

    const matchPrices = selectedPriceRange
      ? item.price >= selectedPriceRange.min &&
        item.price <= selectedPriceRange.max
      : true;

    return matchColors && matchCountry && matchPrices;
  });

  return (
    <>
      <Sidebar />
      <div className="p-4 flex flex-wrap justify-center items-center">
        {filterData.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default App;
