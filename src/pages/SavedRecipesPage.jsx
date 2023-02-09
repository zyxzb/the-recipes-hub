import { useRecipesContext } from 'context/recipes_context';
import { Card } from 'components';
import cookingImage from 'assets/images/cooking.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  gap: 20px;
  img {
    width: 90%;
    max-width: 350px;
    opacity: 0.9;
  }
  a {
    text-transform: capitalize;
    text-decoration: none;
    color: black;
    margin: 0 auto;
    width: 150px;
    cursor: pointer;
    height: 40px;
    background-color: #eee;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    svg {
      margin-left: 5px;
    }
    &:hover {
      background-color: #b6b6b6;
    }
  }
`;

const SavedRecipesPage = () => {
  const { savedRecipes } = useRecipesContext();

  if (savedRecipes.length > 0) {
    return (
      <div className='mt-100'>
        <div className='section-90'>
          <h1 className='m-50 text-center'>Saved Recipes</h1>
          <div className='cards-container'>
            {savedRecipes.map((recipe, index) => (
              <Card recipe={recipe} key={index} deleteIcon={true} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Wrapper>
      <img src={cookingImage} alt='cooking' />
      <h2>Add first recipe</h2>
      <Link to='/'>Home Page</Link>
    </Wrapper>
  );
};

export default SavedRecipesPage;
