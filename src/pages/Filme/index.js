import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './filme-info.css';

import api from '../../services/api';

function Filme(){
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "75f8455e56167be1fcf16a20127166f4",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=>{
        console.log("FILME NAO ENCONTRADO")
      })
    }
    loadFilme();
    return () => {
      console.log("COMPONENTE FOI DESMONTADO")
    }
  }, [])

  if(loading){
    return(
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }
  
  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avalição: {filme.vote_average} / 10</strong>
      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a href="#">
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Filme;