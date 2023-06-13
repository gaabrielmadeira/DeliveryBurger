import { StyledTitleTwo, StyledSpanBig, StyledSpanSmall } from "../../../styles/typograph";
import { StyledButtonPrimary } from "../../../styles/button";
import { StyledProductsCards } from "./style";

export const ProductCard = ({ id, name, category, price, img, setProductCart}) => {

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

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
      <div className="imgCard">
        <img src={img} alt={`ìmagem do produto ${name}`} width="150px" height="150px" />
      </div>
      <div className="content">
        <StyledTitleTwo>{name}</StyledTitleTwo>
        <StyledSpanSmall>{category}</StyledSpanSmall>
        <StyledSpanBig fontColor="green">{formattedPrice}</StyledSpanBig>
        <StyledButtonPrimary onClick={handleProductItem}>Adicionar</StyledButtonPrimary>
      </div>
    </StyledProductsCards>
  )
}