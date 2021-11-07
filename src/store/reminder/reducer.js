import {EDIT_REMINDER, SELECT_REMINDER, SAVE_REMINDER, DELETE_REMINDER} from "../../constants/actionTypes";
import {dateToHourMin} from "../../utils/date-utils";
import _ from "lodash";
import {defaultColor} from "../../constants/colors";

let reminderId = 0;

const initialState = {
    all: [],
    selected: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_REMINDER:
            if(action.payload == null){
                return {...state, selected: null}
            }
            return {
                ...state,
                selected: {
                    ...action.payload,
                    title: action.payload.title != null ? action.payload.title : "",
                    date: action.payload.date != null ? action.payload.date : new Date(),
                    time: action.payload.time != null ? action.payload.time : dateToHourMin(new Date()),
                    color: action.payload.color != null ? action.payload.color : defaultColor
                }
            };
        case EDIT_REMINDER:
            return {
                ...state,
                selected: {...state.selected, ...action.payload}
            };
        case SAVE_REMINDER:
            if(isNewReminder(state.selected)){
                return newReminder(state);
            }
            return {
                all: _.map(state.all, reminder => reminder.id === state.selected.id ? {...state.selected} : reminder),
                selected: null
            }
        case DELETE_REMINDER:
            return {
                all: _.filter(state.all, reminder => reminder.id !== state.selected.id),
                selected: null
            }
        default:
            return state;
    }
};

const isNewReminder = reminder => reminder.id == null;

const newReminder = state => {
    state.selected.id = reminderId;
    reminderId++;
    return {
        all: [...state.all, state.selected],
        selected: null
    }
}

export default reducer;