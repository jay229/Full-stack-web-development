import React, { useEffect, useState } from 'react'
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = "http://api.exchangeratesapi.io/v1/latest?access_key=449d64214b6267d2102c6e182a05f1c3"
function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setfromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInfromCurrency, setAmountInfromCurrency] = useState(true)
  let toAmount, fromAmount;
  if (amountInfromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  }
  else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setfromCurrency(data.base)
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      })

  }, [])
  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency} &symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])
  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInfromCurrency(true)
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInfromCurrency(false)
  }
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setfromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={handleFromAmountChange}
      />
      <div className="equals">=</div>
      <CurrencyRow currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleToAmountChange}
      />

    </>
  );
}

export default App;
