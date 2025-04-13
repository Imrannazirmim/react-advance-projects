import {useStore} from "../store/store.ts";
import {useEffect} from "react";

const FetchDataMeals = () => {
    const {meals, searchQuery, setMeals, setSearchQuery} = useStore();

    useEffect(() => {
        const fetchDataMeals = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
                const data = await response.json();
                setMeals(data.meals)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDataMeals();

    }, [setMeals]);
    

    const filterMeals = meals.filter((meal) => meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-semibold'>Food</h2>
            <div className='w-[30rem] border rounded-2xl border-gray-300 p-4 m-2'>
                <div>
                    <label htmlFor="search"></label>
                    <input type="text" placeholder='enter your search'
                           className='w-full px-4 py-2 border border-gray-300 rounded-2xl' value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}/>

                </div>

            </div>
            <div className='flex flex-col gap-2'>
                {filterMeals.length > 0 ? (
                    filterMeals.map(meal => (
                        <div key={meal.idMeal} className='shadow w-[20rem] flex flex-col gap-2 p-2 rounded'>
                            <img className='w-full object-cover' src={meal.strMealThumb} alt={meal.strMeal}/>
                            <span>{meal.strMeal}</span>
                        </div>
                    ))
                ) : (
                    <p>Page not found</p>
                )}
            </div>
        </div>
    )
}
export default FetchDataMeals;