import * as S from "./styles";

interface CategoryProps {
    title: string
    img: string
}

export default function Category({ title, img }: CategoryProps) {
    return (
        <S.CategoryContainer>
            <S.Image src={img} alt={title} />
            <S.Title>{title}</S.Title>
        </S.CategoryContainer>
        )
}

export type { CategoryProps };
