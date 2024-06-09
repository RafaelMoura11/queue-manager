import { useContext, useState, useEffect } from 'react';
import ArrowBack from '../components/ArrowBack';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';
import perto from '../images/perto.png';
import cadeira from '../images/cadeira.png';
import MyContext from "../context/MyContext";
import api from '../api';
import ReservationInterface from '../interfaces/Reservation';

const Reservations: React.FC = () => {
    const { token } = useContext(MyContext);
    const [reservations, setReservations] = useState<ReservationInterface[]>([]);
    useEffect(() => {
        const fetchReservationData = async () => {
            const reservationFromAPI = await api.get<ReservationInterface[]>("/reservations", { headers: { Authorization: token } });
            setReservations(reservationFromAPI.data);
        }
        fetchReservationData();
    }, [token])

    const deleteReservation = async (reservationToDelete: ReservationInterface) => {
        const newReservation = reservations.filter((q) => q.idReservation !== reservationToDelete.idReservation);
        await api.delete(`/reservations/${reservationToDelete.idReservation}`, { headers: { Authorization: token } });
        return setReservations(newReservation);
    }

    return (
        <div>
            <main> 
                <ArrowBack />
                <section id="principal">
                <img id="mascate" src={ mascatelogo } alt="Mascate Logo" />
                <h2>Fila</h2>
                <div id="head">
                    <img src={ cadeira } alt="Cadeira" />
                    <h4>Nome</h4>
                </div>
                {
                    reservations.map((reservation) => (
                        <div className="lista" key={ reservation.idReservation }>
                            <ul>
                                <h4>{ reservation.peopleQty }</h4>
                                <li>{ reservation.customer.fullName }</li>
                                <img className="btn-del" src={ perto } alt="Delete Button" onClick={ () => deleteReservation(reservation) } />
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
    )
}

export default Reservations;
