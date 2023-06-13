import styled from "styled-components";

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);;

  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledModalBox = styled.div`
  width: clamp(250px, 80%, 500px);
  height: 411px;

  border-radius: 0.3125rem;

  background: var(--color-white);
`
export const StyledContentContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 0.9375rem;

  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`