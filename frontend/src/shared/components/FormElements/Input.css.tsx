import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary.normal};
  border 1px solid
    ${({ theme }) => theme.colors.gray.normal};
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;
