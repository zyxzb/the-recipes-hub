import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90vw;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
    margin: 50px 0;
    text-align: center;
  }
  article,
  .buttons {
    width: 100%;
    max-width: 1000px;
    display: flex;
  }
  article {
    flex-direction: column;
    line-height: 1.5rem;
    .image {
      display: flex;
      width: 100%;
      height: 100%;
      min-height: 400px;
      max-width: 600px;
      margin: 0 auto 50px;
      object-fit: cover;
    }
    summary {
      margin: 0 auto 50px;
      text-align: justify;
      background-color: #eee;
      padding: 30px;
    }
    div {
      display: flex;
      flex: 1;
      flex-direction: column;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      .text-section {
        padding: 30px;
        span {
          font-weight: bold;
        }
        display: flex;
        gap: 30px;
        flex-direction: column;
        &.instruction {
          flex: 2;
        }
        &.ingredients {
          flex: 1;
        }
      }
    }
  }
`;
