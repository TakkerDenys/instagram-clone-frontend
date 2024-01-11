import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signinAction } from "../../Redux/Auth/Action";
import { getUserProfileAction } from "../../Redux/User/Action";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Неправильна адреса електронної пошти").required("Обовʼязково"),
  password: Yup.string()
    .min(8, "Пароль повинен містити не менше 8 символів")
    .required("Обовʼязково"),
});

const Signin = () => {
  const initialValues = { email: "", password: "" };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user,signin } = useSelector((store) => store);
  const toast = useToast();

  const token = localStorage.getItem("token");
  console.log("token in signin page ",token)
  console.log("reqUser -: ", user);
  useEffect(() => {
    if (token) dispatch(getUserProfileAction(token || signin));
  }, [signin,token]);

  useEffect(() => {
    if (user?.reqUser?.username && token) {
      navigate(`/${user.reqUser?.username}`);
      toast({
        title: "signin successfull",
        status: "success",
        duration: 8000,
        isClosable: true,
      });
    }
  }, [user.reqUser]);

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(signinAction(values));
    actions.setSubmitting(false);
  };

  return (
    <div className=" ">
      <div className="border border-slate-300">
        <Box p={8} display="flex" flexDirection="column" alignItems="center">
        <img
          className="border border-red-800 mb-5"
          src="https://i.imgur.com/zqpwkLQ.png"
          alt=""
        />
        
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <Form className="w-full">
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                    mb={4}
                  >
                    <Input
                      className="w-full"
                      {...field}
                      id="email"
                      placeholder="Номер мобільного телефону або електронна пошта"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                    mb={4}
                  >
                    <Input
                      {...field}
                      type="password"
                      id="password"
                      placeholder="Пароль"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <p className="text-center">
              Люди, які користуються нашим сервісом, могли завантажити вашу контактну
                інформацію в Instagram. Дізнатися більше
              </p>
              <p className="mt-5 text-center">
              Реєструючись, ви погоджуєтеся з нашими Умовами, Політикою конфіденційності та
                Політика щодо файлів cookie.
              </p>
              <Button
                className="w-full"
                mt={4}
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
      
      <div className="w-full border border-slate-300 mt-5">
<p className="text-center py-2">Якщо у вас ще немає облікового запису <span onClick={()=>navigate("/signup")} className="ml-2 text-blue-700 cursor-pointer">Зареєструватися</span></p>
      </div>
    </div>
  );
};

export default Signin;
