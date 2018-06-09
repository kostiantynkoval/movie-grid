import axios from 'axios'
import {apiRequest, apiSuccess, apiFail} from '../actions/api'

import {
    BASE_URL,
    API_KEY,
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

export const getMoviesAction = (pageNo) => dispatch => {
    dispatch(apiRequest(GET_MOVIES_REQUEST));
    axios
        .get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ru-RU&page=${pageNo}`)
        .then(res => {
            console.log('res', res.data);
            dispatch(apiSuccess(GET_MOVIES_SUCCESS, res.data))
        })
        .catch(err => {
            console.log('err', err);
            dispatch(apiFail(GET_MOVIES_FAIL, err))
        })
}