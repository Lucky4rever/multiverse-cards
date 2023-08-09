import cardsJson from "../db/Cards.json";

const CardsFromJson = () => {
  const cards = cardsJson.map((card) => ({
    cardName: card["name"],
    rarity: card["rarity"],
    foreground: card["foreground"],
    series: card["series"],
    background: card["background"],
    foregroundColor: card["foreground-color"],
    textColor: card["text-color"]
  } as const));

  return cards;
};

export default CardsFromJson;