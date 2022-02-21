import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from './AddUser.module.css'

const AddUser = props => {

    const [enteredUserName, setEnteredUserName] =  useState('');
    const [enteredUserAge, setEnteredUserAge] =  useState('');

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
            return;
        }
        if(+enteredUserAge <1){
            return;
        }
        const newUser = {
            id: Math.random().toString(),
            name: enteredUserName,
            age: enteredUserAge
        }

        props.onAddUser(newUser)
        setEnteredUserName("")
        setEnteredUserAge("")
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler}></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredUserAge} onChange={userAgeChangeHandler}></input>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser;