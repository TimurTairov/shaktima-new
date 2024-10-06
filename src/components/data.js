import Image from "next/image";
import { LiaMountainSolid } from "react-icons/lia";
import { GiHeraldicSun } from "react-icons/gi";
import { FaDharmachakra } from "react-icons/fa6";
import { HiFaceSmile } from "react-icons/hi2";
import { IoBook } from "react-icons/io5";
import svg1 from '../../public/img/chakra1.svg'
import svg2 from '../../public/img/chakra2.svg'
import svg3 from '../../public/img/lotus-svgrepo-com.svg'
import svg4 from '../../public/img/yoga-ruka.svg'
import svg5 from '../../public/img/snake.svg'
import svg6 from '../../public/img/bull2.svg'
import svg7 from '../../public/img/medicine.svg'
import svg8 from '../../public/img/shiva.svg'



const benefitOne = {
  title: "Наш Учитель",
  desc: "Наш гуру - Свами Вишнудевананда Гири является реализованным мастером адвайта-веданты.",
  images: [
    {
      original: 'https://sun9-27.userapi.com/impg/zUkus91clzhCkCVkSDLhvq9UJ7Qh6VsrLT71MA/QVXhYXAB2yI.jpg?size=600x800&quality=95&sign=a5630c5aa8ab80b6de8ce32f81f3175d&type=album',
      thumbnail: 'https://sun9-27.userapi.com/impg/zUkus91clzhCkCVkSDLhvq9UJ7Qh6VsrLT71MA/QVXhYXAB2yI.jpg?size=600x800&quality=95&sign=a5630c5aa8ab80b6de8ce32f81f3175d&type=album',
    },
    {
      original: 'https://sun9-15.userapi.com/impg/YjKweUie8tz7BmjbYhkueJ2gDWztxhtXIqP9zQ/vCr5mYa2bMA.jpg?size=600x800&quality=95&sign=ba2b8fc3e446c6b197db9795aa186901&type=album',
      thumbnail: 'https://sun9-15.userapi.com/impg/YjKweUie8tz7BmjbYhkueJ2gDWztxhtXIqP9zQ/vCr5mYa2bMA.jpg?size=600x800&quality=95&sign=ba2b8fc3e446c6b197db9795aa186901&type=album',
    },
    {
      original: 'https://sun9-31.userapi.com/impg/G-xSlS7hTDs8hsPJExZqwkvTuFvouhXqrSSnbw/ITRuyYH7fEQ.jpg?size=600x800&quality=95&sign=232154b334db5304ffc45677e78c4ae6&type=album',
      thumbnail: 'https://sun9-31.userapi.com/impg/G-xSlS7hTDs8hsPJExZqwkvTuFvouhXqrSSnbw/ITRuyYH7fEQ.jpg?size=600x800&quality=95&sign=232154b334db5304ffc45677e78c4ae6&type=album',
    },
  ],
  bullets: [
    {
      title: "Духовный учитель",
      desc: "Имеющий полномочия инициировать в саннясу в традиции адвайта-веданты и йоги, садху, реализованный мастер-джняни в линии адвайта-веданты, философ, теолог, писатель, паломник-путешественник, имеющий учеников монахов и мирян по всему миру",
      icon: <HiFaceSmile />,
    },
    {
      title: "Автор более 50 книг и нескольких сотен статей по философии йоги",
      desc: "Наиболее значительные и известные труды и книги: двухтомник «Сияние драгоценных тайн лайя-йоги», «Песни пробужденного», «Вселенная джняни», «Духовная алхимия: путь внутреннего аскетизма», «Моя жизнь в Боге».",
      icon: <IoBook />,
    },
    {
      title: "Обучает",
      desc: "Джняна, раджа, бхакти, карма-йоге, кундалини, лайя-йоге, учениям ануттара-тантры сиддхов.",
      icon: <FaDharmachakra />,
    },
  ],
};

const benefitTwo = {
  title: "Наша традиция",
  desc: `В нашей традиции две основные линии передачи.`,
  images: [
    {
      original: 'https://sun9-3.userapi.com/impg/K-_zhcNP5cyHHcAdURTMqYvi1DhwUqLqDhDPPA/3tcmM80EAZs.jpg?size=600x800&quality=95&sign=7290a6479e64459854a8e9e0db210625&type=album',
      thumbnail: 'https://sun9-3.userapi.com/impg/K-_zhcNP5cyHHcAdURTMqYvi1DhwUqLqDhDPPA/3tcmM80EAZs.jpg?size=600x800&quality=95&sign=7290a6479e64459854a8e9e0db210625&type=album',
    },
    {
      original: 'https://sun9-52.userapi.com/impg/v90rgPWro6jVMXQQqMvRRpaCAxYRJtYYEHrzoQ/aoTXbjYMEzE.jpg?size=600x800&quality=95&sign=3e6ca793161fadf02355cbc5003d3721&type=album',
      thumbnail: 'https://sun9-52.userapi.com/impg/v90rgPWro6jVMXQQqMvRRpaCAxYRJtYYEHrzoQ/aoTXbjYMEzE.jpg?size=600x800&quality=95&sign=3e6ca793161fadf02355cbc5003d3721&type=album',
    },
    {
      original: 'https://sun9-67.userapi.com/impg/1pns_heZSQ2oHrAoTJNpRnWP6Pbg68WXcrTz4g/_O5Gb8fAvpc.jpg?size=600x800&quality=95&sign=af8c51d5b641968b8262ef3cad7cb4d1&type=album',
      thumbnail: 'https://sun9-67.userapi.com/impg/1pns_heZSQ2oHrAoTJNpRnWP6Pbg68WXcrTz4g/_O5Gb8fAvpc.jpg?size=600x800&quality=95&sign=af8c51d5b641968b8262ef3cad7cb4d1&type=album',
    },
    {
      original: 'https://sun9-27.userapi.com/impg/YSMvHAN-8MJLNL_c6lugskrTw2pDiugTLjmTAQ/dt9Q0r8XC2I.jpg?size=600x800&quality=95&sign=b1d6066a19960afb5315632c81230405&type=album',
      thumbnail: 'https://sun9-27.userapi.com/impg/YSMvHAN-8MJLNL_c6lugskrTw2pDiugTLjmTAQ/dt9Q0r8XC2I.jpg?size=600x800&quality=95&sign=b1d6066a19960afb5315632c81230405&type=album',
    },
    {
      original: 'https://sun9-17.userapi.com/impg/q8gkmYuWiswtB8_CogCywIH-nh26nNAkslUz3w/4vKPtPTjpgg.jpg?size=600x800&quality=95&sign=7fb88537add86a832091b61387e156b8&type=album',
      thumbnail: 'https://sun9-17.userapi.com/impg/q8gkmYuWiswtB8_CogCywIH-nh26nNAkslUz3w/4vKPtPTjpgg.jpg?size=600x800&quality=95&sign=7fb88537add86a832091b61387e156b8&type=album',
    },
    {
      original: 'https://sun9-54.userapi.com/impg/6pXs8LLKEjsJTejym8WGqOnWeyJnOgxuomdlCQ/xWhQfJVSgA8.jpg?size=600x800&quality=95&sign=ab831322e2ddf910ced06e732f4ce6c6&type=album',
      thumbnail: 'https://sun9-54.userapi.com/impg/6pXs8LLKEjsJTejym8WGqOnWeyJnOgxuomdlCQ/xWhQfJVSgA8.jpg?size=600x800&quality=95&sign=ab831322e2ddf910ced06e732f4ce6c6&type=album',
    },
    {
      original: 'https://sun9-12.userapi.com/impg/kEF4-fnuTduKXjdAhjZ3CZ3BShPZEAbnz4ED5Q/xlaXsndUW1c.jpg?size=744x1052&quality=95&sign=23b5e21cb714dc90baa03120e7377f3a&type=album',
      thumbnail: 'https://sun9-12.userapi.com/impg/kEF4-fnuTduKXjdAhjZ3CZ3BShPZEAbnz4ED5Q/xlaXsndUW1c.jpg?size=744x1052&quality=95&sign=23b5e21cb714dc90baa03120e7377f3a&type=album',
    },
    {
      original: 'https://sun9-71.userapi.com/impg/Poij7sT5r5eQQUk6hnm9ET1An-_9vQQQkTyBgA/IEF0WJnzxK0.jpg?size=1527x2160&quality=95&sign=fe3c424b99d28f53f508c4a30f195f8d&type=album',
      thumbnail: 'https://sun9-71.userapi.com/impg/Poij7sT5r5eQQUk6hnm9ET1An-_9vQQQkTyBgA/IEF0WJnzxK0.jpg?size=1527x2160&quality=95&sign=fe3c424b99d28f53f508c4a30f195f8d&type=album',
    },
  ],
  bullets: [
    {
      title: "Северная линия передачи",
      desc: "Восходит к древнему монаше­скому ордену Джуна акхара, основанному тысячу лет назад Шри Шанкарачарьей в традиции десяти имен (дашанами санньяса). Нашего Гуру в эту традицию посвятил Сомнатх гири махарадж (Пайлот Бабаджи). От Пайлота Бабаджи линия преемственности ведет к его гуру-сиддху Хари бабе. От него - к просветленному мудрецу Аватар бабе, и далее через линию гуру к самому Шри Шанкарачарье. От Шри Шанкарачарьи линия преемственности ведет к его гуру Говиндападе, а от него - к Гаудападе. От Гаудапады она идет к Шукадеве, а от него к самому риши Вьясе, автору Вед. От Вьясы линия преемственности восходит к риши Васиштхе, сыну Творца и к гималайским мудрецам - бессмертному воплощению-аватару трех богов авадхуте Даттатрейе, святому Нараде и вечно юному Санаткумару, рожденному из ума Брахмы. Наконец на вершине этой древней линии преемственности пребывают великие боги Санатана Дхармы - Брахма, Вишну и Шива. ",
      icon: <LiaMountainSolid />,
    },
    {
      title: "Южная линия передачи",
      desc: `Ведет к южноиндийской традиции бессмертных йогов-сиддхов и восходит через Свами Вишнудевананду Гири к знаменитому в южной Индии йогу-чудотворцу Свами Шива Прабхакаре (гуру авадхуте Брахмананде) из штата Керала. От него она восходит к его учителю сиддху-риши Памбатти. От риши Памбатти она восходит к риши Сатьямуни, от Сатьямуни — к риши Нанди Девару, от Нанди Девара — к самому Шиве. Риши Нанди Девар достиг сварупа-самадхи в г. Каши (Бенарес). Его учителем был Сам Шива, а учениками Нанди Девара также являются риши Тирумулар, Патанджали, Дакшинамурти, Ромариши.`,
      icon: <GiHeraldicSun />,
    },
  ],
};

const benefitThree = {
  title: "Медитация Сиддхов",
  desc: `Это уникальная практика, основанная на древних учениях. Она помогает освободить ум от напряжения, настроиться на позитивные вибрации и открыть внутренние ресурсы.`,
  images: [
    {
      original: 'https://sun9-5.userapi.com/impg/yIgr3OFnFscEX5ogaph7IQiN_nYOWcZAcCz8bg/CjFqUysiXjo.jpg?size=600x800&quality=95&sign=9f1c4d7ec7fef2a5721ed9dc4dabb550&type=album',
    },
    {
      original: 'https://sun9-69.userapi.com/impg/cvh7RuE6NALz4_xUkXZyoq-QX7_Rma_OvPfzMg/sY_C5jCQ-UM.jpg?size=600x800&quality=95&sign=ee5aba62169b8a94281407f160023edb&type=album',
    },
    {
      original: 'https://sun9-2.userapi.com/impg/p2o4qsu0okYIF_vlPg6WNbUWmoNioEyETw0Bng/Exbo29blFXQ.jpg?size=600x800&quality=95&sign=4e7873171deba69e3efec7ddee0e27b2&type=album',

    },
    {
      original: 'https://sun9-38.userapi.com/impg/WzUc_aXqaazx50oWEZiVLEN-InuOmyTLpMsa5A/OTvOEXmOnZA.jpg?size=600x800&quality=95&sign=ed82a3cd5841fd9558832eabf84a26fd&type=album',
    },
    {
      original: 'https://sun9-68.userapi.com/impg/xWVNREwpOfIFb8Ckqmr8i2p4DppuLSG_d4RnXw/hko6pACZGDo.jpg?size=600x800&quality=95&sign=c31494bd3f9545373e28b411080fcfb2&type=album',

    },
    {
      original: 'https://sun9-8.userapi.com/impg/xBVad3CD9A7mRSpm6ksWNIb8Vs131MSuIdPLKQ/RGTY7JpT96Y.jpg?size=600x800&quality=95&sign=da4a794e68cc4407baa6a4a51e1d7693&type=album',
    },
    {
      original: 'https://sun9-39.userapi.com/impg/tPqoLIbCnqTXUx__7dh_4hNzNOJpp-1A17RjVg/hLczNvCr2KY.jpg?size=600x800&quality=95&sign=8e727d06be12baa2c2462a6f194653a2&type=album',

    },
    {
      original: 'https://sun9-20.userapi.com/impg/jvGMN1mouiHLRhNPLVDtBW-9ZvTd-gRGVkAsww/Hq1VrZxM1to.jpg?size=600x800&quality=95&sign=c57abab3bfd8d0a5a653e3db2399eb81&type=album',
    },
    {
      original: 'https://sun9-25.userapi.com/impg/G_skGtW-MfHsDTFOf9FHcYj3bsgtNSc41Sy13w/D3YlGl8IB7Q.jpg?size=600x800&quality=95&sign=bf3af24f2d38a1545b36bf9cf1cc6530&type=album',

    },
    {
      original: 'https://sun9-80.userapi.com/impg/Nz6HnjTD-WsHmJKzjCAey0iltBjps1UhWqiSxw/chnKvBjPUHk.jpg?size=600x800&quality=95&sign=2a9429312d7e764d4ab2dbee6f2112d4&type=album',
    },
    {
      original: 'https://sun9-37.userapi.com/impg/L3iJoFBYkkrn6vPJi0QcGWKg_iIw6ABX82BrEg/64xy24Bbu5k.jpg?size=600x800&quality=95&sign=e11a42ba8decad0a8d5740ec5113a0af&type=album',
    },
    {
      original: 'https://sun9-23.userapi.com/impg/aM-cd1eW8cZ_ehEm5A3dnkdGjgaSIowSp1idEw/42pOBi64OiI.jpg?size=600x800&quality=95&sign=ab2a9d6be15be8f710f5977bd5c5f7d0&type=album',
    },
    {
      original: 'https://sun9-16.userapi.com/impg/ZGOsv6VcSosSny_EDs2CpriF3XdNkQIGR0mYow/W12PNNVIFRU.jpg?size=600x800&quality=95&sign=7dd5502138edc3441e56e45502b38aa1&type=album',

    },
  ],
  bullets: [
    {
      title: "Концентрация",
      desc: "Навык концентрации внемания полезен не только в медитации, а также в учебе, работе и бизнесе",
      icon: <Image src={svg1} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },
    {
      title: "Осознанность",
      desc: `Открытие новые уровни осознанования себя`,
      icon: <Image src={svg2} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },
    {
      title: "Умиротворение",
      desc: `Снятие стресса и умение находить внутренний покой`,
      icon: <Image src={svg4} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },
    {
      title: "Единомышленники",
      desc: "Поддержка единомышленников и возможность обмена опытом",
      icon: <Image src={svg3} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },

  ],
};

const benefitFour = {
  title: "Линия сиддхов",
  desc: `Это линия передачи из южной Индии напрямую связана с 18 тамильскими махасиддхами.`,
  images: [
    {
      original: 'https://sun9-29.userapi.com/impg/DT0ceVclp_qZCM-0H-KMi9QR7_6Y9e8V9NFV8A/9i9OxSQkXOw.jpg?size=600x800&quality=95&sign=bcebd8d0610a655e4db14f5697133e50&type=album',
    },
    {
      original: 'https://sun9-33.userapi.com/impg/N39E76YsnqRrVk6mZHirC1CzQZ8E_i9Ct4F7gw/ltHy86NLvI8.jpg?size=600x800&quality=95&sign=9d88accfdee5762b1e342b1f47aa2e62&type=album',
    },
    {
      original: 'https://sun9-79.userapi.com/impg/6aK7uRmUvQhlbzQSzanVTUluuvYt74IKvg5arg/XarbcRXw7Tw.jpg?size=600x800&quality=95&sign=f705f7f963fdf32498d8e0f0fa0b499e&type=album',

    },
    {
      original: 'https://sun9-78.userapi.com/impg/6LNmnQHx-9qE_oaFL9je7OKjhsaO1wdWiIvXoQ/IMX0qiH_7bc.jpg?size=600x800&quality=95&sign=d048403e52007caef6e6b143a641c596&type=album',
    },
  ],
  bullets: [
    {
      title: "Шива Прабхакара Сиддхайоги Свами Брахмананда",
      desc: "Величайший сиддх, ученик Мастера традиции сиддхов Шри Памбатти, Гуру в традиции Авадхутов. Свами Брахмананда редко общался с людьми. Он был юродивым, радикальным, отрешенным от мирского, Мастером «безумной мудрости», безразличным к мнению других о нем, и как все садху ни под кого не подстраивался. Он не слишком любил говорить о себе, своей жизни, считая, что все это не полезно для садханы, а только отвлекает от самоисследования.",
      icon: <Image src={svg8} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },
    {
      title: "Памбатти",
      desc: `Сиддхар Памбатти – великий святой южной Индии, последний из линии 18 тамильских махасиддхов, широко известных как в самой Индии, так и за ее пределами.`,
      icon: <Image src={svg5} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },
    {
      title: "Сатьямуни (Саттаймуни)",
      desc: `Саттаймуни - один из 18 махасиддхов, инициированный Нанди-деваром и Дакшина-мурти. Саттаймуни считается экспертом в медицине, особенно в области омоложения.Его труды изучаются и используются по сей день.`,
      icon: <Image src={svg7} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },
    {
      title: "Нанди Девар",
      desc: "Нанди Девара называют первым гуру и основателем линии 18 тамильских махасид­дхов. Он передал знания, полученные от Шивы многим ученикам таким, как риши Тирумулар, Патанджали, Дакши­намурти, Ромариши и Сатьямуни.",
      icon: <Image src={svg6} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },

  ],
};



export { benefitOne, benefitTwo, benefitThree, benefitFour };
