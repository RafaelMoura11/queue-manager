import { useContext, useState, useEffect } from 'react';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';
import api from '../api';
import ArrowBack from '../components/ArrowBack';
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import parseDate from '../utils/dateFormat';


const ReservationForm = () => {
    const { token } = useContext(MyContext);
    const navigate = useNavigate();
    const [reservationForm, setReservationForm] = useState({
        nickname: "",
        phone: "",
        isActive: true,
        date: "",
        hour: "",
        peopleQty: "0",
    });
    
    useEffect(() => {
        if (!token) {
            return navigate("/login");
        }
    }, [navigate, token])

    const formHandler = (name: string, value: string) => {
        setReservationForm({ ...reservationForm, [name]: value });
    }

    const submitHandler = async () => {
        try {
            await api.post("/reservations", { ...reservationForm, peopleQty: Number(reservationForm.peopleQty), date: parseDate(`${reservationForm.date} ${reservationForm.hour}:00:00`), cpfEmployee: "11111111111" }, { headers: { Authorization: token } });
        } catch (e) {

        }
        return navigate('/');
    }
    return (
        <main>
            <ArrowBack />
            <section id="principal">
                <img src={ mascatelogo } alt="mascate-logo" />
                <div id="frame">
                    <h2>Adicionar Reserva</h2>
                    <div id="form">
                        <div>
                            <label htmlFor="nickname" className="label"></label>
                            <input type="text" className="input-container" name="nickname" placeholder="Nome Cliente" onChange={ ({ target: { name, value } }) => formHandler(name, value) }/>
                        </div>
                        <div>
                            <label htmlFor="peopleQty" className="label"></label>
                            <input type="number" className="input-container" name="peopleQty" placeholder="Numero de pessoas" onChange={ ({ target: { name, value } }) => formHandler(name, value) }/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="label"></label>
                            <input type="tel" className="input-container" name="phone" maxLength={ 11 } placeholder="Telefone" onChange={ ({ target: { name, value } }) => formHandler(name, value) }/>
                        </div>
                        <div>
                            <label htmlFor="date" className="label"></label>
                            <input type="text" className="input-container" name="date" maxLength={ 10 } placeholder="Data" onChange={ ({ target: { name, value } }) => formHandler(name, value) }/>
                        </div>
                        <div>
                            <label htmlFor="hour" className="label"></label>
                            <input type="number" className="input-container" name="hour" maxLength={ 2 } placeholder="Horário" onChange={ ({ target: { name, value } }) => formHandler(name, value) }/>
                        </div>
                    </div>
                </div>  
                <div id="btn-addfila">
                    <button className="opcao" onClick={ submitHandler }>Adicionar a reserva</button>
                </div>
            </section>  
        </main>
    )
}

export default ReservationForm;
