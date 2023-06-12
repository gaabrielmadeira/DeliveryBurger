import trash from "../../../../assets/trash.svg";
import { StyledTitleTwo } from "../../../../styles/typograph";

export const CardProduct = ({ name, img, id, deleteCartProduct}) => {
  
  const handleDeleteClick = () => {
    deleteCartProduct(id);
  };

  return (
    <li>
      <img src={img} alt={`imagem do produto ${name}`} />
      <StyledTitleTwo>{name}</StyledTitleTwo>
      <button onClick={handleDeleteClick}>
        <img src={trash} alt="Icone em formato de lixeira do botão excluir" />
      </button>
    </li>
  )
}