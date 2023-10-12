import React, { useState } from "react";
import CryptoJS from "crypto-js";

function App() {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [outputText, setOutputText] = useState("");
  const [operation, setOperation] = useState("encrypt");

  const handleEncryptDecrypt = () => {
    try {
      if (operation === "encrypt") {
        const encrypted = CryptoJS.TripleDES.encrypt(text, key);
        setOutputText(encrypted.toString());
      } else {
        const decrypted = CryptoJS.TripleDES.decrypt(outputText, key);
        setOutputText(decrypted.toString(CryptoJS.enc.Utf8));
      }
    } catch (error) {
      console.error(`Error ${operation === "encrypt" ? "cifrado" : "descifrado"} el texto:`, error);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0f0f0", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", margin: 0 }}>
      <div style={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", padding: "20px", textAlign: "center", width: "900px", height:"500px",  }}>
        <h1 style={{ color: "#007bff", fontSize: "24px" }}>Cifrado y Descifrado Triple DES</h1>
        <div>
          <label style={{ fontWeight: "bold" }}>Ingresa el Texto:</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} style={{ width: "100%", padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px" }} />
        </div>
        <div>
          <label style={{ fontWeight: "bold" }}>Ingresa la Clave (24 caracteres):</label>
          <input type="text" value={key} onChange={(e) => setKey(e.target.value)} style={{ width: "100%", padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px" }} />
        </div>
        <div>
          <label style={{ fontWeight: "bold" }}>Selecciona la Operación:</label>
          <select value={operation} onChange={(e) => setOperation(e.target.value)} style={{ width: "100%", padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px" }}>
            <option value="encrypt">Cifrar</option>
            <option value="decrypt">Descifrar</option>
          </select>
        </div>
        <button onClick={handleEncryptDecrypt} style={{ width: "100%", padding: "10px", margin: "10px 0", backgroundColor: "#007bff", color: "white", borderRadius: "5px", cursor: "pointer" }}>
          {operation === "encrypt" ? "Cifrar" : "Descifrar"}
        </button>
        <div style={{ marginTop: "20px" }}>
          <label style={{ fontWeight: "bold" }}>{operation === "encrypt" ? "Texto Cifrado" : "Texto Descifrado"}:</label>
          <div style={{ backgroundColor: "#e6e6e6", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>{outputText}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
