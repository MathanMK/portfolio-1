import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/p1.jpg'
import IMG2 from '../../assets/p2.jpg'
import IMG3 from '../../assets/p3.jpg'
import IMG4 from '../../assets/p4.jpg'
import IMG5 from '../../assets/p5.jpg'
import IMG6 from '../../assets/p6.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Smart Parking System Using Computer Vision',
    github: 'https://github.com/MathanMK/Smart-Parking-System',
    demo: 'https://devpost.com/software/smart-parking-system-uo5lb1?ref_content=user-portfolio&ref_feature=in_progress'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Card Tampering Detection Model',
    github: 'https://github.com/MathanMK/Machine-Learning-Projects/tree/main/Card_Tampering',
    demo: 'https://github.com/MathanMK/Machine-Learning-Projects/tree/main/Card_Tampering'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Blog Website',
    github: 'https://github.com/MathanMK/Blog-Site-using-MERN',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Transfer Learning in Recommeneder Systems',
    github: 'https://github.com/MathanMK/Transfer-Learning',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Lexicon',
    github: 'https://github.com/MathanMK/Lexicon',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Digital Payment Platform',
    github: 'https://github.com/MathanMK/Digital-Payment-Platform',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio