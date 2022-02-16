import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import { FaUser } from 'react-icons/fa'
import Spinner from '../components/Spinner'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confPassword: ''
    })

    const { name, email, password, confPassword } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== confPassword) {
            toast.error('Password does not match')
        } else {
            const userData = {
                name,
                email,
                password
            }
        dispatch(register(userData))
        }
    }

    if (isLoading) return <Spinner />

	return (
    <>
        <section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p>Create an account</p>
        </section>

        <section>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className='form-control' id='name' name='name' value={name} placeholder='Enter your Name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Enter your Email' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Enter a Password' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control' id='confPassword' name='confPassword' value={confPassword} placeholder='Re-enter your Password' onChange={onChange} />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>Sign Up</button>
                </div>
            </form>
        </section>
    </>
    )
};

export default Register;
