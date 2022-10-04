import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home.js'
import CreateEvent from '../pages/CreateEvent'
import EventDetails from '../pages/EventDetails'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<CreateEvent />} />
                <Route path='/event' element={<EventDetails />} />
            </Routes>
        </Router>
    );
};