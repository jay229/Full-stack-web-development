import React,{useState,useEffect} from 'react';
import './App.css';
import Loading from './component/Loading';
import Tours from './component/Tours';

function App() {
  const url="https://course-api.com/react-tours-project";
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour=(id)=>{
    const newTours=tours.filter((tr)=> tr.id !== id)
    // console.log("hii")
    setTours(newTours);
  }
  const fetchTours=async()=>{
    setLoading(true);
    try {
      const response = await fetch(url);
      const data=await response.json();
      setTours(data);
      // console.log(data);
      setLoading(false);
      
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    fetchTours();
    
  }, [])
  if (loading) {
    return(
      <main>

        <Loading/>
      </main>
    );
  }
  if(tours.length==0){
    return(
    <main>
      <h2>No Tours left </h2>
      <button onClick={()=>fetchTours()} >Load tours</button>
    </main>
    );

  }
  return (
    <>
    
    <Tours tour={tours} removeTour={removeTour} />
    </>
    
  );
}

export default App;
