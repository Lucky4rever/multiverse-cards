import Card, { CardProps, SingleCardProps } from "./Card";

interface CardsProps {
    "series": string;
    "background": string;
    "foreground-color": string;
    "text-color": string;
    "cards": SingleCardProps[];
}

export default function Cards() {
    let cardList: CardsProps[] = require('../db/Cards.json');

    const getCardsBySeries = () => {
        let Cards = cardList.map(cards => {
            console.log(cards["foreground-color"])
            return cards.cards.map(card => {
                return {
                    series: cards["series"],
                    background: cards["background"],
                    foregroundColor: cards["foreground-color"],
                    textColor: cards["text-color"],
                    card: card
                } as CardProps;
            });
        });
        // console.log(Cards)

        let AllCards: CardProps[] = [];
        for (let i = 0; i < Cards.length; i++)
            for (let j = 0; j < Cards[i].length; j++)
                AllCards.push(Cards[i][j]);
        return AllCards;
    }
    const sampledCardList = getCardsBySeries();

    return (
      <>
        {sampledCardList?.map(card => {
          return <Card 
              key={card.card.id}
              series={card.series}
              foregroundColor={card.foregroundColor}
              textColor={card.textColor}
              background={card.background}
              card={card.card} />
        })}
      </>
    );
}