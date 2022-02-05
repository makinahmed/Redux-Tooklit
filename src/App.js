import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Discover from './pages/Discover'
import FinishedBooks from './pages/FinishedBooks'
import ReadingList from './pages/ReadingList'
import { AuthProvider, PrivateRoute } from './lib/auth'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/Store'

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Discover} />
            <PrivateRoute path="/reading" component={ReadingList} />
            <PrivateRoute path="/finish" component={FinishedBooks} />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App
