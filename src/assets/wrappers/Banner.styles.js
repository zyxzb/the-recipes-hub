import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  .banner-container {
    display: flex;
    height: 70vh;
    width: 100%;
    &::before {
      position: absolute;
      content: '';
      bottom: 0px;
      left: 0px;
      background-image: linear-gradient(
        rgba(244, 244, 244, 0),
        rgba(0, 0, 0, 0.8)
      );
      width: 100%;
      height: ${({ darkMode }) => (darkMode ? '100%' : '0')};
      transition: height 0.5s ease-in-out;
      z-index: 1;
    }
    &::after {
      position: absolute;
      content: '';
      top: 0px;
      left: 0px;
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.8),
        rgba(244, 244, 244, 0)
      );
      width: 100%;
      height: ${({ darkMode }) => (darkMode ? '100%' : '0')};
      transition: height 0.5s ease-in-out;
      z-index: 1;
    }
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
    z-index: 2;
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
