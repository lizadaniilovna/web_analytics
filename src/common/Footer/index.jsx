import React from "react";

import Paper from "@material-ui/core/Paper";
import {Box} from "@mui/material";


export const Footer = () => (
    <Paper
        component="footer"
        square
    >
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <a href="https://metrika.yandex.ru/stat/?id=90966830&amp;from=informer"
               target="_blank" rel="nofollow noreferrer">
                <img
                    src="https://metrika-informer.com/informer/90966830/3_1_20FF20FF_00FF00FF_0_visits"
                    style={{width: "88px", height: "31px", border: 0,}}
                    alt="Яндекс.Метрика"
                    title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
                    className="ym-advanced-informer"
                    data-cid="90966830"
                    data-lang="ru"/>
            </a>

            <a href="https://top-fwz1.mail.ru/jump?from=3271888">
                <img
                    src="https://top-fwz1.mail.ru/counter?id=3271888;t=444;l=1"
                    style={{width: "88px", height: "31px", border: 0,}}
                    alt="Top.Mail.Ru"
                />
            </a>
        </Box>
    </Paper>
);
