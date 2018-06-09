import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from 'store/reducers/movies';

const rootReducer = combineReducers({
    router: routerReducer,
    movies
});
export default rootReducer;
