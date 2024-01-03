import { Container, Paper, Typography, Divider, Button } from "@mui/material";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

interface Props { 
	message?: string 
}

export default function NotFound({message = 'Not Found'}: Props) {
    const { state } = useLocation();

    useEffect(() => {
        state?.error ? toast.error(state.error.message) : toast.error(message);
    }, []);

    return (
        <Container component={Paper} sx={{ height: 400 }}>
            <Typography gutterBottom variant={'h3'}>{state?.error ? state.error.message : message}</Typography>
            <Divider />
            <Button component={Link} to='/catalog' fullWidth>Go back to shop</Button>
        </Container>
    )
}