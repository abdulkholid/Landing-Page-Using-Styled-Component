import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components';
import GlobalStyles from './GlobalStyles';
import { Home } from './pages';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" component={Home} exact />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
