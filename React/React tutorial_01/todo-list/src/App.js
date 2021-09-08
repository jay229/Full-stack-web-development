import './App.css';
import Header from "./MyComponent/Header";
import {Footer} from "./MyComponent/Footer";
import {Todos} from "./MyComponent/Todos";


function App() {

  const onDelete=(todo)=>{
    console.log("I'm onDelete",todo);
  }
let todos=[
    {
      sno:1,
      title:"Go the market",
      desc:"you need to go the market to get this job done"
    },
    {
      sno:2,
      title:"Go the Mall",
      desc:"you need to go the market to get this job done"
    },
    {
      sno:3,
      title:"Go the Ghat",
      desc:"you need to go the market to get this job done"
    }
  ]
  return (
    <>
     <Header title="My Todos List"/>
     {/* <Footer/> */}
     <Todos todos={todos} onDelete={onDelete} />
     {/* <Todo/> */}
  </>

  );
  }


export default App;
