import React from 'react'
import './project.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project1.jpg'
import IMG3 from '../../assets/project1.jpg'
import IMG4 from '../../assets/project1.jpg'
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
    title: 'Project2',
    github: 'https://github.com',
    demo: 'https://social-app-your-thoughts.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project 3',
    github: 'https://github.com',
    demo: 'https://social-app-your-thoughts.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project 4',
    github: 'https://github.com',
    demo: 'https://social-app-your-thoughts.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Project 5',
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

