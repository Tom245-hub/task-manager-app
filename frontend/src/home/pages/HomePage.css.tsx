import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray.normal};
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 20rem;
  }
`;
