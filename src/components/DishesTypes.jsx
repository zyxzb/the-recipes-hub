import { dishType } from 'utils/constants';
import { useRecipesContext } from 'context/recipes_context';
import { Card } from 'components';
import { Wrapper } from 'assets/wrappers/DishesTypes.styles';
import { useState } from 'react';

const DishesTypes = () => {
  const { recipes, dishTypeName, setDishTypeName } = useRecipesContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfRecipes, setNumberOfRecipes] = useState(10);

  const loadedRecipes = recipes.slice(0, numberOfRecipes);
  const allPages = Math.ceil(recipes.length / 10);

  const loadMoreRecipes = () => {
    if (currentPage < allPages) {
      setNumberOfRecipes((prevState) => prevState + 10);
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper className='section-90'>
      <div className='m-50'>
        <h2>choose the Meal Type</h2>
        <div>
          <ul>
            {dishType.map((type, index) => (
              <li
                key={index}
                className={dishTypeName === type ? 'active' : ''}
                onClick={() => {
                  setDishTypeName(type);
                  setNumberOfRecipes(10);
                  setCurrentPage(1);
                }}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='cards-container'>
        {loadedRecipes.map((recipe, index) => (
          <Card recipe={recipe} key={index} likeIcon={true} testID={index} />
        ))}
      </div>
      {currentPage === allPages ? (
        <button className='mt-50' type='button' onClick={scrollToTop}>
          <span>No more recipes</span>
          <span>back Home</span>
        </button>
      ) : (
        <button className='mt-50' type='button' onClick={loadMoreRecipes}>
          Load more recipes...
        </button>
      )}
    </Wrapper>
  );
};

export default DishesTypes;
