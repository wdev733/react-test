import { combineReducers } from 'redux';
import {
    INCREASE_NUMBER,
    DECREASE_NUMBER
} from "../constants/ActionTypes";

const initState = {
    curNum0: 0
}

const counterReducer = (state = initState, action) => {
    // console.log('state: ', state);
    switch(action.type) {
        case INCREASE_NUMBER:
            return {
                ...state,
                curNum: state.curNum0 + parseInt(action.step1) + parseInt(action.step2)
            };
        case DECREASE_NUMBER:
            return {
                ...state,
                curNum: state.curNum0 + parseInt(action.step1) - parseInt(action.step2)
            };
        default:
            return { ...state };
    }
}

export default combineReducers({
    counter: counterReducer
})