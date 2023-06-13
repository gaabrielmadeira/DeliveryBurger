import styled from "styled-components";

export const StyledInputSearch = styled.form`
  width: clamp(250px, 100%, 356px);
  height: 60px;
  background: var(--color-white);

  border: 0.125rem solid var(--color-grey-100);
  border-radius: 0.5rem;
  padding: 0.625rem;
  margin-bottom: 0.625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .inputSearch{
    width: 100%;
    background: none;
    outline: none;
  }
`