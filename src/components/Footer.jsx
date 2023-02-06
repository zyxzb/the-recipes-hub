import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 60px;
`;

const Footer = () => {
  return (
    <Wrapper className='mt-100'>
      <p>
        Copyright &#169; <b>CompanyName</b> {new Date().getFullYear()}
      </p>
    </Wrapper>
  );
};

export default Footer;
