// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {

  return (
    <>
      <Navbar title="Textutils" abouttxt="About" />
      <div className="container my-3">
        <Textform heading="Enter the Text to analize" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
