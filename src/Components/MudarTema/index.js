import './mudarTema.css'
import { useState } from 'react'

export const Mudartema = () => {

    const [imagemDeFundo, setImagemDeFundo] = useState('../../../image/PrimeiroFundo.jpeg');
    const [corDoTexto, setCorDoTexto] = useState('black');

    function trocarImagemDeFundo() {
        if (imagemDeFundo === '../../../image/PrimeiroFundo.jpeg') {
            setImagemDeFundo('../../../image/SegundoFundo.png')
        } else {
            setImagemDeFundo('../../../image/PrimeiroFundo.jpeg');
        }
    }

    function trocarCorDoTexto() {
        if (corDoTexto === 'black') {
            setCorDoTexto('white'); // Altera para a cor amarela
        } else {
            setCorDoTexto('black'); // Caso contrário, volta para a cor branca
        }
    };

    return (

        <button onClick={() => { trocarImagemDeFundo(); trocarCorDoTexto() }}>Mudar tema</button>
    )
}