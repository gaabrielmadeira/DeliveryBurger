import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/globalStyles";
import { Feed } from "./pages/feed";
import { useState } from "react";
import { CartModal } from "./components/cartModal";


const App = () => {
  const [productCart, setProductCart] = useState([]);
  const [openModal, SetOpenModal] = useState(false);

  return (
    <>
      <GlobalStyles />
      <GlobalReset />
      <Feed
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
