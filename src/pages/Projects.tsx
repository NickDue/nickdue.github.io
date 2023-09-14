import  {FC} from "react";
import {Container} from "@mui/material";
import ProjectCard from "../components/ProjectCard.tsx";
import eximage from "../assets/images/eximage.png";


const Projects:FC = () => {
    return (
        <Container maxWidth={"md"}>
            <h1>Projects</h1>
            <ProjectCard github={""} name={""} description={""} image={eximage} tags={[]} id={0} />
        </Container>
    )
}

export default Projects;