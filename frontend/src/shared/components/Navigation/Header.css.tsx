import styled from "styled-components";

export const StyledContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray.light};
`;

export const StyledLogo = styled.img`
  width: 200px;
  margin: 0.5rem;
`;
