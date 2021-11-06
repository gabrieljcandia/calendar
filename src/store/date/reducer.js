import {INCREASE_CURRENT_MONTH, DECREASE_CURRENT_MONTH} from "../../constants/actionTypes";
import {addMonths, removeMonths} from "../../utils/date-utils";

const initialState = {
    currentDate: new Date()
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_CURRENT_MONTH:
            return {
                ...state,
                currentDate: addMonths(state.currentDate, action.payload)
            };
        case DECREASE_CURRENT_MONTH:
            return {
                ...state,
                currentDate: removeMonths(state.currentDate, action.payload)
            }
        default:
            return {...state};
    }
};

export const selectCurrentDate = (state) => {
    return state.dateReducer.currentDate
}

export default reducer;