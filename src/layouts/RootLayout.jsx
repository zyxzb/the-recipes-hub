import { theme } from 'assets/theme';
import { GlobalStyle } from 'assets/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Footer, Nav } from 'components';
import ScrollToTop from './ScrollToTop';
import SearchView from 'components/SearchView';
import Sidebar from 'components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <SearchView />
      <Sidebar />
      <Footer />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default RootLayout;
