import { Link } from 'react-router-dom'
import '../css/Navbar.css'


const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                
                    <li><Link to='/contact'>contact</Link></li>
                  
                  
                    <li><Link to='/gallery'>Gallery</Link></li>

                  
                    <li className="hooks-menu">
                        <span>Hooks</span>
                        <ul className="hooks-dropdown">
                            <li><Link to='/use-effect-api'>UseEffect</Link></li>
                            <li><Link to='/use-ref'>UseRef</Link></li>
                            <li><Link to='/use-memo'>UseMemo</Link></li>
                            <li><Link to='/lazy'>Lazy</Link></li>

                            <li><Link to='/text'>Text</Link></li>
                            <li><Link to='/StudentResults'>Exam</Link></li>


                        
                        </ul>
                    </li>

                   
                    <li><Link to='/signup'>Signup</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;