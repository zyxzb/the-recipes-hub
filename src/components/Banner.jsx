import BannerImg from 'assets/images/unsplash-banner.jpg';
import { Wrapper } from 'assets/wrappers/Banner.styles';
import { TypeAnimation } from 'react-type-animation';
import SearchInput from './SearchInput';

const Banner = () => {
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
          <SearchInput placeholder='Find your next dish..' />
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
