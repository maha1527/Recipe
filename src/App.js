import React from 'react';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Favorites from './components/Favorites';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Recipe App</h1>
      <SearchBar />
      <Filter />
      <RecipeList />
      <Favorites />
    </div>
  );
}

export default App;