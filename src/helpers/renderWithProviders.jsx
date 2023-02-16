import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { RecipesProvider } from 'context/recipes_context';
import { ThemeContextProvider } from 'context/theme_context';

export const renderWithProviders = (children) => {
  return render(
    <ThemeContextProvider>
      <RecipesProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </RecipesProvider>
    </ThemeContextProvider>,
  );
};
