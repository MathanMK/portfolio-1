import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import A1 from '../../assets/a1.jpg'
import A2 from '../../assets/a2.jpg'
import A3 from '../../assets/a3.jpg'
import A4 from '../../assets/a4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'The Complete 2022 Web Development Bootcamp',
    review: A1
  },
  {
    avatar: AVTR2,
    name: 'GCCF Student Mentor',
    review: A2
  },
  {
    avatar: AVTR3,
    name: 'TakeCtrl Winner',
    review: A3
  },
  {
    avatar: AVTR4,
    name: 'Cruz Hack Mentor',
    review: A4
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Certificates and Achievements</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <div className='certificates'>
              <img src={review} />
              </div>
              
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials