import { PostsApi } from "../api/api";

const GET_QUESTONS = "GET_QUESTONS";
const START_FETCHING = "START_FETCHING";
const ADD_POST = "ADD_POST";
const SET_CATEGORY = "SET_CATEGORY";

const Initialstate = {
    categories: [
        { id: 1, name: "All" },
        { id: 2, name: "CL" },
        { id: 3, name: "SL" },
        { id: 4, name: "IL" },
        { id: 5, name: "MPL" }
    ],
    posts: [
    ],
    isFetching: false,
    category: 1,
    modalOfId: null
}


export const questionsReducer = (state = Initialstate, action) => {
    switch (action.type) {
        case GET_QUESTONS:
            return {
                ...state,
                posts: action.data,
                isFetching: false
            }
        case START_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: action.body.id, title: action.body.formData.question, body: action.body.formData.answer }]
            }
            case SET_CATEGORY:
                return {
                    ...state,
                    category: action.num
                }
        default:
            return state;
    }
}

const getQuestionsAC = (data) => ({ type: GET_QUESTONS, data });
const addingPost = (body) => ({ type: ADD_POST, body });
export const fetching = () => ({ type: START_FETCHING });
export const setCategory = (num) => ({type: SET_CATEGORY, num })

export const addPost = (formData) => {
    return (dispatch) => {
        PostsApi.addPost(formData).then(response => {
            dispatch(addingPost(response));
        })
    }
}

export const getQuestions = (category) => {
    return (dispatch) => {
        PostsApi.get().then(response => {
            if(category === 1){
                return dispatch(getQuestionsAC(response));
            }
            let filter = response.filter( p => {
                if (p.userId === category){
                    return p;
                }
            } )
            return dispatch(getQuestionsAC(filter));
        })
    }
}

