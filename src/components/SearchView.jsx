import { IoMdClose } from 'react-icons/io';
import { useRecipesContext } from 'context/recipes_context';
import { Wrapper } from 'assets/wrappers/SearchView.styles';
import { SearchInput } from 'components';

const SearchView = () => {
  const { searchOpen, setSearchOpen } = useRecipesContext();
  return (
    <Wrapper searchOpen={searchOpen} tabIndex={searchOpen ? 1 : -1}>
      <div>
        <button aria-label='close sidebar' onClick={() => setSearchOpen(false)}>
          <IoMdClose />
        </button>
        <SearchInput placeholder='Find A Recipe' />
      </div>
    </Wrapper>
  );
};

export default SearchView;
