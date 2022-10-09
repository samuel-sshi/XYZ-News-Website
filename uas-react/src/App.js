import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import NewsExpand from './NewsExpand';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/news/:id">
              <NewsExpand />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
