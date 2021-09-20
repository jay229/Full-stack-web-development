// import logo from './logo.svg';
import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {

  const[mode,setMode]=useState("light")
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      
    }
  }
  return (
    <>
      <Navbar title="Textutils" abouttxt="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Enter the Text to analize" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
