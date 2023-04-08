import { useState } from "react";

export default function TodoApp() {
  const [title, setTitle] = useState("Juan");

  function handleClick(e) {
    e.preventDefault();
    setTitle("Marcos");
  }

  function handleChange(e) {
      const value = e.target.value;

      setTitle(value);
  }
  return (
    <div className="todoContainer">
      <form className="todoCreateForm">
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleClick}
          className="buttonCreate"
          type="submit"
          value="create todo"
        />
      </form>
    </div>
  );
}
