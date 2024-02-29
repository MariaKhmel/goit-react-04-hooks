import { fetchPokemonByName } from './pokemon-api';
import { PokemonDataView } from './PokemonDataView';
import { FaSpinner } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { useState, useEffect } from 'react';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
};

export function PokemonInfo ({pokemonName}) {

   const [pokemon, setPokemon] = useState(null);
   const [error, seteError] = useState(null);
   const [status, setStatus] = useState(Status.IDLE);

useEffect(()=>{
if(!pokemonName){
    return;
}
setStatus(Status.PENDING);

fetchPokemonByName(pokemonName)
                .then(pokemon => {
                    setPokemon(pokemonName);
                    setStatus(Status.RESOLVED);
                })
 .catch(error => {
    seteError(error.message);
    setStatus(Status.REJECTED);
                    })

})

       

        if (status === Status.IDLE) {
            return <div>Enter pokemon name.</div>;
        }

        if (status === Status.PENDING) {
            return <div><FaSpinner /> Pending...</div>;
        }

        if (status === Status.REJECTED) {
            return <div>< MdError /> {error}</div>;
        }

        if (status === Status.RESOLVED) {
            return <PokemonDataView pokemon={pokemon} />;
        }
    }
