import { Container, Paper, Typography, Divider, Button } from "@mui/material";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function NotFound() {
    const { state } = useLocation();

    useEffect(() => {
        toast.error(state.error.message);
    }, []);

    return (
        <Container component={Paper} sx={{ height: 400 }}>
            <Typography gutterBottom variant={'h3'}>{state.error.message}</Typography>
            <Divider />
            <Button component={Link} to='/catalog' fullWidth>Go back to shop</Button>
        </Container>
    )
}