import { useEffect} from "react"
import { CartTotal } from "./cartTotal"
import { HeaderModalSection } from "./headerSection"
import { ProductsCartList } from "./productsCartList"
import { CardProduct } from "./productsCartList/cardProducts";
import { EmptyCart } from "./emptyCart";
import { useRef } from "react";
import { StyledOverlay, StyledModalBox, StyledContentContainer } from "./style";

export const CartModal = ({ SetOpenModal, productCart, setProductCart }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) =>{
      if(!modalRef.current?.contains(event.target)){
        SetOpenModal(false);
      }
    }

      window.addEventListener("mousedown", handleOutClick); 

    return () => {

      window.removeEventListener("mousedown", handleOutClick);

    };
  },[]);

  useEffect(() => {
    const handleOutClick = (event) => event.key ==="Escape" && SetOpenModal(false);


      window.addEventListener("keydown", handleOutClick);

    return () => {

      window.removeEventListener("keydown", handleOutClick);

    };
  },[]);

  const deleteCartProduct = (productId) => {
    setProductCart(productCart.filter((product) => product.id != productId));
  }

  return (
    <StyledOverlay role="dialog">
      <StyledModalBox ref={modalRef}>
        <HeaderModalSection SetOpenModal={SetOpenModal} />
        {productCart.length === 0 ? <EmptyCart /> :
          <StyledContentContainer>
            <ProductsCartList>
              {productCart.map((product) => < CardProduct deleteCartProduct={deleteCartProduct} key={product.id} id={product.id} name={product.name} img={product.img} />)}
            </ProductsCartList>
            <CartTotal productCart={productCart} setProductCart={setProductCart} />
          </StyledContentContainer>
        }
      </StyledModalBox>
    </StyledOverlay>
  )
}