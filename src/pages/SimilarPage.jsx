import { useRecipesContext } from 'context/recipes_context';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Card } from 'components';

const SimilarPage = () => {
  const { id } = useParams();
  const { similarRecipes, setSimilarRecipesId } = useRecipesContext();

  useEffect(() => {
    setSimilarRecipesId(id);
    // eslint-disable-next-line
  }, [id, similarRecipes]);

  return (
    <div className='mt-100'>
      <div className='section-90'>
        <h1 className='m-50 text-center'>Similar Page</h1>
        <div className='cards-container'>
          {similarRecipes.map((recipe, index) => (
            <Card recipe={recipe} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarPage;
