import { NavLink } from 'react-router-dom';
import { NavWrapper } from 'assets/wrappers/Nav.styles';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineHeart } from 'react-icons/ai';
import SearchInput from './SearchInput';
import { useRecipesContext } from 'context/recipes_context';

const Nav = () => {
  const { setSearchOpen } = useRecipesContext();

  return (
    <NavWrapper>
      <div className='icons'>
        <RxHamburgerMenu />
        <AiOutlineHeart />
      </div>
      <h1>The Recipe Hub</h1>
      <div className='links'>
        <NavLink to='/'>Home</NavLink>
        {/* <NavLink to='about'>About</NavLink> */}
        <div onClick={() => setSearchOpen(true)}>
          <SearchInput placeholder='Search..' />
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
