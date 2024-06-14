import { useContext, useState, useEffect } from 'react';
import api from '../api';
import QueueInterface from '../interfaces/Queue';
import MyContext from "../context/MyContext";
import QueueWithLogin from '../components/QueueWithLogin';
import QueueWithoutLogin from '../components/QueueWithoutLogin';


const Queues: React.FC = () => {
    const { token } = useContext(MyContext);
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
        await api.put(`/queues/${queueToRemove.idQueue}`, { ...queueToRemove, isActive: false }, { headers: { Authorization: token } });
        return setQueues(newQueue);
    }

    return (
        <>
            {
                token ? <QueueWithLogin queues={ queues } removeQueue={ removeQueue } /> : <QueueWithoutLogin queues={ queues } />
            }
        </>
    );
};

export default Queues;
