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
    background: var(--color-color-primary);
  }

  :active{
    background: var(--color-color-primary);
  }
`