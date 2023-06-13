import styled from "styled-components";

export const StyledProductsCards = styled.li`
  width: min(250px, 300px);
  height: 346px;

  border: 0.125rem solid var(--color-grey-100);
  border-radius: 0.3125rem;

  display: flex;
  flex-direction: column;

  :hover{
    border: 0.125rem solid var(--color-primary);
  }

  .imgCard {
    width: 100%; 
    height: 100%;
    background: var(--color-grey-0);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content{
    width: min(250px, 300px);
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border;

    padding: 0.9375rem;
  }
`