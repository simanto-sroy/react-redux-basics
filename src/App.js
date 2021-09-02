import React from 'react';
import './App.css';

import { Provider} from 'react-redux';
import store from './store';
import Count from './components/Count';
import Control from './components/Control';

class App extends React.Component {
	render() {
		
		return(
			<Provider store={store}>
				<div className="App">
					<h1>Hello World!</h1>
					<Count />
					<Control />
				</div>
			</Provider>
		);
	}
}
export default App;
