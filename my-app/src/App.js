import "./App.css";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

function App() {
  return (
    <div className="App">
      <AddUser />
      <UserList users={[]} />
    </div>
  );
}

export default App;
