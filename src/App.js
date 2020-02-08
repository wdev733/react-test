import Main from './components/main';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const App = connect(mapStateToProps)(Main);

export default App;
