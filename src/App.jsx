import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState("");

  const changeName = () => {
    const text = newName.trim();

    if (text !== "") {
      setName(text);
      setNewName("");

      alert(`El nuevo nombre es: ${text}`);
    }
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeName();
  };

  return (
    <div>
      <h2>Teacher name: {name}</h2>

      <ul>
        <li onClick={() => setName("Data")}>Data</li>
        <li onClick={() => setName("Reyes")}>Reyes</li>
        <li onClick={() => setName("Yolanda")}>Yolanda</li>
      </ul>

      <button onClick={changeName}>Cambio a Alex!</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          placeholder="add a name"
          onChange={handleChange}
        />
        <button type="submit">Cambiar nombre</button>
      </form>
    </div>
  );
}

export default App;