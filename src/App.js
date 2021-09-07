import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Recipes from './pages/Recipes'
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import { purple, grey } from '@material-ui/core/colors'
import Layout from './components/Layout'

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Switch>
          <Route exact path="/">
              <Recipes />
          </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
