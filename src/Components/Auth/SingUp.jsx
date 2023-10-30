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
  email: Yup.string().email("Не коректний Email").required("Обовʼязково"),
  password: Yup.string()
    .min(8, "Пароль мусить містити більше 8 символів")
    .required("Обовʼязково"),
});

const SingUp = () => {
  const initialValues = {
    username: "",
    name: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/login");
  const handleSubmit = (values) => {
    console.log("values: ", values);
  };

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
                <p className="text-center">
                  Зареєструйтеся, щоб переглядати світлини та відео від друзів.
                </p>

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

                <Field name="username">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="username"
                        placeholder="Імʼя користувача"
                      />
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="name"
                        placeholder="Повне імʼя"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
                  isLoading={formAppearance.isSubmitting}
                >
                  Зареєструватися
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className="border w-full border-slate-300 mt-5">
        <p className="text-center py-2 text-sm">
          У вас є обліковий запис?
          <span
            onClick={handleNavigate}
            className="ml-2 text-blue-500 cursor-pointer"
          >
            Увійдіть
          </span>
        </p>
      </div>
    </div>
  );
};

export default SingUp;
