import { Container } from "@/components/Container";
import { BiSolidDonateHeart } from "react-icons/bi";

const page = () => {
  return (
    <Container className="min-h-screen">
      <h1 className="w-full text-center">Поддержать нас</h1>

      <div className="mx-2">
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