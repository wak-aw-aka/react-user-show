import React, {useState} from "react";
import {Button} from "react-bootstrap";

export default function UserForm(data) {

    const [appState, setAppState] = useState({
        name: '',
        city: '',
        age: '',
        image: '',
        added: false
    });
    const setName = (value) =>  {
        setAppState({
            name: value,
            city: appState.city,
            age: appState.age,
            image: appState.image,
            added: false
        })
    }
    const setAge = (value) =>  {
        setAppState({
            name: appState.name,
            city: appState.city,
            age: value,
            image: appState.image,
            added: false
        })
    }

    const setCity = (value) =>  {
        setAppState({
            name: appState.name,
            city: value,
            age: appState.age,
            image: appState.image,
            added: false
        })
    }

    const setImage = (value) =>  {
        setAppState({
            name: appState.name,
            city: appState.city,
            age: appState.age,
            image: value,
            added: false
        })
    }

    const handleUser = () => {
        var correctUser = {
            maidenName: appState.name,
            address: {
                city: appState.city
            },
            age: appState.age,
            image: appState.image
        };

        var users = data.users;
        users.unshift(correctUser);

        data.callBack({loading: false, users: users})

        setAppState({
            name: '',
            city: '',
            age: '',
            image: '',
            added: true
        })
    }

    return (
        <form>
            <label style={{marginBottom: '20px'}}>Введите имя:
                <input
                    type="text"
                    style={{marginLeft: '20px'}}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label style={{marginBottom: '20px'}}>Укажите возраст:
                <input
                    type="text"
                    style={{marginLeft: '20px'}}
                    onChange={(e) => setAge(e.target.value)}
                />
            </label>
            <label style={{marginBottom: '20px'}}>Укажите город:
                <input
                    type="text"
                    style={{marginLeft: '20px'}}
                    onChange={(e) => setCity(e.target.value)}
                />
            </label>
            <label style={{marginBottom: '20px'}}>Url картинки:
                <input
                    type="text"
                    style={{marginLeft: '20px'}}
                    onChange={(e) => setImage(e.target.value)}
                />
            </label>
            <Button variant="primary" onClick={handleUser}>
                Добавить
            </Button>
            {appState.added !== true ? '':
                <h5 style={{color: "red"}}>Пользователь успешно добавлен, Добавить еще одного?</h5>}
        </form>
    )
}