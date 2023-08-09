import { createSlice } from "@reduxjs/toolkit";
import RandomCard from "../RandomCard";
import { union, filter } from "lodash";

const CardSlice = createSlice({
  name: "cards",
  initialState: {
    cardList: [] as CardProps[],
  },
  reducers: {
    addNewCard: (state) => {
      state.cardList = union(state.cardList, [RandomCard()]);
    },
    removeCard: (state, action) => {
      state.cardList = filter(state.cardList, (card) => (card.id !== action.payload));
    },
    removeAllCards: (state) => {
      state.cardList = [];
    },
  }
});

export default CardSlice;