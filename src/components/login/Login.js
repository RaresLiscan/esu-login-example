import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Container, fabClasses, Grid, Box, Avatar } from "@mui/material";
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authentication = getAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        await signInWithEmailAndPassword(authentication, email, password)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                alert("Nu te-am putut loga");
            })
    }

    return (
        /*
        <div className="container">
            <h1 style={{textAlign: 'center'}}>Login</h1>
            <div className="form-field">
                <TextField id="standard-basic" label="Email" type={"email"} variant="standard" value={email} onChange={(e) =>setEmail(e.target.value)} />            
            </div>
            <div className="form-field">
                <TextField id="standard-basic" label="Password" type={"password"} variant="standard" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <Button className="login-button" variant="contained" onClick={handleLogin}>Login</Button>
            </div>
            <div>
                <Link to={"/register"}>Register</Link>
            </div>
        </div>
        */

        <Container maxWidth='sm'>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar alt="OSUT" src="/cometa.png" sx={{ width: 48, height: 48 }} />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField fullWidth id="standard-basic" label="Email" type={"email"} variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="standard-basic" label="Password" type={"password"} variant="standard" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth className="login-button" variant="contained" onClick={handleLogin}>Login</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link fullWidth to={"/register"}>Register</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Login;