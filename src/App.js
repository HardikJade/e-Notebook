import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Navbar} from "./components/Navbar";
import { Home} from "./components/Home";
import { About} from "./components/About";
import NoteState from "./context/Notes/NoteState";
import { Alert } from "./components/Alert";
import { Modal } from "./components/Modal";
import ModalState from "./context/Modal/ModalState";
function App() {
  return (
    <div className="App">
        <NoteState>
          <ModalState>
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
                <Modal/>
                <Switch>
                  <Route exact path="/"><Home/></Route>
                  <Route exact path="/about"><About /></Route>
                </Switch>
              </div>
          </Router>
          </ModalState>
        </NoteState>
      </div>
  );
}

export default App;
