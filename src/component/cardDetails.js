import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CardDetails() {
  const { id } = useParams();
  const cards = useSelector((state) => state.cards.cards);
  const card = cards.find((c) => c.id === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <h2>{card.name}</h2>
      <p>{card.desc}</p>
      <p>
        {card.views}
        {' '}
        Views
      </p>
    </div>
  );
}

export default CardDetails;
