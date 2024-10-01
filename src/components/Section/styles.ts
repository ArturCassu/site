import styled from 'styled-components';

export const Section = styled.div`
    position: relative;
    margin: 80px 0;
`

export const SubtitleContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`

export const SubtitleElement = styled.div`
    width: 20px;
    height: 40px;
    border-radius: 4px;
    background: #DB4444;
`

export const SubtitleText = styled.h3`
    font-weight: 600;
    font-size: 16px;
    font-family: cursive;
    color: #DB4444;
`

export const Title = styled.h2`
    font-weight: 600;
    font-size: 36px;
    font-family: cursive;
    margin: 0;
    display: inline-block;
`
export const TitleContainer = styled.div`
    margin: 32px 0;
    display: flex;
    gap: 64px;
    align-items: flex-end;
    position: relative;
`

export const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

export const ViewMore = styled.div`
    background-color: #DB4444;
    width: fit-content;
    padding: 16px 20px;
    border-radius: 4px;
    color: white;
    margin: 0 auto;
`

export const Timer = styled.div`
    display: flex;
`


export const Divisor = styled.p`
    color: #DB4444;
    font-weight: bolder;
    font-size: 40px;
    font-family: cursive;
    margin: auto 20px;
`

export const TempoContainer = styled.div`
    display: inline;
`

export const Tempo = styled.p`
    font-weight: bolder;
    font-size: 40px;
    margin: 0;
`
export const TempoText = styled.p`
    margin: 0;
    font-size: 12px;
`

export const Arrows = styled.div`
    display: flex;
    position: absolute;
    gap: 8px;
`

export const Arrow = styled.img`
    background-color: lightgray;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 10px;
    
`