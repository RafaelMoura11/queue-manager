import { useState, useEffect } from 'react';
import '../css/index.css';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';
import cadeiradobravel from '../images/cadeira-dobravel.png';
import perto from '../images/perto.png';
import api from '../api';
import QueueInterface from '../interfaces/Queue';

const Queues: React.FC = () => {
    const [queues, setQueues] = useState<QueueInterface[]>([]);
    useEffect(() => {
        const fetchQueueData = async () => {
            const queuesFromAPI = await api.get<QueueInterface[]>("/queues");
            setQueues(queuesFromAPI.data);
        }
        fetchQueueData();
    }, [])
    return (
        <div>
            <span className="material-symbols-outlined">arrow_back</span>
            <main>
                <section id="principal">
                    <img id="mascate" src={ mascatelogo } alt="Mascate Logo" />
                    <h2>Fila</h2>
                    <div id="head">
                        <img src={ cadeiradobravel } alt="Cadeira Dobravel" />
                        <h4>Nome</h4>
                    </div>
                    {
                        queues.map((queue) => (
                            <div className="lista">
                                <ul>
                                    <h4>{ queue.peopleQty }</h4>
                                    <li>{ queue.cpfCustomer }</li>
                                    <img className="btn-del" src={ perto } alt="Delete Button" />
                                </ul>
                            </div>
                        ))
                    }
                    <br />
                    <div id="buttons2">
                        <button>Adicionar mais clientes</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Queues;
