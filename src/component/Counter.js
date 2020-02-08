import React from 'react';
import { connect } from "react-redux";

import { decreaseNumber, increaseNumber } from "../actions";

class Counter extends React.Component {

    handleIncrease = () => {
        this.props.onIncrease(this.state.curNum1, this.state.curNum2);
        console.log(parseInt(this.state.curNum1) + parseInt(this.state.curNum2));
    }

    handleDecrease = () => {
        this.props.onDecrease(this.state.curNum1, this.state.curNum2);
    }

    handleInputChange1 = (event) => {
        this.setState({curNum1: event.target.value})
    }

    handleInputChange2 = (event) => {
        this.setState({curNum2: event.target.value})
    }

    render() {
        return (
            <div className="counter">
                <h1>{this.props.title}</h1>
                <input type="text" value={this.props.curNum1} onChange={this.handleInputChange1}/>
                <input type="text" value={this.props.curNum2} onChange={this.handleInputChange2}/>
                <button onClick={e => this.handleIncrease()}>Plus</button>
                <button
                    onClick={e => this.handleDecrease()}>Minus</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  curNum: state.counter.curNum
});


const mapDispatchToProps = dispatch => ({
  onIncrease: (step1,step2) => dispatch(increaseNumber(step1, step2)),
  onDecrease: (step1, step2) => dispatch(decreaseNumber(step1,step2))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);