import React, { useEffect, useState } from 'react';
import Layout from "./components/Layout/layout";
import './app.css'
import { fetchCharacters } from './api';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };

    getCharacters();
  }, []);

  return (
    <Layout>
      <div className="centerdv">
        <div className="container-images">
          {characters.map((character) => (       
              <img src={character.bgImage} alt="image" />
          ))}  
      </div>
      </div>
    </Layout>
  )
}

export default App;
