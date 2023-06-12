import {StyledSpanBig} from "../../../styles/typograph";

export const CartTotal = () => {
  return (
    <section>
      <div>
        <StyledSpanBig>Total</StyledSpanBig>
        <StyledSpanBig fontColor="grey-300">Preço</StyledSpanBig>
      </div>
      <button>Remover Todos</button>
    </section>
  )
}