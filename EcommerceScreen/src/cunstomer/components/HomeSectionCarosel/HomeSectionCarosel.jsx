import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import {Button} from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function HomeSectionCarosel() {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = [1,1,1,1,1].map((item) => <HomeSectionCard />)


    return (
        <div className="relative px-4 lg:px-8">
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    autoPlay
                    autoPlayInterval={1500}
                    infinite
                />
                <Button variant ="contained" className="z-50" sx={{position:'absolute' , top:'8rem' , right:'0rem' , 
                Transform:'translateX(50%) rotate(90deg)'}} color="white" aria-label="next">
                    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)" , color:"black"}}/>
                </Button>
            </div>
        </div>
    )
}
