import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'



export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axios
        .get(`https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?q=cats&api_key=P8No5d6CdRkffph6a2z61WPU9FFmXpyY&limit=9`)
        .then(response => {
            console.log(response.data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.data})
        })
        .catch(err => console.log(err.response))
}

export const fetchSearchData = (name) => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axios
        .get(`https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?q=${name}&api_key=P8No5d6CdRkffph6a2z61WPU9FFmXpyY&limit=9`)
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.data})
        })
        .catch(err => console.log(err.response))
}