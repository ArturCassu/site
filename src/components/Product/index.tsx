import * as S from "./styles"
const filled_star = 'src/assets/star-filled.svg'
const half_filled_star = 'src/assets/star-half-filled.svg'
const empty_star = 'src/assets/star-empty.svg'

interface ProductProps {
    name: string
    price: number
    image: string
    isDiscount: boolean
    discountPercentage: number | null
    discountPrice: number | null
    isNew: boolean
    stars: number
    colors: string[]
    numberOfReviews: number
}

const favorite = "src/assets/wishlist.svg"
const quick_view = "src/assets/quick-view.svg"

export default function Product(
    {
    name,
    price,
    image,
    isDiscount,
    discountPercentage,
    discountPrice,
    isNew,
    colors,
    stars,
    numberOfReviews,
}: ProductProps ){
    console.log(isDiscount, isNew)
    return (
        <S.ProductContainer>
            <S.ImageContainer>
                {isDiscount ? <S.Discount>{discountPercentage}%</S.Discount>: null}
                {isNew && !isDiscount ? <S.NewProduct>New</S.NewProduct>: null}

                <S.Image src={image} alt={name}/>
                <S.Icons>
                    <S.Icon src={favorite} alt="Favorite Product"/>
                    <S.Icon src={quick_view} alt="Quick View"/>
                </S.Icons>
            </S.ImageContainer>
            <S.DetailsContainer>
                <S.Name>{name}</S.Name>
                <S.Info>
                    <S.Price className='price'>${price}</S.Price>
                    {isDiscount ? <S.OldPrice className="discount-price">${discountPrice}</S.OldPrice>: null}

                </S.Info>
                <S.Info>
                    <Stars stars={stars}/>
                    <S.Reviews className="numberOfReviews">({numberOfReviews})</S.Reviews>
                </S.Info>
                <S.Colors>
                    {colors.length > 1?
                        colors.map((color, i) => <S.Color key={i} style={{backgroundColor: color}}/>
                        ): null
                    }
                </S.Colors>
            </S.DetailsContainer>
        </S.ProductContainer>
    )
}

interface StarsProps {
    stars: number
}

function Stars(
        {stars}: StarsProps
    ) {
    return (
        <div className="stars">
            {/* Estrela 1 */}
            { stars >= 1 ?              <img src={filled_star}       alt='star-review-filled'/>: null }
            { stars > 0 && stars < 1 ?  <img src={half_filled_star}  alt='star-review-half'  />: null }
            { stars == 0 ?              <img src={empty_star}        alt='star-review-empty' />: null }
            {/* Estrela 2 */}
            { stars >= 2 ?              <img src={filled_star}       alt='star-review-filled'/>: null }
            { stars > 1 && stars < 2 ?  <img src={half_filled_star}  alt='star-review-half'  />: null }
            { stars <= 1 ?              <img src={empty_star}        alt='star-review-empty' />: null }
            {/* Estrela 3 */}
            { stars >= 3 ?              <img src={filled_star}       alt='star-review-filled'/>: null }
            { stars > 2 && stars < 3 ?  <img src={half_filled_star}  alt='star-review-half'  />: null }
            { stars <= 2 ?              <img src={empty_star}        alt='star-review-empty' />: null }
            {/* Estrela 4 */}
            { stars >= 4 ?              <img src={filled_star}       alt='star-review-filled'/>: null }
            { stars > 3 && stars < 4 ?  <img src={half_filled_star}  alt='star-review-half'  />: null }
            { stars <= 3 ?              <img src={empty_star}        alt='star-review-empty' />: null }
            {/* Estrela 5 */}
            { stars >= 5 ?              <img src={filled_star}       alt='star-review-filled'/>: null }
            { stars > 4 && stars < 5 ?  <img src={half_filled_star}  alt='star-review-half'  />: null }
            { stars <= 4 ?              <img src={empty_star}        alt='star-review-empty' />: null }
        </div>
    )
}

// export {Product}
export type {ProductProps}