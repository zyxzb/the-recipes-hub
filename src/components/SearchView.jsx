import { IoMdClose } from 'react-icons/io';
import { useRecipesContext } from 'context/recipes_context';
import { Wrapper } from 'assets/wrappers/SearchView.styles';
import SearchInput from './SearchInput';

const SearchView = () => {
  const { searchOpen, setSearchOpen } = useRecipesContext();
  return (
    <Wrapper searchOpen={searchOpen}>
      <div>
        <button onClick={() => setSearchOpen(false)}>
          <IoMdClose />
        </button>
        <SearchInput placeholder='Find A Recipe' />
      </div>
    </Wrapper>
  );
};

export default SearchView;
