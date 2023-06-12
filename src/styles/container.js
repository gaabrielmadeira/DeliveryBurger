import styled, { css } from "styled-components";

export const StyledContainer = css`
  width: 100%;
  height: 100%;

  padding-left: 1rem;
  padding-top: 1.5625rem;
  padding-right: ${({right}) => right === "mobile" ? "0" : "1rem"};
`
export const StyledHeaderContainer = styled.div`
  ${StyledContainer}
`
export const StyledListSectionContainer = styled.section`
  ${StyledContainer}
`