import "./App.css";
import UserInfo from "./components/userInfo/UserInfo";

function App() {
  const persons = [
    { name: "Halil", greeting: "SA", id: Math.random().toString() },
    { name: "William", greeting: "Hello", id: Math.random().toString() },
    { name: "Rodriguez", greeting: "Hola", id: Math.random().toString() },
  ];
  return (
    <div className="App">
      {persons.map((person) => {
        const { name, greeting, id } = person;
        return <UserInfo userName={name} greeting={greeting} key={id} />;
      })}
    </div>
  );
}

export default App;
