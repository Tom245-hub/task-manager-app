import styled from "styled-components";

export const StyledContainer = styled.aside`
  width: 25%;
  min-width: 15rem;
  background-color: ${({ theme }) => theme.colors.gray.light};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
