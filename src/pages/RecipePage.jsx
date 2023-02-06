import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipesContext } from 'context/recipes_context';
import { Wrapper } from 'assets/wrappers/Recipe.styles';
import { IconsSection, LinkBtn } from 'components';

const RecipePage = () => {
  const { id } = useParams();
  const { setSingleRecipeId, singleRecipe } = useRecipesContext();
  const { title, image, summary, instructions, extendedIngredients } =
    singleRecipe;
  console.log(singleRecipe);

  useEffect(() => {
    setSingleRecipeId(id);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <h1>{title}</h1>
      <IconsSection singleRecipe={singleRecipe} />
      <article>
        <img src={image} alt={title} />
        <summary dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          <div className='text-section instruction'>
            <span>Instruction</span>
            <div dangerouslySetInnerHTML={{ __html: instructions }} />
          </div>
          <div className='text-section ingredients'>
            <span>Ingredients</span>
            <ul>
              {extendedIngredients?.map((item, id) => {
                const { original } = item;
                return <li key={id}>{original}, </li>;
              })}
            </ul>
          </div>
        </div>
      </article>
      <div className='buttons mt-50'>
        <LinkBtn to='/' text='Home' />
        {/* add redirecting based on ID */}
        {/* https://api.spoonacular.com/recipes/{id}/similar */}
        <LinkBtn to='/' text='Find Similar Recipe' />
      </div>
    </Wrapper>
  );
};

export default RecipePage;
