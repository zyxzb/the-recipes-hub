import React, { useContext, useState, useEffect } from 'react';
import { searchRecipesUrl } from 'utils/constants';
import axios from 'axios';

const getLocalStorage = () => {
  let localStorageRecipes = localStorage.getItem('recipes');
  if (localStorageRecipes) {
    return JSON.parse(localStorage.getItem('recipes'));
  } else {
    return [];
  }
};

const RecipesContext = React.createContext();

export const RecipesProvider = ({ children }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [singleRecipeId, setSingleRecipeId] = useState(0);
  const [singleRecipe, setSingleRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [singleIsLoading, setSingleIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [dishTypeName, setDishTypeName] = useState('breakfast');
  const [similarRecipesId, setSimilarRecipesId] = useState(0);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [similarIsLoading, setSimilarIsLoading] = useState(false);
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [searchRecipes, setSearchRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState(getLocalStorage());
  console.log(savedRecipes);

  const fetchRecipes = async () => {
    // console.log('Fetching recipes (Meal Type - 1)');
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
    // console.log('Fetching single recipe (2)');
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
    console.log('Fetching similar recipes (3)');
    setSimilarIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${similarRecipesId}/similar?apiKey=${process.env.REACT_APP_SPOONACULAR_API}`,
      );
      const recipes = response.data;
      setSimilarRecipes(recipes);
      setSimilarIsLoading(false);
    } catch (error) {
      console.log(error);
      setSimilarIsLoading(false);
    }
  };

  const fetchSearchRecipes = async () => {
    console.log('Fetching search recipes (4)');
    setSearchIsLoading(true);
    try {
      const response = await axios.get(
        `${searchRecipesUrl}&query=${searchValue}`,
      );
      const recipes = response.data.results;
      setSearchRecipes(recipes);
      setSearchIsLoading(false);
    } catch (error) {
      console.log(error);
      setSearchIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
    //eslint-disable-next-line
  }, [dishTypeName]);

  useEffect(() => {
    if (singleRecipeId !== 0) {
      fetchSingleRecipe();
    }
    //  eslint-disable-next-line
  }, [singleRecipeId]);

  useEffect(() => {
    if (similarRecipesId !== 0) {
      fetchSimilarRecipes();
    }
    //eslint-disable-next-line
  }, [similarRecipesId]);

  useEffect(() => {
    if (searchValue.length > 0) {
      fetchSearchRecipes();
    }
    //eslint-disable-next-line
  }, [searchValue]);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  return (
    <RecipesContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchOpen,
        setSearchOpen,
        // recipesByType
        isLoading,
        recipes,
        dishTypeName,
        setDishTypeName,
        // singleRecipe
        setSingleRecipeId,
        singleRecipe,
        singleIsLoading,
        // similarRecipes
        similarRecipesId,
        setSimilarRecipesId,
        similarRecipes,
        similarIsLoading,
        // searchRecipes
        searchRecipes,
        searchIsLoading,
        sidebarOpen,
        setSidebarOpen,
        setSavedRecipes,
        savedRecipes,
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
