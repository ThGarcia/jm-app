import React, { useState } from "react";
import "./Admin.css";
import Password from "../../components/password/Password";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = () => {
    setIsAuthenticated(true);
  };
  document.title = "Admin Page";
  return (
    <div>
      {!isAuthenticated ? (
        <Password onPasswordSubmit={handlePasswordSubmit} />
      ) : (
      <div className="admin">
        <a href="/">Site</a>
        <a href="/">Orçamentos</a>
        <a href="/">Recibos</a>
        <a href="/">Novo Orçamento</a>
        <a href="/recibo">Novo Recibo</a>
      </div>
      )}
    </div>
  );
};

export default Admin;
