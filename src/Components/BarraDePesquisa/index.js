import { Link } from 'react-router-dom'
import './barraPesquisa.css'

export const BarraDePesquisa = () => {
    return (
        <nav className='busca'>
            <input className='pesqui' type='text' placeholder='Pesquisar' />
            <Link to="/personagens">
                <img className='lupa' src='../../../image/lupaa.png' alt='lupa' />
            </Link>
        </nav>
    )
}