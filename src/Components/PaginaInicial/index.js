import React, { useEffect, useState} from 'react';
import './style.css';
import img from './dance.gif';

export default function EffectExample() {
    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        document.title = counter;

        return () => document.title = "Apagado";
    }, [counter]);

    return (
        <>
            <div className="centralizar">
                <h5>Trocando os números da tela e o título ao mesmo tempo.
                Esta aplicação será apagada em 10sec.
                </h5>
                <h1>{counter}</h1>

                <div className="botao">
                    <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
                </div>

                <div className="gif">
                    <img src={img} />
                </div>
            </div>
        </>
    );
}