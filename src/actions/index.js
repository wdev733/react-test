import * as types from '../constants/ActionTypes'

export const increaseNumber = (step1, step2) => ({
    type: types.INCREASE_NUMBER,
    step1,
    step2
})

export const decreaseNumber = (step1, step2) => ({
    type: types.DECREASE_NUMBER,
    step1,
    step2
})