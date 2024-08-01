import { Type } from "./action.type";

export const initialState = {
    basket: []
};

// Renamed from `reduser` to `reducer`
export const reducer = (state = initialState, action) => { // Added default value for `state`
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        default:
            return state;
    }
};
