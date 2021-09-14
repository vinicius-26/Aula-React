import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
    <article className="teacher-item">
        <header>
            <img src="https://lh3.googleusercontent.com/a-/AOh14GgiuCpKZPyUAE3Woj0HD028ezly8xvSvVmovSuvyg=s96-c-rg-br100" alt="Vinicius de Stephano" />
            <div>
                <strong>Vinicius Stephano</strong>
                <span>Quimica</span>
            </div>
        </header>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa dolore, nulla labore laboriosam impedit nam, dolores mollitia deleniti excepturi totam maiores. Assumenda ipsa, illo asperiores mollitia ea rerum iusto?</p>

        <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>

                <button>
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>

        </footer>
    </article>
    )
}

export default TeacherItem;
    
    