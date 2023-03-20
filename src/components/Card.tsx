import React, { useState } from "react";
import styled from "styled-components";
import { motion, MotionValue, useCycle } from 'framer-motion';

const CardLayout = styled(motion.div)`
    position: relative;
    width: 260px;
    min-width: 260px;
    height: 360px;
    margin: 30px;
    
    transition: 1s;
    border-radius: 43px;
    background-color: gold;
    overflow: hidden;

	transition: 0.7s transform ease;
	transform-style: preserve-3d;
`;

const CardBackground = styled.img`
    height: 100%;
    object-fit: cover; 
    position: absolute;
    left: -62%;

    object-fit: cover;
    transform: rotateY(180deg);
    backface-visibility: hidden;
`;

const CardForeground = styled.div`
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 350px;
    margin: 5px;
    overflow: hidden;
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
    border-radius: 0 0 40px 40px;
    background-color: #a1d698;
    color: #209115;
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
    background-color: #a1d698;
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

export default function Card(props: CardProps) {
    let zIndex = 1;
    const zIndexOnClick = () => { zIndex = 10; }
    const zIndexOnTouchEnd = () => { zIndex = 1; }
    // const [animate, cycle] = useCycle(
    //     { transform: "rotateY(180deg)" },
    //     { transform: "rotateY(0deg)" }
    // )
    return (
        <CardLayout key={props.card.id} 
            style={{ 
                backgroundImage: ColorByRarity[props.card.rarity]
            }}
            drag
            whileHover={{ opacity: 1 }}
            whileTap={{
                opacity: 1,
                boxShadow: "0px 5px 8px #222",
                zIndex: zIndex
            }}
            onTapStart = { zIndexOnClick }
            onTapCancel = { zIndexOnTouchEnd }
            transition={{ duration: 2 }}
            // animate={animate}
            // onTap={cycle}
        >
            <CardBackground src={props.background} />
            <CardForeground>
                <CardImage src={props.card.foreground} />
                <Bluring />
                <CardInfo>
                    <CardTitle>{props.card.name}</CardTitle>
                    <CardDescription>Series: <b>{props.series}</b></CardDescription>
                    <CardDescription>Rarity: <b>{props.card.rarity}</b></CardDescription>
                </CardInfo>
            </CardForeground>
            <CardCovered />
        </CardLayout>
    )
};