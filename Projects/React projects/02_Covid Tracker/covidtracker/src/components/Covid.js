import React,{useEffect,useState} from 'react'
import '../css/covid.css';

function Covid() {
    
    const [covidrecord, setCovidRecord] = useState([])
    const covidData=async()=>{
        const result= await fetch("https://data.covid19india.org/data.json");
        const data=await result.json();
        // console.log(data.statewise[0]);
        setCovidRecord(data.statewise[0]);

    }
    useEffect(() => {
        covidData();
        
    })
    return (
        <>
            <div className="container-heading">

                <h3> 🔴 LIVE</h3>
                <h1> COVID-19 CORONAVIRUS TRACKER</h1>
            </div>
            <div className="container">
                <div className="row-1">

                    <div className="child1">
                        <p><span>OUR</span> COUNTRY</p>
                        <h1>INDIA</h1>
                    </div>
                    <div className="child1">
                    <p><span>TOTAL</span> RECOVERED</p>
                        <h1>{covidrecord.recovered}</h1>
                    </div>
                    <div className="child1">
                    <p><span>TOTAL</span> CONFIRMED</p>
                        <h1>{covidrecord.confirmed}</h1>
                    </div>

                </div>
                <div className="row-2">

                    <div className="child1">
                    <p><span>TOTAL</span> DEATHS</p>
                        <h1>{covidrecord.deaths}</h1>
                    </div>
                    <div className="child1">
                    <p><span>TOTAL</span> ACTIVE</p>
                        <h1>{covidrecord.active}</h1>
                    </div>
                    <div className="child1 ch1">
                    <p><span>LAST</span> UPDATE</p>
                        <h1>{covidrecord.lastupdatedtime}</h1>
                    </div>


                </div>
            </div>
        </>
    );
}
export default Covid;