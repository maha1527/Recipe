import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/actions';

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (recipeId) => {
    dispatch(removeFavorite(recipeId));
  };

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.recipe.uri}>
            {favorite.recipe.label}
            <button onClick={() => handleRemoveFavorite(favorite.recipe.uri)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;