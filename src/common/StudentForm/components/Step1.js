import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useData } from "$common/StudentForm/context/DataContext";
import { Form } from "$components/Form";
import { Input } from "$components/Input";
import { MainContainer } from "$components/MainContainer";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Имя не должно включать в себя цифры")
    .required("Обязательное поле"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Фамилия не должна включать в себя цифры")
    .required("Обязательное поле"),
});

export const Step1 = ({ handleNext, handleBack }) => {
  const { setValues, studentData } = useData();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { firstName: studentData.firstName, lastName: studentData.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setValues(data);
    handleNext();
    window.ym(90966830, 'reachGoal', 'firstPoint')
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('firstName')}
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />

        <Input
          {...register('lastName')}
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />

        <Box sx={{ mb: 2 }}>
          <Button type="submit" sx={{ mt: 1, mr: 1 }}>
            Дальше
          </Button>
        </Box>
      </Form>
    </MainContainer>
  );
};
