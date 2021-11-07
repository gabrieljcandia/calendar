import {SELECT_REMINDER, EDIT_REMINDER, SAVE_REMINDER, DELETE_REMINDER} from "../../constants/actionTypes";

const selectReminder = (reminder) => {
    return {
        type: SELECT_REMINDER,
        payload: reminder
    }
}

const editReminder = (reminder) => {
    return {
        type: EDIT_REMINDER,
        payload: reminder
    }
}

const saveReminder = () => {
    return {
        type: SAVE_REMINDER,
        payload: null
    }
}

const deleteReminder = (reminder) => {
    return {
        type: DELETE_REMINDER,
        payload: reminder
    }
}

export { selectReminder, editReminder, saveReminder, deleteReminder}