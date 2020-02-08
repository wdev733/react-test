import React from 'react';
import InputRegion from './inputregion';
import ResultRegion from './resultregion';

class Main extends React.Component {
    render() {
        return (
            <div>
                <h2>Plus and Minus</h2>
                <InputRegion />
                <hr className="clearfix"></hr>
                <ResultRegion />
            </div>
        );
    }
}

export default Main;