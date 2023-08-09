import { createSlice } from "@reduxjs/toolkit";
import RandomCard from "../RandomCard";
import _ from "lodash";

const CardSlice = createSlice({
  name: "cards",
  initialState: {
    cardList: [] as CardProps[],
  },
  reducers: {
    addNewCard: (state) => {
      state.cardList = _.union(state.cardList, [RandomCard()]);
    },
    removeCard: (state, action) => {
      state.cardList = state.cardList.filter(card => card.id !== action.payload);
    },
    removeAllCards: (state) => {
      state.cardList = [];
    },
  }
});

export default CardSlice;