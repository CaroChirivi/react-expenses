import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import styles from './AddUser.module.css'

const AddUser = props => {

    const [enteredUserName, setEnteredUserName] =  useState('');
    const [enteredUserAge, setEnteredUserAge] =  useState('');
    const [error, setError] =  useState();

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }
        if(+enteredUserAge <1){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (age > 0).'
            })
            return
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

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && (
                <ErrorModal 
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                ></ErrorModal>
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredUserAge} onChange={userAgeChangeHandler}></input>
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;