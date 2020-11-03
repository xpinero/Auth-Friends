import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import FriendsPage from './components/FriendsPage';
import PrivateRoute from './components/PrivateRoute';
import FriendsForm from './components/FriendsForm';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/friends">
          <PrivateRoute>
             <FriendsPage />
          </PrivateRoute>
          </Route>

        
        
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
