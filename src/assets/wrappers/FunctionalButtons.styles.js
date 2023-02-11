import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 0;
  display: flex;
  flex-direction: column;
  button {
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
    border: none;
    padding: 10px;
    width: max-content;
    color: black;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1.2rem;
    transform: translateX(calc(-100% + 2rem + 20px));
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: translateX(0);
    }
    svg {
      font-size: 2rem;
      margin-left: 10px;
    }
  }
`;
