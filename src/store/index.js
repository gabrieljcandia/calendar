import { createStore, combineReducers } from 'redux';
import dateReducer from './date/reducer'

const reducers = combineReducers({
    dateReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;