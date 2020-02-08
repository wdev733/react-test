export function plus() {
    return {
        type : 'PLUS'
    }
}

export function minus() {
    return {
        type : 'MINUS'
    }
}

export function changeop1(op) {
    return {
        type : 'OP1',
        op
    }
}

export function changeop2(op) {
    return {
        type : 'OP2',
        op
    }
}