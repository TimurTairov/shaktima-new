import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { benefitOne, benefitTwo } from "@/components/data";


export default function Home() {
  return (
    <Container >

      <Hero />
      <SectionTitle
        preTitle="С нами здорово"
        title="В чем выгода практиковать именно с нами? "
      >
        <>Наш центр организован учениками просветленного мастера Адвайты - Гуру Свами Вишнудевананда Гири Махараджа.</>
        <>Мы являемся носителями традиции.</>

      </SectionTitle>

      <Container>
        <div className="w-full flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Более <span className="text-indigo-600">20 000+</span>{" "}
            садху практикуют в нашей традиции
          </div>

          <div className="w-full flex flex-wrap lg:justify-center lg:gap-20 text-xs md:text-base gap-5 mt-10 justify-around">
            <div className=" text-gray-400 dark:text-gray-400">
              В России
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              В Европе
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              В США
            </div>
            <div className=" text-gray-400 dark:text-gray-400">
              В Индии
            </div>
            <div className=" text-gray-400 dark:text-gray-400">
              В Непале
            </div>
          </div>
        </div>
      </Container>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />


      <SectionTitle
        preTitle="Отзывы"
        title="Что о нас говорят наши практикующие"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}


      <SectionTitle
        preTitle="Watch a video"
        title="Как отличить игры ума от просветления? (для примера)"
      >
        Посмотрите видео Свами Вишнудевананда Гири.
      </SectionTitle>

      <iframe src="https://vk.com/video_ext.php?oid=40782986&id=456240701&hd=2" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen className="w-full h-60 md:h-96 lg:h-[30rem] xl:h-[30rem] lg:px-20 xl:px-80 rounded-md"></iframe>

    </Container >
  );
}
