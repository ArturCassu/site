import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 48px;
    justify-content: center;
    background-color: black;
    color: white;
    align-items: center;
`

export const Promotion = styled.div`
    display: flex;
    gap: 8px;
`

export const PromotionText = styled.h2`
    font-family: Calibri;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin: 0;
`

export const ShopNow = styled.a`
    font-family: Calibri;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin: 0;
    text-decoration: underline;
    cursor: pointer;
`

export const Lenguage = styled.select`
    position: absolute;
    right: 12%;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    &:focus{
        outline: none;
    }
`

export const Option = styled.option`
    background: black;
    color: white;
`