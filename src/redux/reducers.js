const initState = () => {
    let state = {
        op1 : "0",
        op2 : "0",
        result : "0"
    };
    return state;
}

function rootReducer(state=null, action) {
    if (state == null) {
        state = initState();
    }
    let tempstate = {
        ...state
    }
    switch (action.type) {
        case "PLUS":
            tempstate.result = tempstate.op1 + tempstate.op2;
            return tempstate;
        case "MINUS":
            tempstate.result = tempstate.op1 + tempstate.op2;
            return tempstate;
        default:
            return tempstate;
    }
}