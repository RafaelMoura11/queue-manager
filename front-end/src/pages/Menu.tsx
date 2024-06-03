import { Link } from 'react-router-dom';
import '../css/menu.css';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';

const Menu: React.FC = () => {
    return (
        <main>
            <section id="principal">
                <img src={ mascatelogo } alt="mascate-logo" />
                <div id="frame">
                    <h2>O que deseja fazer?</h2>
                    <div id="buttons">    
                        <button className="opcao"><Link to="/queue-form">Adicionar Fila</Link></button>
                        <button className="opcao">Fila</button>
                        <button className="opcao">Reserva</button>
                        <button className="opcao">Lista de Reserva</button>
                    </div> 
                </div>
            </section>  
        </main>
    )
}

export default Menu;
