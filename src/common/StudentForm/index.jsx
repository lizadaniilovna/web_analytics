import React from "react";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Result } from "./components/Result";
import { Header } from "./components/Header";

import { DataProvider } from './context/DataContext';
import { useEffect } from "react";

const steps = ['Персональные данные', 'Контактные данные', 'Документы', 'Проверка анкеты'];

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionLeft(props) {
    return <Slide {...props} direction='right' />;
}

export const StudentForm = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [showNotification, setShowNotigication] = React.useState(false);

    const isSubmitedSuccess = activeStep === steps.length;

    const handleHideNotification = () => {
        setShowNotigication(false)
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        window.ym(90966830, 'reachGoal', 'backToEdit')
        setActiveStep(0);
    };

    useEffect(() => {
        setShowNotigication(isSubmitedSuccess)
    }, [isSubmitedSuccess])


    const getStepComponent = () => {
        switch (activeStep) {
            case 0:
                return <Step1 handleNext={handleNext} handleBack={handleBack} />
            case 1:
                return <Step2 handleNext={handleNext} handleBack={handleBack} />
            case 2:
                return <Step3 handleNext={handleNext} handleBack={handleBack} />
            case 3:
            default:
                return <Result handleNext={handleNext} handleBack={handleBack} />
        }
    }

    return (
        <Box sx={{ maxWidth: 400 }} margin='8px'>
            <Header />

            <DataProvider>
                <Stepper activeStep={activeStep} orientation="vertical" >
                    {steps.map((label, index) => {
                        const labelProps = {};
                        if (index === 2) {
                            labelProps.optional = (
                                <Typography variant="caption">не обязательно</Typography>
                            );
                        }

                        return (
                            <Step key={label}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                                <StepContent>
                                    {getStepComponent()}
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>

                <Snackbar
                    open={showNotification}
                    autoHideDuration={3000}
                    transitionDuration={300}
                    TransitionComponent={TransitionLeft}
                    onClose={handleHideNotification}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Данные успешно отправлены
                    </Alert>
                </Snackbar>

                {isSubmitedSuccess && (
                    <Box
                        sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Button onClick={handleReset}>Отправить еще одну анкету</Button>
                    </Box>
                )}
            </DataProvider>
        </Box>
    )
}