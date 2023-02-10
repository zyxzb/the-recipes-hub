import BannerImg from 'assets/images/unsplash-banner.jpg';
import BannerWebP from 'assets/images/unsplash-banner.webp';
import SmallBannerWebP from 'assets/images/unsplash-banner-768.webp';
import { Wrapper } from 'assets/wrappers/Banner.styles';
import { useRecipesContext } from 'context/recipes_context';
import { TypeAnimation } from 'react-type-animation';
import SearchInput from './SearchInput';

const Banner = () => {
  const { searchBy, setSearchBy } = useRecipesContext();

  return (
    <Wrapper>
      <div className='banner-container'>
        <picture>
          <source
            type='image/webp'
            media='(max-width: 768px)'
            srcSet={SmallBannerWebP}
          />
          <source
            type='image/webp'
            media='(min-width: 769px)'
            srcSet={BannerWebP}
          />
          <img src={BannerImg} alt='banner' srcSet='' />
        </picture>
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
              aria-label='search by name'
              className={searchBy === 'name' ? 'active' : null}
              onClick={() => setSearchBy('name')}
            >
              by name
            </button>
            <button
              type='button'
              aria-label='search by ingredients'
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
