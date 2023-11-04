import AliceCarousel from 'react-alice-carousel'
import { MainCarouselData } from './MainCarouselData'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCrosel = () => {

  const items = MainCarouselData.map((item) => <img className='cursor-pointer'
    role='presentation' src={item.image} alt='' />)

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1500}
      infinite
    />
  )
}
export default MainCrosel
