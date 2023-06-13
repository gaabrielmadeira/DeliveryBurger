import { InputSearch } from "./inputSearch";
import BurgerKenzie from "../../assets/BurgerKenzie.svg";
import cart from "../../assets/cart.svg";
import { StyledHeader, StyledHeaderIcons, StyledIcon} from "./style";
import { StyledHeaderContainer } from "../../styles/container";

export const Header = ({ callback, SetOpenModal, productCart }) => {

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledHeaderIcons display="flex">
          <img src={BurgerKenzie} alt="Logo do KenzieBurguer" />
          <StyledIcon onClick={() => SetOpenModal(true)}>
            <img className="cartIcon" src={cart} alt="Logo com a quantidade de produtos no carrinho de compras" />
            <span className="amountProduct">{productCart.length}</span>
          </StyledIcon>
        </StyledHeaderIcons>
        <InputSearch callback={callback} SetOpenModal={SetOpenModal} />
      </StyledHeaderContainer>
    </StyledHeader>
  )
}