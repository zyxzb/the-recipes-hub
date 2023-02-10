import { useRecipesContext } from 'context/recipes_context';
import { Card } from 'components';
import InfoError from 'components/InfoError';

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

  return <InfoError text='Add first recipe' />;
};

export default SavedRecipesPage;
