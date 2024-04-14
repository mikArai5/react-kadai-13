import { useState } from 'react';
import './Input.css';

interface InputProps {
    onSubmit: (email: string, password: string) => void;
}

export const Input:React.FC<InputProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('mail@address')
    const [password, setPassword] = useState('123qwe')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(email, password);
    };


    return (
        <>
        <form onSubmit={handleSubmit} className='form'>
            <div className='email_form'>
                <p>email:<span>{email}</span></p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='password_form'>
                <p>password:<span>{password}</span></p>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <button type='submit'>送信</button>
            </div>
        </form>
        </>
    );
};