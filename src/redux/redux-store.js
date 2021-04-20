import thunk from 'redux-thunk';
import {applyMiddleware} from "redux";
import {authReducer} from "./auth-reducer";
import {menuReducer} from "./menu-reducer";
import {questionsReducer} from "./questions-reducer"
import {reducer as formReducer} from "redux-form";
import {employeesReducer} from "./employees-reducer";

const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    questions: questionsReducer,
    form: formReducer,
    employees: employeesReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;