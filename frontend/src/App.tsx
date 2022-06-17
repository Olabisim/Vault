
import './App.css'

import {Home} from './pages/Home'

import {VotersSignup} from './pages/VotersSignup'
import {VotersLogin} from './pages/VotersLogin'
import {CandidateSignup} from './pages/CandidateSignup'
import {CandidateLogin} from './pages/CandidateLogin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {


        return (
                
                <Router>
                        <Routes>

                                <Route path="/" element={<Home />} /> 

                                <Route path="/voters/signup" element={<VotersSignup />} /> 

                                <Route path="/voters/login" element={<VotersLogin />} /> 

                                <Route path="/candidate/signup" element={<CandidateSignup />} /> 

                                <Route path="/candidate/login" element={<CandidateLogin />} /> 

                        </Routes>
                </Router>
        )
}

export default App
