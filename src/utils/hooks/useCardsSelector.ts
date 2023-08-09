import { TypedUseSelectorHook, useSelector } from "react-redux";
import { CardsStoreState } from "../types/CardsStoreState";

const useCardsSelector: TypedUseSelectorHook<CardsStoreState> = useSelector;

export default useCardsSelector;
