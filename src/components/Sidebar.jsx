import { useRecipesContext } from 'context/recipes_context';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';
import { Wrapper } from 'assets/wrappers/Sidebar.styles';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useRecipesContext();

  useEffect(() => {
    const targetLock = document.querySelector('#root');
    if (sidebarOpen) {
      disableBodyScroll(targetLock);
    } else {
      enableBodyScroll(targetLock);
    }
    return () => clearAllBodyScrollLocks();
  }, [sidebarOpen]);

  return (
    <Wrapper sidebarOpen={sidebarOpen}>
      <button onClick={() => setSidebarOpen(false)}>
        <VscChromeClose />
      </button>
      <div>
        <NavLink to='/' onClick={() => setSidebarOpen(false)}>
          Home
        </NavLink>
        <NavLink to='/saved-recipes' onClick={() => setSidebarOpen(false)}>
          Saved Recipes
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
