import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confPassword: ''
    })

    const { name, email, password, confPassword } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

	return <>
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
    </>;
};

export default Register;
