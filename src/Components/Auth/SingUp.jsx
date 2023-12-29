import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  userPhoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Неправильний номер телефону")
    .required("Обовʼязково"),
  userUsername: Yup.string().required("Обовʼязково"),
  userName: Yup.string().required("Обовʼязково"),
  userPassword: Yup.string()
    .min(8, "Пароль мусить містити більше 8 символів")
    .required("Обовʼязково"),
});

const UserSignUp = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const initialValues = {
    userUsername: "",
    userName: "",
    userPhoneNumber: "",
    userPassword: "",
  };
  const navigation = useNavigate();

  const navigateToLogin = () => navigation("/login");
  const handleSubmit = (formValues) => {
    console.log("formValues: ", formValues);
  };

  return (
    <div>
      <div className="user-border">
        <Box
          p={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img className="mb-5" src="./img/Instagran_logo.png" alt="" />

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formikProps) => (
              <Form className="space-y-2">
                <p className="text-center">
                  Зареєструйтеся, щоб переглядати світлини та відео від друзів.
                </p>

                <Field name="userPhoneNumber">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.userPhoneNumber &&
                        form.touched.userPhoneNumber
                      }
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="userPhoneNumber"
                        placeholder="Номер телефону"
                      />
                      <FormErrorMessage>
                        {form.errors.userPhoneNumber}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="userUsername">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.userUsername && form.touched.userUsername
                      }
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="userUsername"
                        placeholder="Імʼя користувача"
                      />
                      <FormErrorMessage>
                        {form.errors.userUsername}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="userName">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.userName && form.touched.userName}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="userName"
                        placeholder="Повне імʼя"
                      />
                      <FormErrorMessage>
                        {form.errors.userName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="userPassword">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.userPassword && form.touched.userPassword
                      }
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="userPassword"
                        placeholder="Пароль"
                      />
                      <FormErrorMessage>
                        {form.errors.userPassword}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <p className="text-center text-sm">
                  Люди, які користуються нашим сервісом, могли завантажити вашу
                  контактну інформацію в Instagram clone.
                </p>
                <p className="text-center text-sm">
                  Реєструючись, ви приймаєте наші Умови, Політику
                  конфіденційності і Політику щодо файлів cookie.
                </p>
                <Button
                  className="w-full"
                  my={4}
                  colorScheme="blue"
                  type="submit"
                  isLoading={formikProps.isSubmitting}
                >
                  Зареєструватися
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      {successMessage && (
        <div className="success-message text-center py-2 text-sm text-green-800">
          <p>{successMessage}</p>
        </div>
      )}
      {errorMessage && (
        <div className="error-message text-center py-2 text-sm text-red-600">
          <p>{errorMessage}</p>
        </div>
      )}
      <div className="user-border w-full border-slate-300 mt-5">
        <p className="text-center py-2 text-sm">
          У вас є обліковий запис?
          <span
            onClick={navigateToLogin}
            className="ml-2 text-blue-500 cursor-pointer"
          >
            Увійдіть
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
