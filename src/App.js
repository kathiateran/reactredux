import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer'
//this connects react to redux
import {Provider} from 'react-redux'
import store from './redux/store'



function App() {
  return (
    <Provider store = {store}>
        <div className="App">
        <header className="App-header">
          <CakeContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
