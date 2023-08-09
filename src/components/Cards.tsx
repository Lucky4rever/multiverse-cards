import Card from "./Card";
import { useCardsSelector } from "../utils/hooks";
import styled from "styled-components";

const CardsLayout = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  height: 360px;
  width: 260px;

  @media (max-width: 768px) {
    width: 125px;
    height: 175px;
  }
`;

const Cards = () => {
  const cardList = useCardsSelector((state) => state.cards.cardList);
  return (
    <CardsLayout>
      {cardList?.map((card) => (<Card key={card.id} {...card} />))}
    </CardsLayout>
  );
}

export default Cards;
