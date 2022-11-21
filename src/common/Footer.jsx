import React from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";


export const Footer = () => (
  <Paper sx={{
    width: '100%',
    position: 'relative',
    bottom: 0,
  }} component="footer"
    square
    variant="outlined"
    flex='0 0 auto'
  >
    <Typography variant="caption" color="initial">
      <a href="https://metrika.yandex.ru/stat/?id=90966830&amp;from=informer" target="_blank" rel="noreferrer">
        <img
          src="https://metrika-informer.com/informer/90966830/3_1_20EC20FF_00CC00FF_0_pageviews"
          style={{ width: "88px", height: "31px", border: 0 }} alt="Яндекс.Метрика"
          title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" />
      </a>
    </Typography>
  </Paper>
);
