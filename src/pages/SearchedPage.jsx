import { useRecipesContext } from 'context/recipes_context';
import { Card } from 'components';
import Skeleton from 'react-loading-skeleton';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const SearchedPage = () => {
  const { name } = useParams();
  const location = useLocation();
  const { searchRecipes, setSearchValue, searchValue, searchIsLoading } =
    useRecipesContext();

  useEffect(() => {
    setSearchValue(name);
    // eslint-disable-next-line
  }, [location]);

  if (searchIsLoading) {
    return (
      <div className='mt-100'>
        <div className='section-90'>
          <h1 className='m-50 text-center'>
            <Skeleton width={300} />
          </h1>
          <div className='cards-container'>
            {searchRecipes.map((recipe) => (
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
        <h1 className='m-50 text-center'>Recipes based on: {searchValue}</h1>
        <div className='cards-container'>
          {searchRecipes.map((recipe) => (
            <Card recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchedPage;
