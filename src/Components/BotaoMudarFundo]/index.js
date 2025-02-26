import { useState } from 'react';
import './imagemFundoMarvel.css';

export const BotaoMudarFundo = () => {

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
        <div style={{
            height: '100vh',
            backgroundImage: `url(${imagemDeFundo})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            color: corDoTexto
        }}>
            <section>
                <button onClick={() => { trocarImagemDeFundo(); trocarCorDoTexto(); }}>Mudar tema</button>
            </section>

        </div>
    )
}