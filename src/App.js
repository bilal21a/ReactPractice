import axios from 'axios';
import * as React from 'react';
import { useState,useEffect } from 'react';


export default function App() {
  const [name, setName] = useState();
  const [moves, setMove] = useState();

  const updatePokemon = async(e) => {
    const poka_value = e.target.value;
    const {data}  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poka_value}`);
    

    setName(data.name)
    setMove(data.moves.length)
  };
 
  return (
    <>
      <h1>i am <span style={{ color:"red" }}>{name}</span> Pokemon </h1>
      <h2>i have <span style={{ color:"red" }}>{moves}</span> moves</h2>

      <select onChange={updatePokemon}>
        <option value="1" selected disabled>Please Select</option>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
}
