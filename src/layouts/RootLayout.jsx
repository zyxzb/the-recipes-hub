import { theme } from 'assets/theme';
import { GlobalStyle } from 'assets/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Footer, Nav } from 'components';
import ScrollToTop from './ScrollToTop';

const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <main>
        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default RootLayout;
