import React from "react";
import Swal from "sweetalert2";

import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import {useData} from "$common/StudentForm/context/DataContext";
import {MainContainer} from "$components/MainContainer";
import {useShowNotification} from "$common/NotificationServise";


const fieldLabelDictionaty = {
    firstName: 'Имя',
    lastName: 'Фамилия',
    email: 'Почта',
    hasPhone: 'Наличие телефона',
    phoneNumber: 'Номер телефона',
    files: 'Файлы',
}

const useStyles = makeStyles({
    root: {
        marginBottom: "30px",
    },
    table: {
        marginBottom: "30px",
    },
});

export const Result = ({handleNext, handleBack, readonly = false}) => {
    const showNotification = useShowNotification()
    const styles = useStyles();
    const {studentData} = useData();
    const formData = new FormData();

    const entries = Object.entries(studentData).filter((entry) => entry[0] !== "files");

    const handleSubmit = async () => {
        window.ym(90966830, 'reachGoal', 'sendForm')

        if (studentData.files) {
            studentData.files.forEach((file) => {
                formData.append("files", file, file.name);
            });
        }

        entries.forEach((entry) => {
            formData.append(entry[0], entry[1]);
        });

        const res = await fetch("https://webanalyticsserver.vercel.app/", {
            method: "POST",
            body: formData,
        });

        if (res.status === 200) {
            showNotification({
                text: 'Данные успешно отправлены',
                type: 'success'
            })
            localStorage.setItem('resume', JSON.stringify(studentData))
            handleNext?.()
        } else {
            showNotification({
                text: 'Ошибка отправки данных',
                type: 'error'
            })
            Swal.fire("Ошибка отправки");
        }
    };

    return (
        <MainContainer>
            <TableContainer className={styles.root} component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Название</b></TableCell>
                            <TableCell align="right"><b>Значение</b></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {entries.map((entry) => (
                            <TableRow key={entry[0]}>
                                <TableCell component="th" scope="row">
                                    {fieldLabelDictionaty[entry[0]]}
                                </TableCell>
                                <TableCell align="right">{entry[1] ? entry[1].toString() : '—'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {studentData.files?.length > 0 && (
                <>
                    <Typography component="h2" variant="h5">
                        📦 Файлы
                    </Typography>
                    <List>
                        {studentData.files.map((f, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <InsertDriveFile/>
                                </ListItemIcon>
                                <ListItemText primary={f.name} secondary={f.size}/>
                            </ListItem>
                        ))}
                    </List>
                </>
            )}

            {
                !readonly && <Box sx={{mb: 2}} alignSelf='flex-start'>
                    <Button
                        color="inherit"
                        onClick={handleBack}
                        sx={{mt: 1, mr: 1}}
                    >
                        Назад
                    </Button>

                    <Button
                        onClick={handleSubmit}
                        sx={{mt: 1, mr: 1}}>
                        Отправить
                    </Button>
                </Box>
            }

        </MainContainer>
    );
};
