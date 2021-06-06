import styled from "styled-components";

const RootInfoValid = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray.light};
  border-radius: 3px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledInfoValidNegative = styled(RootInfoValid)`
  color: ${({ theme }) => theme.colors.danger};
  border: 2px solid ${({ theme }) => theme.colors.danger};
`;

export const StyledInfoValidPositive = styled(RootInfoValid)`
  color: ${({ theme }) => theme.colors.success};
  border: 2px solid ${({ theme }) => theme.colors.success};
`;

export const StyledText = styled.h4`
  font-size: 1rem;
  font-weight: 600;
`;
