import React from 'react';
import { Carousel } from 'react-bootstrap';
import QueueInterface from '../interfaces/Queue';
import mascatelogo from '../images/Captura de tela 2024-05-22 161444.png';
import dsc from '../images/DSC_0009.jpg';
import aloalobahia from '../images/feijoada_almendra_aloalobahia.jpg';
import buffet from '../images/buffet-sobremesas.jpg';

interface Props {
    queues: QueueInterface[];
}

const QueueWithoutLogin = ({ queues }: Props) => {
    return (
        <>
            <section id="sec">
                <Carousel interval={2000}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={dsc} alt="dsc" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={aloalobahia} alt="aloalobahia" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={buffet} alt="buffet" />
                    </Carousel.Item>
                </Carousel>
            </section>
            <aside id="principal">
                <h2>Fila</h2>
                <img id="mascate" src={mascatelogo} alt="mascate-logo" />
                <div id="head">
                    <h4>Posição</h4>
                    <h4>Nome</h4>
                    <h4>Cadeiras</h4>
                </div>
                {queues.map((queue, index) => {
                    if (index <= 4) {
                        return (
                            <div className="lista" key={queue.idQueue}>
                                <h4>{`${index + 1}°`}</h4>
                                <h4>{queue.nickname}</h4>
                                <h4>{queue.peopleQty}</h4>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
                <br />
            </aside>
        </>
    );
};

export default QueueWithoutLogin;
