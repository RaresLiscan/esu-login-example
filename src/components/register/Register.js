import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate = useNavigate();
    const authentication = getAuth();


    const handleRegister = async () => {
        if (password.localeCompare(confirm) === 0) {
            await createUserWithEmailAndPassword(authentication, email, password)  
                .then(res => {
                    console.log(res);
                    navigate('/');
                })
        }
        else {
            alert("Nu e bine");
        }
    }

    return (
        <div className="container">
            <h1 style={{textAlign: 'center'}}>Register</h1>
            <div className="form-field">
                <TextField id="registerEmail" label="Email" type={"email"} variant="standard" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-field">
                <TextField id="registerPass" label="Password" type={"password"} variant="standard" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-field">
                <TextField id="registerConfirm" label="Confirm Password" type={"password"} variant="standard" value={confirm} onChange={e => setConfirm(e.target.value)} />
            </div>
            <div>
                <Button className="login-button" variant="contained" onClick={handleRegister}>Register</Button>
            </div>
            <div>
                <Link to={"/login"}>Login</Link>
            </div>
        </div>
    )
}

export default Register;