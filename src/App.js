import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Navbar} from "./components/Navbar";
import { Home} from "./components/Home";
import { About} from "./components/About";
function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
            <Switch>
              <Route exact path="/"><Home/></Route>
              <Route exact path="/about"><About /></Route>
            </Switch>
        </Router>
      </div>
  );
}

export default App;
