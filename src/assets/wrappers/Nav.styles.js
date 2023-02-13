import styled from 'styled-components';
import { Wrapper } from './SearchInput.styles';

export const NavWrapper = styled.nav`
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
    color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    &.active {
      font-weight: bold;
    }
    @media (max-width: 992px) {
      display: none;
    }
  }
  .links,
  .icons {
    display: flex;
  }
  .icons {
    svg {
      font-size: 2.5rem;
      color: black;
    }
    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      @media (min-width: 992px) {
        display: none;
      }
    }
    .counter-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      svg,
      .counter {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      svg {
        color: ${({ recipesAmount }) =>
          recipesAmount > 0 ? '#ff7575' : '#565656'};
      }
      .counter {
        position: absolute;
        color: ${({ recipesAmount }) =>
          recipesAmount > 0 ? 'black' : 'white'};
      }
    }
    .text {
      margin-left: 25px;
    }
  }
  .links {
    align-items: center;
    justify-content: end;
    position: relative;
    .toggler {
      position: absolute;
      left: -80px;
    }
  }
  ${Wrapper} {
    width: 180px;
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
  }
`;
