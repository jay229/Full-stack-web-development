// import logo from './logo.svg';
import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";

function App() {

  // const rmClass=()=>{
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-warning");
  // }

  const [mode, setMode] = useState("light")
  const toggleMode = (cls) => {
    // rmClass()
    console.log(cls)
    // document.body.classList.add("bg-"+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success");

    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }


    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>


      <div className=" my-3">
        <Router>
          <Navbar title="Textutils" abouttxt="About" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />


          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <div className="container">

              <Textform showAlert={showAlert} heading="Try TextUtils-Word Counter, Character Counter" mode={mode} />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
