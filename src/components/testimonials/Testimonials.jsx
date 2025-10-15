import { Box, useTheme } from '@mui/material'
import React from 'react'
import MainTitle from '../main-title/MainTitle';
import MotionedSection from '../motioned-section/MotionedSection';
import TestimonialCard from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';



const testimonials = [
    {
        id: 1,
        name: "Emily Johnson",
        role: "Verified Buyer",
        image: "https://i.pravatar.cc/150?img=1",
        comment: "Alkhatib Store is my go-to online shop! Fast delivery, great packaging, and quality products every time."
    },
    {
        id: 2,
        name: "Michael Brown",
        role: "Regular Customer",
        image: "https://i.pravatar.cc/150?img=2",
        comment: "Excellent customer service. The team was super helpful when I had a question about my order."
    },
    {
        id: 3,
        name: "Sophia Williams",
        role: "Happy Customer",
        image: "https://i.pravatar.cc/150?img=3",
        comment: "I was surprised by how quickly my items arrived! Alkhatib Store really cares about their customers."
    },
    {
        id: 4,
        name: "James Miller",
        role: "Verified Buyer",
        image: "https://i.pravatar.cc/150?img=4",
        comment: "High-quality products at reasonable prices. I’ve already placed my second order with Alkhatib Store!"
    },
    {
        id: 5,
        name: "Olivia Davis",
        role: "Fashion Enthusiast",
        image: "https://i.pravatar.cc/150?img=5",
        comment: "Loved the shopping experience! The website is easy to use and the product photos are true to life."
    },
    {
        id: 6,
        name: "Daniel Garcia",
        role: "Frequent Shopper",
        image: "https://i.pravatar.cc/150?img=6",
        comment: "Alkhatib Store never disappoints. Every purchase has been smooth and satisfying. Highly recommend!"
    }
];


function Testimonials() {
    const {t} = useTranslation();
    const theme = useTheme();
    return (
        <MotionedSection  >
            <Box height={'100vh'} my={7} pt = {3}>
                <Box width={'calc(100% - 20px)'} height={'calc(100% - 20px)'} bgcolor={'#fff'} borderRadius={6} boxShadow={'0 2px 15px rgb(0 0 0 / 10%)'} p={3} pt = {5} >
                    <Box sx={{ textAlign: 'center' }} >
                        <MainTitle sectionTitle={t('testiTitle')} />
                    </Box>

                    <Box height={'calc(100% - 48.5px)'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Swiper className="mySwiper">

                            {testimonials.map(testi => <SwiperSlide key={testi.id} style = {{
                                display:'flex',
                                justifyContent: "center",
                                alignItems: 'center'
                            }}>
                                <TestimonialCard testi={testi} />
                            </SwiperSlide>)}

                        </Swiper>
                    </Box>
                </Box>
            </Box>
        </MotionedSection>
    )
}

export default Testimonials