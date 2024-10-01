import * as S from "./styles";

export default function PromotionBar(){
    return (
        <>
            <S.Container>
                <S.Promotion>
                    <S.PromotionText>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</S.PromotionText>
                    <S.ShopNow>ShopNow</S.ShopNow>
                </S.Promotion>
                <S.Lenguage>
                    <S.Option value={"english"}>English</S.Option>
                    <S.Option value={"portuguese"}>Portuguese</S.Option>
                </S.Lenguage>
            </S.Container>
        </>
)
};