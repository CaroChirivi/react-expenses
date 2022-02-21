import React, {useState, Fragment} from 'react';
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
    // <>
    // <React.Fragment>
    <Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
      </Fragment>
    //</React.Fragment>
  );
}

export default App;