import "../styles/index.css"
import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div>
        <main className='mainIndex'>
          <div className="welcomeDiv">
            <h1>Bienvenid@</h1>
            <h3>A continuación podrás iniciar sesión
              o registrarte para continuar
            </h3>
            <Link to="/login"><button>Iniciar sesión</button></Link>
            <Link to="/signup"><button>Registrate</button></Link>
          </div>
        </main>
    </div>
  )
}

export default Index