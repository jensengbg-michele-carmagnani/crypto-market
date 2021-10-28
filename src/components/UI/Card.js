import React,{ Fragment} from 'react'
import classes from './Card.module.css'
const Card = (props) => {
  return (
    <Fragment>
      <div className={classes.Card}>{props.children}</div>
    </Fragment>
  );
}

export default Card
