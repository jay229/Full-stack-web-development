// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {

  return (
    <>
      <Navbar title="Textutils" abouttxt="About TextUtils" />
      <div className="container my-3">
        <Textform heading="Enter the Text to analize" />
      </div>
    </>
  );
}

export default App;
