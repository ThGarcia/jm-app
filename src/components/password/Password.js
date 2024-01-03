import React, { useState } from 'react';
import './Password.css';

const Password = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (password === '984972129') {
      onPasswordSubmit();
    } else {
      alert('Senha incorreta. Tente novamente.');
    }
  };

  return (
    <div className="password">
        <div className="password-container">
            <input
                type="password"
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    </div>
  );
};

export default Password;
