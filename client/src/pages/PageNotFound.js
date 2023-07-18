import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

function PageNotFound() {
  return (
    <Layout title={'page not found'}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h1 className="pnf-heading">Página no encontrada.</h1>
        <Link to="/" className="pnf-btn">
          <h2 className="pnf-heading">Go back</h2>
        </Link>
      </div>
    </Layout>
  );
}

export default PageNotFound;
