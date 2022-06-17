import React from 'react';
import '../styles/Footer.css'
import '../styles/social.css'


const Footer:React.FC = () => {
        return (
                <footer className='Footer'>
                        <div className='heading-secondary'>Connect with us </div>
                        
                        <div className="hero">
                                <div className="social-links">
                                        <a href="mailto:olabisiajoseh@gmail.com" target="_blank" rel="noreferrer"><i className="fab fa-google"></i></a>
                                        <a href="https://www.instagram.com/holabisii/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                        <a href="#twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="https://github.com/Olabisim" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                                </div>
                        </div>
                </footer>
        )
}

export default Footer;