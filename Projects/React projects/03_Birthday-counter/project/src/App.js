import React,{useState} from 'react'
import List from './component/List';
import "./component/style.css"
import data from './component/data';

function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className="App">
      <div className="main-div" >
        <h3>{people.length} birthdays today </h3>
        <List people={people} />
        <button onClick={()=>{
          setPeople([]);
        }} >Clear all</button>
      </div>

    </div>
  );
}

export default App;
