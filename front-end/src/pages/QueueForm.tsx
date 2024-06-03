import '../css/index.css';

const QueueForm: React.FC = () => {
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
                                <label htmlFor="name" className="label"></label>
                                <input type="text" className="input-container" name="name"  placeholder="Nome Cliente"/>
                            </div>
                            <div>
                                <label htmlFor="quantity" className="label"></label>
                                <input type="number" className="input-container" name="quantity" placeholder="Numero de pessoas"/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="label"></label>
                                <input type="tel" className="input-container" name="phone" maxLength={ 10 } placeholder="Telefone"/>
                            </div>
                        </div>
                    </div> 
                    <div id="btn-addfila">
                        <button className="opcao">Adicionar a fila</button>
                    </div>
                </section>  
            </main>
        </div>
    )
}

export default QueueForm;
