import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { HomePage } from 'pages';
import { screen } from '@testing-library/react';

describe('Home Page', () => {
  it('should verify rendered recipes', async () => {
    renderWithProviders(<HomePage />);
    const recipeElement = await screen.findAllByTestId(/recipe-card-/i);
    console.log(recipeElement.length);
  });
});
