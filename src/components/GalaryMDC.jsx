'use client'
import { Container } from '@/components/Container'
import ImageGallery from 'react-image-gallery'

const GalaryMDC = () => {
  const settings = {
    showBullets: false,
    showIndex: false,
    slideDuration: 700,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
    showThumbnails: false,
  }

  const images = [
    {
      original:
        'https://sun9-40.userapi.com/impg/Ge_nps8ooPQAmpD0szGAk8qW9NfV4n4CBMxAng/BjE1obJT6wo.jpg?size=1280x720&quality=95&sign=fc2955f8fa4139b994163822903052ab&type=album',
    },
    {
      original:
        'https://sun9-65.userapi.com/impg/8FuUjSo2Ecd7GE64sBuxdViKXvnDcu8BLPa46Q/BpbufQZB1Ko.jpg?size=1280x720&quality=95&sign=8d743bb2864a7789f4d163dec52739d9&type=album',
    },
    {
      original:
        'https://sun9-53.userapi.com/impg/BXn0MDLCIQ_ag0y-iJkM4BDOudzsxpuXKDNyDg/_dtuff5NcjE.jpg?size=1280x720&quality=95&sign=afd276a90b29b6033eb044f475e1c912&type=album',
    },
    {
      original:
        'https://sun9-1.userapi.com/impg/4g0mU9GRofOig1JMOwpL1lGTr98hY4a-JAGtsg/h6QeTykaNas.jpg?size=1280x720&quality=95&sign=746a3fb2f85586aa893ca1470a9c6b64&type=album',
    },
    {
      original:
        'https://sun9-18.userapi.com/impg/y3QCeYoMdsKWZqZ9siYv1wvo7fZNoPuBN1krMA/1Ua_Ew1e6Ro.jpg?size=1280x720&quality=95&sign=1e76dd0328d6a875d6943608c685cec5&type=album',
    },
    {
      original:
        'https://sun9-53.userapi.com/impg/R5L8vDB4rKp7sG4I71Cpsl9FLr7nnNoQoF2N6Q/noMVhsbBcsA.jpg?size=1280x720&quality=95&sign=b3a2350e02696c6a11a318a0d34b97cc&type=album',
    },
    {
      original:
        'https://sun9-32.userapi.com/impg/QqsyZ63tdyypPEPVQahuERIFu4yO3DbjaPUslw/TbACrAkJpiI.jpg?size=1280x720&quality=95&sign=272c22cac6ce48f46abd9e570ec0bfed&type=album',
    },
    {
      original:
        'https://sun9-78.userapi.com/impg/Gc98XK70oGc7GhzWC9kci2J_E-Xc01O3vWMc4Q/U29xBg09k_k.jpg?size=1280x720&quality=95&sign=bae052278c5f1b17c7bba7681a8242b1&type=album',
    },
    {
      original:
        'https://sun9-74.userapi.com/impg/xLfxkn1pNJ5mmBhn_LV2h_Z0m2JD4tH1xhUPvw/d-xJLj5aOKo.jpg?size=1280x720&quality=95&sign=14c1493bb60248746aef867f2247fbdc&type=album',
    },
    {
      original:
        'https://sun9-24.userapi.com/impg/gzCH08vuqA-O3Jse9xXLx1osVkHehi5-DfziyA/pOHAwUWkjdQ.jpg?size=1280x720&quality=95&sign=caea107fee9720c24c7757362b08d6cf&type=album',
    },
    {
      original:
        'https://sun9-3.userapi.com/impg/9EmvrQc8nD0L_uacO44FlgkKOxCe0-pui66J9g/GjkP9CyD6kw.jpg?size=1280x720&quality=95&sign=27759673d827c2f742270e9c2d753b4d&type=album',
    },
    {
      original:
        'https://sun9-7.userapi.com/impg/WfQLyNmQ5su8qBk3g8NCXzhJcVFrmgoQQF2khA/V_l9tX3rjiI.jpg?size=1280x720&quality=95&sign=25ab89b2e7a470318ede295cb500d541&type=album',
    },
  ]
  return (
    <Container>
      <ImageGallery items={images} {...settings} />
    </Container>
  )
}

export default GalaryMDC
