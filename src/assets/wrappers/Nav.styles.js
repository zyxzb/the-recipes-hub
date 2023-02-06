import styled from 'styled-components';

export const Wrapper = styled.nav`
  z-index: 999;
  position: fixed;
  width: 100vw;
  padding: 0 5vw;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.48);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  a {
    margin: 0 10px;
    color: black;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    &.active {
      border-bottom: 1px solid black;
    }
  }
  .icons {
    svg {
      margin-right: 1rem;
      font-size: 2rem;
    }
  }
`;
