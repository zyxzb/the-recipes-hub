import React, { useContext, useState, useEffect } from 'react';
import { searchRecipesUrl } from 'utils/constants';
import axios from 'axios';

const RecipesContext = React.createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [singleRecipeId, setSingleRecipeId] = useState(1);
  const [singleRecipe, setSingleRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [singleIsLoading, setSingleIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [dishTypeName, setDishTypeName] = useState('breakfast');
  const [searchOpen, setSearchOpen] = useState(false);
  const [similarRecipesId, setSimilarRecipesId] = useState(0);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [similarIsLoading, setSimilarIsLoading] = useState(false);

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

  const fetchSimilarRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${similarRecipesId}/similar?apiKey=${process.env.REACT_APP_SPOONACULAR_API}`,
      );
      const recipes = response.data;
      setSimilarRecipes(recipes);
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    if (similarRecipesId !== 0) {
      fetchSimilarRecipes();
    }
    //eslint-disable-next-line
  }, [similarRecipesId]);

  return (
    <RecipesContext.Provider
      value={{
        searchValue,
        setSearchValue,
        isLoading,
        recipes,
        dishTypeName,
        setDishTypeName,
        // singleRecipe
        setSingleRecipeId,
        singleRecipe,
        singleIsLoading,
        searchOpen,
        setSearchOpen,
        // similarRecipes
        similarRecipesId,
        setSimilarRecipesId,
        similarRecipes,
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
