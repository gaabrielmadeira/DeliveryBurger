import styled from "styled-components";

export const StyledProductsCard = styled.li`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: flex-start;
  gap: 0.5625rem;

  .ProductImage{
    width: clamp(50px, 82px, 100px);
    height: clamp(50px, 82px, 100px);

    background: var(--color-grey-100);
    border-radius: 5px;
  }
`

export const StyledProductName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

