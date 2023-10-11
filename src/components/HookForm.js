import React, { useState } from 'react';

const HookForm = (props) => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const handleSumbit = (e) => {
        e.preventDefault();

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

    }

    return (
        <div>
            <form onSubmit={ handleSumbit }>
                <div>
                    <label htmlFor="firstName">First Name:  </label>
                    <input name='firstName' type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                    {
                        firstName.length > 0 && firstName.length < 3? (
                            <p>First Name must be at least 2 characters</p>
                        ):
                        null
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:  </label>
                    <input name='lastName' type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) }/>
                    {
                        lastName.length > 0 && lastName.length < 3? (
                            <p>Last Name must be at least 2 characters</p>
                        ):
                        null
                    }
                </div>
                <div>
                    <label htmlFor="email">Email:  </label>
                    <input name='email' type="text" value={email} onChange={ (e) => setEmail(e.target.value) }/>
                    {
                        email.length > 0 && email.length < 5? (
                            <p>Email must be at least 5 characters</p>
                        ):
                        null
                    }
                </div>
                <div>
                    <label htmlFor="password">Password:  </label>
                    <input name='password' type="text" value={password} onChange={ (e) => setPassword(e.target.value) }/>
                    {
                        password.length > 0 && password.length < 8? (
                            <p>Password must be at least 8 characters</p>
                        ):
                        null
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:  </label>
                    <input name='confirmPassword' type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) }/>
                    {
                        confirmPassword !== password && confirmPassword.length > 0? (
                            <p>Passwords must match</p>
                        ):null
                    }
                </div>
                <div>
                    <input type="submit" name="" id="" />
                </div>
            </form>
        </div>
    )
}

export default HookForm;