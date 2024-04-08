import { FETCH_USERS } from "../actions";

const initialState = {
    users: [] // Ensure this is an array
  };


export default (state = initialState, action) => {

    console.log(action.payload, "sho payload")
    switch ( action.type ){
        case FETCH_USERS : return  action.payload.data;

        default : return state;
    }
}