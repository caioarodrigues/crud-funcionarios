import './Header.css';
import React from 'react';

export default function Header(){
    return(
        <header className='header'>
            <form action="" method="get" className='form'>
                <span>
                    Listar todos os funcionários
                </span>

                <button type="submit" className='btn'>
                    Carregar
                </button>
            </form>

            <form action="" method="get" className='form'>
                <input type="text" name="name" id="input"
                placeholder='pesquisar por um funcionário'/>
                <button type="submit" className='btn'>
                    Pesquisar
                </button>
            </form>
        </header>
    )
}