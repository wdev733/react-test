import { combineReducers } from 'redux';
import {userInput} from '../constants';

const initstate = {
    state: userInput
}

const changeValue = (state = initstate,  action) => {
    switch (action.type) {
        case 'PLUS_BUTTON':
            userInput.sum = parseInt(userInput.firstNum) + parseInt(userInput.lastNum);
            console.log(userInput.sum)
            return {...userInput.sum};
        case 'MINUS_BUTTON':
            userInput.sum = parseInt(userInput.firstNum) - parseInt(userInput.lastNum);
            return {...userInput.sum};
        default:
            return {...userInput.sum};
    }
}

export default combineReducers({
    result: changeValue
})
