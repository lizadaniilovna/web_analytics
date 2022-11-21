import React from "react";

import { useForm } from "react-hook-form";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useData } from "$common/StudentForm/context/DataContext";
import { MainContainer } from "$components/MainContainer";
import { FileInput } from "$components/FileInput";
import { Form } from "$components/Form";

export const Step3 = ({ handleNext, handleBack }) => {
  const { setValues, studentData } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: studentData.files,
    },
  });

  const onSubmit = (data) => {
    setValues(data);
    window.ym(90966830, 'reachGoal', 'thirdPoint')
    handleNext()
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />

        <Box sx={{ mb: 2 }}>
          <Button
            color="inherit"
            onClick={handleBack}
            sx={{ mt: 1, mr: 1 }}
          >
            Назад
          </Button>

          <Button
            type="submit"
            sx={{ mt: 1, mr: 1 }}>
            Дальше
          </Button>
        </Box>
      </Form>
    </MainContainer>
  );
};
