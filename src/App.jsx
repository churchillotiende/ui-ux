import './App.css';
import { Redirect , Route , BrowserRouter as Router  , Switch } from 'react-router-dom';
import Post from './components/pages/post';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import SearchPage from './components/searchpage/SearchPage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path= '/'>
            <Home />
          </Route>
          <Route exact path= '/search'>
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
