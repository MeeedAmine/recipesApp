import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Recipes from './pages/Recipes'
import Layout from './components/Layout'
import Favorites from './pages/Favorites';


function App() {
  return (
      <Router>
        <Layout>
          <Switch>
          <Route exact path="/">
              <Recipes />
          </Route>
          <Route path="/favorites">
              <Favorites />
          </Route>
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;
