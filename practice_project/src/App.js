import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (newUser) => {
    setUsersList( (prevUsers) => {
      return [newUser, ...prevUsers]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;