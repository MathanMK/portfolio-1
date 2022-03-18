import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Where have I studied</h5>
      <h2>Education</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>10<sup>th</sup> Grade</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>T.M.H.N.U Matriculation Higher Secondary School</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2016-2017</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Tamil Nadu State Board Education</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>489/500</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>97.8%</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Theni</p>
            </li>
          </ul>
        </article>
        {/* END OF 10th */}
        <article className="service">
          <div className="service__head">
            <h3>12<sup>th</sup> Grade</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>C.E.O.A Matriculation Higher Secondary School</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2017-2019</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Tamil Nadu State Board Education</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maths, Physics, Chemistry</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>504/600</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>84%</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Madurai</p>
            </li>
          </ul>
        </article>
        {/* 12th */}
        <article className="service">
          <div className="service__head">
            <h3>Batchelor of Technology</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Amrita Vishwa Vidhyapeetham</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>2019-2023</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Computer Science & Engineering</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>8.52/10 (upto 5<sup>th</sup> semester)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Coimbatore</p>
            </li>
          </ul>
        </article>
        {/* END OF B. Tech */}
      </div>
    </section>
  )
}

export default Services