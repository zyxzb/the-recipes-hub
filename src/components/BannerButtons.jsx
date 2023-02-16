import { useRecipesContext } from 'context/recipes_context';
import { Wrapper } from 'assets/wrappers/BannerButtons.styles';

const BannerButtons = () => {
  const { searchBy, setSearchBy } = useRecipesContext();

  return (
    <Wrapper>
      <button
        type='button'
        aria-label='search by name'
        className={searchBy === 'name' ? 'active' : null}
        onClick={() => setSearchBy('name')}
      >
        by name
      </button>
      <button
        type='button'
        aria-label='search by ingredients'
        className={searchBy === 'ingredients' ? 'active' : null}
        onClick={() => setSearchBy('ingredients')}
      >
        by ingredients
      </button>
    </Wrapper>
  );
};

export default BannerButtons;
