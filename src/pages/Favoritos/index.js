import React, { useState, useEffect } from 'react';
import './favoritos.css';

function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    function excluirFilme(id) {
        const minhaLista = localStorage.getItem("@primeflix");
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const novaLista = filmesSalvos.filter((filme) => filme.id !== id);
        setFilmes(novaLista);
        localStorage.setItem("@primeflix", JSON.stringify(novaLista));
    }


  return (
    <div className='meus-filmes'>
      <h1>Meus Filmes</h1>

      <ul>
        {filmes.length === 0 && <span>Você não possui nenhum filme salvo.</span>}
        {filmes.map((filme) => (
          <li key={filme.id}>
            <span>{filme.title}</span>
            <div>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <a href={`/filme/${filme.id}`}>Acessar</a>
              <button onClick={() => excluirFilme(filme.id)} className="btn-excluir">Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favoritos;