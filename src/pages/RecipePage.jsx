import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipesContext } from 'context/recipes_context';
import { Wrapper } from 'assets/wrappers/Recipe.styles';
import { IconsSection, LinkBtn } from 'components';
import Skeleton from 'react-loading-skeleton';

const RecipePage = () => {
  const { id } = useParams();
  const { setSingleRecipeId, singleRecipe, singleIsLoading } =
    useRecipesContext();
  const { title, image, summary, instructions, extendedIngredients } =
    singleRecipe;

  useEffect(() => {
    setSingleRecipeId(id);
    // eslint-disable-next-line
  }, [id]);

  if (singleIsLoading) {
    return (
      <Wrapper>
        <h1>
          <Skeleton width={300} count={1} />
        </h1>
        <IconsSection
          singleRecipe={singleRecipe}
          singleIsLoading={singleIsLoading}
        />
        <article>
          <Skeleton className='image' />
          <Skeleton count={6} />
          <div>
            <div className='text-section instruction'>
              <Skeleton count={1} />
              <Skeleton count={8} />
            </div>
            <div className='text-section ingredients'>
              <Skeleton count={1} />
              <Skeleton count={8} />
            </div>
          </div>
        </article>
        <div className='buttons mt-50'>
          <LinkBtn to='/' text='Home' />
          <LinkBtn to={`/similar/${id}`} text='Find Similar Recipe' />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>{title}</h1>
      <IconsSection singleRecipe={singleRecipe} />
      <article>
        <img src={image} alt={title} className='image' />
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
        <LinkBtn to={`/similar/${id}`} text='Find Similar Recipe' />
      </div>
    </Wrapper>
  );
};

export default RecipePage;