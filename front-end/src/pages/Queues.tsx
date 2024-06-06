import { useState, useEffect } from 'react';
import '../css/index.css';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';
import cadeiradobravel from '../images/cadeira-dobravel.png';
import perto from '../images/perto.png';
import api from '../api';
import QueueInterface from '../interfaces/Queue';
import ArrowBack from '../components/ArrowBack';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoic2VuaGExMjMiLCJ1c2VyIjp7ImlkX3VzZXIiOjEsImVtYWlsIjoiZW1haWxAZW1haWwuY29tIiwiZW1wbG95ZWVfY3BmIjoiMTExMTExMTExMTEifSwiaWF0IjoxNzE3Njc2NTQ3LCJleHAiOjE3MTgyODEzNDd9.tXFPiPmYB7nYteIlQGHWCuOcO2cho7H0mm0emkxTR04";

const Queues: React.FC = () => {
    const [queues, setQueues] = useState<QueueInterface[]>([]);
    useEffect(() => {
        const fetchQueueData = async () => {
            const queuesFromAPI = await api.get<QueueInterface[]>("/queues");
            setQueues(queuesFromAPI.data);
        }
        fetchQueueData();
    }, [])

    const removeQueue = async (queueToRemove: QueueInterface) => {
        const newQueue = queues.filter((q) => q.idQueue !== queueToRemove.idQueue);
        await api.put(`/queues/${queueToRemove.idQueue}`, { ...queueToRemove, isActive: false }, { headers: { Authorization: TOKEN } });
        return setQueues(newQueue);
    }

    return (
        <div>
            <ArrowBack />
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
                            <div className="lista" key={ queue.idQueue }>
                                <ul>
                                    <h4>{ queue.peopleQty }</h4>
                                    <li>{ queue.customer.fullName }</li>
                                    <img className="btn-del" src={ perto } alt="Delete Button" onClick={ () => removeQueue(queue) } />
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
