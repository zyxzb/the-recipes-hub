import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  span {
    width: 160px;
    margin-bottom: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
  }
  svg {
    font-size: 2rem;
  }
`;
