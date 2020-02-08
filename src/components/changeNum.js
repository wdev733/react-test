import React, { useState, useReducer } from 'react';
import { connect } from "react-redux";
import { plusButton, minusButton } from "../actions";

class changeNum extends React.Component {
    handlePlus = e => {
        e.preventDefault();
        this.props.onPlus();
    }

    handleMinus = e => {
        e.preventDefault();
        this.props.onMinus();
    }
    render() {
        console.log("sdf");


        const [number, setNumber] = useReducer(
            (state, newState) => ({...state, ...newState}),
            {
            firstNum: 0,
            secondNum: 0,
            sum: 0
            }
        )

        const handleChange = evt => {
            const { name, value} = evt.target;
        
            setNumber({[name]: value});
        }
        return(
            <div>
                <form>
                    <div>
                        <input type="text" name="firstNum" value={this.state.firstNum} onChange={handleChange} />
                        <input type="text" name="secondNum" value={this.state.secondNum} onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit" onClick={e => this.handlePlus()}>Plus</button>
                        <button type="submit" onClick={e => this.handleMinus()}>Plus</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    initstate: state.result
})

const mapDispatchToProps = dispatch => ({
    onPlus: (number) => dispatch(plusButton(number)),
    onMinus: (number) => dispatch(minusButton(number))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(changeNum);