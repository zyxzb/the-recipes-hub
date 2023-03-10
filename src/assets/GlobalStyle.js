import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
/* @font-face {
  font-family: 'Montserrat', sans-serif;
  font-display: fallback;
  src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'); 
} */
html{
  box-sizing: border-box;
}
*, *::after, *::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body{
  font-family: 'Montserrat', sans-serif;
  background-color: ${({ theme }) => theme.body};
  transition: background-color 0.50s linear;
}
main{
  min-height:calc(100vh - 160px) ;
}
a, button{
  font-family: 'Montserrat', sans-serif;
}
h1, h2, h3, h4, h5{
  text-transform: capitalize;
  color: ${({ theme }) => theme.title};
}
p, li{
  color: ${({ theme }) => theme.text};
}
a, li, h2, h3, h4, h5, summary, footer, button {
  transition: all 0.50s linear;
}
h1{
  font-size: 2rem;
}
h2{
  font-size: 1.7rem;
}
.m-50{
  margin: 50px auto;
}
.text-center{
  text-align: center;
}
.mt-100 {
  margin-top: 100px;
}
.mt-50 {
  margin-top: 50px;
}
.section-90 {
  width: 90vw;
  margin: 0 auto;
}
.section-100 {
  width: 100vw;
  margin: 0 auto;
}
.cards-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
  flex-wrap: wrap;
  text-align: center;
  min-height: 300px;
}
@media print {
  *{
    background: transparent !important;
    color: #000 !important;
  }
  @page {
    margin-top:-6rem;
  }
  .buttons{
    display: none !important;
  }
  article{
    a{
      text-decoration: none;
    }
    summary{
      page-break-after: always;
    }
    .instruction {
      text-align: justify;
    }
    .text-section{
      margin-top: 3rem;
    }
  }
  }
`;
