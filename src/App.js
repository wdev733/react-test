import React, { useState, useReducer } from 'react';
import './App.css';
import { connect } from "react-redux";
import { plusButton, minusButton } from "./actions";
import sumNum from "./components/sumNum";

function App(){
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
    firstNum: 0,
    lastNum: 0,
    sum: 0,
    }
  );

  const [firstNum, setFirstNum] = useState('')
  const [lastNum, setLastNum] = useState('')
  const [sum, setSum] = useState('')

  const handleChange = evt => {
    const { name, value} = evt.target;

    setUserInput({[name]: value});
  }

  const handlePlus = (e) => {
    userInput.sum = parseInt(userInput.firstNum) + parseInt(userInput.lastNum);
    setSum(userInput.sum);
    return userInput.sum;
  }

  const handleMinus = (e) => {
    userInput.sum = parseInt(userInput.firstNum) - parseInt(userInput.lastNum);
    setSum(userInput.sum);
    return userInput.sum;
  }

  userInput.sum = parseInt(userInput.firstNum) + parseInt(userInput.lastNum);

  return (
    <div>
      <form>
     <br/>
      <input type="number" name="firstNum" value={userInput.firstNum} onChange={handleChange}/>
      <input type="number" name="lastNum" value={userInput.lastNum} onChange={handleChange}/>
      <br/>
      <button  onClick={e => this.handlePlus()}>Plus</button>
      <button  onClick={e => this.handleMinus()}>Minus</button>
      <br/>
      <div>
      <h1>Result : {userInput.sum}</h1>
      </div>
     </form>
    </div>
  )
}

const mapStateToProps = state => ({
  initstate: state.result
})

const mapDispatchToProps = dispatch => ({
  onPlus: (userInput) => dispatch(plusButton(userInput)),
  onMinus: (userInput) => dispatch(minusButton(userInput))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);