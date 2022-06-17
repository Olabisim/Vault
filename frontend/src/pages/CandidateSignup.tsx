
import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import '../styles/button.css'
import '../styles/voters.css'


export const CandidateSignup: React.FC = () => {

        const [name, setName ] = useState<String>('')
        const [matricNo, setMatricNo ] = useState<String>('')
        const [email, setEmail ] = useState<String>('')
        const [post, setPost ] = useState<String>('')
        const [password, setPassword ] = useState<String>('')

        console.log(name)

        return (
                <div>

                        <Header title="CANDIDATE SIGN UP PAGE" />

                        <div>
                               
                                <div className="form">

                                        <input type="text" value={`${name}`} placeholder="NAME" onChange={(e) => setName(e.target.value)} />
                                        <input type="text" name="follow" value={`${matricNo}`} placeholder="MATRIC NUMBER" onChange={(e) => setMatricNo(e.target.value)}  />
                                        <input type="text" name="follow_id" value={`${email}`} placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)}  />
                                        <input type="text" name="follow_id" value={`${post}`} placeholder="POST" onChange={(e) => setPost(e.target.value)}  />
                                        <input type="text" name="username" value={`${password}`} placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)}  />

                                </div>

                                <button className="btn-31" onClick={() => console.log("clicked") }>
                                        <span className="text-container">
                                                <span className="text">SIGN UP</span>
                                        </span>
                                </button>
                        </div>

                        <Link to="/candidate/login">
                        <p className="bottom_info">
                                        click here to login if registered.
                         </p>
                         </Link>
                </div>
        )
}
