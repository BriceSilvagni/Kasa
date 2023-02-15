import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home/home'
import About from '../pages/about/about'
import Error from '../pages/error/error'
import Lodging from '../pages/lodging/lodging'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/*" element={<Error />}></Route>
            <Route path="/:id" element={<Lodging />}></Route>
        </Routes>
    )
}

export default App