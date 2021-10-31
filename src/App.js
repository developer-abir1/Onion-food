import logo from './logo.svg';
import './App.css';
import Navbar from './component/share/navigation/Navbar';
import Home from './component/home/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductData from './component/ProductData/ProductData';

function App() {

  return (
    <Router  >
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/product/:prodId">
          <ProductData />
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
