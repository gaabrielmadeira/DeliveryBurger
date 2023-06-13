import styled from "styled-components";

export const StyledList = styled.ul`
  width: auto;
  min-height: 346px;

  padding: 5px;

  display: flex;
  flex-direction: row;
  gap: 1.25rem;

  overflow-y: auto;

  .loading {
  width: 50px;
  height: 50px;
  border: 5px solid var(--color-grey-100);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

  @media(min-width: 950px){
    flex-wrap: wrap;
  }
`