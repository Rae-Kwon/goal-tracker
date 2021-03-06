import { useSelector, useDispatch } from 'react-redux'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state => state.auth))

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

	return (
        <div>
            <header className='header'>
                <div className='logo'>
                    <Link to='/'>Goal Setter</Link>
                </div>
                <ul>
                    {user ? (
                        <li>
                            <button className='btn' onClick={onLogout}>
                                <FaSignOutAlt /> Logout
                            </button>
                        </li>
                    ) : (
                        <>
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
                        </>
                    )
                    }
                </ul>
            </header>
        </div>
    )
};

export default Header;
