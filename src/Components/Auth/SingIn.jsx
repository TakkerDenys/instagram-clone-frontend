import React from "react";
import { Box, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validation = Yup.object().shape({
  email: Yup.string().email("Не коректний Email").required("Обовʼязково"),
  password: Yup.string()
    .min(8, "Пароль мусить містити більше 8 символів")
    .required("Обовʼязково"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const handleSubmit = (values) => {
    console.log("values: ", values);
  };

  return (
    <div>
      <div>
        <Box p={8} display="flex" flexDirection="column" alignItems="center">
          <img src="https://i.imgur.com/zqpwkLQ.png" alt="" />

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validation}
          >
            {(formAppearance) => (
              <Form>
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
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
    </div>
  );
};

export default SignIn;
