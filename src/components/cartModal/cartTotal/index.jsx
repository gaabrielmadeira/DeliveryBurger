import { StyledSpanBig } from "../../../styles/typograph";
import { StyledTotalContainer, StyledTotalPrice } from "./style";
import { StyledButtonRemove } from "../../../styles/button";

export const CartTotal = ({ setProductCart, productCart }) => {

  const handleRemoveAllProducts = () => {
    setProductCart([]);
  }

  const price = () => {
    const totalPrice = productCart.reduce((accumulator, product) => accumulator + product.price, 0)

    const formatedTotalPrice = totalPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })

    return formatedTotalPrice;
  }

  return (
    <StyledTotalContainer>
      <StyledTotalPrice>
        <StyledSpanBig>Total</StyledSpanBig>
        <StyledSpanBig fontColor="grey-300">{price()}</StyledSpanBig>
      </StyledTotalPrice>
      <StyledButtonRemove onClick={handleRemoveAllProducts}>Remover Todos</StyledButtonRemove>
    </StyledTotalContainer>
  )
}