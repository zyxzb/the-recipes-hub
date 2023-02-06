import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { HomePage, AboutPage, RecipePage } from 'pages';
import RootLayout from 'layouts/RootLayout';
import { RecipesProvider } from 'context/recipes_context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='recipe/:id' element={<RecipePage />} />
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
