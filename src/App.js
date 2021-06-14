import Header from './containers/Header'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import ProductsListing from './containers/ProductsListing';
import ProductDetail from './containers/ProductDetail';
import Categories from './containers/Categories'

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
    <Route path='/' exact component={ProductsListing} />
    <Route path='/product/:productId' exact component={ProductDetail} />
    <Route path='/categories' exact component={Categories} />
    <Route>404 Error!</Route>
    </Switch>
    </Router>

    </div>
  );
}

export default App;
