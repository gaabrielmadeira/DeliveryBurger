import { StyledList } from "./style";
import {StyledListSectionContainer} from "../../styles//container";

export const ProductList = ({ children }) => {
  return (
    <StyledListSectionContainer right="mobile">
      <StyledList>
        {children}
      </StyledList>
    </StyledListSectionContainer>
  )
}