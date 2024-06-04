import { useState } from 'react';
import '../css/index.css';
import api from '../api';

const QueueForm: React.FC = () => {
    const [queueForm, setQueueForm] = useState({
        fullName: "",
        peopleQty: "0",
        phone: ""
    });
    
    const formHandler = (name: string, value: string) => {
        setQueueForm({ ...queueForm, [value]: name });
    }

    const submitHandler = async () => {
        try {
            await api.post("", queueForm);
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div>
            <span className="material-symbols-outlined">arrow_back</span>
            <main>
                <section id="principal">
                    <img src="imagens/Captura de tela 2024-05-22 161444.png" alt="" />
                    <div id="frame">
                        <h2>Adicionar Fila</h2>
                        <div id="form">
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
