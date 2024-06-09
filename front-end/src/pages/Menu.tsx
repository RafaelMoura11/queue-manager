import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from "../context/MyContext";
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';

const Menu: React.FC = () => {
    const { token } = useContext(MyContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            return navigate("/login");
        }
    }, [navigate, token])
    return (
        <main>
            <section id="principal">
                <img src={ mascatelogo } alt="mascate-logo" />
                <div id="frame">
                    <h2>O que deseja fazer?</h2>
                    <div id="buttons">    
                        <button className="opcao"><Link to="/queue-form">Adicionar Fila</Link></button>
                        <button className="opcao"><Link to="/queues">Fila</Link></button>
                        <button className="opcao"><Link to="/reservation-form">Adicionar Reservas</Link></button>
                        <button className="opcao"><Link to="/reservations">Reservas</Link></button>
                    </div> 
                </div>
            </section>  
        </main>
    )
}

export default Menu;
