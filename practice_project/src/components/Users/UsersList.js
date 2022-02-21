import React from "react";
import UserItem from "./UserItem";
import styles from './UsersList.module.css'
import Card from "../UI/Card";

const UsersList = props => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map( (user) => (
                    <UserItem 
                        key  = {user.id}
                        name = {user.name}
                        age = {user.age}
                    ></UserItem>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList