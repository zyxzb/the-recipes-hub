import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {
  HomePage,
  RecipePage,
  SavedRecipesPage,
  SearchedPage,
  SimilarPage,
  SearchByIngPage,
} from 'pages';
import RootLayout from 'layouts/RootLayout';
import { RecipesProvider } from 'context/recipes_context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='recipe/:id' element={<RecipePage />} />
      <Route path='search/:name' element={<SearchedPage />} />
      <Route
        path='search-by-ingredients/:ingredients'
        element={<SearchByIngPage />}
      />
      <Route path='similar/:id' element={<SimilarPage />} />
      <Route path='saved-recipes' element={<SavedRecipesPage />} />
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
