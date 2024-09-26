"use client"
import Image from "next/image";
import { Container } from "@/components/Container";
import ImageGallery from "react-image-gallery";



const Galarymainpage = () => {

  const settings = {
    showBullets: false,
    showIndex: true,
    slideDuration: 700,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
    showThumbnails: false,
  }

  const images = [
    {
      original: 'https://sun9-73.userapi.com/impg/xRXV3VFp25gXBnUVUD9kLfnFivxHTvCeb6l-tw/jkxeFVsq6YM.jpg?size=1280x720&quality=95&sign=5da0cc474587cc002fe1624d7ab825d7&type=album',
    },
    {
      original: 'https://sun9-32.userapi.com/impg/R_1bdNx9oe25xXgVBboAurB2BoFBc4H5SvjwUA/HA2yvDm2qsM.jpg?size=1280x720&quality=95&sign=833240d6dc12a31863b9d93f61fc772f&type=album',
    },
    {
      original: 'https://sun9-12.userapi.com/impg/qKoS4EKhQ3vgX5VTdTGRoGrxgyWlxK33ItF1Mw/bOLqOZkFtQA.jpg?size=1024x576&quality=95&sign=fdd44e17984029becdfcfc3db815963a&type=album',
    },
    {
      original: 'https://sun9-80.userapi.com/impg/FsZ926vZZvgW5oeuPsTToEIc2FeQWB4L9JXeWA/bfC3eLrs_-I.jpg?size=1600x1200&quality=95&sign=31cf9dbb294003a7e41954e2185eb2eb&type=album',
    },
    {
      original: 'https://sun9-4.userapi.com/impg/_wuGcQ2o7ZQBmxu1ACSscqSo3qBqeV950RFv_Q/iHFbzoHma6g.jpg?size=1600x1200&quality=95&sign=401f5eeb4a4ee3d283a95c560aaa7e3e&type=album',
    },
    {
      original: 'https://sun9-38.userapi.com/impg/1RJOBpbZJHEvLEu0O0_nl6CaK2rPA_oioFU84A/BiqwAFSAEis.jpg?size=2560x1707&quality=95&sign=0f48888b252b6c28fb0362d88b3e9d08&type=album',
    },
    {
      original: 'https://sun9-59.userapi.com/impg/jli3bnkZ_gM2_9hvoyslZkh4k2ny_S8jeTVK8Q/RxJml6kc71o.jpg?size=2560x1707&quality=95&sign=40995627d69e5bcfed8e0ee831b1d3b8&type=album',
    },
    {
      original: 'https://sun9-26.userapi.com/impg/52L_MJP8eNm1Q7_1rMNc3gdIuPEsASgHNBz2HA/PbwrmN0PT9c.jpg?size=2560x1707&quality=95&sign=c8161ba98181e2ddf84f88d3db84584b&type=album',
    },
    {
      original: 'https://sun9-54.userapi.com/impg/1Tky2SzoXXoc_o-H1IAqB7UZtjnaq-UwQGgIvw/pMk90gw7ByQ.jpg?size=2560x1707&quality=95&sign=670428a4f6266fa4a48f4e06c33e2653&type=album',
    },
    {
      original: 'https://sun9-66.userapi.com/impg/-G52begBQGf8y1pvkSXfE_vEANTsL93EDrad3g/G_EoV-5Ds5Y.jpg?size=1024x576&quality=95&sign=9104f807d7a894e63a2b365552924099&type=album',
    },
    {
      original: 'https://sun9-57.userapi.com/impg/39tlSlrofW5IFoNZKpiCRyr2JTfNxBu_OvysDg/zqat-A3zrYE.jpg?size=1280x576&quality=95&sign=4aad196358e5dc306925140770836681&type=album',
    },
    {
      original: 'https://sun9-71.userapi.com/impg/bd-4jP-d5X9yVVSAwATI7OjgMafLkSjjH5hHMg/bD8cQ95MCek.jpg?size=1280x720&quality=95&sign=79459cd5c1ab5810f7293052443c5e53&type=album',
    },
  ]
  return (
    <Container>
      <ImageGallery items={images} {...settings} />
    </Container>
  )
}

export default Galarymainpage