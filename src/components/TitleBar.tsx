import {AppBar, Box, Button, Link, Toolbar, Typography} from "@mui/material";
import {FC} from "react";



const TitleBar:FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link href="/" color="white" underline="none">
                        <Button color="inherit">
                            <Typography variant="subtitle1" component="div">
                                Home
                            </Typography>
                        </Button>
                    </Link>
                    <Link href="/projects" color="white" underline="none">
                        <Button color="inherit">
                            <Typography variant="subtitle1" component="div">
                                Projects
                            </Typography>
                        </Button>
                    </Link>
                    <Link href="/resume" color="white" underline="none">
                        <Button color="inherit">
                            <Typography variant="subtitle1" component="div">
                                Resume
                            </Typography>
                        </Button>
                    </Link>
                    <Link href="/contact" color="white" underline="none">
                        <Button color="inherit">
                            <Typography variant="subtitle1" component="div">
                                Contact
                            </Typography>
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default TitleBar;