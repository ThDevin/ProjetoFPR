import { Link } from 'react-router-dom';
import './personagem.css'
import { useEffect, useState } from 'react';


function BuscarPersonagens() {

  const [movies, setMovies] = useState([])
  const [imagemDeFundo, setImagemDeFundo] = useState('../../../image/Vingadores.png');
  const [corDoTexto, setCorDoTexto] = useState('black');
  function trocarImagemDeFundo() {
      if (imagemDeFundo === '../../../image/Vingadores.png') {
          setImagemDeFundo('../../../image/SegundoFundo.png')
      } else {
          setImagemDeFundo('../../../image/Vingadores.png');
      }
  }

  const trocarCorDoTexto = () => {
      if (corDoTexto === 'black') {
        setCorDoTexto('white');
      } else {
        setCorDoTexto('black');
      }
    };

  useEffect(() => {

   fetch(``)
   .then(response => response.json())
   .then(data => {
    console.log(data.data.results)
    setMovies(data.data.results)
   })}, [])

  return (
    <div className='conteudo2' style={{
      height: '100vh',
      backgroundImage: `url(${imagemDeFundo})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'fixed',
      color: corDoTexto
    }}>
      <div className='topo'>
        <img className='logo2' src="../../../../image/logo.png" alt="fotologo" />
        <nav className='navegacao'>
          <input className='pesqui2' type='text' placeholder='Pesquisar' />
          <Link to="/personagens">
            <img className='lupa2' src='../../../../image/lupaa.png' alt='lupa' />
          </Link>
        </nav>
        <div className='tema2'>
          <img className='pincel2' src='../../../image/tema.png' alt='tema' />
          <p>Tema Light</p>
          <button className='tema2' onClick={() => {
             trocarImagemDeFundo();
             trocarCorDoTexto();
          }}>Mudar tema</button>
        </div>
      </div>
      <div className='personagens'>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <img src="" alt={movie.name} />
              <div>
                <span>{movie.name}</span>
                <p>{movie.text}</p>
              </div>
            </li>
          )
        })}
      </div>
    </div >
  )
}

export default BuscarPersonagens;