import { Container } from "@/components/Container";
import { BiSolidDonateHeart } from "react-icons/bi";

const page = () => {
  return (
    <Container className="min-h-screen">
      <h1 className="w-full text-center text-3xl font-semibold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Поддержите нас</h1>

      <div className="mt-10">
        <p>Московский Дхарма Центр «Шакти Ма» - развивается благодаря подношениям практикующих.</p>
        <p className="mt-5">Подношения направляются на:</p>
        <p> - Аренду залов и пространств для мероприятий</p>
        <p> - Организацию семинаров и ретритов</p>
        <p> - Подношения для ашрамов и Монахов</p>
        <p className="mt-5">Вы можете поучаствовать и поддержать Дхарма центр.</p>
      </div>
      <div className="mx-2 mt-20">
        <div className="flex items-center text-xl my-2 text-indigo-600">
          <h1 className="mr-2 font-semibold">Через Ю-Money</h1>
          <BiSolidDonateHeart />
        </div>

        <iframe
          title="108r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=aejT5wRP1vY.230410&"
          width="330"
          height="50"
          frameBorder="0"
          // allowTransparency={true}
          scrolling="no"
        />
        <iframe
          title="540r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=y4lXeQOxU8o.230415&"
          width="330"
          height="50"
          frameBorder="0"
          // allowTransparency={true}
          scrolling="no"
        />

        <iframe
          title="1080r"
          src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=SGusHwIOHgo.230412&"
          width="330"
          height="50"
          frameBorder="0"
          // allowTransparency={true}
          scrolling="no"
        />
      </div>

    </Container>
  )
}

export default page