import {
  AiFillCompass,
  AiFillHeart,
  AiFillHome,
  AiOutlinePlusCircle,
  AiFillMessage,
  AiOutlineMessage,
  AiOutlineCompass,
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineSearch,
  AiFillPlusCircle,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";

export const menu = [
  {
    title: "Головна",
    icon: <AiOutlineHome className="text-2xl mr-5" />,
    activeIcon: <AiFillHome className="text-2xl mr-5" />,
  },
  {
    title: "Пошук",
    icon: <AiOutlineSearch className="text-2xl mr-5" />,
    activeIcon: <AiOutlineSearch className="text-2xl mr-5" />,
  },
  {
    title: "Цікаве",
    icon: <AiOutlineCompass className="text-2xl mr-5" />,
    activeIcon: <AiFillCompass className="text-2xl mr-5" />,
  },
  {
    title: "Повідомлення",
    icon: <AiOutlineMessage className="text-2xl mr-5" />,
    activeIcon: <AiFillMessage className="text-2xl mr-5" />,
  },
  {
    title: "Сповіщення",
    icon: <AiOutlineHeart className="text-2xl mr-5" />,
    activeIcon: <AiFillHeart className="text-2xl mr-5" />,
  },
  {
    title: "Створити",
    icon: <AiOutlinePlusCircle className="text-2xl mr-5" />,
    activeIcon: <AiFillPlusCircle className="text-2xl mr-5" />,
  },
  {
    title: "Профіль",
    icon: <CgProfile className="text-2xl mr-5" />,
    activeIcon: <CgProfile className="text-2xl mr-5" />,
  },
];

export const exit = [
  {
    title: "Вихід",
    icon: <IoReorderThreeOutline className="text-2xl mr-5" />,
    activeIcon: <IoReorderThreeOutline className="text-2xl mr-5" />,
  },
];
