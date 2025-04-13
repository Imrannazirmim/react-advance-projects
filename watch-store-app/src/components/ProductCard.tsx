import { useEffect } from "react";
import { useProductStore } from "../store/store";
import { FaChevronCircleRight, FaChevronLeft } from "react-icons/fa";

interface Product {
  id: string;
  title: string;
  price: number;
  img: {
    black: string;
    [key: string]: string;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { productStates, setProductImage, setProductHover, initializeProduct } =
    useProductStore((state) => state);

  const productState = productStates[product.id] || {};
  const productImage = productState.currentImage || product.img.black;
  const productHover = productState.hover || false;
  const images = Object.values(product.img);

  useEffect(() => {
    initializeProduct(product.id, product.img.black);
  }, [product.id, product.img.black, initializeProduct]);

  const handlePrevious = () => {
    const currentIndex = images.indexOf(productState.currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setProductImage(product.id, images[prevIndex]);
  };
  const handleNext = () => {
    const currentIndex = images.indexOf(productState.currentImage);
    const prevIndex = (currentIndex + 1) % images.length;
    setProductImage(product.id, images[prevIndex]);
  };

  return (
    <div
      onMouseEnter={() => setProductHover(product.id, true)}
      onMouseLeave={() => setProductHover(product.id, false)}
      className="relative w-[20rem] ml-[3rem] p-4 m-[1rem] border-[#ececec]"
    >
      <div className="relative bg-gray-200 p-4">
        <img
          src={productImage}
          alt={product.title}
          className="object-cover w-[12rem] h-[12rem] rounded-md ml-[1rem]"
        />
        {productHover && (
          <div className="absolute inset-8 flex items-center justify-between px-4">
            <button
              onClick={handlePrevious}
              type="button"
              title="button"
              className="carousel-button text-white"
            >
              <FaChevronLeft size={24} className="bg-gray-700  rounded-full" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              title="button"
              className="carousel-button text-white"
            >
              <FaChevronCircleRight
                size={24}
                className="bg-gray-700  rounded-full"
              />
            </button>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <p>Title: {product.title}</p>
          <span>Price: ${product.price}</span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
