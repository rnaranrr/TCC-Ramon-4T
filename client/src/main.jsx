import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Nav from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Nav />
        <div>
            <h1 className='text-9xl'>Fira Sans</h1>
            <h1 className='text-cinza text-9xl'>Fira Sans</h1>
            <h1 className='bg-discreto text-9xl'>Fira Sans</h1>
            <h1 className='bg-cinza text-9xl'>Fira Sans</h1>
            <h1 className='bg-destaque text-9xl'>Fira Sans</h1>
            <h1 className='bg-destaque text-cinza text-9xl'>Fira Sans</h1>
        </div>
    </>
)