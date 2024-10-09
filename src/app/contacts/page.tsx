import { Container } from "@/components/Container";
import Image from 'next/image'
import { FaGlobe } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaOm } from "react-icons/fa";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Контакты и ресурсы'
}

const page = () => {
  return (
    <Container className="min-h-screen">
      {/* <h1 className="w-full text-center">Контакты для связи</h1> */}
      <div className='mx-2'>
        <h1 className="text-2xl my-2">Контакты для связи</h1>
        <div className="flex items-center">
          <FaWhatsappSquare className="mr-2" />
          <h5 className="dark:text-gray-300 text-gray-700">
            Мадхувидья:
            <a href="whatsapp://send?phone=+79859274240" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-indigo-700 hover:underline ml-2 ">
              написать в WhapsApp
            </a>
          </h5>
        </div>
        <div className="flex items-center">
          <FaWhatsappSquare className="mr-2" />
          <h5 className="dark:text-gray-300 text-gray-700">
            Тиртхадэва:
            <a href="whatsapp://send?phone=+79672067710" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-indigo-700 hover:underline ml-2 ">
              написать в WhapsApp
            </a>
          </h5>
        </div>
        <h1 className="text-xl mt-10">Наши ресурсы</h1>

        <ul>
          <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline my-2 flex items-center">
            <FaYoutube className="mr-2" />
            <a href="https://www.youtube.com/@ShaktiMA_MDC" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
              YouTube канал
            </a>
          </li>
          <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline my-2 flex items-center">
            <FaTelegram className="mr-2" />
            <a href="https://t.me/mdc_ShaktiMa" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
              Telegram канал
            </a>
          </li>
          <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline my-2 flex items-center">
            <FaGlobe className="mr-2" />
            <a href="https://www.advayta.org/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
              Официальный сайт нашей традиции
            </a>
          </li>
          <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline my-2 flex items-center">
            <FaGlobe className="mr-2" />
            <a href="https://institute-vasishtha.com/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
              Институт Риши Васиштхи.
            </a>
          </li>
          <li className="dark:text-gray-300 text-gray-700 hover:text-indigo-700 hover:underline my-2 flex items-center">
            <FaShoppingCart className="mr-2" />
            <a href="https://www.siddhashop.com/" className="flex text-sm md:text-md lg:text-lg" target="_blank" rel="noreferrer">
              Сиддха шоп. Наш интернет магазин.
            </a>
          </li>
        </ul>

      </div>
    </Container>
  )
}

export default page