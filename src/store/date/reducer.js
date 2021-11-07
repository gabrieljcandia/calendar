import {INCREASE_CURRENT_MONTH, DECREASE_CURRENT_MONTH} from "../../constants/actionTypes";
import {addMonths, removeMonths} from "../../utils/date-utils";

const initialState = new Date()

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_CURRENT_MONTH:
            return addMonths(state, action.payload);
        case DECREASE_CURRENT_MONTH:
            return removeMonths(state, action.payload)
        default:
            return state;
    }
};

export default reducer;