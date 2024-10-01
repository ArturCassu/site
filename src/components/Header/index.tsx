import * as S from "./styles";
import search_icon from "../../assets/search-icon.svg"
import cart from "../../assets/cart.svg"
import favorite from "../../assets/wishlist.svg"
import PromotionBar from "./PromotionBar/index.tsx";


export default function Header() {
    return (
        <S.Main>
            <PromotionBar></PromotionBar>
            <S.MainHeaderContainer>

                <S.Logo>Exclusive</S.Logo>

                <S.Navbar>
                    <S.NavLink><S.Underline>Home</S.Underline></S.NavLink>
                    <S.NavLink>Contact</S.NavLink>
                    <S.NavLink>About</S.NavLink>
                    <S.NavLink>Sign Up</S.NavLink>
                </S.Navbar>

                <S.Section>
                    <S.SearchComponent>
                        <S.SearchInput placeholder={"What are you looking for?"}/>
                        <S.SearchIcon src={search_icon}/>
                    </S.SearchComponent>
                    <S.CartFavoriteIcon src={favorite}/>
                    <S.CartFavoriteIcon src={cart}/>
                </S.Section>

            </S.MainHeaderContainer>

            <S.Line></S.Line>
        </S.Main>
    )
}