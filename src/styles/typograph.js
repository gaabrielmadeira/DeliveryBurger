import styled, { css } from "styled-components";

const StyledTextOne = css`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-0);
  font-size: var(--font-size-1);
  line-height: 133%;

  color: ${({fontColor}) => fontColor ==="white" ? "var(--color-white)" : "var(--color-grey-600)"};
`

const StyledTextTwo = css`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-2);
  font-size: var(--font-size-4);
  line-height: 133%;

  color: var(--color-grey-300);
`

const StyledTextThree = css`
  font-family: var(--font-primary);
  font-weight: var(--font-weigth-1);
  font-size: var(--font-size-3);
  line-height: 24px;

  color: ${({fontColor}) => fontColor === "green" ? "var(--color-color-primary)" : fontColor === "grey-300" ? "var(--color-grey-300)" : "var(--color-grey-600)"};
`
export const StyledParagraph = styled.p`
  ${StyledTextOne};
`
export const StyledSpanSmall= styled.span`
  ${StyledTextTwo};
`
export const StyledSpanBig = styled.span`
  ${StyledTextThree};
`
export const StyledTitleTwo = styled.h2`
  ${StyledTextOne};
`

