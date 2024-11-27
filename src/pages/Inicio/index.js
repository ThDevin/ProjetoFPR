import { Link } from 'react-router-dom'
import { useState } from 'react'
import './inicio.css'

export default function Inicio() {

    const [imagemDeFundo, setImagemDeFundo] = useState('../../../image/PrimeiroFundo.jpeg');
    const [corDoTexto, setCorDoTexto] = useState('black');

    function trocarImagemDeFundo() {
        if (imagemDeFundo === '../../../image/PrimeiroFundo.jpeg') {
            setImagemDeFundo('../../../image/SegundoFundo.png')
        } else {
            setImagemDeFundo('../../../image/PrimeiroFundo.jpeg');
        }
    }

    const trocarCorDoTexto = () => {
        if (corDoTexto === 'black') {
          setCorDoTexto('white'); // Altera para a cor amarela
        } else {
          setCorDoTexto('black'); // Caso contrário, volta para a cor branca
        }
      };



    return (
        <div className='conteudo'style={{
                height: '100vh',
                backgroundImage: `url(${imagemDeFundo})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100%',
                color: corDoTexto
                }}>
            <div className='corpo'>
                <div className='tema'>
                    <img className='pincel' src='../../../image/tema.png ' alt='Pincel' />
                    <p>Tema Light</p>
                    <button onClick={() => {
                        trocarImagemDeFundo();
                        trocarCorDoTexto();
                    }}>Mudar tema</button>
                </div>
                <div className='corpo_conteudo'>
                <div className='banner'>
                    <img className='logo' src="../../../image/logo.png" alt="fotologo" />
                </div>
                <nav className='busca'>
                    <input className='pesqui' type='text' placeholder='Pesquisar' />
                    <Link to="/personagens">
                        <img className='lupa' src='../../../image/lupaa.png' alt='lupa' />
                    </Link>
                </nav>
                <div className='sobre'>
                    <h1>Escolha o seu <br />personagem</h1>
                    <p className='sobre-conteudo'> O Universo Marvel é o universo compartilhado onde<br />ocorrem as histórias na maioria dos
                        títulos de<br /> quadrinhos americanos e outras mídias publicadas<br />pela Marvel Entertainment.</p>
                </div>
                </div>
            </div>
        </div>
    )
};