import React,{useEffect,useState} from 'react'
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL="http://api.exchangeratesapi.io/v1/latest?access_key=449d64214b6267d2102c6e182a05f1c3"
function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setfromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  // console.log(currencyOptions);
  useEffect(() => {
   fetch(BASE_URL)
   .then(res=>res.json())
   .then(data=>{
     setCurrencyOptions([data.base,...Object.keys(data.rates)])
     const currency=Object.keys(data.rates)[0];
     setfromCurrency(data.base)
     setToCurrency(currency);
   })
   .catch((error) => console.log(error.message));
  }, [])
  return (
    <>
   <h1>Convert</h1>
   <CurrencyRow  currencyOptions={currencyOptions}
   selectedCurrency={fromCurrency}
   onChangeCurrency={e=>setfromCurrency(e.target.value)}
   on
   />
    <div className="equals">=</div>
   <CurrencyRow currencyOptions={currencyOptions}
    selectedCurrency={toCurrency}
    onChangeCurrency={e=>setToCurrency(e.target.value)}
   />

    </>
  );
}

export default App;
