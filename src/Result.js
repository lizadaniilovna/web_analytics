import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useData } from "./DataContext";
import { MainContainer } from "./components/MainContainer";
import { PrimaryButton } from "./components/PrimaryButton";
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

export const Result = () => {
  const [success, setSuccess] = useState(false);
  const styles = useStyles();
  const { data, resetData } = useData();

  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
  const { files } = data;

  const onSubmit = async () => {

    window.ym(90966830, 'reachGoal', 'sendForm')

    const formData = new FormData();
    if (data.files) {
      data.files.forEach((file) => {
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
      Swal.fire("Данные успешно отправлены");
      setSuccess(true);
      resetData()

    } else {
      Swal.fire("Ошибка отправки");
    }
  };

  if (success) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <MainContainer>
        <Typography component="h2" variant="h5">
          📋 Анкета
        </Typography>
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
        {files?.length > 0 && (
          <>
            <Typography component="h2" variant="h5">
              📦 Файлы
            </Typography>
            <List>
              {files.map((f, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}
        <PrimaryButton onClick={onSubmit}>Отправить</PrimaryButton>
        <Link to="/" onClick={() => { window.ym(90966830, 'reachGoal', 'backToEdit') }}>Редактировать</Link>
      </MainContainer>
    </>
  );
};
