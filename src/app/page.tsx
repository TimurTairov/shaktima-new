import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container >

      <Hero />
      <SectionTitle
        preTitle="Benefits"
        title="Почему Вам следует практиковать именно с нами? "
      >
        Центр йоги Шакти-Ма был организован учениками просветленного мастера Адвайты - Гуру Свами Вишнудевананда Гири Махараджа.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Как отличить игры ума от просветления? (для примера)"
      >
        Посмотрите видео Свами Вишнудевананда Гири.
      </SectionTitle>

      <iframe src="https://vk.com/video_ext.php?oid=40782986&id=456240701&hd=2" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen className="w-full h-60 md:h-96 lg:h-[30rem] xl:h-[30rem] lg:px-20 xl:px-80 rounded-md"></iframe>

      {/* <Video videoId="https://vk.com/video_ext.php?oid=40782986&id=456240701&hd=2" /> */}

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container >
  );
}
