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
`;
