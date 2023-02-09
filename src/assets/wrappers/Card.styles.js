import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #eee;
  height: 360px;
  min-width: 280px;
  max-width: 400px;
  flex: 1;
  transition: border ease-in-out 0.3s;
  position: relative;
  .like,
  .delete {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #eee;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      color: #ff7575;
    }
  }
  .delete {
    &:hover {
      color: black;
    }
  }
  hr {
    border: 1px solid #eee;
  }

  &:hover {
    border: 1px solid #b6b6b6;
  }
  &:hover hr {
    border: 1px solid #b6b6b6;
  }
  .image {
    height: 50%;
    width: 100%;
    object-fit: cover;
  }
  a {
    text-transform: capitalize;
    text-decoration: none;
    color: black;
    margin: 0 auto;
    width: 45%;
    cursor: pointer;
    height: 40px;
    background-color: #eee;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    svg {
      margin-left: 5px;
    }
    &:hover {
      background-color: #b6b6b6;
    }
  }
  .content {
    height: 50%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
  }
  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  hr,
  a,
  svg {
    transition: all ease-in-out 0.3s;
  }
`;
