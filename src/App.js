import React from 'react';
import Header from './components/header/Header';
import Home from './containers/home/Home';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
  	<BrowserRouter>
        <Route>
        	<Header />
			<Route exact path="/" component={Home} />
        </Route>
    </BrowserRouter>
  );
}

export default App;

