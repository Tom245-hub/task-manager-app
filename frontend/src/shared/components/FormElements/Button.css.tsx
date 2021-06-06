import styled from "styled-components";

interface StyledRootButtonProps {
  margin?: string;
}

const RootButton = styled.button<StyledRootButtonProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  margin: ${({ margin }) => margin};
  border-radius: 3px;
  cursor: pointer;
`;

export const StyledConfirmButton = styled(RootButton)`
  color: ${({ theme }) => theme.colors.primary.light};
  background-color: ${({ theme }) => theme.colors.secondary.light};
  border: 2px solid ${({ theme }) => theme.colors.secondary.light};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.normal};
    background-color: ${({ theme }) => theme.colors.secondary.normal};
    border: 2px solid ${({ theme }) => theme.colors.secondary.normal};
  }
`;

export const StyledCancelButton = styled(RootButton)`
  color: ${({ theme }) => theme.colors.primary.light};
  background-color: ${({ theme }) => theme.colors.gray.light};
  border: 2px solid ${({ theme }) => theme.colors.secondary.light};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.normal};
    background-color: ${({ theme }) => theme.colors.gray.normal};
    border: 2px solid ${({ theme }) => theme.colors.secondary.light};
  }
`;

export const StyledLoginButton = styled(RootButton)`
  width: 100%;
  color: ${({ theme }) => theme.colors.primary.light};
  background-color: ${({ theme }) => theme.colors.secondary.light};
  border: 2px solid ${({ theme }) => theme.colors.secondary.light};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.normal};
    background-color: ${({ theme }) => theme.colors.secondary.normal};
    border: 2px solid ${({ theme }) => theme.colors.secondary.normal};
  }
`;
