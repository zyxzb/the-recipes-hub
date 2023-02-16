import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Banner } from 'components';
import { HomePage, SearchedPage } from 'pages';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Banner Search', () => {
  it('checks placeholder value after click', () => {
    renderWithProviders(<Banner />);
    // first button check
    const input = screen.getByTestId('banner-input');
    fireEvent.click(screen.getByText('by name'));
    expect(input.placeholder).toEqual('Find your next dish..');

    // second button check
    fireEvent.click(screen.getByText('by ingredients'));
    expect(input.placeholder).toEqual('Add spaces between ingredients..');
  });

  it('checks if searching is disabled for an empty input', () => {
    renderWithProviders(<Banner />);
    fireEvent.click(screen.getByLabelText('search recipes'));
    expect(global.window.location.href).not.toContain(
      '/search' || '/search-by-ingredients',
    );
  });

  it('checks if searching url works for values', () => {
    renderWithProviders(<Banner />);
    // single phrase
    fireEvent.click(screen.getByText('by name'));
    fireEvent.change(screen.getByTestId('banner-input'), {
      target: { value: 'bananas' },
    });
    fireEvent.click(screen.getByLabelText('search recipes'));
    expect(global.window.location.href).toContain('/search/bananas');

    // double phrase
    fireEvent.click(screen.getByText('by name'));
    fireEvent.change(screen.getByTestId('banner-input'), {
      target: { value: 'tomato       soup' },
    });
    fireEvent.click(screen.getByLabelText('search recipes'));
    expect(global.window.location.href).toContain('/search/tomato-soup');
  });

  it('checks if the SearchPage is getting the right data', async () => {
    renderWithProviders(
      <>
        <SearchedPage />
        <HomePage />
      </>,
    );

    fireEvent.click(screen.getByText('by name'));
    fireEvent.change(screen.getByTestId('banner-input'), {
      target: { value: 'pasta' },
    });
    fireEvent.click(screen.getByLabelText('search recipes'));
    const h1Element = await screen.findByTestId('h1-title');
    console.log(h1Element);
  });
});
