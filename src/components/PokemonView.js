import { useState } from "react";
import PokemonForm from "./PokemonForm";
import { ToastContainer } from 'react-toastify';
import {PokemonInfo} from "./PokemonInfo";
import 'react-toastify/dist/ReactToastify.css';

export function Pokemon (){

const[PokemonName, SetPokemonName]= useState('');

    return (
      <>
        <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={SetPokemonName} />
         <PokemonInfo pokemonName={PokemonName} />
         <ToastContainer autoClose={3000}/> 
      </div>
      </>
  )
  }
