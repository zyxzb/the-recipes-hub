import { useRef } from 'react';
import BannerImg from 'assets/images/unsplash-banner.jpg';
import { AiOutlineSearch } from 'react-icons/ai';
import { Wrapper } from 'assets/wrappers/Banner.styles';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    const formValue = formRef.current.value;
    console.log(formValue);
    e.preventDefault();
  };

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
          <form>
            <button type='submit' onClick={handleSubmit}>
              <AiOutlineSearch />
            </button>
            <input
              type='text'
              placeholder='Find your next dish..'
              ref={formRef}
            />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
