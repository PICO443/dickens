import {Image} from "@mui/material"
import { Container } from "@mui/system"
import { Label } from "recharts"

export function StudentProfile(){
    return (
        <Container>
            <Image src="dickens\src\components\StudentProfile\prog.jpg" />
            <Label>Name</Label>
            <Label>Phone Number</Label>
        </Container>
    )
}