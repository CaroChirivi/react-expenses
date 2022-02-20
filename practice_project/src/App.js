import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const INITIAL_USERS = [
  {
    id: '1l',
  }
]

const App = () => {

  const [users, setUsers] = useState(INITIAL_USERS)

  return (
    <div>
      <AddUser></AddUser>
      <UsersList users={users}/>
    </div>
  );
}

export default App;