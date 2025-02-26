import { useState } from 'react'
import './inicio.css'
import { LogoFPR } from '../../Components/Logo';
import { BarraDePesquisa } from '../../Components/BarraDePesquisa';
import { ConteudoTexto } from '../../Components/ConteudoTexto';
import { PincelTema } from '../../Components/PincelTema';

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
                backgroundPosition: 'center center',
                color: corDoTexto
                }}>
            <div className='corpo'>
                <div className='tema'>
                   <PincelTema />
                    <button onClick={() => {
                        trocarImagemDeFundo();
                        trocarCorDoTexto();
                    }}>Mudar tema</button>
                </div>
                <div>
                    <LogoFPR />
                    <BarraDePesquisa />
                    <ConteudoTexto />
                </div>
            </div>
        </div>
    )
};