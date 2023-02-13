import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  background: rgba(121, 117, 117, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  flex-direction: column;
  visibility: ${({ searchOpen }) => (searchOpen ? 'visible' : 'hidden')};
  opacity: ${({ searchOpen }) => (searchOpen ? 1 : 0)};
  transition: opacity ease-in 0.25s;
  div {
    margin-top: 100px;
    width: 80vw;
    max-width: 1000px;
    display: flex;
    gap: 40px;
    flex-direction: column;
  }

  button {
    background-color: transparent;
    transition: none;
    border: none;
    cursor: pointer;
    width: max-content;
    margin-left: auto;
    svg {
      font-size: 2rem;
      color: #eee;
    }
  }
`;
