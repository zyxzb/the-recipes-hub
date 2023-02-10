import { useRecipesContext } from 'context/recipes_context';
import { Card, InfoError } from 'components';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';

const SearchByIngPage = () => {
  const { ingredients } = useParams();
  const { ingredientsLoading, ingredientsRecipes } = useRecipesContext();

  if (ingredientsLoading) {
    return (
      <div className='mt-100'>
        <div className='section-90'>
          <h1 className='m-50 text-center'>
            <Skeleton width={300} />
          </h1>
          <div className='cards-container'>
            {ingredientsRecipes.map((recipe) => (
              <Card recipe={recipe} key={recipe.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='mt-100'>
      <div className='section-90'>
        <h1 className='m-50 text-center'>Recipes based on: {ingredients}</h1>
        <div className='cards-container'>
          {ingredientsRecipes.length > 0 ? (
            ingredientsRecipes.map((recipe) => (
              <Card recipe={recipe} key={recipe.id} likeIcon={true} />
            ))
          ) : (
            <InfoError text='no recipe found, search again' />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchByIngPage;
