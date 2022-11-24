import React, {createContext, useState, useContext, useRef} from 'react'
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

const NotificationContext = createContext(() => {
})

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionLeft(props) {
    return <Slide {...props} direction='right'/>;
}

export const NotificationProvider = ({children}) => {
    const notificationText = useRef('');
    const notificationType = useRef('success');
    const [showNotification, setShowNotifications] = useState(false);

    const handleShowNotifications = ({text, type = 'success'}) => {
        notificationText.current = text;
        notificationType.current = type;
        setShowNotifications(true)
    }

    const handleHideNotification = () => {
        setShowNotifications(false)
        notificationText.current = '';
        notificationType.current = 'success';
    }

    return <NotificationContext.Provider value={handleShowNotifications}>
        {children}
        <Snackbar
            open={showNotification}
            autoHideDuration={3000}
            transitionDuration={300}
            TransitionComponent={TransitionLeft}
            onClose={handleHideNotification}>
            <Alert severity={notificationType.current} sx={{width: '100%'}}>
                {notificationText.current}
            </Alert>
        </Snackbar>
    </NotificationContext.Provider>
}

export const useShowNotification = () => useContext(NotificationContext)
