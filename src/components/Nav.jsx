import { NavLink } from 'react-router-dom';
import { Wrapper } from 'assets/wrappers/Nav.styles';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineHeart } from 'react-icons/ai';

const Nav = () => {
  return (
    <Wrapper>
      <div className='icons'>
        <RxHamburgerMenu />
        <AiOutlineHeart />
      </div>
      <h1>The Recipe Hub</h1>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
      </div>
    </Wrapper>
  );
};

export default Nav;
