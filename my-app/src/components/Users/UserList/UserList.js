import React from "react";
import "./UserList.css";
import Card from "../../UI/Card/Card";

const UserList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}years old) {user.college}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
