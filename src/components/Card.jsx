import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useRecipesContext } from 'context/recipes_context';
import { AiFillHeart } from 'react-icons/ai';
import { MdFindReplace, MdOutlineFormatListBulleted } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Wrapper } from 'assets/wrappers/Card.styles';

const Card = ({ recipe }) => {
  const { image, title, id } = recipe;
  const { isLoading } = useRecipesContext();

  if (isLoading) {
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
      <img src={image} alt={title} className='image' />
      <AiFillHeart className='like' aria-label='add to favorites' />
      <div className='content'>
        <h3>{title}</h3>
        <hr />
        <div className='buttons'>
          <Link to={`recipe/${id}`}>
            recipe <MdOutlineFormatListBulleted />
          </Link>
          <Link to=''>
            similar <MdFindReplace />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
