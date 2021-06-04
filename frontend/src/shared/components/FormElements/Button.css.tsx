import styled from "styled-components";

interface StyledRootButtonProps {
  margin?: string;
}

const RootButton = styled.button<StyledRootButtonProps>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  margin: ${({ margin }) => margin};
  border: none;
  cursor: pointer;
`;

export const StyledConfirmButton = styled(RootButton)`
  color: ${({ theme }) => theme.colors.primary.light};
  background-color: ${({ theme }) => theme.colors.secondary.light};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.normal};
    background-color: ${({ theme }) => theme.colors.secondary.normal};
  }
`;

export const StyledCancelButton = styled(RootButton)`
  color: ${({ theme }) => theme.colors.primary.light};
  background-color: ${({ theme }) => theme.colors.gray.light};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.normal};
    background-color: ${({ theme }) => theme.colors.gray.normal};
  }
`;
