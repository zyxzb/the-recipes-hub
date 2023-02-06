import React, { useContext, useState, useEffect } from 'react';
import { searchRecipesUrl } from 'utils/constants';
import axios from 'axios';

const RecipesContext = React.createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [singleRecipeId, setSingleRecipeId] = useState(1);
  const [singleRecipe, setSingleRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [singleIsLoading, setSingleIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [dishTypeName, setDishTypeName] = useState('breakfast');

  const fetchRecipes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${searchRecipesUrl}&query=${dishTypeName}`,
      );
      const recipes = response.data.results;
      setRecipes(recipes);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const fetchSingleRecipe = async () => {
    setSingleIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${singleRecipeId}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API}`,
      );
      const recipe = response.data;
      setSingleRecipe(recipe);
      setSingleIsLoading(false);
    } catch (error) {
      console.log(error);
      setSingleIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
    //eslint-disable-next-line
  }, [dishTypeName]);

  useEffect(() => {
    fetchSingleRecipe();
    //  eslint-disable-next-line
  }, [singleRecipeId]);

  return (
    <RecipesContext.Provider
      value={{
        setSearchValue,
        isLoading,
        recipes,
        dishTypeName,
        setDishTypeName,
        // singleRecipe
        setSingleRecipeId,
        singleRecipe,
        singleIsLoading,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

// make sure use
export const useRecipesContext = () => {
  return useContext(RecipesContext);
};
