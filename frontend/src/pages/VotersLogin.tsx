
import { useState } from "react"
import Header from "../components/Header"
import '../styles/button.css'
import '../styles/voters.css'


export const VotersLogin: React.FC = () => {

        const [matricNo, setMatricNo ] = useState<String>('')
        const [password, setPassword ] = useState<String>('')

        return (
                <div className="VotersLogin">

                        <Header title="VOTERS SIGN UP PAGE" />

                        <div>
                               
                                <div className="form">

                                        <input type="text" name="follow" value={`${matricNo}`} placeholder="MATRIC NUMBER" onChange={(e) => setMatricNo(e.target.value)}  />
                                        <input type="text" name="username" value={`${password}`} placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)}  />

                                </div>

                                <button className="btn-31" onClick={() => console.log("clicked") }>
                                        <span className="text-container">
                                                <span className="text">LOGIN</span>
                                        </span>
                                </button>
                        </div>

                        <p className="bottom_info"> not registered, please sign up</p>
                       
                </div>
        )
}