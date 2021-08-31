import "./style.css";
const CardPerson = ({ name, age, country }) => {
  return (
    <div className="CardPerson">
      <div>
        <h2 className="title">
          <label>
            Dev :<span className="campo"> {name}</span>
          </label>
        </h2>
      </div>
      <div>
        <label className="subtitle">
          Idade :<span className="campo"> {age}</span>
        </label>
      </div>
      <div>
        <label className="subtitle">
          País :<span className="campo"> {country}</span>
        </label>
      </div>
    </div>
  );
};
export default CardPerson;
