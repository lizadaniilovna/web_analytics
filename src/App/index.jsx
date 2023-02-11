import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Footer } from '$common/Footer'
import { Navigation } from "$common/Navigation";
import { LayoutRouter } from "$common/LayoutRouter";
import { NotificationProvider } from "$common/NotificationServise";
import { GoogleAnalyticsRouting } from "$common/GoogleAnalyticsRouting";

import './styles.css';

//https://colorscheme.ru/#3y61Tp5Xtw0w0 - цветовая схема

const App = () => {
    return (
        <div className="App">
            <NotificationProvider>
                <BrowserRouter>
                    <Navigation />
                    <LayoutRouter />
                    <GoogleAnalyticsRouting />
                </BrowserRouter>
                <Footer />
            </NotificationProvider>
        </div>
    );
}

export default App;