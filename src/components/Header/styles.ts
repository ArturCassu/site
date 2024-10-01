import styled from "styled-components";

export const Main = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 5;
`

export const MainHeaderContainer = styled.header`
    display: flex;
    gap: 148px;
    height: 38px;
    justify-content: center;
    margin: 30px 0px 20px 0px;
    width: 100%;
`

export const Section1 = styled.div`
    display: flex;
    gap: 190px;
`

export const Logo = styled.h1`
    font-family: Arial,serif;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 2px;
    margin: 0;
    align-content: center;
`

export const Navbar = styled.nav`
    display: flex;
    gap: 48px;
`

export const NavLink = styled.a`
    font-family: Calibri;
    font-weight: 400;
    font-size: 16px;
    align-content: center;
    cursor: pointer;
`
export const Underline = styled.span`
    text-decoration: underline;
`

export const Section = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`

export const SearchComponent = styled.div`
    background-color: #F5F5F5;
    padding: 7px 12px 7px 20px;
    border-radius: 4px;
    display: flex;
    gap: 34px;
`

export const SearchInput = styled.input`
    font-family: Calibri;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: black;
    margin: 0;
    align-content: center;
    background: none;
    border: none;
    outline: none;
`

export const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
`

export const CartFavoriteIcon = styled.img`
    width: 32px;
    height: 32px;
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: gray;
`

