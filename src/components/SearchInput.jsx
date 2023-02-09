import { AiOutlineSearch } from 'react-icons/ai';
import { useRef, useEffect } from 'react';
import { Wrapper } from 'assets/wrappers/SearchInput.styles';
import { useRecipesContext } from 'context/recipes_context';
import { useNavigate } from 'react-router-dom';

const SearchInput = ({ placeholder, disabled }) => {
  const { setSearchOpen } = useRecipesContext();
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = formRef.current.value;
    if (formValue.length > 0) {
      setSearchOpen(false);
      navigate(`/search/${formValue}`);
      formRef.current.value = '';
    }
  };

  useEffect(() => {
    formRef.current.focus();
  }, []);

  return (
    <Wrapper>
      <button type='submit' onClick={handleSubmit}>
        <AiOutlineSearch />
      </button>
      <input
        ref={formRef}
        type='text'
        placeholder={placeholder}
        disabled={disabled}
      />
    </Wrapper>
  );
};

export default SearchInput;
