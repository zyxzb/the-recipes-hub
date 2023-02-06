import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  .banner-container {
    display: flex;
    height: 70vh;
    width: 100%;
    img {
      position: absolute;
      height: 100%;
      width: 100%;
      min-height: 400px;
      object-fit: cover;
    }
  }
  .content {
    position: absolute;
    width: 90vw;
    max-width: 450px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .type-wrapper {
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    h2 {
      line-height: 3rem;
      font-style: italic;
      font-size: 2rem;
      user-select: none;
    }
  }
  form {
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
      border-right: 1px solid lightgray;
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
  }
`;
