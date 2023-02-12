import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  span {
    width: 160px;
    margin-bottom: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    margin: 0 5px;
    color: ${({ theme }) => theme.text};
    span {
      color: ${({ singleIsLoading, theme }) =>
        singleIsLoading ? 'transparent' : theme.text};
      background-color: ${({ singleIsLoading, theme }) =>
        singleIsLoading ? theme.text : 'transparent'};
    }
  }
  svg {
    font-size: 2rem;
  }
`;
