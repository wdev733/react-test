import React from 'react';
import { connect } from "react-redux";

class sumNum extends React.Component {
    render() {
        return(
            <div>
                <br/>
                <h1>Result : {this.props.sum}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    initstate: state.result
})
  
export default connect(mapStateToProps, {})(sumNum);