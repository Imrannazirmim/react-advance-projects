import { useFilterStore } from "../store/store";
import Navigation from "./Navigation";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { data } from "../db/data.ts";

interface FilterState {
  selectedCountries: string[];
  selectedColors: string[];
  selectedPriceRange: { min: number; max: number; label: string } | null;
  setSelectedCountries: (countries: string[]) => void;
  setSelectedColors: (colors: string[]) => void;
  setSelectedPriceRange: (range: { min: number; max: number } | null) => void;
  clearFilters: () => void;
}

// interface Product {
//   country: string;
//   img: Record<string, string>;
//   price: number;
// }

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [countryDropdown, setCountryDropdown] = useState<boolean>(false);
  const [colorDropdown, setColorDropdown] = useState<boolean>(false);
  const [priceDropdown, setPriceDropdown] = useState<boolean>(false);

  const {
    selectedCountries,
    selectedColors,
    selectedPriceRange,
    setSelectedColors,
    setSelectedCountries,
    setSelectedPriceRange,
    clearFilters,
  } = useFilterStore<FilterState>((state) => state);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCountryDropdown = () => setCountryDropdown(!countryDropdown);
  const uniqueCountries = Array.from(new Set(data.map((item) => item.country)));

  const handleCountrySelection = (country: string) => {
    setSelectedCountries(
      selectedCountries.includes(country)
        ? selectedCountries.filter((c) => c !== country)
        : [...selectedCountries, country]
    );
  };

  //color dropdown
  const toggleColorDropdown = () => setColorDropdown(!colorDropdown);
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "yellow",
    "brown",
    "teal",
    "gray",
  ];
  const handleColorSelection = (color: string) => {
    setSelectedColors(
      selectedColors.includes(color)
        ? selectedColors.filter((c) => c !== color)
        : [...selectedColors, color]
    );
  };

  //price
  const togglePriceDropdown = () => setPriceDropdown(!priceDropdown);
  const prices = [
    { label: "Below $300", min: 0, max: 300 },
    { label: "$300 - $600", min: 300, max: 600 },
    { label: "Above $600", min: 600, max: Infinity },
  ];

  const handlePriceSelection = (price: {
    min: number;
    max: number;
    label: string;
  }) => {
    setSelectedPriceRange(price);
  };

  return (
    <>
      <Navigation toggleSidebar={toggleSidebar} />
      {/*  sidebar*/}
      <div
        className={` fixed top-0 left-0 h-full w-80  bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            type="button"
            title="button"
            className="text-xl"
            onClick={toggleSidebar}
          >
            <FiX />
          </button>
        </div>
        {/*country filters*/}
        <div className="mt-4 space-x-6 p-6">
          <button
            type="button"
            onClick={toggleCountryDropdown}
            className="flex justify-between items-center w-full text-left"
          >
            <span>Country</span>
            <FaChevronDown
              className={`transform ${countryDropdown ? "rotate-180" : ""}  `}
            />
          </button>
          {countryDropdown && (
            <div className="mt-2 space-y-2">
              {uniqueCountries.map((country, index) => (
                <div
                  className="flex items-center cursor-pointer"
                  key={index}
                  onClick={() => handleCountrySelection(country)}
                >
                  <label htmlFor="country" className="hidden">
                    Country
                  </label>
                  <input
                    type="checkbox"
                    id="country"
                    checked={selectedCountries.includes(country)}
                    onChange={() => handleCountrySelection(country)}
                    className="mr-2 "
                  />
                  <span>{country}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {/*  colors*/}
        <div className=" space-x-5 p-6">
          <button
            onClick={toggleColorDropdown}
            type="button"
            className="flex justify-between items-center w-full text-left"
          >
            <span>Color</span>
            <FaChevronDown
              className={`transform ${colorDropdown ? "rotate-180" : ""}  `}
            />
          </button>
          {colorDropdown && (
            <div className="mt-4 space-y-2">
              {colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => handleColorSelection(color)}
                  className="space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color)}
                    onChange={() => handleColorSelection(color)}
                  />
                  <span>{color}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {/*  prices*/}
        <div className="space-x-6 p-6">
          <button
            onClick={togglePriceDropdown}
            className="flex justify-between items-center w-full text-left"
          >
            <span>Price</span>
            <FaChevronDown
              className={`transform ${priceDropdown ? "rotate-180" : ""}`}
            />
          </button>
          {priceDropdown && (
            <div className="space-y-2 mt-2">
              {prices.map((range, index) => (
                <div
                  key={index}
                  onClick={() => handlePriceSelection(range)}
                  className="space-x-2"
                >
                  <input
                    type="radio"
                    onChange={() => handlePriceSelection(range)}
                    checked={selectedPriceRange?.label === range.label}
                  />
                  <span>{range.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {/*  Footer*/}
        <div className="p-4 border-t flex justify-center">
          <button
            type="button"
            onClick={clearFilters}
            className="px-4 py-2 rounded bg-black text-white"
          >
            Clear All
          </button>
        </div>
        {/* background overlay */}
      </div>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </>
  );
};
export default Sidebar;
