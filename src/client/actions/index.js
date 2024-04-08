// import axios from "axios";


export const FETCH_USERS = "FETCH_USERS";
 // api is the third argument passed into redux thunk 
export const fetchUsers = () => async (dispatch, getState, api) => {
    console.log(api, "show api value")
    const res = await api.get('/users');
    // const res = await axios.get("https://api.publicapis.org/entries")
    console.log(res, "show response data")
    dispatch({
        type: FETCH_USERS,
        payload: res
    })

}


export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
 // api is the third argument passed into redux thunk 
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');
    // const res = await axios.get("https://api.publicapis.org/entries")
    console.log(res, "show response data")
    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    })

}

