import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100%;
  background-color: white;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;
export const StyledIconBox = styled.div`
  margin: 0 0.5rem;
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.primary.normal};
  border: 1px solid white;
  padding: 0.5rem;
  :focus-visible {
    outline: none;
  }
`;

export const StyledTextarea = styled.textarea`
  font-size: 1rem;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.primary.normal};
  border: 1px solid white;
  padding: 0.5rem;
  :focus-visible {
    outline: none;
  }
`;

export const StyledTextLabel = styled.h6`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;
