
import './App.css'

import {Home} from './pages/Home'

import {VotersSignup} from './pages/VotersSignup'
import {VotersLogin} from './pages/VotersLogin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {


        return (
                
                <Router>
                        <Routes>

                                <Route path="/" element={<Home />} /> 

                                <Route path="/voters/signup" element={<VotersSignup />} /> 

                                <Route path="/voters/login" element={<VotersLogin />} /> 

                        </Routes>
                </Router>
        )
}

export default App
