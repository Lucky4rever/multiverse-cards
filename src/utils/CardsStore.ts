import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slices/CardSlice";

const CardsStore = configureStore({
  reducer: {
    cards: CardSlice.reducer,
  },
});

export default CardsStore;