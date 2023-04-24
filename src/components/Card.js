export default function Card(props) {
  const { card, handleClick, fromWhere } = props;
  return (
    <li key={card.id}>
      <input
        type="radio"
        id={card.id}
        name={fromWhere}
        value={card.name}
        onChange={handleClick}
        className="card__radio"
      />
      <label htmlFor={card.id} data-id={card.id} className={`card`}>
        {card.avatar && (
          <img src={card.avatar} alt={card.name} className="card__img" />
        )}

        <div className="card__content">
          <p className="card__name">{card.name}</p>
          <p className="card__email">{card.email}</p>
        </div>
      </label>
    </li>
  );
}
