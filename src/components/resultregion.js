import React from 'react';
import { connect } from 'react-redux';

class ResultRegion extends React.Component {
    render() {
        if (this.props.isNum)
        return (
            <div className="clearfix">
                <div className="float-left item">
                    Result is {this.props.result}
                </div>
            </div>
        );
        else
        return (
            <div className="clearfix">
                <div className="float-left item">
                    Invalid Input
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

ResultRegion = connect(mapStateToProps)(ResultRegion);

export default ResultRegion;