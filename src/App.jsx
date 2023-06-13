import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/globalStyles";
import { Feed } from "./pages/feed";
import { useState } from "react";
import { CartModal } from "./components/cartModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [productCart, setProductCart] = useState([]);
  const [openModal, SetOpenModal] = useState(false);

  const notify = ()=>{
    toast.warning("Este item ja foi adicionado ao carrinho")
  }

  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      <GlobalReset />
      <Feed
        notify={notify}
        SetOpenModal={SetOpenModal}
        setProductCart={setProductCart}
        productCart={productCart}
      />
      {openModal && <CartModal
        setProductCart={setProductCart}
        productCart={productCart}
        openModal={openModal}
        SetOpenModal={SetOpenModal} />}
    </>
  )
}

export default App
