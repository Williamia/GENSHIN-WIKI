import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../api'; 

function charactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters(); 
      setCharacters(data); 
    };

    getCharacters(); 
  }, []);

  return (
    <div>
      <h1>Personagens de Genshin Impact</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {characters.map((character) => (
          <div key={character._id} style={{ margin: '20px', textAlign: 'center' }}>
            <img src={character.image} alt={character.name} style={{ width: '150px' }} />
            <h2>{character.name}</h2>
            <p>Visão: {character.vision}</p>
            <p>Arma: {character.weapon}</p>
            <p>Região: {character.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default charactersPage;