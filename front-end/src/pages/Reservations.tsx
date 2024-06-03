import '../css/index.css';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';

const Reservations: React.FC = () => {
    return (
        <div>
            <main> 
                <section id="principal">
                <img src={ mascatelogo } alt="mascate-logo" />
                    <div id="frame">
                        <h2>Lista de Reserva</h2>
                        <ul id="buttons"> 
                            <img id="cadeira" src="imagens/cadeira.png" alt="" />
                            <li className="opcao">Reserva 1</li>
                            <li className="opcao">Reserva 2</li>
                            <li className="opcao">Reserva 3</li>
                            <li className="opcao">Reserva 4</li>
                        </ul> 
                    </div>
                </section>  
            </main>
        </div>
    )
}

export default Reservations;
