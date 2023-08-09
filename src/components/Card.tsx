import { motion } from 'framer-motion';
import { ElementRef, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useCardsDispatch } from '../utils/hooks';
import CardSlice from '../utils/slices/CardSlice';

const CardLayout = styled(motion.div)`
  display: inline-flex;
  position: absolute;
  width: 260px;
  height: 360px;
  border-radius: 43px;
  transform-style: preserve-3d;
  
  @media (width <= 768px) {
    width: 130px;
    height: 180px;
    border-radius: 22px;
  }
`;

const CardDrager = styled(motion.div)`
  position: absolute;
  width: 260px;
  height: 360px;
  border-radius: 43px;
  z-index: 3;

  background-color: transparent;

  @media (width <= 768px) {
    width: 130px;
    height: 180px;
    border-radius: 22px;
  }
`;

const CardBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 260px;
  height: 360px;
  border-radius: 43px;

  object-fit: cover;
  backface-visibility: hidden;
  background-color: white;

  @media (max-width: 768px) {
    width: 130px;
    height: 180px;
    border-radius: 22px;
  }
`;

const CardForeground = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 250px 100px;
  width: 250px;
  height: 350px;
  margin: auto;

  overflow: hidden;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  color: #000000;

  @media (max-width: 768px) {
    width: 125px;
    height: 175px;
    margin: 2.5px;
    grid-template-rows: 125px 50px;
  }
`;


const CardImage = styled.div`
  width: 250px;
  height: 250px;
  
  outline: none;
  border-radius: 40px 40px 0 0;
  background-color: #171639 !important;
  background-size: auto 100% !important;

  @media (max-width: 768px) {
    width: 125px;
    height: 125px;
    border-radius: 20px 20px 0 0;
  }
`;

const CardInfo = styled.div`
  width: 250px;
  height: 100px;
  border-radius: 0 0 40px 40px;

  @media (max-width: 768px) {
    width: 125px;
    height: 50px;
    border-radius: 0 0 20px 20px;
  }
`;

const CardTitle = styled.span`
  display: block;
  width: calc(100% - 20px);
  margin: 5px 0 0 20px;
  font-size: 18px;
  
  @media (width <= 768px) {
    font-size: 8px;
    margin: 5px 0 0 15px;
  }
`;

const CardDescription = styled.div`
  width: calc(100% - 15px);
  margin: 0px 0px 5px 15px;
  font-size: 10px;

  > span {
    display: block;
  }
  
  @media (max-width: 768px) {
    margin: 0px 0px 5px 10px;
    font-size: 4px;
  }
`;

const CardCovered = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Card = ({id, series, background, foregroundColor, textColor, cardName, rarity, foreground}: CardProps) => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useCardsDispatch();

  const cardRef = useRef<ElementRef<"div">>(null);
  const [isOutOfScreen, setIsOutOfScreen] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      const element = cardRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        const isInScreen =
          rect.bottom >= -360 
          && rect.top <= window.innerHeight + 360
          && rect.left >= -260 
          && rect.right <= window.innerWidth + 260;
        
        setIsOutOfScreen(!isInScreen);
      };
    };

    const checkPositionInterval = setInterval(checkPosition, 1000);

    return () => {
      clearInterval(checkPositionInterval);
    };
  }, []);

  useEffect(() => {
    isOutOfScreen && dispatch(CardSlice.actions.removeCard(id));
  }, [dispatch, id, isOutOfScreen]);

  const getColorByRarity = useCallback((rarity: "common" | "rare" | "legendary") => {
    const colorByRarity: Record<string, string> = {
      "common": "linear-gradient(to left bottom, #f4f4f4, #f0f0f0, #ebebeb, #e7e7e7, #e3e3e3, #dfdfdf, #dadada, #d6d6d6, #d1d1d1, #cccccc, #c8c8c8, #c3c3c3)",
      "rare": "linear-gradient(to left bottom, #b700bd, #ae0dc3, #a417ca, #991fd0, #8c26d6, #8025d1, #7424cd, #6823c8, #5c1bb8, #5012a7, #450898, #390088)",
      "legendary": "linear-gradient(to left bottom, red, orange, yellow, green, blue, magenta, cyan)"
    };

    return colorByRarity[rarity];
  }, []);

  return (
    <CardDrager 
      drag
      ref={cardRef}
      whileTap={{ zIndex: 10, cursor: "grabbing" }}
      whileDrag={{ boxShadow: "0px 5px 8px #222" }}
      animate={{ y: 0 }}
      transition={{ duration: 3 }}
    >
      <CardLayout
        style={{
          rotateY: isShow ? "180deg" : "0deg", 
          transitionDuration: "1s",
          backgroundImage: getColorByRarity(rarity as "common" | "rare" | "legendary")
        }}
        onTap={() => setIsShow(true)}
      >
        <CardBackground src={background} alt={cardName} loading="lazy" />
        <CardForeground>
          <CardImage style={{background: `linear-gradient(to top, ${foregroundColor} 5%, transparent 15%), url(${foreground}) no-repeat center center fixed`}} />
          <CardInfo style={{backgroundColor: foregroundColor, color: textColor }} >
            <CardTitle>{cardName}</CardTitle>
            <CardDescription><span>Series: <b>{series}</b></span></CardDescription>
            <CardDescription><span>Rarity: <b>{rarity}</b></span></CardDescription>
          </CardInfo>
        </CardForeground>
        <CardCovered />
      </CardLayout>
    </CardDrager>
  );
};

export default Card;