import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/guru.jpg";
import benefitTwoImg from "../../public/img/Brahmananda.jpg";

const benefitOne = {
  title: "Наш Учитель",
  desc: "Наш гуру - Свами Вишнудевананда Гири является реализованным мастером адвайта-веданты.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Духовный учитель",
      desc: "Имеющий полномочия инициировать в саннясу в традиции адвайта-веданты и йоги, садху, реализованный мастер-джняни в линии адвайта-веданты, философ, теолог, писатель, паломник-путешественник, имеющий учеников монахов и мирян по всему миру",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Автор более 50 книг и нескольких сотен статей по философии йоги",
      desc: "Наиболее значительные и известные труды и книги: двухтомник «Сияние драгоценных тайн лайя-йоги», «Песни пробужденного», «Вселенная джняни», «Духовная алхимия: путь внутреннего аскетизма», «Моя жизнь в Боге».",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Обучает",
      desc: "Джняна, раджа, бхакти, карма-йоге, кундалини, лайя-йоге, учениям ануттара-тантры сиддхов.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Наша традиция",
  desc: `В нашей традиции две основные линии передачи.`,
  image: benefitTwoImg,
  bullets: [
    {
      title: "Северная линия передачи",
      desc: "Идет от великого реформатора Адвайта Веданты Шри Ади Шанкарачарьи.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Южная линия передачи",
      desc: "Идет от тамильских махасиддхов.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Парамгуру",
      desc: "Учителем нашего Учителя является Свами Брахмананда Шри Шива Прабхакара Сиддха Йоги Парамахамса",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
