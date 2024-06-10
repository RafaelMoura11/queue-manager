import { useContext, useState, useEffect } from 'react';
import ArrowBack from '../components/ArrowBack';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';
import perto from '../images/perto.png';
import cadeira from '../images/cadeira.png';
import MyContext from "../context/MyContext";
import api from '../api';
import ReservationInterface from '../interfaces/Reservation';
import { useNavigate } from "react-router-dom";

const Reservations: React.FC = () => {
    const { token } = useContext(MyContext);
    const navigate = useNavigate();
    const [reservations, setReservations] = useState<ReservationInterface[]>([]);
    useEffect(() => {
        if (!token) {
            return navigate("/login");
        }
        const fetchReservationData = async () => {
            const reservationFromAPI = await api.get<ReservationInterface[]>("/reservations", { headers: { Authorization: token } });
            setReservations(reservationFromAPI.data);
        }
        fetchReservationData();
    }, [navigate, token])

    const deleteReservation = async (reservationToDelete: ReservationInterface) => {
        const newReservation = reservations.filter((q) => q.idReservation !== reservationToDelete.idReservation);
        await api.delete(`/reservations/${reservationToDelete.idReservation}`, { headers: { Authorization: token } });
        return setReservations(newReservation);
    }

    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    // Ordenar reservas por data mais recente
    const sortedReservations = [...reservations].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).reverse();

    // Agrupar reservas por data
    const groupedReservations = sortedReservations.reduce<Record<string, ReservationInterface[]>>((groups, reservation: ReservationInterface) => {
        const date = formatDate(String(reservation.date));
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(reservation);
        return groups;
    }, {});

    return (
        <div>
            <main> 
                <ArrowBack />
                <section id="principal">
                <img id="mascate" src={ mascatelogo } alt="Mascate Logo" />
                <h2>Reservas</h2>
                <div id="head">
                    <img src={ cadeira } alt="Cadeira" />
                    <h4>Nome</h4>
                </div>
                {Object.keys(groupedReservations).map((date) => (
                <div key={date}>
                    <h1>{date}</h1>
                    {groupedReservations[date].map((reservation) => (
                        <div className="lista" key={reservation.idReservation}>
                            <ul>
                                <h4>{reservation.peopleQty}</h4>
                                <li>{reservation.customer.fullName}</li>
                                <img
                                    className="btn-del"
                                    src={ perto }
                                    alt="Delete Button"
                                    onClick={() => deleteReservation(reservation)}
                                />
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
                <br />
                <div id="buttons2">
                    <button onClick={ () => navigate("/reservation-form") }>Adicionar mais reservas</button>
                </div>
            </section>
            </main>
        </div>
    )
}

export default Reservations;
