import {AuthApi} from "../api/api";

const SET_AUTORISED_USER_NAME = "SET_AUTORISED_USER_NAME";

const Initialstate = {
    isAuth: false,
    userName : null,
    isAbleToModerate: true,
    isFetching: false
}


export const authReducer = (state = Initialstate, action) => {
    switch (action.type) {
        case SET_AUTORISED_USER_NAME:
            return{
                ...state,
                isAuth: true,
                userName: action.name
            }
        default:
            return state;
    }
}

const AuthMeAC = (name) => ({type: SET_AUTORISED_USER_NAME, name});

export const AuthMeThunk = () =>{
    return (dispatch) => {
            AuthApi.get().then( name => {
            dispatch(AuthMeAC(name.data.login));
        })
    }
}


