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
        nickname: "",
        phone: "",
        isActive: true,
        date: new Date(),
        peopleQty: "0"
    });
    
    const formHandler = (name: string, value: string) => {
        setQueueForm({ ...queueForm, [name]: value });
    }

    const submitHandler = async () => {
        try {
            await api.post("/queues", { ...queueForm, peopleQty: Number(queueForm.peopleQty), cpfEmployee: "11111111111" }, { headers: { Authorization: token } });
        } catch (e) {

        }
        return navigate('/');
    }


    return (
        <main>
            <ArrowBack />
            <section id="principal">
                <img src={ mascatelogo } alt="" />
                <div id="frame">
                    <h2>Adicionar Fila</h2>
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
                    </div>
                </div> 
                <div id="btn-addfila">
                    <button className="opcao" onClick={ submitHandler }>Adicionar a fila</button>
                </div>
            </section>  
        </main>
    )
}

export default QueueForm;
