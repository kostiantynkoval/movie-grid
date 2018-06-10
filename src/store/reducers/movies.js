import {
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAIL,
    GET_SINGLE_MOVIE_REQUEST,
    GET_SINGLE_MOVIE_SUCCESS,
    GET_SINGLE_MOVIE_FAIL,
    GET_GENRES_REQUEST,
    GET_GENRES_SUCCESS,
    GET_GENRES_FAIL,
} from 'store/constants'

const initialState = {
    isRequesting: false,
    movies: [],
    page: 0,
    total_results: 0,
    total_pages: 0,
    movie: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES_REQUEST:
        case GET_SINGLE_MOVIE_REQUEST:
            return {
                ...state,
                isRequesting: true,
            };
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                movies: action.payload.results,
                page: action.payload.page,
                total_results: action.payload.total_results,
                total_pages: action.payload.total_pages
            };
        case GET_MOVIES_FAIL:
            return {
                ...state,
                isRequesting: false,
                movies: []
            };
        case GET_SINGLE_MOVIE_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                movie: action.payload
            };
        case GET_SINGLE_MOVIE_FAIL:
            return {
                ...state,
                isRequesting: false,
                movie: {}
            };
        default:
            return {...state}
    }
}