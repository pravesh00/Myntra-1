import './App.css';
import Navbar from './components/navbar';
import Titlebar from './components/titlebar';
import Home from './components/home';
import Sizeprofile from './components/sizeprofile';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
      <Navbar />
      <h3 id="h1">Clothes - 50 items</h3>
      <Titlebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sizeprofile">
            <Sizeprofile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
