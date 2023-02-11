import { dishType } from 'utils/constants';
import styled from 'styled-components';
import { useRecipesContext } from 'context/recipes_context';
import { Card } from 'components';

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
    padding: 10px 20px;
    margin: 10px 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    cursor: pointer;
    text-transform: capitalize;
    transition: border 0.3s ease;
    &:hover {
      border: 1px solid black;
    }
    &.active {
      font-weight: bold;
      border: 1px solid black;
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
          <Card recipe={recipe} key={index} likeIcon={true} />
        ))}
      </div>
    </Wrapper>
  );
};

export default DishesTypes;
