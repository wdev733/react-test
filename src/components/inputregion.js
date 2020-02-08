import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { plus, minus, changeop1, changeop2 } from '../redux/actions';

class InputRegion extends React.Component {
    render() {
        const { plus, minus, changeop1, changeop2 } = this.props;
        return (
            <div>
                <div className="clearfix">
                    <input name="op1" type="text" onChange={e => changeop1(e.target.value)} />
                    <input name="op1" type="text" onChange={e => changeop2(e.target.value)} />
                </div>
                <div className="clearfix">
                    <button onClick={() => plus()}>Plus</button>
                    <button onClick={() => minus()}>Minus</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeop1 : (op) => { dispatch(changeop1(op))},
        changeop2 : (op) => { dispatch(changeop2(op))},
        plus : () => { dispatch(plus())},
        minus : () => { dispatch(minus())}
    }
}

InputRegion = connect(mapStateToProps, mapDispatchToProps)(InputRegion);

export default InputRegion;