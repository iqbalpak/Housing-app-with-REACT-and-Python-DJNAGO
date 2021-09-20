import { ADD_HOUSE, DELETE_HOUSE, GET_HOUSES } from "../actions/types.js";

const initialState = {
    houses: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_HOUSES:
            return {
                ...state,
                houses: action.payload
            }
        case DELETE_HOUSE:
            return {
                ...state,
                houses: state.houses.filter(house => house.id != action.payload)

            }
        case ADD_HOUSE:
            return{
                ...state,
                houses: [...state.houses, action.payload]
            }    
        default:
            return state;
    }
}