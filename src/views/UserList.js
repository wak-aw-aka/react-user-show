import axios from "axios";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import AddUser from "./AddUser";

export default function UserList() {
    const [appState, setAppState] = useState({
        loading: false,
        users: null,
    });
    const fetchUsers = async () => {
        setAppState({ loading: true, users: null });
        try {
            axios.get('https://dummyjson.com/users').then((data) => {
                setAppState({loading: false, users: data.data.users});
            });
        } catch (error) {
            console.error('Error:', error);
            setAppState({loading: false, users: null});
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    // Формируем список контактов случайным образом
    if (appState.users != null) {
        console.log('+appState.users+')
        console.log(appState.users)
        appState.users.map((user, index) => {
            user.contacts = [];
            var count = Math.floor(Math.random()*appState.users.length);
            for (let i = 0 ; i < count; i++) {
                var item = appState.users[Math.floor(Math.random()*appState.users.length)];
                user.contacts.push(item);
            }
        })
    }

    return (
        <div className="row">
            <AddUser callBack={setAppState} users={appState.users}></AddUser>
            {appState.users == null ? '' :
                appState.users.map((user, index) => {
                    return (
                        <UserCard key={index} user={user} index={index}></UserCard>
                    );
                })
            }
        </div>
    );
}