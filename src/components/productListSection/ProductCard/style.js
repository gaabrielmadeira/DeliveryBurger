import styled from "styled-components";

export const StyledProductsCards = styled.li`
  width: 300px;
  height: 346px;

  border: 0.125rem solid var(--color-grey-100);
  border-radius: 0.3125rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .imgCard {
    width: 100%;
    height: 150px; 
    background: var(--color-grey-0);
  }
`