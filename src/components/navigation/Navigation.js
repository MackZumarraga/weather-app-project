import { useState } from "react";
import "./navigation.scss";

function Navigation({setCity}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(value)
  }

  return (
    <div className="navigation">
      Navigation
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="New York City" onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Change City</button>
      </form>
    </div>
  );
}

export default Navigation;
  