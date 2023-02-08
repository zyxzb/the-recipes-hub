import styled from 'styled-components';

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;
  background: rgba(121, 117, 117, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  display: none;
  flex-direction: column;
  padding: 40px;
  visibility: ${({ sidebarOpen }) => (sidebarOpen ? 'visible' : 'hidden')};
  transform: translate(${({ sidebarOpen }) => (sidebarOpen ? '0' : '-100%')});
  transition: all 0.3s ease-in-out;
  @media (max-width: 992px) {
    display: flex;
  }
  button {
    cursor: pointer;
    width: max-content;
    display: flex;
    border: none;
    background-color: transparent;
    margin-left: auto;
    svg {
      font-size: 3rem;
      color: #eee;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 100px;
    a {
      font-size: 2rem;
      text-transform: uppercase;
      text-align: center;
      text-decoration: none;
      color: #eee;
      &.active {
        text-decoration: underline;
      }
    }
  }
`;
