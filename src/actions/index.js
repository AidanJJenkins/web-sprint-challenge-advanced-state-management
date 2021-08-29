import axios from 'axios';

export const IS_LOADING = "IS_LOADING"
export const GOT_API = "GOT_API"
export const FETCH_FAIL = "FETCH_FAIL"
export const ADD_SMURFS = "ADD_SMURFS"
export const GOT_ERROR= "GOT_ERROR"

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch(isLoading())
        axios.get('http://localhost:3333/smurfs')
            .then(res => {dispatch(gotApi(res.data))
        })
        .catch(err => {
            dispatch(fetchFail("There is an error"))
        })
    }
}

export const isLoading = () => {
    return ({type: IS_LOADING})
}

export const gotApi = (smurfs) => {
    return ({type: GOT_API, payload: smurfs})
}

export const fetchFail = (error) => {
    return ({type: FETCH_FAIL, payload: error})
}

export const addSmurfs = (smurfs) => {
    return ({type: ADD_SMURFS, payload: smurfs})
}

export const gotError = (error) =>{
    return({type:GOT_ERROR, payload: error})
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.