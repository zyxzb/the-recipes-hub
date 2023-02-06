import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
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
`;

const LinkBtn = ({ to, text, icon }) => {
  return <Wrapper to={to}>{icon ? text + icon : text}</Wrapper>;
};

export default LinkBtn;
