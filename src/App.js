import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/Footer/Footer'

import './App.css';
// import "./seedAll";




export default function App() {

    let router = useRoutes(routes)

    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                {router}
            </div>
            <Footer />
        </>
    )
}


