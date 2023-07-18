import React from "react";
import Layout from "../components/Layout/Layout";
import { } from 'react-icons'

function Contact() {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="https://www.games24x7.com/wp-content/uploads/2022/03/Section-Image-6.jpg"
            alt="contactos"
            style={{width: "100%"}}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTÁCTANOS</h1>
          <p className="text-justify mt-2">
            Puedes contactarnos para cualquier consulta que tengas...
          </p>
          <p className="mt-3">
           : www.correo@example.com
          </p>
          <p className="mt-3">
            + 1234569
          </p>
          <p className="mt-3">
            otro contacto...
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
