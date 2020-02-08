const initState = () => {
    let state = {
        op1 : 0,
        op2 : 0,
        result : 0,
        isNum : true
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
            if (isNaN(tempstate.op1) || isNaN(tempstate.op2)) {
                tempstate.isNum = false;
                return tempstate;
            } else {
                tempstate.isNum = true;
                tempstate.result = Number(tempstate.op1) + Number(tempstate.op2);
                return tempstate;
            }
        case "MINUS":
            if (isNaN(tempstate.op1) || isNaN(tempstate.op2)) {
                tempstate.isNum = false;
                return tempstate;
            } else {
                tempstate.isNum = true;
                tempstate.result = Number(tempstate.op1) - Number(tempstate.op2);
                return tempstate;
            }
        case "OP1":
            tempstate.op1 = action.op;
            return tempstate;
        case "OP2":
            tempstate.op2 = action.op;
            return tempstate;        
        default:
            return tempstate;
    }
}

export default rootReducer;