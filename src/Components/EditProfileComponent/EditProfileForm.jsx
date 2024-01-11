import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserDetailsAction,
  getUserProfileAction,
} from "../../Redux/User/Action";
import { useToast } from "@chakra-ui/react";
import ChangeProfilePhotoModal from "./ChangeProfilePhotoModal";
import { uploadToCloudinary } from "../../Config/UploadToCloudinary";

const EditProfileForm = () => {
  const { user } = useSelector((store) => store);
  const toast = useToast();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageFile,setImageFile]=useState(null);

  const [initialValues, setInitialValues] = useState({
    name: "",
    username: "",
    email: "",
    bio: "",
    mobile: "",
    gender: "",
    website: "",
    private: false,
    
  });
  useEffect(() => {
    dispatch(getUserProfileAction(token));
  }, [token]);

  useEffect(() => {
    console.log("reqUser", user.reqUser);
    const newValue = {};

    for (let item in initialValues) {
      if (user.reqUser && user.reqUser[item]) {
        newValue[item] = user.reqUser[item];
      }
    }

    console.log("new value -: ", newValue);

    formik.setValues(newValue);
  }, [user.reqUser]);

  const formik = useFormik({
    initialValues: { ...initialValues },
    onSubmit: (values) => {
      const data = {
        jwt: token,
        data: { ...values, id: user.reqUser?.id },
      };
      dispatch(editUserDetailsAction(data));
      toast({
        title: "Зміни збережено...",

        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  async function handleProfileImageChange(event) {
    const selectedFile = event.target.files[0];
    const image = await uploadToCloudinary(selectedFile);
    setImageFile(image)
    const data = {
      jwt: token,
      data: { image, id: user.reqUser?.id },
    };
    dispatch(editUserDetailsAction(data))

    onClose();
  }

  return (
    <div className="border rounded-md p-10">
      <div className="flex pb-7">
        <div className="w-[15%]">
          <img
            className="w-8 h-8 rounded-full"
            src={
              imageFile ||
              user.reqUser?.image ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt=""
          />
        </div>

        <div>
          <p>{user.reqUser?.username}</p>
          <p
            onClick={onOpen}
            className="font-bold text-blue-800 cursor-pointer"
          >
            Змінити основну світлину
          </p>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing="6">
          <FormControl className="flex " id="name">
            <FormLabel className="w-[15%]">Імʼя</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Імʼя"
                className="w-full"
                type="text"
                {...formik.getFieldProps("name")}
              />
              <FormHelperText className="text-xs">
              Допоможіть людям знайти ваш акаунт, використовуючи ім'я, під яким ви відомі
                за повним ім'ям, псевдонімом або назвою компанії.
              </FormHelperText>
              <FormHelperText className="text-xs">
              Ви можете змінити ім'я лише двічі протягом 14 днів.
              </FormHelperText>
            </div>
          </FormControl>
          <FormControl className="flex " id="username">
            <FormLabel className="w-[15%]">Ім'я користувача</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Ім'я користувача"
                className="w-full"
                type="text"
                {...formik.getFieldProps("username")}
              />
              <FormHelperText className="text-xs">
              У більшості випадків ви зможете змінити своє ім'я користувача на
                ashok.zarmariya ще протягом 14 днів. Дізнатися більше
              </FormHelperText>
            </div>
          </FormControl>
          <FormControl className="flex " id="website">
            <FormLabel className="w-[15%]">Веб-сайт</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Веб-сайт"
                className="w-full"
                type="text"
                {...formik.getFieldProps("website")}
              />
              <FormHelperText className="text-xs">
              Редагування посилань доступне лише на мобільних пристроях. Відвідайте
                Instagram та відредагуйте свій профіль, щоб змінити веб-сайти у
                вашій біографії.
              </FormHelperText>
            </div>
          </FormControl>
          <FormControl className="flex " id="bio">
            <FormLabel className="w-[15%]">Біографія</FormLabel>
            <div className="w-full">
              <Textarea
                placeholder="Біографія"
                className="w-full"
                type="text"
                {...formik.getFieldProps("bio")}
              />
            </div>
          </FormControl>

          <div className="py-10">
            <p className="font-bold text-sm">Особиста інформація</p>
            <p className="text-xs">
            Надайте свою особисту інформацію, навіть якщо акаунт використовується для
              для бізнесу, домашнього улюбленця або чогось іншого. Це не буде частиною вашого
              публічного профілю.
            </p>
          </div>

          <FormControl className="flex " id="email">
            <FormLabel className="w-[15%]">Адреса електронної пошти</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Електронна пошта"
                className="w-full"
                type="email"
                {...formik.getFieldProps("email")}
              />
            </div>
          </FormControl>

          <FormControl className="flex " id="mobile">
            <FormLabel className="w-[15%]">Номер телефону</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Номер телефону"
                className="w-full"
                type="tel"
                {...formik.getFieldProps("mobile")}
              />
            </div>
          </FormControl>
          <FormControl className="flex " id="gender">
            <FormLabel className="w-[15%]">Стать</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Стать"
                className="w-full"
                type="text"
                {...formik.getFieldProps("gender")}
              />
            </div>
          </FormControl>
          {/* <FormControl className="flex " id="private">
            <Checkbox {...formik.getFieldProps("private")}>
              Pr className="w-full"ivate Account
            </Checkbox>
          </FormControl> */}

          <div>
            <Button colorScheme="blue" type="submit" className="">
            Зберегти
            </Button>
          </div>
        </Stack>
      </form>

      <ChangeProfilePhotoModal
        handleProfileImageChange={handleProfileImageChange}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    </div>
  );
};

export default EditProfileForm;
