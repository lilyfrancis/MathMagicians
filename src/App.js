/* eslint-disable */
import React from 'react';
import Calculator from './pages/Calculator';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/quotes" component={Quotes} />
      </Switch>
    </Router>
   );
  }
}

export default App;
