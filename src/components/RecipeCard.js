import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../redux/actions';

function RecipeCard({ recipe }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.recipe.uri === recipe.uri);

  const handleAddFavorite = () => {
    dispatch(addFavorite({ recipe }));
  };

  return (
    <div style={{ margin: '10px', width: '200px', border: '1px solid #ccc' }}>
      <img src={recipe.image} alt={recipe.label} style={{ width: '100%' }} />
      <h3>{recipe.label}</h3>
      <p>{recipe.cuisineType && recipe.cuisineType.join(', ')}</p>
      {!isFavorite && <button onClick={handleAddFavorite}>Add to Favorites</button>}
    </div>
  );
}

export default RecipeCard;