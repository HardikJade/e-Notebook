import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Navbar} from "./components/Navbar";
import { Home} from "./components/Home";
import { About} from "./components/About";
import NoteState from "./context/Notes/NoteState";
import { Alert } from "./components/Alert";
function App() {
  return (
    <div className="App">
        <NoteState>
          <Router>
            <Navbar/>

              {/* 
                <div className="container">
                  <Alert data={{
                    'type' : 'primary',
                    'message' : "This is Alert"

                  }}/>
                </div>
              */}

              <div className="container">
                <Switch>
                  <Route exact path="/"><Home/></Route>
                  <Route exact path="/about"><About /></Route>
                </Switch>
              </div>
          </Router>
        </NoteState>
      </div>
  );
}

export default App;
