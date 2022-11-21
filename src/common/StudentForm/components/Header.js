import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    fontSize: "40px"
  },
}));

export const Header = () => {
  const styles = useStyles();

  return (
    <Typography className={styles.root} color='primary' variant="h5">
      Анкета студента
    </Typography>
  );
};