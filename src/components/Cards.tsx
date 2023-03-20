import Card, { CardProps, SingleCardProps } from "./Card";

interface CardsProps {
    series: string;
    background: string;
    cards: SingleCardProps[];
}

export default function Cards() {
    let cardList: CardsProps[] = require('../db/Cards.json');

    const getCardsBySeries = () => {
        let Cards = cardList.map(cards => {
            return cards.cards.map(card => {
                return {
                    series: cards.series,
                    background: cards.background,
                    card: card
                } as CardProps;
            });
        });
        console.log(Cards)

        let AllCards: CardProps[] = [];
        for (let i = 0; i < Cards.length; i++)
            for (let j = 0; j < Cards[i].length; j++)
                AllCards.push(Cards[i][j]);
        return AllCards;
    }
    const sampledCardList = getCardsBySeries();

    return (
      <>
        {console.log(sampledCardList)}
        {sampledCardList?.map(card => {
          return <Card 
              key={card.card.id}
              series={card.series} 
              background={card.background} 
              card={card.card} />
        })}
      </>
    );
}