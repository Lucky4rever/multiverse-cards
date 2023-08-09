import { filter, random } from "lodash";
import CardsFromJson from "./CardsFromJson";
import { v4 } from "uuid";

const RandomCard = () => {
  const CardList = CardsFromJson();

  const FilteredCardList = filter(CardList, (card) => {
    const checkCardRarity = () => {
      const cardRarityNumber = random(100);
      switch (true) {
        case cardRarityNumber < 5:
          return card.rarity === "legendary";
        case cardRarityNumber < 25:
          return card.rarity === "rare";
        default:
          return card.rarity === "common";
      };
    };

    return checkCardRarity();
  });

  const count = FilteredCardList.length;

  const randomCard = FilteredCardList[random(count - 1)] as CardProps;
  randomCard.id = v4();

  // console.log(randomCard.rarity);
  // * here you can check the rarity of the card you got

  return randomCard;
};

export default RandomCard;
