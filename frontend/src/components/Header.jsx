import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
	return <div>
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Goal Setter</Link>
            </div>
            <ul>
                <li>
                    <Link to='login'>
                        <FaSignInAlt />
                    </Link>
                </li>
                <li>
                    <Link to='register'>
                        <FaUser />
                    </Link>
                </li>
            </ul>
        </header>
    </div>;
};

export default Header;
