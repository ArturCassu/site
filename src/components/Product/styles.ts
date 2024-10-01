import styled from "styled-components";

export const ProductContainer = styled.div`
    gap: 16px;
    flex-direction: column;
    width: 22%;
    height: 350px;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    background-color: #F5F5F5;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Image = styled.img`
    width: fit-content;
    height: 50%;
`

const Prop = styled.div`
    width: fit-content;
    padding: 5px 10px;
    border-radius: 4px;
    color: white;
    top: 12px;
    left: 12px;
    position: absolute;
`

export const Discount = styled(Prop)`
    background-color: #DB4444;
`
export const NewProduct = styled(Prop)`
    background-color: lawngreen;
`

export const Icons = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    gap: 8px;
    top: 4px;
    right: 8px;
    padding: 5% 0;
`

export const Icon = styled.img`
    background-color: white;
    border-radius: 50%;
    width: 80%;
    height: 80%;
    padding: 8%;
`

export const DetailsContainer = styled.div`
    
`

export const Name = styled.h3`
    max-width: 100%;
    max-lines: 1;
    font-size: 16px;

`

export const Info = styled.div`
    display: flex;
    margin: 16px 0;
`

export const Colors = styled.div`
    display: flex;
`

export const Color = styled.div`
`

export const OldPrice = styled.del`
    color: grey;
`

export const Price = styled.p`
    color: #DB4444;
    font-weight: bold;
    margin: 0 20px 0 0;
`

export const Reviews = styled.p`
    margin: auto 16px;
    font-family: "Cascadia Code";
    font-size: 12px;
    color: gray;
`