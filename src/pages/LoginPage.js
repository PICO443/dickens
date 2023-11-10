import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../AuthContext';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await auth.login(username, password);
            console.log({auth})
        } catch(error) {
            console.log(error)
            // Handle error
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={4}>
                <Typography variant="h4" align="center">Login</Typography>
                <form onSubmit={handleSubmit}>
                    <Box mt={2}>
                        <TextField 
                            fullWidth
                            label="Username" 
                            variant="outlined"
                            value={username} 
                            onChange={e => setUsername(e.target.value)} 
                            required 
                        />
                    </Box>
                    <Box mt={2}>
                        <TextField 
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                            required 
                        />
                    </Box>
                    <Box mt={2} display="flex" justifyContent="center">
                        <Button variant="contained" color="primary" type="submit">
                            Login
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
}

export default LoginPage;
