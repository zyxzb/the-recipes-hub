import styled from 'styled-components';
import { BsLink45Deg } from 'react-icons/bs';

const Wrapper = styled.section`
  width: 90vw;
  margin: 80px auto 50px;
  a {
    color: #009243;
    text-decoration: none;
    font-style: italic;
  }
  p {
    line-height: 1.5rem;
    font-size: 18px;
    text-align: justify;
    @media (min-width: 576px) {
      text-align: center;
    }
  }
`;

const TextSection = () => {
  return (
    <Wrapper className='text-center'>
      <h1>
        Unleash your culinary creativity at the Recipes Hub, powered by{` `}
        <a
          href='https://spoonacular.com/food-api'
          target='_blank'
          rel='noopener noreferrer'
        >
          Spoonacular{``}
          <BsLink45Deg />
        </a>
      </h1>
      <p className='mt-50'>
        Welcome to the Recipes Hub, where we believe that cooking is an art form
        and a means of self-expression. Our website is powered by the
        Spoonacular API, providing you with access to a vast collection of the
        latest and greatest recipes from around the world. Whether you're a
        seasoned chef or just starting out, our recipes will inspire you to get
        creative in the kitchen and try something new. From classic dishes to
        innovative creations, you'll find everything you need to take your
        cooking to the next level. With the Spoonacular API, we bring you the
        best of the culinary world right at your fingertips. So why wait? Join
        us on this culinary journey and unleash your creativity today!
      </p>
    </Wrapper>
  );
};

export default TextSection;
