import * as S from "./styles";
import {ProductProps} from "../Product"
import {CategoryProps} from "../Category"
import Product from "../Product"
import Category from "../Category";
import arrowRight from "../../assets/arrow-right.svg"
import arrowLeft from "../../assets/arrow-left.svg"



interface SectionProps {
    subtitle: string
    title: string
    listProducts: ProductProps[]
    listCategories: CategoryProps[]
    timer: boolean
    viewMoreTop: boolean
    viewMoreBotton: boolean
}

export default function Section(
    {subtitle, title, listProducts, listCategories, timer, viewMoreTop, viewMoreBotton}: SectionProps
) {
    return (
        <S.Section>


            <S.SubtitleContainer>
                <S.SubtitleElement/>
                <S.SubtitleText>{subtitle}</S.SubtitleText>
            </S.SubtitleContainer>
            <S.TitleContainer>
                <S.Title>{title}</S.Title>
                {timer?<Timer/>:null}
                {viewMoreTop?<S.ViewMore style={{position:"absolute", right:"40px"}}>View All</S.ViewMore>:null}
                {!viewMoreTop?<S.Arrows style={{position:"absolute", right:"40px"}}>
                    <S.Arrow src={arrowLeft}/>
                    <S.Arrow src={arrowRight}/>
                </S.Arrows>:null}
            </S.TitleContainer>

            <S.ItemsContainer>
                {listProducts.length>0?listProducts.map((props,i) => <Product key={i} {...props}/>):null}
                {listCategories.length>0?listCategories.map((props,i) => <Category key={i} {...props}/>):null}
            </S.ItemsContainer>

            {viewMoreBotton?<S.ViewMore>View All Products</S.ViewMore>:null}
        </S.Section>
    )
}

import  { useState, useEffect } from 'react';
function Timer(){
    const [time, setTime] = useState(259200);

    useEffect(() => {
    if (time > 0) {
    const interval = setInterval(() => {
    setTime((prevTime) => prevTime - 1);
    }, 1000);

        return () => clearInterval(interval);
    }
    }, [time]);
    const montarCronometro = (segundos: number) => {
    const dias = Math.floor(segundos / (3600 * 24));
    const horas = Math.floor((segundos % (3600 * 24)) / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    return { dias, horas, minutos, segundos: segundosRestantes };
};

    const { dias, horas, minutos, segundos } = montarCronometro(time);
    return (
        <>
            <S.Timer>
                <S.TempoContainer>
                    <S.TempoText>Days</S.TempoText>
                    <S.Tempo>{dias}</S.Tempo>
                </S.TempoContainer>
                <S.Divisor>:</S.Divisor>
                <S.TempoContainer>
                    <S.TempoText>Hours</S.TempoText>
                    <S.Tempo>{horas}</S.Tempo>
                </S.TempoContainer>
                <S.Divisor>:</S.Divisor>
                <S.TempoContainer>
                    <S.TempoText>Minutes</S.TempoText>
                    <S.Tempo>{minutos}</S.Tempo>
                </S.TempoContainer>
                <S.Divisor>:</S.Divisor>
                <S.TempoContainer>
                    <S.TempoText>Seconds</S.TempoText>
                    <S.Tempo>{segundos}</S.Tempo>
                </S.TempoContainer>
            </S.Timer>
        </>
    )
}