import React from 'react'
import Layout from '../components/Layout/Layout'

function About() {
  return (
    <Layout>
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
            alt="contactos"
            style={{width: "100%"}}
          />
        </div>
        <div className='col-md-4'>
        <h2>Sobre nosotros</h2>
        <p>lorem ipsum</p>
        </div>
        
    </Layout>
  )
}

export default About