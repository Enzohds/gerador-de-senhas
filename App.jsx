import { useState } from "react";
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(15);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const charset = 
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    (includeNumbers ? '0123456789' : "") +
    (includeSymbols ? '!@#$%*()_' : "");

    let newPassword = '';

    for (let i = 0; i < length; i++){
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }

    setPassword(newPassword)
  };

  return(
    <div className="App">
      <h1>Gerador de Senhas</h1>
      <div>
        <label>
          Comprimento da Senha:
          <input type="range" min="5" max="15"
           value={length} onChange={(e) => setLength(e.target.value)}/>
        </label>
      </div>
      <div>
        <label >
          Incluir números:
          <input type="checkbox" checked={includeNumbers} 
          onChange={(e) => setIncludeNumbers(e.target.checked)}/>

        </label>
      </div>

      <div>
        <label >
          Incluir símbolos:
          <input type="checkbox" checked={includeSymbols} 
          onChange={(e) => setIncludeSymbols(e.target.checked)}/>
        </label>
      </div>

      <button onClick={generatePassword}>Gerar Senha</button>
      <div>
        <h3>Senha Gerada:</h3>
        <p>{password}</p>
      </div>

    </div>
  )
}
export default App;
