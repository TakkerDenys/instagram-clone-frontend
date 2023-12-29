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
import axios from "axios";

const validationSchema = Yup.object().shape({
  userPhoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Неправильний номер телефону")
    .required("Обовʼязково"),
  userPassword: Yup.string()
    .min(8, "Пароль мусить містити більше 8 символів")
    .required("Обовʼязково"),
});

export const UserSignIn = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const initialValues = {
    userPhoneNumber: "",
    userPassword: "",
  };
  const navigation = useNavigate();

  const handleSubmit = async (formValues, formikProps) => {
    try {
      const response = await axios.post(
        "http://94.153.144.18:8080/api/users/register",
        {
          phone: formValues.userPhoneNumber,
          password: formValues.userPassword,
        }
      );

      console.log("Успішна відповідь:", response.data);

      if (response.data.success) {
        setSuccessMessage("Успішна реєстрація");
      } else {
        setErrorMessage("Користувач вже існує");
      }
    } catch (error) {
      console.error("Помилка запиту:", error.message);

      setErrorMessage("Помилка запиту");
    } finally {
      formikProps.setSubmitting(false);
    }
  };

  const navigateToSignUp = () => navigation("/singup");

  return (
    <div>
      <div className="user-border">
        <Box
          p={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img className="mb-5" src="./img/Instagran_logo.png" alt="Instagran Logo" />

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formikProps) => (
              <Form className="space-y-2">
                <Field name="userPhoneNumber">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.userPhoneNumber &&
                        form.touched.userPhoneNumber
                      }
                    >
                      <Input
                        className="w-full text"
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
                <Button
                  className="w-full"
                  my={4}
                  colorScheme="blue"
                  type="submit"
                  isLoading={formikProps.isSubmitting}
                >
                  Увійти
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
          Не маєте облікового запису?
          <span
            onClick={navigateToSignUp}
            className="ml-2 text-blue-500 cursor-pointer"
          >
            Зарєєструйтеся
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserSignIn;
