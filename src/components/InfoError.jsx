import cookingImage from 'assets/images/cooking.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  gap: 20px;
  img {
    width: 90%;
    max-width: 350px;
    opacity: 0.9;
  }
  a {
    text-transform: capitalize;
    text-decoration: none;
    color: black;
    margin: 0 auto;
    width: 150px;
    cursor: pointer;
    height: 40px;
    background-color: #eee;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    svg {
      margin-left: 5px;
    }
    &:hover {
      background-color: #b6b6b6;
    }
  }
`;

const InfoError = ({ text }) => {
  return (
    <Wrapper>
      <img src={cookingImage} alt='cooking' />
      <h2>{text}</h2>
      <Link to='/'>Home Page</Link>
    </Wrapper>
  );
};

export default InfoError;
