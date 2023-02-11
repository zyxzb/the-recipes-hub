import React, { useContext, useState, useEffect } from 'react';
import { searchRecipesUrl, baseUrl, apiKey } from 'utils/constants';
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
  const [searchBy, setSearchBy] = useState('name');
  const [ingredientsUrl, setIngredientsUrl] = useState('');
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [ingredientsLoading, setIngredientsLoading] = useState(false);
  const [ingredientsRecipes, setIngredientsRecipes] = useState([]);

  const fetchRecipes = async () => {
    console.log('Fetching recipes (Meal Type - 1)');
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
    console.log('Fetching single recipe (2)');
    setSingleIsLoading(true);
    try {
      const response = await axios.get(
        `${baseUrl}${singleRecipeId}/information?${apiKey}`,
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
        `${baseUrl}${similarRecipesId}/similar?${apiKey}`,
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

  const fetchWithIngredients = async () => {
    console.log('Fetching search with ingredients (5)');
    setIngredientsLoading(true);
    try {
      const response = await axios.get(
        // this request needs '&' instead of '?' before apiKey
        `${baseUrl}findByIngredients?ingredients=${ingredientsUrl}&${apiKey}}`,
      );
      const recipes = response.data;
      setIngredientsRecipes(recipes);
      setIngredientsLoading(false);
    } catch (error) {
      console.log(error);
      setIngredientsLoading(false);
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
    if (ingredientsUrl.length > 0) {
      fetchWithIngredients();
    }
    //eslint-disable-next-line
  }, [ingredientsUrl]);

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
        searchBy,
        setSearchBy,
        ingredientsUrl,
        setIngredientsUrl,
        ingredientsArray,
        setIngredientsArray,
        ingredientsLoading,
        ingredientsRecipes,
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
