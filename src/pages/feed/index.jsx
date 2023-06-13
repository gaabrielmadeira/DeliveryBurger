import { Header } from "../../components/header";
import { ProductList } from "../../components/productListSection";
import { useState } from "react";
import { api } from "../../services/api";
import { useEffect } from "react";
import { ProductCard } from "../../components/productListSection/ProductCard";
import {StyledListSectionContainer} from "../../styles/container";
import {MainCentralize} from "./style";

export const Feed = ({ SetOpenModal, setProductCart, productCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);

    const getProducts = async () => {

      try {
        const response = await api.get("/products", {
          params: {
            name_like: search,
          }
        });
        setProducts(response.data);
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false)
      }

    }

    getProducts();

  }, [search])


  return (
    <>
      <Header
        callback={(InputSearch) => setSearch(InputSearch)}
        SetOpenModal={SetOpenModal}
        productCart={productCart}
      />
      <MainCentralize>
        <StyledListSectionContainer right="not">
          <ProductList>
            {loading && <div>Loading...</div>}
            {
              products.map((product) =>
                <ProductCard
                  setProductCart={setProductCart}
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  img={product.img}
                />
              )
            }
          </ ProductList>
        </StyledListSectionContainer>
      </MainCentralize>
    </>
  )
}