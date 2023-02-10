import BannerImg from 'assets/images/unsplash-banner.jpg';
import { Wrapper } from 'assets/wrappers/Banner.styles';
import { useRecipesContext } from 'context/recipes_context';
import { TypeAnimation } from 'react-type-animation';
import SearchInput from './SearchInput';

const Banner = () => {
  const { searchBy, setSearchBy } = useRecipesContext();

  return (
    <Wrapper>
      <div className='banner-container'>
        <img src={BannerImg} alt='banner' />
        <div className='content'>
          <div className='type-wrapper'>
            <TypeAnimation
              sequence={[
                'Cook with confidence, try new recipes.',
                1000,
                'Discover culinary creativity.',
                2000,
                'Bring excitement to mealtime.',
                1000,
              ]}
              wrapper='h2'
              cursor={true}
              repeat={Infinity}
            />
          </div>
          <SearchInput
            placeholder={
              searchBy === 'ingredients'
                ? 'Add spaces between ingredients..'
                : 'Find your next dish..'
            }
          />
          <div className='find-by'>
            <button
              type='button'
              className={searchBy === 'name' ? 'active' : null}
              onClick={() => setSearchBy('name')}
            >
              by name
            </button>
            <button
              type='button'
              className={searchBy === 'ingredients' ? 'active' : null}
              onClick={() => setSearchBy('ingredients')}
            >
              by ingredients
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
