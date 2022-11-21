import React from "react";
import { useForm } from "react-hook-form";
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import * as yup from "yup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { yupResolver } from "@hookform/resolvers/yup";

import { useData } from "$common/StudentForm/context/DataContext";
import { MainContainer } from "$components/MainContainer";
import { Form } from "$components/Form";
import { Input } from "$components/Input";


const schema = yup.object().shape({
  email: yup
    .string()
    .email("Некорректный формат")
    .required("Обязательное поле"),
  phoneNumber: yup
    .string()
    .when("hasPhone", {
      is: true,
      then: yup.string().required("Обязательное поле")
    })
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value)
  if (!phoneNumber) {
    return value
  }

  return (
    phoneNumber.formatInternational()
  );
};

export const Step2 = ({ handleNext, handleBack }) => {
  const { setValues, studentData } = useData();
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      email: studentData.email,
      hasPhone: studentData.hasPhone,
      phoneNumber: studentData.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    handleNext();
    window.ym(90966830, 'reachGoal', 'secondPoint')
    setValues(data);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          id="email"
          type="email"
          label="Почта"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />

        <FormControlLabel
          control={
            <Checkbox {...register('hasPhone')} id="hasPhone" name='hasPhone' checked={hasPhone} color="primary" />
          }
          label="Ввести номер телефона"
        />

        {hasPhone && (
          <Input
            {...register('phoneNumber')}
            id="phoneNumber"
            type="tel"
            label="Телефон"
            name="phoneNumber"
            error={!!errors.phoneNumber}
            helperText={errors?.phoneNumber?.message}
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}

        <Box sx={{ mb: 2 }}>
          <Button
            color="inherit"
            onClick={handleBack}
            sx={{ mt: 1, mr: 1 }}
          >
            Назад
          </Button>

          <Button type="submit" sx={{ mt: 1, mr: 1 }}>
            Дальше
          </Button>
        </Box>
      </Form>
    </MainContainer>
  );
};
