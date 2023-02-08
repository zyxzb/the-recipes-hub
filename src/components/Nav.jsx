import { NavLink } from 'react-router-dom';
import { NavWrapper } from 'assets/wrappers/Nav.styles';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineHeart } from 'react-icons/ai';
import SearchInput from './SearchInput';
import { useRecipesContext } from 'context/recipes_context';

const Nav = () => {
  const { setSearchOpen, setSidebarOpen } = useRecipesContext();

  return (
    <NavWrapper>
      <div className='icons'>
        <button>
          <RxHamburgerMenu onClick={() => setSidebarOpen(true)} />
        </button>
        <NavLink to='saved-recipes'>
          <AiOutlineHeart /> Saved Recipes
          <span>{0}</span>
        </NavLink>
      </div>
      <h1>The Recipe Hub</h1>
      <div className='links'>
        <NavLink to='/'>HOME</NavLink>
        <div onClick={() => setSearchOpen(true)}>
          <SearchInput placeholder='Search..' disabled='disabled' />
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
