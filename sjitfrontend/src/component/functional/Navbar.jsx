import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <header>
            <nav>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/gallery'>gallery</Link></li>
                    <li><Link to='/contact'>contact</Link></li>
                    <li><Link to='/signup'>signup</Link></li>
            </nav>
        </header>
    )
}

export default Navbar;
