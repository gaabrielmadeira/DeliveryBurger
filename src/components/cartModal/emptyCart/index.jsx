import emptyCart from "../../../assets/emptyCart.png";
import {StyledFigure} from "./style";

export const EmptyCart = () => {
  return (
    <StyledFigure>
      <img className="emptyImage" src={emptyCart} alt="Imagem do carrinho vazio" />
    </StyledFigure>
  )
}