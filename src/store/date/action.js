import { INCREASE_CURRENT_MONTH, DECREASE_CURRENT_MONTH } from "../../constants/actionTypes";

const increaseCurrentMonth = (amount) => {
    return {
        type: INCREASE_CURRENT_MONTH,
        payload: amount
    }
}

const decreaseCurrentMonth = (amount) => {
    return {
        type: DECREASE_CURRENT_MONTH,
        payload: amount
    }
}

export { increaseCurrentMonth, decreaseCurrentMonth }