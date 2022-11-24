import React, {useState} from "react";

import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

import {StudentForm} from "$common/StudentForm";
import {DataProvider} from '$common/StudentForm/context/DataContext';
import {Result} from "$common/StudentForm/components/Result";
import Button from "@mui/material/Button";

export const Resume = () => {
    const [isEditing, setEditing] = useState(false);

    const onSubmit = () => {
        setEditing(false)
    }

    const onEditChange = () => {
        setEditing(true)
        window.ym(90966830, 'reachGoal', 'backToEdit')
    }


    return (
        <DataProvider>
            <Box display='flex' justifyContent='space-around' flexWrap='wrap'>
                {isEditing && <StudentForm onSuccess={onSubmit}/>}

                {!isEditing && <Box display='flex' flexDirection='column'>
                    <Typography variant="h6" alignSelf='center'>Резюме</Typography>
                    <Result readonly/>
                    <Button onClick={onEditChange}>Редактировать анкету</Button>
                </Box>}
            </Box>
        </DataProvider>

    )
}