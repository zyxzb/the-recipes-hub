import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.title};
  background-color: ${({ theme }) => theme.body};
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 60px;
  border-top: 1px solid #eee;
`;

const Footer = () => {
  return (
    <Wrapper className='mt-100'>
      <p>
        Copyright &#169; <b>The Recipe Hub</b> {new Date().getFullYear()}
      </p>
    </Wrapper>
  );
};

export default Footer;
