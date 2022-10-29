import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useData } from "./DataContext";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js'


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

export const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    history.push("./step3");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Контактные данные
      </Typography>
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
            <Checkbox {...register('hasPhone')} id="hasPhone" defaultValue={data.hasPhone} defaultChecked={data.hasPhone} color="primary" name="hasPhone" />
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
        <PrimaryButton onClick={() => { window.ym(90966830,'reachGoal','secondPoint')}}>Продолжить</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
