import { StyledTitleTwo, StyledSpanBig, StyledSpanSmall } from "../../../styles/typograph";
import { StyledButtonPrimary } from "../../../styles/button";
import { StyledProductsCards } from "./style";

export const ProductCard = ({ id, name, category, price, img, setProductCart }) => {

  const handleProductItem = () => {
    const productItem = {
      id,
      name,
      price,
      img
    }

    setProductCart(productCart => [...productCart, productItem])
  }

  return (
    <StyledProductsCards>
      <img className="imgCard" src={img} alt={`ìmagem do produto ${name}`} />
      <div>
        <StyledTitleTwo>{name}</StyledTitleTwo>
        <StyledSpanSmall>{category}</StyledSpanSmall>
        <StyledSpanBig fontColor="green">{price}</StyledSpanBig>
        <StyledButtonPrimary onClick={handleProductItem}>Adicionar</StyledButtonPrimary>
      </div>
    </StyledProductsCards>
  )
}