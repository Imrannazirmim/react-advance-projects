import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addCartItem: (state, action) => {
            const newItem = action.payload;
            const excetingItem = state.items.find((item) => item.id === newItem.id);
            if(!excetingItem){
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }else{
                excetingItem.quantity++;
                excetingItem.totalPrice = excetingItem.totalPrice + newItem.price;
            }
        },
        removeCartItem: (state, action) => {
            const id = action.payload;
            const excetingItem = state.items.find((item) => item.id === id);
            excetingItem.totalQuantity--;
            state.changed = true
            if(excetingItem.quantity === 1){
                state.items.find((item) => item.id !== id)
            }else{
                excetingItem.quantity--;
                excetingItem.totalPrice = excetingItem.totalPrice - excetingItem.price
            }

        }
    }
})
export const cartActions = cartSlice.actions;
export default cartSlice;