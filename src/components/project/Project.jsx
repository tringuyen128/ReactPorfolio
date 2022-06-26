import React from 'react'
import './project.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project1.jpg'
import IMG6 from '../../assets/project6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Create Your Thoughts',
    github: 'https://github.com/tringuyen128/social-app-thoughts',
    demo: 'https://social-app-your-thoughts.herokuapp.com/',
    description:
      'A complete full-stack MERN app using GraphQL and Apollo Server for interaction with database. React was used for the front end, MongoDB, Mongoose, Express, and Nodejs on the backend.',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Airbnb Clone',
    github: 'https://github.com/tringuyen128/Airbnb-clone-react',
    demo: 'https://airbnb-clone-react-22.herokuapp.com/',
    description:
      'The app used props and states to make it dynamic changes. React-date-range was used to build a beautiful custom calendar. Some packages were used to be compatable with the new version of React 18 such as Router, routes, Link, and useNavigate.',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Just Tech News',
    github: 'https://github.com/tringuyen128/just-tech-news',
    demo: 'https://tech-blognews.herokuapp.com/',
    description:
      'This a blog website where developers can publish their blog posts and comment on other developers’ posts as well. This application follows the MVC paradigm and it is using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Book Search Engine',
    github: 'https://github.com/tringuyen128/Book-Search-Engine',
    demo: 'https://book-search-challenge-21-mern.herokuapp.com/',
    description:
      'The Book search engine is an application is leveraging the entire MERN stack and with a React front end, MongoDB database, and Node.js/Express.js server and API. It allows users to save book searches to the back end. The application is built using Google Books API search engine build with GraphQL API and Apollo Server.',
  },
  {
    id: 5,
    image: IMG5,
    title: '',
    github: 'https://github.com',
    demo: 'https://social-app-your-thoughts.herokuapp.com/',
    description: 'coming soon',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Weather App',
    github: 'https://github.com/tringuyen128/Weather-Dashboard',
    demo: 'https://tringuyen128.github.io/Weather-Dashboard/',
    description:
      'Weather dashboard is an application that will run in the browser and feature dynamically updated HTML and CSS. It provides the city weather- description according to the city provided by USER.With this Application User will be able to plan any trip according to the weather of the city . The Application provides 05 days forecast for more activity prevision.',
  },
]

const Project = () => {
  return (
    <section id="portfolio">
      <h5> My Work </h5>
      <h2> Projects </h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title} </h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
              <p className="project__description">{description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Project
