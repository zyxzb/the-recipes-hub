import Skeleton from 'react-loading-skeleton';
import { useRecipesContext } from 'context/recipes_context';
import { AiFillHeart, AiFillDelete } from 'react-icons/ai';
import { MdFindReplace, MdOutlineFormatListBulleted } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Wrapper } from 'assets/wrappers/Card.styles';
import noImage from 'assets/images/unsplash-banner.jpg';
import { trimText } from 'utils/constants';
import { toast } from 'react-toastify';

const Card = ({ recipe, likeIcon, deleteIcon }) => {
  const { image, title, id } = recipe;
  const {
    isLoading,
    similarIsLoading,
    searchIsLoading,
    setSingleRecipeId,
    setSavedRecipes,
    savedRecipes,
  } = useRecipesContext();

  const handleSaveRecipe = () => {
    const newRecipe = {
      id,
      title,
      image,
    };
    //eslint-disable-next-line
    const tempRecipesCard = savedRecipes.filter((item) => item.id == id);
    if (tempRecipesCard.length > 0) {
      toast.info(`${title} already exists in your list`);
      return;
    } else {
      setSavedRecipes([...savedRecipes, newRecipe]);
      toast.success(`Successfully added ${title} to your recipes!`);
    }
  };

  const handleDeleteRecipe = () => {
    const tempRecipesCard = savedRecipes.filter((item) => item.id !== id);
    setSavedRecipes([...tempRecipesCard]);
    toast.info(`${title} removed from your recipes!`);
  };

  if (isLoading || similarIsLoading || searchIsLoading) {
    return (
      <Wrapper>
        <Skeleton className='image' />
        <div className='content'>
          <h3>
            <Skeleton />
          </h3>
          <hr />
          <div className='buttons'>
            <Link to='/' className='react-loading-skeleton'>
              <Skeleton />
            </Link>
            <Link to='/' className='react-loading-skeleton'>
              <Skeleton />
            </Link>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <img src={image || noImage} alt={title} className='image' />
      {likeIcon && (
        <AiFillHeart
          className='like'
          aria-label='add to favorites'
          onClick={handleSaveRecipe}
        />
      )}
      {deleteIcon && (
        <AiFillDelete
          className='delete'
          aria-label='delete from favorites'
          onClick={handleDeleteRecipe}
        />
      )}
      <div className='content'>
        <h3>{trimText(title)}</h3>
        <hr />
        <div className='buttons'>
          <Link to={`/recipe/${id}`}>
            recipe <MdOutlineFormatListBulleted />
          </Link>
          <Link to={`/similar/${id}`} onClick={() => setSingleRecipeId(id)}>
            similar <MdFindReplace />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
