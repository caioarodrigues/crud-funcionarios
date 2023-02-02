import './Body.css';
import React from 'react';
import Funcionario from './Funcionario';

export default function Body(props){
    const funcionarios = props.children;

    return(
        <body>
            <section className='funcionarios'>
                <table className='tabela-funcionarios'>
                    <thead className='cabecalho'>
                        <tr>
                            <td>Nome</td>
                            <td>Função</td>
                            <td>Remuneração</td>
                        </tr>
                    </thead>

                    <tbody className='lista-funcionarios'>
                        <tr>
                            <td>João</td>
                            <td>Vendedor</td>
                            <td>2.5k</td>
                        </tr>

                        <tr>
                            <td>José</td>
                            <td>Ambulante</td>
                            <td>0.5k</td>
                        </tr>

                        <tr>
                            <td>Raimundo</td>
                            <td>Pedreiro</td>
                            <td>1.5k</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <Funcionario></Funcionario>
        </body>
    )
}