import React, {useState, useEffect} from 'react';
import { getMarketData } from '../lib/api';


const CurrencyContext = React.createContext({
  marketCurrencies: []
   
})

 export const CurrencyContextProvider = (props) => {
  const [marketCurrencyArray, setMarketCurrency] = useState(null)
  
  
  useEffect(() => {
    const fetchMarket = async() => {
     const data =  await getMarketData();
      setMarketCurrency(data);
    }
    fetchMarket()
  },[])
  

  const contexValue = {
    marketCurrencies: marketCurrencyArray,
  };
  return (
    <CurrencyContext.Provider value={contexValue}>
      {props.children}
    </CurrencyContext.Provider>
  );

}
export default CurrencyContext;
