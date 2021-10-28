import React from "react";

import classes from "./CryptoItem.module.css";

const CryptoItem = (props) => {
  const { priceChange } = props;

  const percentChange =
    priceChange < 0 ? (
      <span style={{ color: "#FF3B30" }}>{priceChange}%</span>
    ) : (
      <span style={{ color: "#24C759" }}>{priceChange}%</span>
    );
  return (
    <section
      onClick={() => props.onShowDetails(props.id)}
      className={classes.Crypto}
    >
      <article>
        <img src={props.image} alt={props.id} />
        <section>
          <span>{props.name} </span>
          <span>({props.symbol.toUpperCase()})</span>
        </section>
      </article>
      <article>
        <span>{props.price} €</span>
        <span> {percentChange}</span>
      </article>
    </section>
  );
};

export default CryptoItem;
