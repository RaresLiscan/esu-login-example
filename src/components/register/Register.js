import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.css';
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [invalid, setInvalid] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate();
    const authentication = getAuth();


    const handleRegister = async () => {
        if (password.length < 6) {
            alert("Parola nu e destul de lunga pentru firebase")
        }
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

    const validate = () => {
        if (password.length < 6) {
            setInvalid(true)
            setError("Parola e prea scurta")
        } else {
            if (password.localeCompare(confirm) != 0) {
                setInvalid(true)
                setError("Parolele nu coincid")
            } else {
                setInvalid(false)
                setError("")
            }
        }
        
    }

    useEffect(() => {
        validate();
    },[password, confirm])

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Register</h1>
            <div className="form-field">
                <TextField id="registerEmail" label="Email" type={"email"} variant="standard" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-field">
                <TextField error={invalid} helperText={error} id="registerPass" label="Password" type={"password"} variant="standard" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-field">
                <TextField error={invalid} helperText={error} id="registerConfirm" label="Confirm Password" type={"password"} variant="standard" value={confirm} onChange={e => setConfirm(e.target.value)} />
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