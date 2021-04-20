const TOGGLE_MENU_VISIBILITY = "TOGGLE_MENU_VISIBILITY"

const Initialstate = {
    hidden: true
}


export const menuReducer = (state = Initialstate, action) => {
    switch (action.type) {
        case TOGGLE_MENU_VISIBILITY:
            return {
                ...state,
                hidden: action.param
            }
        default:
            return state;
    }
}

export const toggleMenuVisibility = (param) => {
    return{type: TOGGLE_MENU_VISIBILITY, param}
}