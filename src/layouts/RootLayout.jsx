import { Outlet } from 'react-router-dom';
import { Footer, Nav, Sidebar, SearchView } from 'components';
import ScrollToTop from './ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <>
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
    </>
  );
};

export default RootLayout;
