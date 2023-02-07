import { dishType } from 'utils/constants';
import styled from 'styled-components';
import { useRecipesContext } from 'context/recipes_context';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ul {
    display: flex;
    padding-top: 30px;
    justify-content: center;
    flex-wrap: wrap;
  }
  li {
    list-style-type: none;
    margin: 5px 20px;
    cursor: pointer;
    text-transform: capitalize;
    &.active {
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

const DishesTypes = () => {
  const { recipes, dishTypeName, setDishTypeName } = useRecipesContext();

  return (
    <Wrapper className='section-90'>
      <div className='m-50'>
        <h2>choose the Meal Type</h2>
        <div>
          <ul>
            {dishType.map((type, index) => (
              <li
                key={index}
                className={dishTypeName === type ? 'active' : ''}
                onClick={() => setDishTypeName(type)}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='cards-container'>
        {recipes.map((recipe, index) => (
          <Card recipe={recipe} key={index} />
        ))}
      </div>
    </Wrapper>
  );
};

export default DishesTypes;
