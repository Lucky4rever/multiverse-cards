import styled from "styled-components";
import { useCardsDispatch } from "../utils/hooks";
import CardSlice from "../utils/slices/CardSlice";
import add_new from "../assets/img/add_new.svg";
import remove_all from "../assets/img/remove_all.svg";

const FooterLayout = styled.footer`
  position: fixed;
  width: 100%;
  top: auto;
  bottom: 0px;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

const Disclaimer = styled.span`
  display: block;
  max-width: 60vw;
  height: 100%;
  margin-top: auto;
  
  opacity: 0.2;
  color: #2aec64;
  font-size: 14px;
  text-align: center;

  @media (width <= 768px) {
    font-size: 6px;
  }
`;

const Button = styled.button<{mask?: string}>`
  height: 80px;
  width: 80px;
  border: none;
  background-color: white;
  z-index: -1;

  ${({mask}) => `
    mask-image: url(${mask});
    mask-size: 100%;
    mask-repeat: no-repeat;
  `}

  @media (width <= 768px) {
    height: 50px;
    width: 50px;
  }
`;

const Footer = () => {
  const dispatch = useCardsDispatch();

  return (
    <FooterLayout>
      <Button mask={add_new} onClick={() => dispatch(CardSlice.actions.addNewCard())} />
      <Disclaimer>
        Disclaimer: The content on this page is created for informational purposes only and does not hold any commercial value.
      </Disclaimer>
      <Button mask={remove_all} onClick={() => dispatch(CardSlice.actions.removeAllCards())} />
    </FooterLayout>
  );
};

export default Footer;