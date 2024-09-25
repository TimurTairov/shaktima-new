import { Container } from "@/components/Container";
import Image from "next/image";
import bg from '../../../public/img/bg1.jpg'
import bg2 from '../../../public/img/bg-2.jpg'
import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import yog1 from '../../../public/img/yog1.png'
import yog2 from '../../../public/img/yog2.png'
import yog4 from '../../../public/img/yog4.png'
import svg1 from '../../../public/img/chakra-svgrepo-com.svg'
import svg2 from '../../../public/img/chakra-svgrepo-com (1).svg'
import svg3 from '../../../public/img/lotus-svgrepo-com.svg'
import svg4 from '../../../public/img/yoga-ruka.svg'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[35rem] md:h-[60rem] lg:h-[70rem] xl:h-[70rem]">
        <Image src={bg} alt="bg" className="absolute h-0 xl:h-[70rem] inset-0 w-full object-cover filter blur-[2px]" />
        <Image src={bg2} alt="bg-2" className="absolute h-[35rem] md:h-[60rem] lg:h-[70rem] xl:h-0 inset-0 w-full object-cover filter blur-[2px]" />
        <div className="absolute w-full h-full inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end">
          <h1 className="text-xl xl:text-5xl text-white font-bold">Медитация Сиддхов</h1>
          <p className="text-base xl:text-xl text-white mt-4">От носителей традиции</p>
          <Cta />
        </div>
      </div>

      <div className="px-2">
        <Container>

          <div className="mt-32 flex flex-col lg:flex-row items-center lg:items-start gap-5">
            <Image src={yog1} alt="йогиня" className="shrink-0 w-36 h-36 bg-indigo-700 rounded-xl p-2" />
            <div className="flex flex-col items-start justify-start">
              <h2 className="w-full text-4xl text-center">Медитация Сиддхов</h2>
              <p className="mt-10 text-center">Это уникальная практика, основанная на древних учениях. Она помогает освободить ум от напряжения, настроиться на позитивные вибрации и открыть внутренние ресурсы.</p>
            </div>
          </div>

          <div className="mt-32 flex flex-col lg:flex-row items-center lg:items-start gap-5">
            <Image src={yog2} alt="om" className="shrink-0 w-36 h-36 bg-indigo-700 rounded-xl p-2" />
            <div className="flex flex-col items-start justify-start">
              <h2 className="w-full text-4xl text-center">Что дает медитация?</h2>
              <div className="my-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-10">
                <div className="flex flex-col gap-3 items-center p-5">
                  <Image src={svg1} alt="svg" className="w-10 h-10 bg-indigo-700 rounded-md" />
                  <p className="text-center text-xl">Навык концентрации</p>
                </div>
                <div className="flex flex-col gap-3 items-center p-5">
                  <Image src={svg2} alt="svg" className="w-10 h-10 bg-indigo-700 rounded-md" />
                  <p className="text-center text-xl">Открытие новых уровней осознанности</p>
                </div>
                <div className="flex flex-col gap-3 items-center p-5">
                  <Image src={svg3} alt="svg" className="w-10 h-10 bg-indigo-700 rounded-md" />
                  <p className="text-center text-xl">Поддержку единомышленников и возможность обмена опытом</p>
                </div>
                <div className="flex flex-col gap-3 items-center p-5">
                  <Image src={svg4} alt="svg" className="w-10 h-10 bg-indigo-700 rounded-md" />
                  <p className="text-center text-xl">Снятие стресса и умение находить внутренний покой</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32 flex flex-col lg:flex-row items-center lg:items-start gap-5">
            <Image src={yog4} alt="om" className=" shrink-0 w-36 h-36 bg-indigo-700 rounded-xl p-2" />
            <div className="flex flex-col items-start justify-start">
              <h2 className="w-full text-4xl text-center">Детали мероприятия</h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-2">

                <div className="flex items-start gap-5">
                  <IoCalendarNumberOutline className=" shrink-0 w-10 h-10 text-indigo-700" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-700 font-semibold">Когда</p>
                    <p>28 сентября в 16-00 (суббота)</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <LuCalendarHeart className=" shrink-0 w-10 h-10 text-indigo-700" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-700 font-semibold">Формат</p>
                    <p>
                      Практика длится 1.5 часа, включающих в себя: подготовительные упражнения и медитационную сессию.
                      Специальная подготовка не требуется.
                      Форма одежды - свободная.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <IoLocation className=" shrink-0 w-10 h-10 text-indigo-700" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-700 font-semibold">Где</p>
                    <p>
                      Пространство &quot;Studio 108&quot; <br />
                      м. Тургеневская/Чистые Пруды<br />
                      Ул. Жуковского дом 7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <BiDonateHeart className=" shrink-0 w-10 h-10 text-indigo-700" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-700 font-semibold">Стоимость</p>
                    <p>Объем свободного пожертвования определяете самостоятельно 🙏</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="flex justify-center mt-32">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYRN2fEV48od4k59TfYdu4pDsQbpDs17vrLlhaTMHsTgB4zA/viewform"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md" >Записаться на медитацию</a>
          </div>
        </Container>

      </div>
    </div>
  )
}

export default page