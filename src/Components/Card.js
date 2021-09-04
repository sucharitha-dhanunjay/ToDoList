import "./Card.css";
const Card = props => {
  let classname = props.timerExpired ? "invalidcard" : "card";
  return <li className={classname}>{props.title}</li>;
};

export default Card;
