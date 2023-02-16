import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  button {
    flex: 1;
    text-transform: capitalize;
    height: 32px;
    font-size: 1rem;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid gray;
    font-style: italic;
    color: ${({ theme }) => theme.text};
    transition: none;
    &.active {
      font-weight: bold;
      border: 2px solid gray;
    }
  }
`;
