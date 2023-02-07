import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  gap: 10px;
  background: rgba(255, 255, 255, 0.48);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  height: 3.5rem;
  padding: 1rem;
  input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 1.3rem;
  }
  button {
    border: none;
    background-color: transparent;
    border-right: 1px solid lightgrey;
    width: 40px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      font-size: 1.5rem;
      margin-right: 10px;
    }
  }
`;
