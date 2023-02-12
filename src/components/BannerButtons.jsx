import { useRecipesContext } from 'context/recipes_context';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  button {
    flex: 1;
    text-transform: capitalize;
    height: 32px;
    font-size: 1rem;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid gray;
    font-style: italic;
    color: ${({ theme }) => theme.text};
    &.active {
      font-weight: bold;
    }
  }
`;

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
