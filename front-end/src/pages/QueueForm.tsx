import { useContext, useEffect, useState } from 'react';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';
import api from '../api';
import ArrowBack from '../components/ArrowBack';
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";


const QueueForm: React.FC = () => {
    const { token } = useContext(MyContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            return navigate("/login");
        }
    }, [navigate, token])

    const [queueForm, setQueueForm] = useState({
        cpf: "",
        fullName: "",
        isActive: true,
        date: new Date(),
        peopleQty: "0",
        phone: ""
    });
    
    const formHandler = (name: string, value: string) => {
        setQueueForm({ ...queueForm, [name]: value });
    }

    const submitHandler = async () => {
        try {
            const customerExists = await api.get(`/customers/${queueForm.cpf}`, { headers: { Authorization: token } });
            if (customerExists) {
                await api.post("/queues", { ...queueForm, peopleQty: Number(queueForm.peopleQty), cpfCustomer: queueForm.cpf, cpfEmployee: "11111111111" }, { headers: { Authorization: token } });
            }
        } catch (e) {
            await api.post("/customers", { cpf: queueForm.cpf, fullName: queueForm.fullName, phone: queueForm.phone }, { headers: { Authorization: token } });
            await api.post("/queues", { ...queueForm, peopleQty: Number(queueForm.peopleQty), cpfCustomer: queueForm.cpf, cpfEmployee: "11111111111" }, { headers: { Authorization: token } });
        }
        return navigate('/');
    }


    return (
        <div>
            <ArrowBack />
            <main>
                <section id="principal">
                    <img src={ mascatelogo } alt="" />
                    <div id="frame">
                        <h2>Adicionar Fila</h2>
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
                        <button className="opcao" onClick={ submitHandler }>Adicionar a fila</button>
                    </div>
                </section>  
            </main>
        </div>
    )
}

export default QueueForm;
