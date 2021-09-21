// import logo from './logo.svg';
import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {

  const[mode,setMode]=useState("light")
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has enabled","success");
      
    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
     

    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Navbar title="Textutils" abouttxt="About" mode={mode} toggleMode={toggleMode} />
      {/* <Alert alert={Alert}/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter the Text to analize" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
