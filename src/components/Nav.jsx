import { NavLink } from 'react-router-dom';
import { NavWrapper } from 'assets/wrappers/Nav.styles';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillHeart } from 'react-icons/ai';
import SearchInput from './SearchInput';
import { useRecipesContext } from 'context/recipes_context';

const Nav = () => {
  const { setSearchOpen, setSidebarOpen, savedRecipes } = useRecipesContext();
  let recipesAmount = savedRecipes.length;

  return (
    <NavWrapper recipesAmount={recipesAmount}>
      <div className='icons'>
        <button>
          <RxHamburgerMenu onClick={() => setSidebarOpen(true)} />
        </button>
        <NavLink to='saved-recipes'>
          <div className='counter-container'>
            <AiFillHeart /> Saved {recipesAmount !== 1 ? 'Recipes' : 'Recipe'}
            <span className='counter'>{recipesAmount}</span>
          </div>
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
