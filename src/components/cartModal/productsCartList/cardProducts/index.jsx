import trash from "../../../../assets/trash.svg";
import { StyledTitleTwo } from "../../../../styles/typograph";
import { StyledProductsCard, StyledProductName } from "./style";

export const CardProduct = ({ name, img, id, deleteCartProduct}) => {
 
  const handleDeleteClick = () => {
    deleteCartProduct(id);
  };
  
  return (
    <StyledProductsCard >
      <img className="ProductImage" src={img} alt={`imagem do produto ${name}`} />
      <StyledProductName>
        <StyledTitleTwo>{name}</StyledTitleTwo>
        <button className="trashButton" onClick={handleDeleteClick}>
          <img  src={trash} alt="Icone em formato de lixeira do botão excluir" />
        </button>
      </StyledProductName>
    </StyledProductsCard>
  )
}