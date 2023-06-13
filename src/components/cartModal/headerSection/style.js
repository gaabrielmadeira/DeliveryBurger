import styled from "styled-components";

export const StyledModalHeader = styled.section`
  width: 100%;
  height: 54px;

  background: var(--color-primary);
  border-radius: 0.3125rem 0.3125rem 0rem 0rem;
  padding: clamp(0.625rem, 1.375rem, 1.5625rem) clamp(0.3125rem,0.8125rem, 0.9375rem);

  display: flex;
  justify-content: space-between;
  align-items: center;

  .buttonClose:hover{
    cursor: pointer;
  }
`