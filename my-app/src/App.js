import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, ucollege) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          age: uAge,
          college: ucollege,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
