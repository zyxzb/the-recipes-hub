import Skeleton from 'react-loading-skeleton';
import { useRecipesContext } from 'context/recipes_context';
import { AiFillHeart } from 'react-icons/ai';
import { MdFindReplace, MdOutlineFormatListBulleted } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Wrapper } from 'assets/wrappers/Card.styles';
import noImage from 'assets/images/unsplash-banner.jpg';
import { trimText } from 'utils/constants';

const Card = ({ recipe }) => {
  const { image, title, id } = recipe;
  const { isLoading, similarIsLoading, searchIsLoading, setSingleRecipeId } =
    useRecipesContext();

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
      <AiFillHeart className='like' aria-label='add to favorites' />
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
