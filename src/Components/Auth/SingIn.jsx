import React from "react";
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

const validation = Yup.object().shape({
  email: Yup.string()
    .required("Обов'язково")
    .test(
      "email-or-phone",
      "Введіть коректний номер телефону або Email",
      (value) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const phoneRegex = /^[0-9]{10}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }
    ),
  password: Yup.string()
    .min(8, "Пароль має бути довше 8 символів")
    .required("Обов'язково"),
});

export const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log("values: ", values);
  };
  const handleNavigate = () => navigate("/singup");

  return (
    <div>
      <div className="border">
        <Box
          p={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img className="mb-5" src="https://i.imgur.com/zqpwkLQ.png" alt="" />

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validation}
          >
            {(formAppearance) => (
              <Form className="space-y-2">
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="email"
                        placeholder="Номер телефону або Email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="password"
                        placeholder="Пароль"
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  className="w-full"
                  my={4}
                  colorScheme="blue"
                  type="submit"
                  isLoading={formAppearance.isSubmitting}
                >
                  Увійти
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className="border w-full border-slate-300 mt-5">
        <p className="text-center py-2 text-sm">
          Не маєте облікового запису?
          <span
            onClick={handleNavigate}
            className="ml-2 text-blue-500 cursor-pointer"
          >
            Зареєструйтеся
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
