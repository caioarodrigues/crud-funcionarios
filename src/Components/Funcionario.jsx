import './Funcionario.css';
import React from "react";

export default function Funcionario(){
    return(
        <section>
            <fieldset>
                <legend>Adicionar</legend>

                <input type="text" name="nome" id="" 
                placeholder='nome'/>
                <input type="text" name="funcao" id="" 
                placeholder='função'/>
                <input type="number" name="remuneracao" id=""
                placeholder='remuneração'/>

                <form action="" method="post" className='form-cadastro'>
                    <button type="submit" id='btn'>
                        Cadastrar
                    </button>
                </form>
            </fieldset>

            <fieldset>
                <legend>Remover</legend>

                <input type="text" name="nome" id="" 
                placeholder='nome'/>

                <form action="" method="delete" className='form-remover'>
                    <button type="submit" id='btn'>
                        Remover
                    </button>
                </form>
            </fieldset>

            <fieldset>
                <legend>Editar</legend>

                <input type="text" name='nome' placeholder='nome'/>

                <form action="" method='get' className='form-editar'>
                    <button type="submit" id='btn'>
                        Pesquisar
                    </button>
                </form>

                <form action="" method="put" className='form-put'>
                    <div className="resultados">

                        <button type="submit" id='btn'>
                            Editar
                        </button>
                    </div>
                </form>
            </fieldset>
        </section>
    );
}