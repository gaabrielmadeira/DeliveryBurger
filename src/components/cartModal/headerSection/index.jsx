import close from "../../../assets/close.svg";
import {StyledTitleTwo} from "../../../styles/typograph";


export const HeaderModalSection = ({SetOpenModal}) => {
  return (
    <section>
      <StyledTitleTwo fontColor="white" >Carrinho de compras</StyledTitleTwo>
      <img src={close} onClick={()=> SetOpenModal(false)} alt="Botão para fechar o modal"/>
    </section>
  )
}