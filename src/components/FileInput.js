import React from "react";
import Dropzone from "react-dropzone";
import {Controller} from "react-hook-form";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import CloudUpload from "@mui/icons-material/CloudUpload";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eee",
        textAlign: "center",
        cursor: "pointer",
        color: "#333",
        padding: "10px",
        marginTop: "20px",
    },
    icon: {
        marginTop: "16px",
        color: "#888888",
        fontSize: "42px",
    },
}));

export const FileInput = ({control, name}) => {
    const styles = useStyles();

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({field: {value, onBlur, onChange}}) => (
                <>
                    <Dropzone onDrop={onChange}>
                        {({getRootProps, getInputProps}) => (
                            <Paper
                                variant="outlined"
                                className={styles.root}
                                {...getRootProps()}
                            >
                                <CloudUpload className={styles.icon}/>
                                <input {...getInputProps()} name={name} onBlur={onBlur}/>
                                <p>Перенесите файлы в это поле или нажмите на него</p>
                            </Paper>
                        )}
                    </Dropzone>

                    <List>
                        {value?.map((f, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <InsertDriveFile/>
                                </ListItemIcon>
                                <ListItemText primary={f.name} secondary={f.size}/>
                                <DeleteForeverIcon cursor='pointer' onClick={() => {
                                    onChange([])
                                }}/>
                            </ListItem>
                        ))}
                    </List>
                </>
            )}
        />
    );
};
