import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useThemeContext } from 'context/theme_context';

const Wrapper = styled.div`
  label {
    background-color: black;
    width: 50px;
    height: 26px;
    border-radius: 50px;
    position: relative;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sun {
    color: #f39c12;
  }
  .moon {
    color: #f1c40f;
  }
  .ball {
    background-color: #fff;
    width: 22px;
    height: 22px;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
    transform: translateX(${({ darkMode }) => (darkMode ? '0' : '24px')});
  }
`;

const ModeToggler = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <Wrapper darkMode={darkMode}>
      <label onClick={toggleTheme}>
        <FaSun className='sun' />
        <FaMoon className='moon' />
        <span className='ball' />
      </label>
    </Wrapper>
  );
};

export default ModeToggler;
