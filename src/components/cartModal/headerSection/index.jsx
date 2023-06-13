import close from "../../../assets/close.svg";
import {StyledTitleTwo} from "../../../styles/typograph";
import {StyledModalHeader} from "./style";


export const HeaderModalSection = ({SetOpenModal}) => {
  return (
    <StyledModalHeader>
      <StyledTitleTwo fontColor="white" >Carrinho de compras</StyledTitleTwo>
      <img className="buttonClose" src={close} onClick={()=> SetOpenModal(false)} alt="Botão para fechar o modal"/>
    </StyledModalHeader>
  )
}