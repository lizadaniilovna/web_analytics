import React from "react";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

import {Step1} from "./components/Step1";
import {Step2} from "./components/Step2";
import {Step3} from "./components/Step3";
import {Result} from "./components/Result";
import {useData} from "$common/StudentForm/context/DataContext";


const steps = ['Персональные данные', 'Контактные данные', 'Резюме', 'Проверка анкеты'];


export const StudentForm = ({onSuccess}) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const {resetData} = useData();


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmitForm = () => {
        onSuccess?.()
    }

    const handleGoBack = () => {
        resetData()
        onSuccess?.()
    }


    const getStepComponent = () => {
        switch (activeStep) {
            case 0:
                return <Step1 handleNext={handleNext} handleBack={handleBack}/>
            case 1:
                return <Step2 handleNext={handleNext} handleBack={handleBack}/>
            case 2:
                return <Step3 handleNext={handleNext} handleBack={handleBack}/>
            case 3:
            default:
                return <Result handleNext={handleSubmitForm} handleBack={handleBack}/>
        }
    }

    return (
        <Box sx={{maxWidth: 400}} margin='8px'>
            <Stepper activeStep={activeStep} orientation="vertical">
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

            <Box display='flex' justifyContent='center'>
                <Button onClick={handleGoBack} color='error'>Отмена</Button>
            </Box>

        </Box>
    )
}