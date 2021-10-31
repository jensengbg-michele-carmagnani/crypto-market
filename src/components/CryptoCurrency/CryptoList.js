import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { marketAction } from "../../Store/markets-slice";

import Currency from "./CryptoItem";
// import CurrencyContext from "../../Store/currency-context";
import Box from "@mui/material/Box";

import { TextField } from "@mui/material";
import classes from "./CryptoList.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const CryptoList = () => {
  //const marketCtx = useContext(CurrencyContext);
  // const market = marketCtx.marketCurrencies;
  // console.log("market", marketCtx.marketCurrencies);
  const [searchedCoin, setSearchedCoin] = useState("");
  const inputSearchRef = useRef();
  const dispatch = useDispatch();

  let markets = useSelector((state) => state.markets.markets);
 console.log(markets)
  const showDetailsHandler = (id) => {
    dispatch(marketAction.setDetails(id));
  };
  const inputSearchHandler = () => {
    setSearchedCoin(inputSearchRef.current?.value);
  };

  const filterCoins = markets.filter((coin) =>
    coin.name.includes(searchedCoin)
  );

  return (
    <React.Fragment>
      <section className={classes.CryptoList}>
        <Box className={classes.InputContainer}>
          <TextField
            InputProps={{ className: classes.Input }}
            color="secondary"
            label="Search"
            placeholder="Search you currency"
            fullWidth={true}
            inputRef={inputSearchRef}
            onChange={inputSearchHandler}
            focused={true}
          />
        </Box>
        {filterCoins ? (
          filterCoins.map((currency) => (
            <Currency
              onShowDetails={showDetailsHandler}
              key={currency.id}
              id={currency.id}
              symbol={currency.symbol}
              image={currency.image}
              name={currency.name}
              price={currency.current_price}
              priceChange={currency.price_change_percentage_24h.toFixed(2)}
            />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </section>
    </React.Fragment>
  );
};

export default CryptoList;
