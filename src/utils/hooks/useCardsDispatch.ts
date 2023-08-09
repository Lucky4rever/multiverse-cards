import { useDispatch } from "react-redux";
import { CardsDispatch } from "../types/CardsDispatch";

const useCardsDispatch: () => CardsDispatch = useDispatch;

export default useCardsDispatch;
