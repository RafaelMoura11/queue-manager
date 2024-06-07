import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';

const ReservationForm = () => {
    return (
        <main>
            <section id="principal">
                <img src={ mascatelogo } alt="mascate-logo" />
                <div id="frame">
                    <h2>Adicionar Reserva</h2>
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
                    <button className="opcao">Adicionar a reserva</button>
                </div>
            </section>  
        </main>
    )
}

export default ReservationForm;
