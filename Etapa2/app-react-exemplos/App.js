import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://10.81.205.12:3000/compras";

function App() {
  const [compras, setCompras] = useState([]);
  const [item, setItem] = useState("");
  const [quantidade, setQuantidade] = useState("");

  useEffect(() => {
    axios.get(API_URL).then((res) => setCompras(res.data));
  }, []);

  const adicionarCompra = () => {
    const novaCompra = {
      item,
      quantidade: parseInt(quantidade),
    };
    axios.post(API_URL, novaCompra).then((res) => {
      setCompras([...compras, res.data]);
      setItem("");
      setQuantidade("");
    });
  };

  const removerCompra = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setCompras(compras.filter((compra) => compra.id !== id));
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Compras</h1>

      <input
        placeholder="Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        placeholder="Quantidade"
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />
      <button onClick={adicionarCompra}>Adicionar</button>

      <ul>
        {compras.map((compra) => (
          <li key={compra.id}>
            {compra.item} - {compra.quantidade}x
            <button onClick={() => removerCompra(compra.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;