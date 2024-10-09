import Link from "next/link";
import Image from "next/image";
import logo from '../../public/ShaktiMa-logo.jpg'
import { FaGlobe } from "react-icons/fa6";
import { Container } from "@/components/Container";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiHandsPrayingBold } from "react-icons/pi";

export function Footer() {
  const navigation = [
    {
      title: "О центре",
      url: "/"
    },
    {
      title: "Практики",
      url: "/praktiki"
    },
    {
      title: "Семинары",
      url: "/seminary"
    },
    {
      title: "Контакты",
      url: "/contacts"
    },
    {
      title: "Поддержать",
      url: "/donate"
    },
  ];
  return (
    <div className="mt-auto px-2">
      <Container>
        <div className="text-sm lg:text-base grid max-w-screen-xl grid-cols-1 md:grid-cols-7 gap-10 pt-10 mx-auto mt-5 border-t border-gray-300  lg:grid-cols-9">
          <div className="md:col-span-3 lg:col-span-4 ">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-xl lg:text-2xl font-medium text-indigo-500 dark:text-indigo-300"
              >
                <Image
                  src={logo}
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8 rounded-full "
                />
                <span>Шакти Ма</span>
              </Link>
            </div>

            <div className="w-ful mt-5 flex flex-col">
              <div className="max-w-md text-gray-600 dark:text-gray-300 py-2">
                Московский Дхарма центр Шакти Ма
              </div>

              <div className="max-w-md text-gray-600 dark:text-gray-300 flex items-center py-2">
                На благо всех живых существ <PiHandsPrayingBold className="ml-2" />
              </div>

              <div className="max-w-md text-gray-600 dark:text-gray-300 py-2">
                © All Rights Reserved {new Date().getFullYear()}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3">

            <p className="w-full font-semibold">Меню</p>
            <div className="flex flex-wrap w-full mt-5">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="w-full py-2 text-gray-600 rounded-md dark:text-gray-300 hover:text-black focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-indigo-800"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <div className="font-semibold dark:text-gray-300">Ресурсы</div>
            <div className="flex flex-col mt-5 text-gray-600 dark:text-gray-300">
              <a
                href="https://t.me/mdc_ShaktiMa"
                target="_blank"
                rel="noopener"
                className="flex items-center py-2"
              >
                <FaTelegram className="shrink-0 mr-2" />
                <span className="">Канал в телеграм</span>
              </a>
              <a
                href="https://t.me/shaktimamdc"
                target="_blank"
                rel="noopener"
                className="flex items-center py-2"
              >
                <FaTelegram className="shrink-0 mr-2" />
                <span className="">Чат в телеграм</span>
              </a>
              <a
                href="https://www.youtube.com/@ShaktiMA_MDC"
                target="_blank"
                rel="noopener"
                className="flex items-center py-2"
              >
                <FaYoutube className="shrink-0 mr-2" />
                <span className="">YouTube</span>
              </a>

              <a href="https://www.advayta.org/" target="_blank" rel="noreferrer" className="flex items-center py-2">
                <FaGlobe className="shrink-0 mr-2" />
                Cайт нашей традиции
              </a>

              <a href="https://www.siddhashop.com/" className="flex items-center py-2" target="_blank" rel="noreferrer">
                <FaShoppingCart className="shrink-0 mr-2" />
                Сиддха шоп
              </a>
            </div>
          </div>
        </div>
      </Container>
      {/* Do not remove this */}
    </div>
  );
}

