import styled, { css } from "styled-components";

export const StyledContainer = css`
  width: 100%;
  max-width: 1200px;
  height: 100%;

  padding-left: 5%;
  padding-top: 1.5625rem;
  padding-right: ${({right}) => right === "not" ? "0" : "5%"};

  @media(min-width: 950px){
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.9375rem;
  }
`
export const StyledHeaderContainer = styled.div`
  ${StyledContainer}
`
export const StyledListSectionContainer = styled.section`
  ${StyledContainer}
`
