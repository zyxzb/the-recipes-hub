import { useRecipesContext } from 'context/recipes_context';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Card } from 'components';
import Skeleton from 'react-loading-skeleton';

const SimilarPage = () => {
  const { id } = useParams();
  const {
    similarRecipes,
    setSimilarRecipesId,
    similarIsLoading,
    singleRecipe,
    singleIsLoading,
  } = useRecipesContext();

  useEffect(() => {
    setSimilarRecipesId(id);
    // eslint-disable-next-line
  }, [id, similarRecipes]);

  if (similarIsLoading || singleIsLoading) {
    return (
      <div className='mt-100'>
        <div className='section-90'>
          <h1 className='m-50 text-center'>
            <Skeleton width={300} />
          </h1>
          <div className='cards-container'>
            {similarRecipes.map((recipe) => (
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
        <h1 className='m-50 text-center'>
          Similar Page | {singleRecipe.title}
        </h1>
        <div className='cards-container'>
          {similarRecipes.map((recipe) => (
            <Card recipe={recipe} key={recipe.id} likeIcon={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarPage;
