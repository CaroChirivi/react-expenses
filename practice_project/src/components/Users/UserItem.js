import userEvent from "@testing-library/user-event";
import React from "react";

const UserItem = props => {
    return (
        <li>
            {userEvent.name} ({userEvent.age} years old)
        </li>
    )
}

export default UserItem