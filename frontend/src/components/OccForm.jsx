import { useState } from "react";
export default function OccForm({ onAdd }) {
  const [titulo, setTitulo] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(import.meta.env.VITE_API_URL + "/ocorrencias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, descricao: "" })
    });
    const data = await res.json();
    onAdd(data);
    setTitulo("");
  };
  return (
    <form onSubmit={submit}>
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}