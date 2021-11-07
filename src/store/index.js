import { createStore, combineReducers } from 'redux';
import dateReducer from './date/reducer'
import reminder from './reminder/reducer'

const reducers = combineReducers({
    dateReducer,
    reminder
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;