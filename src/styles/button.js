import styled from "styled-components";

export const StyledButtonPrimary = styled.button`
  width: 106px;
  height: 40px;
  background: var(--color-grey-400);

  border-radius: 0.5rem;

  font-family: var(--font-primary);
  font-weight: var(--font-weigth-1);
  font-size: var(--font-size-3);
  line-height: 1.0625rem;
  
  color: var(--color-white);

  :hover{
    background: var(--color-primary);
  }

  :active{
    background: var(--color-primary);
  }
`
export const StyledButtonRemove = styled.button`
  width: 100%;
  height: 3.75rem;

  background: var(--color-grey-100);

  border: 0.125rem solid var(--color-grey-100);
  border-radius: 0.5rem;


  font-family: var(--font-primary);
  font-weight: var(--font-weigth-1);
  font-size: var(--font-size-2);
  line-height: 1.1875rem;

  color: var(--color-grey-300);

  :hover{
    background: var(--color-grey-300);
    border: 0.125rem solid var(--color-grey-300);

    color: var(--color-grey-100);
  }

  :active{
    background: var(--color-grey-300);
    border: 0.125rem solid var(--color-grey-300);

    color: var(--color-grey-100);
  }
` 