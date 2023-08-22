import Card from "react-bootstrap/Card";
import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import UserForm from "./UserForm";

export default function AddUser(data) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="row">
            <Button variant="primary" onClick={handleShow} style={{width: '300px', margin: '0 auto 20px'}}>Добавить пользователя</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавление пользователя</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserForm callBack={data.callBack} users={data.users}></UserForm>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}