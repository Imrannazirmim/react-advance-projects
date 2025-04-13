import {create} from "zustand/react";

interface StoreProps {
    idMeal: string;
    strMeal: string;
    strMealThumb: string

}

interface StoreType {
    meals: StoreProps[];
    setMeals: (meals: StoreProps[]) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const useStore = create<StoreType>((set) => ({
    meals: [],
    searchQuery: '',
    setMeals: (meals) => set({meals}),
    setSearchQuery: (query) => set({searchQuery: query})
}))