import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { useState } from 'react';

const styles = { form: { marginBottom: 20 } };

function PokemonForm ({onSubmit}) {
  
const [pokemonName, SetPokemonName] = useState('');

    handleInputChange = e => {
        const pokemonName = e.target.value.toLowerCase();
        SetPokemonName(pokemonName);
    }


    handleFormSubmit = e => {
        e.preventDefault();

        if (pokemonName.trim() === '') {
            toast.error('Please type pokemon name');
            return;
        }
        onSubmit(pokemonName)
        SetPokemonName('');
    }

        return (<>
            <form onSubmit={handleFormSubmit} style={styles.form}>
                <input type='input' name='input' value={pokemonName} onChange={handleInputChange} />
                <button type="submit">
                    <ImSearch style={{ marginRight: 8 }} />
                    Find
                </button>
            </form>
        </>);
}

export default PokemonForm;