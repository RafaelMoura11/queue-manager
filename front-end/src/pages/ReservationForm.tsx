import { useContext, useState } from 'react';
import '../css/index.css';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';
import api from '../api';
import ArrowBack from '../components/ArrowBack';
import MyContext from "../context/MyContext";


const ReservationForm = () => {
    const { token } = useContext(MyContext);
    const [reservationForm, setReservationForm] = useState({
        cpf: "",
        fullName: "",
        isActive: true,
        date: new Date(),
        peopleQty: "0",
        phone: ""
    });

    const formHandler = (name: string, value: string) => {
        setReservationForm({ ...reservationForm, [name]: value });
    }

    const submitHandler = async () => {
        try {
            const customerExists = await api.get(`/customers/${reservationForm.cpf}`, { headers: { Authorization: token } });
            if (customerExists) {
                await api.post("/reservations", { ...reservationForm, peopleQty: Number(reservationForm.peopleQty), cpfCustomer: reservationForm.cpf, cpfEmployee: "11111111111" }, { headers: { Authorization: token } });
            }
        } catch (e) {
            await api.post("/customers", { cpf: reservationForm.cpf, fullName: reservationForm.fullName, phone: reservationForm.phone }, { headers: { Authorization: token } });
            await api.post("/reservations", { ...reservationForm, peopleQty: Number(reservationForm.peopleQty), cpfCustomer: reservationForm.cpf, cpfEmployee: "11111111111" }, { headers: { Authorization: token } });
        }
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
                            <label htmlFor="cpf" className="label"></label>
                            <input type="text" className="input-container" name="cpf" placeholder="CPF Cliente" onChange={ ({ target: { name, value } }) => formHandler(name, value) }/>
                        </div>
                        <div>
                            <label htmlFor="fullName" className="label"></label>
                            <input type="text" className="input-container" name="fullName" placeholder="Nome Cliente" onChange={ ({ target: { name, value } }) => formHandler(name, value) }/>
                        </div>
                        <div>
                            <label htmlFor="peopleQty" className="label"></label>
                            <input type="number" className="input-container" name="peopleQty" placeholder="Numero de pessoas" onChange={ ({ target: { name, value } }) => formHandler(name, value) }/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="label"></label>
                            <input type="tel" className="input-container" name="phone" maxLength={ 10 } placeholder="Telefone" onChange={ ({ target: { name, value } }) => formHandler(name, value) }/>
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
