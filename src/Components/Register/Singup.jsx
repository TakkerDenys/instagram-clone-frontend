import { Formik, Form, Field } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../../Redux/Auth/Action";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Неправильна адреса електронної пошти").required("Обовʼязково"),
  username: Yup.string()
    .min(4, "Ім'я користувача повинно містити щонайменше 4 символи")
    .required("Обовʼязково"),
  password: Yup.string()
    .min(8, "Пароль повинен містити не менше 8 символів")
    .required("Обовʼязково"),
  name: Yup.string()
    .min(2, "Ім'я повинно містити щонайменше 2 символи")
    .required("Обовʼязково"),
});

const Signup = () => {
  const initialValues = { email: "", username: "", password: "", name:"" };
  const dispatch=useDispatch();
  const {auth}=useSelector(store=>store);
const [isSignup, setIsSignup]=useState(false);
const navigate=useNavigate();
const toast = useToast();
console.log("auth :-",auth.signup?.username)

  const handleSubmit = (values,actions) => {
    dispatch(signupAction(values))
    console.log("signup",values);
    actions.setSubmitting(false);
  };

  useEffect(()=>{
if(auth.signup?.username){
  setIsSignup(true);
  navigate("/login")
  toast({
    title: 'Обліковий запис успішно створено',
    status: 'success',
    duration: 8000,
    isClosable: true,
  })
}
  },[auth.signup])

  return (
    <div>
        <div className="border border-slate-300 ">
      <Box p={8} display="flex" flexDirection="column" alignItems="center">
        <img
          className="border border-red-800"
          src="https://i.imgur.com/zqpwkLQ.png"
          alt=""
        />
        <p className="font-bold opacity-50 text-lg mb-10 text-center">
        Зареєструйтеся, щоб бачити фото та відео від ваших друзів.
        </p>
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
              <Field name="username">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.username && form.touched.username}
                    mb={4}
                  >
                    <Input {...field} id="username" placeholder="username" />
                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    mb={4}
                  >
                    <Input {...field} id="name" placeholder="Повне імʼя" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
                Зареєструватися
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
    <div className="w-full border border-slate-300 mt-5">
<p className="text-center py-2">Якщо у вас вже є обліковий запис <span onClick={()=>navigate("/login")} className="ml-2 text-blue-700 cursor-pointer">Увійдіть</span></p>
      </div>
    </div>
  
  );
};

export default Signup;
