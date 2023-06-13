import styled from "styled-components";

export const StyledProducts = styled.ul`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  overflow-y: auto;

  ::-webkit-scrollbar{
    width: 5px;
  }

  ::-webkit-scrollbar-thumb{
    background: var(--color-grey-300);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track{
    background: var(--color-grey-0);
  }
`