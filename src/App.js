import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { marketAction } from "./Store/markets-slice";
import { getMarketData } from "./lib/api";
import Details from './components/CryptoCurrency/CryptoDetails'
import "./App.css";
import HomePage from "./pages/HomePage";


import Layout from "./components/Layout/Layout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const markets = async () => {
      const data = await getMarketData();

      dispatch(marketAction.replaceMarket(data));
    };
    markets()
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
          <Details/>
        </Route>
        <Route path="/details/:id">

        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
