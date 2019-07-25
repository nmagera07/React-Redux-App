import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions'


const initialState = {
    error: '',
    isFetching: false,
    picture: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                picture: ''
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                picture: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
                picture: ''
            }
        default: 
            return state

    } 

}