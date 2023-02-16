import { AiOutlineSearch } from 'react-icons/ai';
import { useRef, useEffect } from 'react';
import { Wrapper } from 'assets/wrappers/SearchInput.styles';
import { useRecipesContext } from 'context/recipes_context';
import { useNavigate } from 'react-router-dom';
import { onlyLettersWithSpace } from 'utils/helpers';

const SearchInput = ({ placeholder, disabled }) => {
  const { setSearchOpen, searchBy, setIngredientsUrl, setIngredientsArray } =
    useRecipesContext();
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = formRef.current.value.replace(/\s+/g, ' ').trim();
    const url = formValue.split(' ').join('-');

    if (formValue === '') {
      alert('Enter the name of the meal/ingredients');
    }

    if (formValue.length > 0 && !onlyLettersWithSpace(formValue)) {
      alert('Enter the name of the dish/ingredients using letters only');
    }

    if (formValue.length > 0 && onlyLettersWithSpace(formValue)) {
      setSearchOpen(false);
      if (searchBy === 'name') {
        navigate(`/search/${url}`);
        formRef.current.value = '';
        return;
      }
      if (searchBy === 'ingredients') {
        console.log('search by ingredients');
        setIngredientsArray(formValue.split(' '));
        const queryUrl = formValue.split(' ').join(',+');
        setIngredientsUrl(queryUrl);
        navigate(`/search-by-ingredients/${url}`);
        return;
      }
    }
  };

  useEffect(() => {
    formRef.current.focus();
  }, []);

  return (
    <Wrapper>
      <button type='submit' aria-label='search recipes' onClick={handleSubmit}>
        <AiOutlineSearch />
      </button>
      <input
        ref={formRef}
        type='text'
        placeholder={placeholder}
        disabled={disabled}
        data-testid='banner-input'
      />
    </Wrapper>
  );
};

export default SearchInput;
