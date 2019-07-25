import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'



export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axios
        .get(`https://cors-anywhere.herokuapp.com/https://picsum.photos/v2/list?&limit=10`)
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data})
        })
        .catch(err => console.log(err.response))
}

