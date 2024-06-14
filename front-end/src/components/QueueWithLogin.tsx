import ArrowBack from '../components/ArrowBack';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';
import cadeiradobravel from '../images/cadeira-dobravel.png';
import perto from '../images/perto.png';
import QueueInterface from '../interfaces/Queue';
import { useNavigate } from "react-router-dom";

interface Props {
    queues: QueueInterface[];
    removeQueue: (queueToRemove: QueueInterface) => Promise<void>
}

const QueueWithLogin = ({ queues, removeQueue }: Props) => {
    const navigate = useNavigate();
    return (
        <main>
            <ArrowBack />
            <section id="principal">
                <img id="mascate" src={ mascatelogo } alt="Mascate Logo" />
                <div id="title">
                    <h2>Fila</h2>
                    <img src={ cadeiradobravel } alt="Cadeira Dobravel" />
                </div>
                <div id="head">
                    <h4>Remover</h4>
                    <h4>Nome</h4>
                    <h4>Cadeiras</h4>
                </div>
                {
                    queues.map((queue) => (
                        <div className="lista" key={ queue.idQueue }>
                            <img className="btn-del" src={ perto } alt="Delete Button" onClick={ () => removeQueue(queue) } />
                            <h4>{ queue.nickname }</h4>
                            <h4>{ queue.peopleQty }</h4>
                        </div>
                    ))
                }
                <br />
                <div id="buttons2">
                    <button onClick={ () => navigate("/queue-form") }>Adicionar mais clientes</button>
                </div>
            </section>
        </main>
    )
}

export default QueueWithLogin;
