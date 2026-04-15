import { useState } from "react";
import "./Theme.css";

function Theme() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "container dark" : "container light"}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default Theme;