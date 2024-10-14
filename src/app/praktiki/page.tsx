import type { Metadata } from "next";
import { Container } from "@/components/Container";
import Image from "next/image";
import bg from '../../../public/img/bg1.jpg'
import bg2 from '../../../public/img/bg-2.jpg'
import { Cta } from "@/components/Cta";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";
import { Benefits } from "@/components/Benefits";
import { benefitThree, benefitFour } from "@/components/data";
import { SectionTitle } from "@/components/SectionTitle";
import { MeditationSiddhov } from "@/components/MeditationSiddhov"

export const metadata: Metadata = {
  title: "Медитация сиддхов",
  description: "Медитация оффлайн в Москве в Stydio 108. Метро Тургеневская/Чистые Пруды. Улица Жуковского дом 7.",
};

const page = () => {
  return (
    <Container className="roboto-mono-font">
      {/* <div className="relative h-[35rem] md:h-[60rem] lg:h-[70rem] xl:h-[70rem]">
        <Image src={bg} alt="bg" className="absolute h-0 xl:h-[70rem] inset-0 w-full object-cover filter blur-[2px]" />
        <Image src={bg2} alt="bg-2" className="absolute h-[35rem] md:h-[60rem] lg:h-[70rem] xl:h-0 inset-0 w-full object-cover filter blur-[2px]" />
        <div className="absolute w-full h-full inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end">
          <h1 className="text-xl xl:text-5xl text-white font-semibold">Медитация Сиддхов</h1>
          <p className="text-xs md:text-sm xl:text-lg text-white mt-2 lg:mt-4">От носителей традиции</p>
          <Cta />
        </div>
      </div> */}
      <MeditationSiddhov />


      <Benefits data={benefitThree} />

      <SectionTitle
        preTitle="Традиция сиддхов"
        title="Линия сиддхов южной Индии"
      >
        <p className="text-left py-4">Эта линия преемственности ведет к южноин­дийской традиции бессмертных йогов-сид­дхов и восходит через свами Вишнудевананда Гири и свами Джанардана Наира, бывшего настоя­теля ашрама Брахмананды на Холме Тигра около Пулипара, что находится в селении Омалур в районе Патанамтитты, к знаменитому в южной Индии йогу-чудотворцу свами Прабхакаре из штата Керала. От него она восходит к его учителю сиддху-риши Пам­батти.</p>

        <p className="text-left py-4">По одним источникам Брахма­нанда из штата Керала был учеником сиддха Памбатти, по другим — он сам и был риши Памбатти, вошедшим в тело Брахмананды, по третьим — они на некоторое время обменялись телами методом паракайя-правешана. От риши Памбатти линия восходит к риши Сатьяму­ни, от Сатьямуни — к риши Нанди Девару, от Нанди Девара — к самому Шиве. Это дает основания с фило­софской точки зрения формально причислять нашу южную линию передачи к традиции шайва-сид­дханта.</p>
        <p className="text-left py-4">Риши Нанди Девар достиг сварупа-самадхи в го­роде Каши (Бенарес). Его учителем был сам Шива, а учениками Нанди Девара также являются риши Тирумулар, Патанджали, Дакшинамурти, Ромари­ши, Сатьямуни. До наших времен дошли письменные работы Нанди Девара и его учеников по медицине, кайя-кальпе, алхимии. Сейчас в наше время почи­тание последнего из этой линии преемственно­сти сиддхов — гуру авадхуты Брахмананды стало самодостаточной традицией не только в Омалуре и Патанамтитте, но и в соседних штатах и собира­ет множество духовных искателей со всего мира, объединяя их во «Всемирную ассоциацию учеников и преданных Шри Шива Прабхакара авадхута сид­дха-йоги свами Брахмананды».</p>
      </SectionTitle>


      <Benefits imgPos="right" data={benefitFour} />

      <SectionTitle
        preTitle="медитация сиддхов"
        title="Детали мероприятия"
      >
        <div className="flex justify-center">
          <div className="max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-5">
            <div className="flex flex-col items-start justify-start">
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-2">

                <div className="flex items-start gap-5">
                  <IoCalendarNumberOutline className=" shrink-0 w-10 h-10 text-indigo-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Когда</p>
                    <p className="text-left">По субботам в 16-00</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <LuCalendarHeart className=" shrink-0 w-10 h-10 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Формат</p>
                    <p className="text-left">
                      Практика длится 1.5 часа, включающих в себя: подготовительные упражнения и медитационную сессию.
                      Специальная подготовка не требуется.
                      Форма одежды - свободная.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <IoLocation className=" shrink-0 w-10 h-10 text-indigo-500 " />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Где</p>
                    <p className="text-left">
                      Пространство &quot;Studio 108&quot; <br />
                      м. Тургеневская/Чистые Пруды<br />
                      Ул. Жуковского дом 7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <BiDonateHeart className=" shrink-0 w-10 h-10 text-indigo-500" />
                  <div className="flex flex-col items-start gap-3">
                    <p className="text-2xl text-indigo-500  font-semibold">Стоимость</p>
                    <p className="text-left">Объем свободного пожертвования определяете самостоятельно </p>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </SectionTitle>


      <div className="flex justify-center mt-32">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYRN2fEV48od4k59TfYdu4pDsQbpDs17vrLlhaTMHsTgB4zA/viewform"
          target="_blank"
          rel="noopener"
          className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md" >Записаться на медитацию</a>
      </div>

    </Container>
  )
}

export default page