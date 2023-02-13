import { ActionTypes } from "../constants/action-types"

const initialState = []

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return [...state, payload]

        case ActionTypes.REMOVE_PRODUCT:
            const newState = state.filter(p => p._id !== payload._id)
            return newState;
        default:
            return state;
    }
}