import { motion, useCycle } from 'framer-motion';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const CardLayout = styled(motion.div)`
    display: inline-flex;
    position: relative;
    width: 260px;
    min-width: 260px;
    height: 360px;
    border-radius: 43px;
    
	transform-style: preserve-3d;
`;

const CardDrager = styled(motion.div)`
    position: relative;
    width: 260px;
    min-width: 260px;
    height: 360px;
    margin: 20px;
    border-radius: 43px;
    
    background-color: transparent;
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
`;

const CardForeground = styled.div`
    position: relative;
    display: block;
    justify-content: center;
    width: 250px;
    height: 350px;
    margin: 5px;
    margin-bottom: 0px;

    overflow: hidden;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    color: #000000;
`;


const CardImage = styled.img`
    width: 250px;
    height: 250px;
    
    outline: none;
    border-radius: 40px 40px 0 0;
    background-color: black;
    object-fit: cover;
    user-select: none;
`;

const CardInfo = styled.div`
    position: relative;
    width: 250px;
    height: 100px;

    transform: translateY(-12px);
    border-radius: 0 0 40px 40px;
`;

const Bluring = styled.hr`
    position: absolute;
    top: 225px;
    left: -25px;
    width: 300px;
    height: 50px;
    border: none;
    margin: 0;

    filter: blur(10px);
`;

const CardTitle = styled.span`
    display: block;
    width: calc(100% - 20px);
    margin: 5px 0 0 20px;
    font-size: 18px;
`;

const CardDescription = styled.span`
    display: block;
    width: calc(100% - 15px);
    margin: 0px 0px 5px 15px;
    font-size: 10px;
`;

const CardCovered = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export interface CardProps {
    series: string;
    background: string;
    foregroundColor: string;
    textColor: string;
    card: SingleCardProps;
}

export interface SingleCardProps {
    id: number;
    name: string;
    rarity: string;
    foreground: string;
}

const ColorByRarity: any = {
    "common": "linear-gradient(to left bottom, #f4f4f4, #f0f0f0, #ebebeb, #e7e7e7, #e3e3e3, #dfdfdf, #dadada, #d6d6d6, #d1d1d1, #cccccc, #c8c8c8, #c3c3c3)",
    "rare": "linear-gradient(to left bottom, #b700bd, #ae0dc3, #a417ca, #991fd0, #8c26d6, #8025d1, #7424cd, #6823c8, #5c1bb8, #5012a7, #450898, #390088)",
    "legendary": "linear-gradient(to left bottom, red, orange, yellow, green, blue, magenta, cyan)"
}

export default function Card (props: CardProps) {
    
    // const [animate, cycle] = useCycle(
    //     { transform: "rotateY(180deg)" },
    //     { transform: "rotateY(0deg)" }
    // )
    
    const [isShowed, setIsShow] = useState(false);
    const ShowCard = () => {
        setIsShow(true);
    }
  
    return (
        <CardDrager drag>
            <CardLayout style={{
                    backgroundImage: ColorByRarity[props.card.rarity],
                    transition: "1s",
                    transform: isShowed ? "rotateY(180deg)" : "rotateY(0deg)"
                }} 
                onTap={ ShowCard }
                onDragStart={ () => setIsShow(true) }
                whileTap={{ zIndex: 10, cursor: "grabbing" }}
                whileDrag={{ boxShadow: "0px 5px 8px #222" }}
                transition={{ duration: 0.6 }}
            >
                <CardBackground src={props.background} alt={props.card.name}  />
                <CardForeground>
                    <CardImage src={props.card.foreground} />
                    <Bluring style={{backgroundColor: props.foregroundColor }} />
                    <CardInfo style={{backgroundColor: props.foregroundColor, color: props.textColor }} >
                        <CardTitle>{props.card.name}</CardTitle>
                        <CardDescription>Series: <b>{props.series}</b></CardDescription>
                        <CardDescription>Rarity: <b>{props.card.rarity}</b></CardDescription>
                    </CardInfo>
                </CardForeground>
                <CardCovered />
            </CardLayout>
        </CardDrager>
    );
}