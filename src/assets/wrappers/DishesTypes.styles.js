import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ul {
    display: flex;
    padding-top: 30px;
    justify-content: center;
    flex-wrap: wrap;
  }
  li {
    list-style-type: none;
    padding: 10px 20px;
    margin: 10px 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    cursor: pointer;
    text-transform: capitalize;
    transition: border 0.3s ease;
    &:hover {
      border: 1px solid black;
    }
    &.active {
      font-weight: bold;
      color: ${({ theme }) => theme.title};
      border: 1px solid ${({ theme }) => theme.title};
    }
  }
  button {
    padding: 10px 15px;
    text-transform: capitalize;
    cursor: pointer;
    width: max-content;
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    font-size: 16px;
    border: none;
  }
`;
