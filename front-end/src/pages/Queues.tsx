import '../css/index.css';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';
import cadeiradobravel from '../images/cadeira-dobravel.png';
import perto from '../images/perto.png';

const Queues: React.FC = () => {
    return (
        <div>
            <span className="material-symbols-outlined">arrow_back</span>
            <main>
                <section id="principal">
                    <img id="mascate" src={ mascatelogo } alt="Mascate Logo" />
                    <h2>Fila</h2>
                    <div id="head">
                        <img src={ cadeiradobravel } alt="Cadeira Dobravel" />
                        <h4>Nome</h4>
                    </div>
                    <div className="lista">
                        <ul>
                            <h4>2</h4>
                            <li>André Luiz</li>
                            <img className="btn-del" src={ perto } alt="Delete Button" />
                        </ul>
                    </div>
                    <div className="lista">
                        <ul>
                            <h4>4</h4>
                            <li>Massuello Quaresma</li>
                            <img className="btn-del" src={ perto } alt="Delete Button" />
                        </ul>
                    </div>
                    <div className="lista">
                        <ul>
                            <h4>3</h4>
                            <li>Gabriel Vieira</li>
                            <img className="btn-del" src={ perto } alt="Delete Button" />
                        </ul>
                    </div>
                    <div className="lista">
                        <ul>
                            <h4>2</h4>
                            <li>Rafael Moura</li>
                            <img className="btn-del" src={ perto } alt="Delete Button" />
                        </ul>
                    </div>
                    <br />
                    <div id="buttons2">
                        <button>Adicionar mais clientes</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Queues;
