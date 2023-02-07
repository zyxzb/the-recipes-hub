import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { HomePage, RecipePage, SearchedPage, SimilarPage } from 'pages';
import RootLayout from 'layouts/RootLayout';
import { RecipesProvider } from 'context/recipes_context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='recipe/:id' element={<RecipePage />} />
      <Route path='search/:id' element={<SearchedPage />} />
      <Route path='similar/:id' element={<SimilarPage />} />
    </Route>,
  ),
);

function App() {
  return (
    <RecipesProvider>
      <RouterProvider router={router} />
    </RecipesProvider>
  );
}

export default App;
