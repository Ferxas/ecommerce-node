import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // función que manejará el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando datos");
    console.log(name, email, password, address, phone);
    toast.success('El registro fue exitoso!')
  };

  return (
    <Layout title={"Registrarse"}>
      <div className="register">
        <h1>Página de registro</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // 2:24:09
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Ingresa tu teléfono"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Ingresa tu dirección"
              required
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div> */}

          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
