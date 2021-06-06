import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray.light};
  color: ${({ theme }) => theme.colors.danger};
  border: 2px solid ${({ theme }) => theme.colors.danger};
  border-radius: 3px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledText = styled.h4`
  font-size: 1rem;
  font-weight: 600;
`;
