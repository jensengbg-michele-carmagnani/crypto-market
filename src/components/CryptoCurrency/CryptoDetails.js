import React from "react";
import { marketAction } from "../../Store/markets-slice";
import { useSelector, useDispatch } from "react-redux";
import classes from "./CryptoDetails.module.css";
import { CloseCircleOutlined } from "@ant-design/icons";
import BarChart from './BarChart'

const CryptoDetails = (props) => {
  const dispatch = useDispatch();
  const showDetails = useSelector((state) => state.markets.showDetails);
  const details = useSelector((state) => state.markets.detailsCurrency);
  const barChartInfo = useSelector(
    (state) => state.markets.detailsCurrency.sparkline_in_7d
  );
  console.log('sparkLIne', barChartInfo)
  

  const parcentage =
    details.price_change_percentage_24h < 0 ? (
      <p style={{ color: "#FF3B30" }}>
        {details.price_change_percentage_24h?.toFixed(2)}%
      </p>
    ) : (
      <p style={{ color: "#24C759" }}>
        {details.price_change_percentage_24h?.toFixed(2)}%
      </p>
    );

  let showDetailsClasses = showDetails
    ? `${classes.CryptoDetails} ${classes.OpenDetails}`
    : `${classes.CryptoDetails} `;

  const closeDetailsHandler = () => {
    dispatch(marketAction.changeStatusShowDetails());
  };

  return (
    <section className={showDetailsClasses}>
      <div>
        <article>
          <div>
            <img src={details.image} alt="" />
            <h4>{details.id}</h4>
            <p>({details.symbol})</p>
          </div>
          <p>{details.current_price}€</p>
        </article>

        <article>
          <p>7d</p>
          {parcentage}
        </article>
        <span>
          <CloseCircleOutlined
            className={classes.CloseCircle}
            onClick={closeDetailsHandler}
          />
        </span>
      </div>
      <BarChart barChartInfo={barChartInfo} />
    </section>
  );
};

export default CryptoDetails;
