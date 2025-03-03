import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipesRequest, fetchRecipesSuccess, fetchRecipesFailure } from '../redux/actions';
import axios from 'axios';
import RecipeCard from './RecipeCard';

function RecipeList() {
  const dispatch = useDispatch();
  const { recipes, loading, error, searchTerm, filters } = useSelector((state) => state);

  useEffect(() => {
    const fetchRecipes = async () => {
      dispatch(fetchRecipesRequest());
      try {
        const response = await axios.get(
          `https://api.edamam.com/search?q=${searchTerm || 'pizza'}&app_id=a5de3521&app_key=28f8a20bd89362740e68d4bbb349b977&from=0&to=50`
        );
        dispatch(fetchRecipesSuccess(response.data.hits));
      } catch (err) {
        dispatch(fetchRecipesFailure(err.message));
      }
    };

    fetchRecipes();
  }, [dispatch, searchTerm]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Recipes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map((recipeData) => (
          <RecipeCard key={recipeData.recipe.uri} recipe={recipeData.recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;