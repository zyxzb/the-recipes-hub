import { NavLink } from 'react-router-dom';
import { NavWrapper } from 'assets/wrappers/Nav.styles';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillHeart } from 'react-icons/ai';
import { SearchInput } from 'components';
import { useRecipesContext } from 'context/recipes_context';
import Logo from 'assets/images/logo.png';
import ModeToggler from './ModeToggler';
import { useThemeContext } from 'context/theme_context';

const Nav = () => {
  const { setSearchOpen, setSidebarOpen, savedRecipes, setSearchBy } =
    useRecipesContext();
  const { darkMode } = useThemeContext();
  let recipesAmount = savedRecipes.length;

  return (
    <NavWrapper recipesAmount={recipesAmount} darkMode={darkMode}>
      <div className='icons'>
        <button aria-label='open sidebar'>
          <RxHamburgerMenu onClick={() => setSidebarOpen(true)} />
        </button>
        <NavLink to='saved-recipes'>
          <div className='counter-container'>
            <AiFillHeart />
            <span className='counter'>
              {recipesAmount > 99 ? '99+' : recipesAmount}
            </span>
          </div>
          <span className='text'>
            Saved {recipesAmount !== 1 ? 'Recipes' : 'Recipe'}
          </span>
        </NavLink>
      </div>
      <img src={Logo} alt='logo' srcSet='' />
      <div className='links'>
        <div className='toggler'>
          <ModeToggler />
        </div>
        <NavLink to='/'>HOME</NavLink>
        <div
          onClick={() => {
            setSearchOpen(true);
            setSearchBy('name');
          }}
        >
          <SearchInput placeholder='Search..' disabled='disabled' />
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
