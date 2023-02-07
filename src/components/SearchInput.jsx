import { AiOutlineSearch } from 'react-icons/ai';
import { useRef } from 'react';
import { Wrapper } from 'assets/wrappers/SearchInput.styles';
import { useRecipesContext } from 'context/recipes_context';

const SearchInput = ({ placeholder }) => {
  const { setSearchValue, setSearchOpen } = useRecipesContext();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = formRef.current.value;
    if (formValue.length > 0) {
      setSearchValue(formValue);
      setSearchOpen(false);
      formRef.current.value = '';
    }
  };

  return (
    <Wrapper>
      <button type='submit' onClick={handleSubmit}>
        <AiOutlineSearch />
      </button>
      <input ref={formRef} type='text' placeholder={placeholder} />
    </Wrapper>
  );
};

export default SearchInput;
