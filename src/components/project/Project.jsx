import React from 'react'
import './project.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project1.jpg'
import IMG6 from '../../assets/project1.jpg'




const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Create Your Thoughts',
    github: 'https://github.com/tringuyen128/social-app-thoughts',
    demo: 'https://social-app-your-thoughts.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Weather App',
    github: 'https://github.com/tringuyen128/Weather-Dashboard',
    demo: 'https://tringuyen128.github.io/Weather-Dashboard/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Just Tech News',
    github: 'https://github.com/tringuyen128/just-tech-news',
    demo: 'https://tech-blognews.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Book Search Engine',
    github: 'https://github.com/tringuyen128/Book-Search-Engine',
    demo: 'https://book-search-challenge-21-mern.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: '',
    github: 'https://github.com',
    demo: 'https://social-app-your-thoughts.herokuapp.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Projet 6',
    github: 'https://github.com',
    demo: 'https://social-app-your-thoughts.herokuapp.com/'
  }
]

const Project = () => {
  return ( 
  <section id='portfolio'>
    <h5> My Work </h5>
    <h2> Projects </h2>
    
    <div className='container portfolio__container'>
     {
      data.map(({id, image, title, github, demo}) => {
        return (
          <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title} </h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        )
      })
     }
    </div>
  </section>
  )
}

export default Project

