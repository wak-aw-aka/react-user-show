import Card from "react-bootstrap/Card";
import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";

export default function UserCard(data) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="col">
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                <Card.Body>
                    <Card.Title>{data.user.maidenName}</Card.Title>
                    <Card.Img variant="top" src={data.user.image} style={{marginBottom: '20px'}}/>
                    <Button variant="primary" onClick={handleShow}>Показать профиль</Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Имя: {data.user.maidenName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img variant="top" src={data.user.image} style={{marginBottom: '20px'}}/>
                    <h5>Возраст: {data.user.age} лет</h5>
                    <h5>Город: {data.user.address.city}</h5>
                    <h5>Контакты: </h5>
                    <div className="row">
                        {data.user.contacts.length == 0 ? '' :
                            data.user.contacts.map((contact, index) => {
                                return (<div className="col" key={index} style={{fontWeight: "bold"}}>{contact.maidenName}</div>);
                            })
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}