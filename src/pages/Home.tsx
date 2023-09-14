import {Box, Container, Typography} from "@mui/material";
import {FC} from "react";


const Home:FC = () => {
    return (
        <Container maxWidth={"md"}>
            <Box sx={{height: "42"}}/>
            <Typography variant={"h1"}>
                Hello!
            </Typography>
        </Container>
    );
}

export default Home;