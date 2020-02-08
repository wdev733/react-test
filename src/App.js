import React from 'react';
import Counter from './component/Counter';

import { connect } from "react-redux";

import './App.css';

class App extends React.Component {

    render() {
	    return (
				<div className="App">
					<Counter title="Counter"/>
					<h1>Current Number = {this.props.curNum}</h1>
				</div>
	    )
    }
}

const mapStateToProps = state => ({
  curNum: state.counter.curNum
});

export default connect(mapStateToProps, {})(App);
