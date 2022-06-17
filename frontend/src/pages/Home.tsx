
import Footer from "../components/Footer"
import Header from "../components/Header"

import '../styles/home.css'
import '../styles/button.css'

interface Stepsdata {
        title: String
}


const stepsData: Stepsdata[] = [
        
        {
                title: "Generate your ID"
        },
        {
                title: "Cast your vote"
        },
        {
                title: "LOG OUT"
        }
]





export const Home:React.FC = () => {
        return (
                <div> 
                        <Header title="WELCOME TO VAULT VOTE" />

                        <div className="Home_main">

                                <div className="Home_text_intro">
                                        <p>
                                        The trust deficiency of our traditional voting medium, which is characterised by ballot boxes, human counters and occasional torch light has eroded the political interest of electorates.
                                        </p>
                                </div>
                                <div className="Home_featured-list">

                                        <ol className="featured-list">


                                                {
                                                        stepsData.map((each, index) => (

                                                                // <li style={{"background": "blue"}}>
                                                                <li>
                                                                        <div>
                                                                                <span>{`0${index + 1}`}</span>
                                                                                <span className="div"></span>
                                                                                <span>STEP</span>
                                                                        </div>
                                                                        <div>
                                                                                <h2>{each.title}</h2>
                                                                                {/* <span>Market research will tell you if there’s an opportunity to turn your idea into a successful business. </span> */}
                                                                        </div>
                                                                        <div><span className="div"></span>
                                                                                <span className="material-symbols-rounded">
                                                                                        lightbulb
                                                                                </span>
                                                                        </div>
                                                                </li>
                                                        ))
                                                }
                                                {/* <li style="--material-color:#ff5722"> */}
                                        </ol>

                                </div>
                                
                                <div className="Home_text_buttons">
                                        <hr />
                                        
                                        <div>
                                                <h4>CLICK TO LOGIN OR SIGN UP AS A VOTER</h4>
                                                <button className="btn-31" onClick={() => console.log("clicked") }>
                                                        <span className="text-container">
                                                                <span className="text">VOTER</span>
                                                        </span>
                                                </button>
                                        </div>
                                        <div>
                                                <h4>CLICK TO LOGIN OR SIGN UP AS A CANDIDATE</h4>
                                                <button className="btn-31" onClick={() => console.log("clicked") }>
                                                        <span className="text-container">
                                                                <span className="text">CANDIDATE</span>
                                                        </span>
                                                </button>

                                        </div>
                                </div>
                        </div> 

                        <Footer />
                </div>
        )
}