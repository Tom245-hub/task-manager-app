import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray.normal};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: 20rem;
  }
`;

export const StyledLogo = styled.img`
  width: 10rem;
  margin: 0 auto 1rem auto;
`;

export const StyledText = styled.h4`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;
