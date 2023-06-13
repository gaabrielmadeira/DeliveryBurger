import styled from "styled-components";

export const StyledList = styled.ul`
  width: auto;
  min-height: 346px;
  display: flex;
  flex-direction: row;
  gap: 1.25rem;

  overflow-y: auto;

  @media(min-width: 950px){
    flex-wrap: wrap;
  }
`