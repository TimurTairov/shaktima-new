import Link from "next/link";
import Image from "next/image";
import logo from '../../public/ShaktiMa-logo.jpg'
import { Container } from "@/components/Container";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export function Footer() {
  const navigation = ["О центре", "Практики", "Семинары", "Контакты", "Поддержать"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
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

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Московский Дхарма центр Шакти Ма
            </div>

            {/* <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <Image
                  src="/img/vercel.svg"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div> */}

          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {/* {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))} */}
            </div>
          </div>

          <div className="">
            <div>Follow us</div>
            <div className="flex flex-col mt-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://t.me/mdc_ShaktiMa"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2"
              >
                <FaTelegram />
                <span className="">Канал Шакти Ма</span>
              </a>
              <a
                href="https://t.me/shaktimamdc"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2"
              >
                <FaTelegram />
                <span className="">Чат Шакти Ма</span>
              </a>
              <a
                href="https://www.youtube.com/@ShaktiMA_MDC"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2"
              >
                <FaYoutube />
                <span className="">YouTube Шакти Ма</span>
              </a>


            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}.
        </div>
      </Container>
      {/* Do not remove this */}
    </div>
  );
}

