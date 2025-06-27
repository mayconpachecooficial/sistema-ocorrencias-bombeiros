import { useState, useEffect } from "react";
import OccForm from "./components/OccForm";
function App() {
  const [occs, setOccs] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/ocorrencias")
      .then((res) => res.json())
      .then(setOccs);
  }, []);
  return (
    <>
      <h1>Sistema de Ocorrências</h1>
      <OccForm onAdd={(nova) => setOccs([...occs, nova])} />
      <ul>
        {occs.map((o) => (
          <li key={o.id}>{o.titulo}</li>
        ))}
      </ul>
    </>
  );
}
export default App;