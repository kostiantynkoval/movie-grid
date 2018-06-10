import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dialogReducer } from 'redux-dialog';
import movies from 'store/reducers/movies';

const rootReducer = combineReducers({
    router: routerReducer,
    movies,
    dialogReducer
});
export default rootReducer;
