import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 152px;
  
  background: var(--color-grey-0);
  display: flex;
  justify-content: center;
  align-items: center;

  @media(min-width: 950px){
    height: 80px;
  }
`
export const StyledHeaderIcons = styled.div`
  width: clamp(250px, 100%, 900px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledIcon = styled.button`
  width: 50px;
  height: 50px;
  position: relative;

  .cartIcon{
    z-index: 1;
  }

  .amountProduct{
    width: 20px;
    height: 24px;
    background: var(--color-primary);
    border-radius: 7px;

    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--font-primary);
    font-weight: 900;
    font-size: var(--font-size-3);
    
    color: var(--color-white);
  }
`